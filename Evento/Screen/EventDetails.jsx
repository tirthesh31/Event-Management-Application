import React, { useState,useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView,
  Alert 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/EventDetails';
import { Timestamp } from 'firebase/firestore';
import { db, auth } from '../Firebase/Firebase';
import { collection, query, where, getDoc,setDoc, deleteDoc, doc } from 'firebase/firestore';

const EventDetails = ({ route, navigation }) => {
  // Assuming event data will be passed via route params
  const { event } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(event);
    
    const checkFavoriteStatus = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;
  
        // Create a reference to the specific favorite document
        const favoriteRef = doc(
          db, 
          'favorites', 
          `${user.uid}_${event.id}` // Unique identifier for the favorite document
        );
  
        // Retrieve the document
        const favoriteDoc = await getDoc(favoriteRef);
  
        // Check if the document exists
        setIsFavorite(favoriteDoc.exists());
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };
  
    checkFavoriteStatus();
  }, [event.id]);  


  const toggleFavorite = async () => {
    // Ensure user is logged in
    const user = auth.currentUser;
    if (!user) {
      Alert.alert('Please log in', 'You must be logged in to add favorites');
      return;
    }
  
    try {
      // Reference to the specific event in favorites collection
      const favoriteRef = doc(
        db, 
        'favorites', 
        `${user.uid}_${event.id}` // Unique identifier combining user ID and event ID
      );
  
      if (isFavorite) {
        // Remove from favorites
        await deleteDoc(favoriteRef);
        setIsFavorite(false);
        Alert.alert('Removed', 'Event removed from favorites');
      } else {
        // Add to favorites
        await setDoc(favoriteRef, {
          userId: user.uid,
          eventId: event.id,
          eventDetails: {
            title: event.title,
            date: event.date,
            location: event.location,
            description: event.description,
            organizerName:event.organizerName,
            organizerEmail:event.organizerEmail
            // Add any other relevant event details
          },
          addedAt: new Date() // Timestamp of when favorited
        });
        setIsFavorite(true);
        Alert.alert('Added', 'Event added to favorites');
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      Alert.alert('Error', 'Could not update favorites');
    }
  };

  // Comprehensive date formatting function
  const formatDate = (dateValue) => {
    try {
      // If it's a Firestore Timestamp
      if (dateValue && dateValue.seconds) {
        const date = new Date(dateValue.seconds * 1000);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      
      // If it's a Date object
      if (dateValue instanceof Date) {
        return dateValue.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      
      // If it's a string date
      if (typeof dateValue === 'string') {
        const date = new Date(dateValue);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      
      // Fallback
      return 'Date Not Available';
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid Date';
    }
  };
  
  const renderEventDetail = (icon, text) => (
    <View style={styles.detailRow}>
      <Ionicons name={icon} size={24} color="#4169E1" style={styles.detailIcon} />
      <Text style={styles.detailText}>
        {text ? String(text) : 'Not specified'}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back and Favorite Button */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={toggleFavorite} 
          style={styles.favoriteButton}
        >
          <Ionicons 
            name={isFavorite ? 'heart' : 'heart-outline'} 
            size={24} 
            color={isFavorite ? 'red' : '#333'} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Event Image */}
        <Image 
          source={event.imageUrl 
            ? { uri: event.imageUrl } 
            : require('../assets/logo.png')
          }
          style={styles.eventImage} 
        />

        {/* Event Title */}
        <Text style={styles.eventTitle}>{event.title || 'Untitled Event'}</Text>

        {/* Event Details Section */}
        <View style={styles.detailsSection}>
          {renderEventDetail('calendar', formatDate(event.date))}
          {renderEventDetail('location', event.location)}
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>About the Event</Text>
          <Text style={styles.descriptionText}>
            {event.description || 'No description available'}
          </Text>
        </View>

        {/* Organizer Details */}
        <View style={styles.organizerSection}>
          <Text style={styles.sectionTitle}>Organizer</Text>
          <View style={styles.organizerProfile}>
            <Image 
              source={event.imageUrl 
                ? { uri: event.imageUrl } 
                : require('../assets/logo.png')
              }
              style={styles.organizerAvatar} 
            />
            <View>
              <Text style={styles.organizerName}>
                {event.organizerName || 'Unknown Organizer'}
              </Text>
              <Text style={styles.organizerEmail}>
                {event.organizerEmail || 'No contact information'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
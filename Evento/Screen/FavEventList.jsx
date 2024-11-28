import React, { useEffect, useState } from 'react';
import { 
  View, 
  FlatList, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  SafeAreaView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { db, auth } from '../Firebase/Firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from '../Styles/FavEventsList';

const FavEventsList = () => {
  const [favourites, setFavourites] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Fetch favorite events
  const fetchFavoriteEvents = async () => {
    try {
      setRefreshing(true);
      const q = query(
        collection(db, 'favorites'), 
        where('userId', '==', auth.currentUser.uid)
      );
      
      const querySnapshot = await getDocs(q);
      const favoritesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setFavourites(favoritesData);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      Alert.alert('Error', 'Unable to fetch favorite events');
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFavoriteEvents();
  }, []);

  // Remove event from favorites
  const handleRemoveFavorite = async (eventId) => {
    try {
      await deleteDoc(doc(db, 'favorites', eventId));
      
      // Update local state
      setFavourites(currentFavs => 
        currentFavs.filter(fav => fav.id !== eventId)
      );
      
      Alert.alert('Success', 'Event removed from favorites');
    } catch (error) {
      Alert.alert('Error', 'Could not remove event from favorites');
    }
  };

  // Render individual favorite event item
  const renderFavoriteEvent = ({ item }) => {
    // Format date if available
    const formattedDate = item.eventDetails.date 
      ? new Date(item.eventDetails.date.seconds * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'No date specified';

    return (
      <TouchableOpacity 
        style={styles.eventCard}
        onPress={() => navigation.navigate('EventDetails', { event: item.eventDetails })}
      >
        {console.log(item)
        }
        {/* Event Image */}
        <Image
          source={item.imageUrl 
            ? { uri: item.imageUrl } 
            : require('../assets/logo.png')
          }
          style={styles.eventImage}
        />

        {/* Event Details */}
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle} numberOfLines={1}>
            {item.eventDetails.title}
          </Text>
          <Text style={styles.eventDescription} numberOfLines={2}>
            {item.eventDetails.location}
          </Text>
          <View style={styles.eventDateContainer}>
            <Ionicons name="calendar-outline" size={14} color="#4169E1" />
            <Text style={styles.eventDate}> {formattedDate}</Text>
          </View>

          {/* Remove from Favorites Button */}
          <TouchableOpacity
            style={styles.removeFavoriteButton}
            onPress={() => handleRemoveFavorite(item.id)}
          >
            <Ionicons name="heart-dislike" size={18} color="white" />
            <Text style={styles.removeFavoriteText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorite Events</Text>
      </View>

      {/* Favorites List */}
      <FlatList
        data={favourites}
        keyExtractor={item => item.id}
        renderItem={renderFavoriteEvent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>No favorite events</Text>
            <Text style={styles.emptySubtext}>
              Explore events and add them to your favorites!
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContainer}
        refreshing={refreshing}
        onRefresh={fetchFavoriteEvents}
      />
    </SafeAreaView>
  );
};

export default FavEventsList;
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  SafeAreaView,
  Image,
  RefreshControl
} from 'react-native';
import { db, auth } from '../Firebase/Firebase';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/EventList';
import { 
  collection, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  where 
} from "firebase/firestore"; // Firestore methods

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Fetch events from Firebase Firestore
  const fetchEvents = async () => {
    try {
      setRefreshing(true);
      
      // Create a query to get events for the current user
      const eventsRef = collection(db, "events");
      const q = query(eventsRef);
      
      const querySnapshot = await getDocs(q);
      const eventData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(eventData);
      
      setEvents(eventData);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete an event
  const handleDeleteEvent = async (eventId, userId) => {
    if (userId !== auth.currentUser.uid) {
      Alert.alert('Error', 'You can only delete events you created.');
      return;
    }

    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this event?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              // Use deleteDoc instead of .delete()
              await deleteDoc(doc(db, 'events', eventId));
              
              // Remove the event from local state
              setEvents(currentEvents => 
                currentEvents.filter(event => event.id !== eventId)
              );
              
              Alert.alert('Success', 'Event deleted successfully!');
            } catch (error) {
              Alert.alert('Error', error.message);
            }
          },
        },
      ]
    );
  };

  // Render each event as a card
  const renderItem = ({ item }) => {
    // Format date if available
    const formattedDate = item.date 
      ? new Date(item.date.seconds * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'No date specified';

    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('EventDetails', { event: item })}
      >
        {/* Event Image or Placeholder */}
        <Image
          source={item.imageUrl 
            ? { uri: item.imageUrl } 
            : require('../assets/logo.png')
          }
          style={styles.eventImage}
        />

        {/* Event Details */}
        <View style={styles.eventDetails}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.date}>
            <Ionicons name="calendar-outline" size={14} /> {formattedDate}
          </Text>

          {/* Action Buttons for Event Creator */}
          {item.userId === auth.currentUser.uid && (
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('MyEventList', { event: item })}
              >
                <Ionicons name="create-outline" size={18} color="white" />
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteEvent(item.id, item.userId)}
              >
                <Ionicons name="trash-outline" size={18} color="white" />
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Events</Text>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => auth.signOut().then(() => navigation.replace('Login'))}
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>No events available.</Text>
            <Text style={styles.emptySubtext}>Create your first event!</Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchEvents}
            colors={['#4169E1']}
            tintColor="#4169E1"
          />
        }
        contentContainerStyle={styles.listContainer}
      />

    </SafeAreaView>
  );
};

export default EventList;
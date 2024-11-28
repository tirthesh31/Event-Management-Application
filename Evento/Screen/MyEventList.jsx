import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { db, auth } from '../Firebase/Firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import styles from '../Styles/MyEventList';

const MyEventList = ({ route, navigation }) => {
  const { event } = route.params || {};
  
  // State variables
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [location, setLocation] = useState(event?.location || '');
  const [date, setDate] = useState(event?.date ? new Date(event.date.seconds * 1000) : new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [organizer, setOrganizer] = useState(event?.organizer || '');
  const [organizerEmail, setOrganizerEmail] = useState(event?.organizerEmail || '');


  // Save event
  const handleSave = async () => {
    // Validation
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter an event title');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Error', 'Please enter an event description');
      return;
    }

    setIsLoading(true);

    try {

      // Event data
      const eventData = {
        title: title.trim(),
        description: description.trim(),
        location: location.trim(),
        date: date,
        userId: auth.currentUser.uid,
        organizerName:organizer,
        organizerEmail:organizerEmail
      };

      if (event) {
        // Update existing event
        const eventRef = doc(db, 'events', event.id);
        await updateDoc(eventRef, eventData);
      } else {
        // Add new event
        await addDoc(collection(db, 'events'), eventData);
      }

      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {event ? 'Edit Event' : 'Create Event'}
        </Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >

        {/* Title Input */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="text-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Event Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#888"
          />
        </View>

        {/* Description Input */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="document-text-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Event Description"
            value={description}
            onChangeText={setDescription}
            multiline
            placeholderTextColor="#888"
          />
        </View>

        {/* Location Input */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="location-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Event Location"
            value={location}
            onChangeText={setLocation}
            placeholderTextColor="#888"
          />
        </View>

        {/* Date Picker */}
        <TouchableOpacity 
          style={styles.datePickerContainer}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons 
            name="calendar-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <Text style={styles.dateText}>
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Text>
        </TouchableOpacity>

        {/* Date Picker Modal */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(Platform.OS === 'ios');
              setDate(selectedDate || date);
            }}
          />
        )}

        {/* Organizer Input */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="briefcase-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Organizer"
            value={organizer}
            onChangeText={setOrganizer}
            placeholderTextColor="#888"
          />
        </View>

        {/* Organizer email Input */}
        <View style={styles.inputContainer}>
          <Ionicons 
            name="mail-outline" 
            size={20} 
            color="#4169E1" 
            style={styles.inputIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Organizer Email"
            value={organizerEmail}
            onChangeText={setOrganizerEmail}
            placeholderTextColor="#888"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Ionicons name="save-outline" size={20} color="white" />
              <Text style={styles.saveButtonText}>
                {event ? 'Update Event' : 'Create Event'}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyEventList
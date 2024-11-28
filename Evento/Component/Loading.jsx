import React from 'react'
import { useState,useEffect } from 'react';
import { View,ActivityIndicator } from 'react-native';
// Loading Screen
const Loading = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace('MainTabs'); // Navigate to main tabs if logged in
        } else {
          navigation.replace('Login'); // Navigate to login/signup if not logged in
        }
        setIsLoading(false);
      });
  
      return unsubscribe;
    }, [navigation]);
  
    return (
      <View>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  };

export default Loading
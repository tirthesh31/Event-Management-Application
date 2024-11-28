import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screen components
import EventList from '../Screen/EventList';
import MyEventList from '../Screen/MyEventList';
import FavEventsList from '../Screen/FavEventList';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'EventList') {
            iconName = focused 
              ? 'calendar' 
              : 'calendar-outline';
          } else if (route.name === 'FavEventsList') {
            iconName = focused 
              ? 'heart' 
              : 'heart-outline';
          } else if (route.name === 'MyEventList') {
            iconName = focused 
              ? 'add' 
              : 'add-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4169E1', // Royal Blue for active tab
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen 
        name="EventList" 
        component={EventList} 
        options={{ 
          title: 'All Events',
          tabBarLabel: 'Events'
        }} 
      />
        <Tab.Screen 
          name="MyEventList" 
          component={MyEventList} 
          options={{ 
            title: 'Add Events',
            tabBarLabel: 'Add Events'
          }} 
        />
      <Tab.Screen 
        name="FavEventsList" 
        component={FavEventsList} 
        options={{ 
          title: 'Favorite Events',
          tabBarLabel: 'Favorites'
        }} 
      />
    </Tab.Navigator> 
  );
}

export default Tabs;
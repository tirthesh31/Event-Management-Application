import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './Component/Loading';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import Tabs from './navigation/AppNavigator';
import EventDetails from './Screen/EventDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Loading Screen */}
        {/* <Stack.Screen name="Loading" component={Loading} /> */}
        
        {/* Authentication Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        
        {/* Main App Screens */}
        <Stack.Screen name="MainTabs" component={Tabs} />

        <Stack.Screen name="EventDetails" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,Button } from 'react-native';




const Stack = createStackNavigator();

const ProfileScreen = () => {
    return (
      <View>
        <Text>Profile Screen</Text>
    
      </View>
    );
  };
  const LoginScreen = () => {
    return (
      <View>
        <Text>Login Screen</Text>
      </View>
    );
  };
  
  const SignupScreen = () => {
    return (
      <View>
        <Text>Signup Screen</Text>
                                                                                                   
      </View>
    );
  };
  

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

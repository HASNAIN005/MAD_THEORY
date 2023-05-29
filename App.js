// Import necessary dependencies
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create stack navigator
const Stack = createStackNavigator();

// Define screen components
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// Create app component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

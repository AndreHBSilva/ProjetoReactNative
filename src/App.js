import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/StackNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

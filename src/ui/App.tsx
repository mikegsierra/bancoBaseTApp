import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './screens/home';

const App = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <Home />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

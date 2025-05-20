import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Disp from './components/display/disp';

export default function App() {

  const [number, setNumber] = useState(0);

  return (
    <PaperProvider theme={theme}>
      <View>
          <Disp number={number}/>
      </View>
    </PaperProvider>
  );
}


const theme = {
  ...DefaultTheme ,
    colors:{
      ...DefaultTheme.colors,
      primary: 'purple',
      secondary: 'white'
    }
}
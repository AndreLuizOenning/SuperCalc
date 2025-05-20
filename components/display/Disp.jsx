
import { useState } from 'react';
import { Text, View } from 'react-native';


export default function Disp(props) {
  return (
    <View>
        <Text>{props.number}</Text>
    </View>
  );
}
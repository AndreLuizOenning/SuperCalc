
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';



export default function Pad() {
  const theme = useTheme();

  return (
    <View style={{ width:'90%' }}>
        <View style={{display: 'flex', flexDirection:'row', width:'100%', height:'12%' }}>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%',}}>7</Button>      
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}>8</Button>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}>9</Button>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}>+</Button>
        </View>
        <View style={{display: 'flex', flexDirection:'row', height:'12%'}}>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}      />
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
        </View>
        <View style={{display: 'flex', flexDirection:'row', height:'12%'}}>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}      />
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
        </View>
        <View style={{display: 'flex', flexDirection:'row', height:'12%'}}>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}      />
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
            <Button style={{backgroundColor: theme.colors.primary, width:'25%'}}/>
        </View>
    </View>
  );
}
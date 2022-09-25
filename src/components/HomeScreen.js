import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, NativeBaseProvider, Center } from 'native-base';

export default function HomeScreen ({ navigation }) {
    return (
      <NativeBaseProvider config={config}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Center flex={1} px="3">
          <Box bg={{ linearGradient: {
                colors: ['lightBlue.300', 'green.800'],
                start: [0, 0],
                end: [1, 0]
              }
                }}
              p="12" rounded="xl"
              _text={{
                fontSize: 'md',
                fontWeight: 'medium',
                color: 'warmGray.50',
                textAlign: 'center'
              }}>
            Bienvenue sur mon App Météo ⛅️
          </Box>
        </Center>
    </View>
    <Button
      title="--> Quel temps chez moi ?"
      onPress={() => navigation.navigate('Details')}
    />
    </NativeBaseProvider>
    );
  };
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
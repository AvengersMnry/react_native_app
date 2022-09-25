import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, NativeBaseProvider, Center } from 'native-base';
import { shouldUseActivityState } from 'react-native-screens';

export default function DetailScreen () {
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Chercher par ville : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText="{onChangeText}"
                    placeholder="Saisissez votre ville..."
                    value=""
                />
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
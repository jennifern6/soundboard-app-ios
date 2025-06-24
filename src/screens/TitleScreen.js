import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TitleScreen({ onContinue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>For My Number 1 Beast 🔥⛳🏆</Text>
      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Enter Soundboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5BACC3',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2E2E2E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5BACC3',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
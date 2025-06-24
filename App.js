import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import TitleScreen from "./src/screens/TitleScreen";

const sounds = [
  {
    label: "🎯 Golf Swing",
    file: require("./src/assets/sounds/golf-swing.mp3"),
  },
  {
    label: "🔫 AK47",
    file: require("./src/assets/sounds/ak47.mp3"),
  },
  {
    label: "📡 Army Radio",
    file: require("./src/assets/sounds/radio.mp3"),
  },
  {
    label: "💣 Explosion",
    file: require("./src/assets/sounds/explosion.mp3"),
  },
  {
    label: "💨 Fart",
    file: require("./src/assets/sounds/fart.mp3"),
  },
  {
    label: "🎧 Don Demarco",
    file: require("./src/assets/sounds/don-demarco.mp3"),
  },
];

export default function App() {
  const [showTitle, setShowTitle] = useState(true);
  const currentSound = useRef(null); // 🔊 Keeps track of the current sound

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
  }, []);

  const playSound = async (soundFile) => {
    try {
      // 🛑 Stop and unload any previous sound
      if (currentSound.current) {
        await currentSound.current.stopAsync();
        await currentSound.current.unloadAsync();
        currentSound.current = null;
      }

      const { sound } = await Audio.Sound.createAsync(soundFile);
      currentSound.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.error("🔇 Sound error:", error);
    }
  };

  if (showTitle) {
    return <TitleScreen onContinue={() => setShowTitle(false)} />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowTitle(true)}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {sounds.map((sound, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => playSound(sound.file)}
        >
          <Text style={styles.text}>{sound.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  button: {
    backgroundColor: "#2E2E2E",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "#444",
    borderRadius: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Audio } from "expo-av";
import * as Sharing from "expo-sharing";
import { colorsApp } from "../assets/colors/colorsApp";

interface RecordingLine {
  sound: any;
  duration: string;
  file: string;
}

export default function App() {
  const [recording, setRecording] = useState<any>();
  const [recordings, setRecordings] = useState<RecordingLine[]>([]);
  const [message, setMessage] = useState<string>("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis: number) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}
          </Text>
          <Pressable
            style={styles.buton}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Text style={styles.buttonText}>Play</Text>
          </Pressable>
          <Pressable
            style={styles.buton}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.butonsContainer}>
        <Pressable
          onPress={recording ? stopRecording : startRecording}
          style={styles.recordButton}
          accessibilityLabel="Record"
        >
          <Text style={styles.buttonText}>
            {recording ? "Stop Recording" : "Start Recording"}
          </Text>
        </Pressable>
        <Pressable style={styles.recordButton} accessibilityLabel="delete All">
          <Text style={styles.buttonText}> Borrar todo </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollviewcito}>
        {getRecordingLines()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: colorsApp.white,
    justifyContent: "flex-start",
    padding: "2%",
  },
  butonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recordButton: {
    borderRadius: 10,
    backgroundColor: colorsApp.purple,
    width: "45%",
    paddingVertical: "5%",
    alignItems: "center",
    marginVertical: "2%",
    marginHorizontal: "2%",
    marginBottom: "6%",
  },
  buton: {
    borderRadius: 10,
    backgroundColor: colorsApp.purple,
    width: "26%",
    height: "80%",
    paddingVertical: "2%",
    alignItems: "center",
    marginVertical: "2%",
    marginHorizontal: "2%",
  },
  buttonText: {
    fontSize: 20,
    color: colorsApp.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
    color: colorsApp.white,
  },
  scrollviewcito: {
    width: "100%",
    alignContent: "center",
  },
});

import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { Timer } from './src/components/Timer.js';
import { Header } from './src/components/Header.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const COLORS = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [time, setTime] = useState(25 * 60);
  const [textTimer, setTextTimer] = useState("Iniciar");
  const [timeInSeconds, setTimeInSeconds] = useState("25:00");
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");

  const handlePress = (i) => {
    const newTime = i === 0 ? 1 : 25 === 1 ? 5 : 15;
    setCurrentTime(i);
    setTextTimer("Iniciar");
    setTime(newTime * 60);
    setTimeInSeconds(formatTime(newTime * 60));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const paddedMins = String(mins).padStart(2, '0');
    const paddedSecs = String(secs).padStart(2, '0');
    return `${paddedMins}:${paddedSecs}`;
  };

  const toggleTimer = () => {
    const newTextTimer = textTimer === "Iniciar" ? "Detener" : "Iniciar";
    setTextTimer(newTextTimer);
    setTime(time - 1);
    setTimeInSeconds(formatTime(time));
  };

  useEffect(() => {
    if (time <= 0) {
      setTextTimer("Iniciar");
      handlePress(currentTime);
    };

    let interval = null;
    if (textTimer !== "Iniciar") {
      interval = setInterval(() => {
        setTime(time - 1);
        setTimeInSeconds(formatTime(time));
      }, 1000);  
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time, textTimer]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: COLORS[currentTime]}]}>
        <StatusBar style='light'/>
        <Text style={styles.title}>Pomodoro</Text>
        <Header 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime} 
          setTime={setTime}
          setTextTimer={setTextTimer}
          handlePress={handlePress}
        />
        <Timer timeInSeconds={timeInSeconds} toggleTimer={toggleTimer} textTimer={textTimer}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 38,
    textAlign: "center",
    fontWeight: "700"
  },
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 2
  },
});

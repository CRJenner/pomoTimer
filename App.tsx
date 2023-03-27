import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { TimerCountDownDisplay } from './Components/TimerCountDownDisplay';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000
export default function App() {
   const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
   const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
   const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)

   const startTimer = () => {
    setIsTimerRunning(true)
const id = setInterval(()=> setTimerCount(prev => prev - 1000), 1000)
setTimerInterval(id)
}
const stopTimer = () => {
  if(timerInterval!== null ){
clearInterval(timerInterval)
}
setIsTimerRunning(false)
}


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title={isTimerRunning ? 'Stop Timer' : 'Start Timer'} onPress={isTimerRunning ? stopTimer : startTimer }></Button>
      <TimerCountDownDisplay timerDate={new Date(timerCount)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

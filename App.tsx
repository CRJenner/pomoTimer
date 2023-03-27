import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { TimerCountDownDisplay } from './Components/TimerCountDownDisplay';
import { TimerToggleButton } from './Components/TimerToggleButton';
import { TimerModeDisplay } from './Components/TimerModeDisplay';

const FOCUS_TIME_MINUTES = 5 * 60 * 1000
const COMPLETE_TIME_MINUTES = 0 * 60 * 1000
export default function App() {
   const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
   const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
   const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
   const [timerMode, setTimerMode] = useState<'Meditate' | 'Complete'>('Meditate')
   
   useEffect(() => {
    if(timerCount === 0){
      if(timerMode === 'Meditate'){
        setTimerMode('Complete')
        setTimerCount(COMPLETE_TIME_MINUTES)
      }else{
        setTimerMode('Meditate')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer()
    }
   }, [timerCount])

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
    <View style={{
      ...styles.container, 
      ...{backgroundColor: timerMode === 'Complete' ? '#2a9d8f' : '#d95550'}}}>
     <TimerModeDisplay timerMode={timerMode}/>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
       <TimerCountDownDisplay timerDate={new Date(timerCount)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

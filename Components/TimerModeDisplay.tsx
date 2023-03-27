import React from "react";
import { Text, View, StyleSheet } from "react-native";

export type TimerModes = 'Meditate' | 'Complete';
type Props = {
    timerMode: TimerModes
}
export const TimerModeDisplay: React.FC<Props> = ({timerMode}) => {
    return(
        <View style={styles.container}>
        <Text style={styles.timerModeText}>{timerMode==='Meditate' ? 'Meditate':"Complete"} </Text>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    timerModeText: {
        fontSize: 40,
        fontWeight: '800',
        color: '#fff',
    }
})
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    if (age) {
      const ageNumber = parseInt(age, 10);
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);

      setLowerLimit(lower);
      setUpperLimit(upper);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>limits</Text>
      {lowerLimit !== null && upperLimit !== null && (
          <View style={styles.results}>
            <Text style={styles.subHeading}>Heart Rate Limits</Text>
            <Text>Lower Limit: {lowerLimit} bpm</Text>
            <Text>Upper Limit: {upperLimit} bpm</Text>
          </View>
        )}
    <Button onPress={calculateHeartRateLimits} title="Calculate"></Button>
   
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 8,
    
    
  },
  field: {
    
    marginBottom: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    
    borderColor: 'blue',
  }
});
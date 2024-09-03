import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function HeartRateCalculator() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState<number | null>(null);
  const [upperLimit, setUpperLimit] = useState<number | null>(null);

  const calculateHeartRateLimits = () => {
	const ageNumber = parseInt(age);
	if (!isNaN(ageNumber)) {
	  const lower = (220 - ageNumber) * 0.65;
	  const upper = (220 - ageNumber) * 0.85;
	  setLowerLimit(lower);
	  setUpperLimit(upper);
	} else {
	  setLowerLimit(null);
	  setUpperLimit(null);
	}
  };

  return (
	<View style={styles.container}>
	  <Text style={styles.label}>Age</Text>
	  <TextInput
		style={styles.input}
		placeholder="Enter your age"
		keyboardType="numeric"
		value={age}
		onChangeText={setAge}
	  />
	  <Text style={styles.label}>Limits</Text>
	  {lowerLimit !== null && upperLimit !== null ? (
		<Text style={styles.limits}>{`${lowerLimit.toFixed(0)}-${upperLimit.toFixed(0)}`}</Text>
	  ) : (
		<Text style={styles.noLimits}>No limits calculated yet.</Text>
	  )}
	  <Button title="CALCULATE" onPress={calculateHeartRateLimits} />
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'flex-start',
	padding: 16,
  },
  label: {
	fontSize: 18,
	marginBottom: 8,
  },
  input: {
	height: 40,
	borderColor: 'gray',
	borderWidth: 1,
	marginBottom: 16,
	paddingHorizontal: 8,
  },
  limits: {
	fontSize: 18,
	marginBottom: 16,
  },
  noLimits: {
	fontSize: 18,
	marginBottom: 16,
	color: 'gray',
  },
});
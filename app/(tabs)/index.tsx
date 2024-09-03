import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HeartRateApp</Text>
      <Link href="/HeartRateCalculator" style={styles.link}>
        Go to Heart Rate Calculator
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
});

import { StyleSheet, View } from "react-native";
import LoveCalculator from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <LoveCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";
function GameScreen() {
  function generateRamdomBetween(min, max, exclude) {
    const rndNumb = Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>
        <Text>LOG ROUND</Text>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;

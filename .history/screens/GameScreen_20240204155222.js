import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";

function generateRamdomBetween(min, max, exclude) {
  const rndNumb = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumb === exclude) {
    return generateRamdomBetween(min, max, exclude);
  } else {
    return rndNumb;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRamdomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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

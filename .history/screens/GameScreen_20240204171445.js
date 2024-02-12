import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
function generateRamdomBetween(min, max, exclude) {
  const rndNumb = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumb === exclude) {
    return generateRamdomBetween(min, max, exclude);
  } else {
    return rndNumb;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  if (
    (direction === "lower" && currentGuess < userNumber) ||
    (direction === "greater" && currentGuess > userNumber)
  ) {
    Alert.alert("Dont f*ing lied if you want lose this game!", [
      { text: "Sorry", style: "cancel" },
    ]);
    return;
  }
  const initialGuess = generateRamdomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  function nextGuessHandler(direction) {
    maxBoundary = currentGuess;
    if (direction === "lower") {
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRamdomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
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

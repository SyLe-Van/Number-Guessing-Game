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
  const initialGuess = generateRamdomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    // if (
    //   (direction === "lower" && currentGuess < userNumber) ||
    //   (direction === "greater" && currentGuess > userNumber)
    // ) {
    //   Alert.alert("Don't lie if you want to lose this game!", [
    //     { text: "Sorry", style: "cancel" },
    //   ]);
    //   return;
    // }
    if (direction === "lower") {
      maxBoundary = currentGuess;
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

import { View, Text } from "react-native";
function GuessLogItem({ guessNumber, guess }) {
  return (
    <View>
      <Text>#{guessNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

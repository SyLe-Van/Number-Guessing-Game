import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function GuessLogItem({ guessNumber, guess }) {
  return (
    <View>
      <Text>#{guessNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
  },
});

import { Text, View, StyleSheet } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Opponent's Guess</Text>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}
const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
export default GameScreen;

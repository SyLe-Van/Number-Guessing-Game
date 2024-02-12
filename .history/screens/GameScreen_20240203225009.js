import { Text, View, StyleSheet, SafeAreaView } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
  },
});

export default GameScreen;

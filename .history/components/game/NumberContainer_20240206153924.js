import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: 24,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 26,
    fontFamily: "open-sans-bold",
  },
});
export default NumberContainer;

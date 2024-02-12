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
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 26,
    fontWeight: "bold",
  },
});
export default NumberContainer;

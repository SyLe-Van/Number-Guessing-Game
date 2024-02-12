import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm!</PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
  },
});
export default StartGameScreen;

import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100,
  },
});
export default StartGameScreen;

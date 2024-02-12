import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm!</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;

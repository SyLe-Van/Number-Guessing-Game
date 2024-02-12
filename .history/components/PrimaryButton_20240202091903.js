import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;

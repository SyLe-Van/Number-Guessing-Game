import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 25,
  },
});
export default PrimaryButton;

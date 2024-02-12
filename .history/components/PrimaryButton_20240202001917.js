import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
});
export default PrimaryButton;

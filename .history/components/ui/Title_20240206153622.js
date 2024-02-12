import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: Colors.primary700,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: 12,
  },
});
export default Title;

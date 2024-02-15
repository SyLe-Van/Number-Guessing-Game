import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    borderColor: "white",
    maxWidth: "80%",
    width: 300,
  },
});
export default Title;

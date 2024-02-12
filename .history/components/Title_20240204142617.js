import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary700,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: 12,
  },
});
export default Title;

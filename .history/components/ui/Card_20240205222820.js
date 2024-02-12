import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

function Card({ children }) {
  <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
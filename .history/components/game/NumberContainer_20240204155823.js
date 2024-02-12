import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
  },
  numberText: {},
});
export default NumberContainer;

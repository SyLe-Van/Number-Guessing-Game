import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 26,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;

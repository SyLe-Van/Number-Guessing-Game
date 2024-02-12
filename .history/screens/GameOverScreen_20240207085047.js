import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});

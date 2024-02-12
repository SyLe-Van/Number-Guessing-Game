import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
function GameOverScreen() {
  return (
    <View>
      <Title>GAMEOVER</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
  },
});

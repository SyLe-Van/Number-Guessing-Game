import { View, Image } from "react-native";
import Title from "../components/ui/Title";
function GameOverScreen() {
  return (
    <View>
      <Title>GAMEOVER</Title>
      <Image source={require("../assets/images/success.png")} />
    </View>
  );
}

export default GameOverScreen;

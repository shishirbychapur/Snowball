import { COLORS, FONT } from "../../constants";
import { Image, StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { TouchableOpacity } from "react-native-gesture-handler";
import icons from "../../constants/icons";

export default function successfulReset() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.darkBlue }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={icons.tickIcon} style={styles.image} />
      <Text style={styles.header}>Password Changed!</Text>
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.button}>Login with your new password!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 30,
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 20,
    backgroundColor: COLORS.navy,
    padding: 10,
    borderRadius: 5,
    width: 350,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
  }
});
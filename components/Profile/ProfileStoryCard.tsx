import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../constants/theme";
import React from "react";
import { useRouter } from "expo-router";

const ProfileStoryCard = ({ storySource, storyName }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: `/profile/storymodal`,
        });
      }}
      style={styles.storyCard}
    >
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 1000,
          borderWidth: 3,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "purple",
        }}
      >
        <Image
          source={{ uri: storySource }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 1000,
          }}
        />
      </View>
      <Text numberOfLines={1} style={{ fontSize: 10 }}>
        {storyName}
      </Text>
    </Pressable>
  );
};

export default ProfileStoryCard;

const styles = StyleSheet.create({
  storyCard: {
    flexDirection: "column",
    alignItems: "center",
    width: 80,
    gap: 5,
  },
});

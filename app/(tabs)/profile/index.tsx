import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthStore, appSignOut } from "../../../store";
import { Redirect, Stack, useRouter } from "expo-router";

import { COLORS } from "../../../constants/theme";
import { FONT } from "../../../constants";
import ProfileCard from "../../../components/Profile/ProfileCard";
import ProfileCompanyCard from "../../../components/Profile/ProfileCompanyCard";
import ProfileInterestedCard from "../../../components/Profile/ProfileInterestedCard";
import Styled from "../../../styles/container";

const ProfilePage = () => {
  const router = useRouter();
  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ alignItems: "flex-start", gap: 5, }}
    >
      <ProfileCard profilePhoto={AuthStore.getRawState().user?.photoURL} />
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 18,
          fontWeight: "700",
          color: COLORS.white,
        }}
      >
        Specialisations
      </Text>
      {/* <ProfileStoryCards /> */}
      <ProfileInterestedCard />
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 18,
          fontWeight: "700",
          color: COLORS.white,
        }}
      >
        Companies Interested In
      </Text>
      <ProfileCompanyCard />
      {/* <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.email}
      </Text>
      <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.displayName}
      </Text>
      <Text style={{ fontFamily: FONT.bold }}>
        {AuthStore.getRawState().user?.uid}
      </Text> */}
      <Button
        onPress={async () => {
          const resp = await appSignOut();
          if (!resp?.error) {
            router.replace("/(auth)/login");
          } else {
            console.log(resp.error);
            Alert.alert("Logout Error", resp.error?.message);
          }
        }}
        title="LOGOUT"
      />

      {/* <Pressable
        onPress={() => {
          router.push("/(tabs)/profile/storymodal");
          // alert("pressed");
        }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#920" : "#818" },
          {
            borderColor: "#920",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
          },
        ]}
      > */}
        {/* <Text
          style={{
            fontFamily: FONT.bold,
            color: COLORS.white,
          }}
        >
          Button
        </Text> */}
      {/* </Pressable> */}
    </ScrollView>
  );
};
export default ProfilePage;

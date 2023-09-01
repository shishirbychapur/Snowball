import { COLORS, FONT, SIZES } from "../../../constants";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import ChatsSearchBar from "../../../components/Chats/ChatsSearchBar";
import Styled from "../../../styles/container";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const TrackerPage = () => {
  const router = useRouter();

  const mentors = [
    {
      name: "Cleon",
      company: "Microsoft",
      contract: "3 Months",
      session: "2/4",
      icon: "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_800_800/0/1579726624860?e=2147483647&v=beta&t=O-WfKPPz1T6C0bYrq-LG62s2R1Vmnqv2F78MAAOOMDQ",
    },
    {
      name: "Ryann",
      company: "Google",
      contract: "6 Months",
      session: "1/4",
      icon: "https://static.toiimg.com/photo/msid-73204368/73204368.jpg",
    },
    {
      name: "Evan",
      company: "Meta",
      contract: "1 Year",
      session: "3/4",
      icon: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/f7j6hnt4brnuxnqb3ose6lxafm-sixteen_nine.jpg?size=948:533",
    },
  ]


  return (
    <ScrollView
      style={Styled.MainScrollableCanvas}
      contentContainerStyle={{ gap: 20 }}
    >
      <Text
        style={{
          fontFamily: FONT.medium,
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          color: COLORS.white,
        }}
      >
        Find a Mentor
      </Text>
      <ChatsSearchBar filterText={""} setFilterText={""}/>
      {mentors.map(mentor => (
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: COLORS.navy,
          width: 350,
          borderRadius: 10,
          padding: 10,
        }}>
        <Image source={{uri: mentor.icon}} style={{width: 80, height: 80, borderRadius: 100 }} />
        <View style={{ marginLeft: 10 }}>
        <Text style={{fontFamily: FONT.medium, color: COLORS.white }}>{mentor.name}</Text>
        <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{mentor.company}</Text>
        <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{mentor.contract}</Text>
        <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{mentor.session}</Text>
        </View>
      </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  add: {
    width: "100%",
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 10,
    padding: 10,
  },
});

export default TrackerPage;

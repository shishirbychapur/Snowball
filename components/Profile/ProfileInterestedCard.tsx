import { COLORS, FONT } from "../../constants/theme";
import { Image, Text, View } from "react-native";

import React from "react";

const ProfileInterestedCard = () => {

  const interested = [
    {
      name: "Engineering",
      logo: "https://cdn-icons-png.flaticon.com/512/2201/2201555.png",
    }, {
      name: "DevOps",
      logo: "https://cdn-icons-png.flaticon.com/512/5115/5115293.png",
    }, {
      name: "ML",
      logo: "https://cdn-icons-png.flaticon.com/512/7017/7017557.png",
    },
  ];


  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 10,
      gap: 10,
    }}>
      {interested.map(company => (
      <View style={{
        backgroundColor: COLORS.lightBlue,
        borderRadius: 15,
        width: 115,
        height: 120,
        flexDirection: "column",
        justifyContent: "space-evenly",
        textAlign: "center",
        alignItems: "center",
      }}>
        <Image 
          style={{ height: 60, width: 65 }}
          source={{ uri: company.logo }}
        />
        <Text style={{fontFamily: FONT.medium }}>{company.name}</Text>
      </View>))
      }
    </View>
  );
};

export default ProfileInterestedCard;
import { COLORS, FONT } from "../../constants/theme";
import { Image, Text, View } from "react-native";

import React from "react";

const ProfileCompanyCard = () => {

  const companies = [
    {
      name: "Google",
      logo: "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png",
    }, {
      name: "Meta",
      logo: "https://vectorseek.com/wp-content/uploads/2023/08/Meta-Icon-Logo-Vector.svg-.png",
    }, {
      name: "Tesla",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tesla-icon.png",
    },
  ];


  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 10,
      gap: 10,
    }}>
      {companies.map(company => (
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

export default ProfileCompanyCard;

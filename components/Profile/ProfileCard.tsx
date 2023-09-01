import { COLORS, FONT, SIZES } from "../../constants";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";

import { AuthStore } from "../../store";
import { LinearGradient } from "expo-linear-gradient";
import { database } from "../../FirebaseConfig";
import { icons } from "../../constants";

const ProfileCard = ({ profilePhoto }) => {
  const [profileData, setProfileData] = React.useState(null);

  console.log(AuthStore.getRawState().user?.uid);

  // const docRef = doc(database, "userdetails", AuthStore.getRawState().user?.uid);
  const docRef = doc(database, "users", AuthStore.getRawState().user?.uid);

  useEffect(() => {
    const fetchProfileData = async () => {
      await getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          // console.log("Document data:", doc.data());
          setProfileData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    };

    fetchProfileData();
  }, []);

  const profileDetails = [
  {
    header: "Name",
    content: "Elon Musk",
  },
  {
    header: "Age",
    content: "49",
  }, 
  {
    header: "Education",
    content: "University of Pennsylvania",
  }, {
    header: "Course",
    content: "Computer Science",
  },
];

  return (
    <View
        style={{
          flexDirection: "row",
          // justifyContent: "center",
          gap: SIZES.xSmall,
          height: 260,
          width: 360,
          backgroundColor: COLORS.lightBlue,
          borderRadius: 15,
          padding: 10,
        }}
      >
        <View style={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            gap: 5,
        }}>
          <Image
            source={{
              uri: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg",
            }}
            style={{
              height: 160,
              width: 160,
              borderRadius: 1000,
              border: "3px solid black",
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: FONT.medium,
                fontSize: SIZES.medium,
                justifyContent: "center",
              }}
            >
              {"Edit"}
            </Text>
          </View>
        </View>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
        }}>
          {profileDetails.map((detail) => (
          <View>
            <Text style={{
                fontFamily: FONT.medium,
                fontSize: SIZES.medium,
              }}>
                {detail.header}
            </Text>
            <Text style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.medium,
                maxWidth: 200,
              }}>
                {detail.content}
            </Text>
          </View>)) }
        </View>
      </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 300,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    gap: 10,
  },
});

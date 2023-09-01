import { COLORS, FONT } from "../../constants";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeCard = () => {

  const plan = [
    {
      name: "Cleon",
      company: "Microsoft",
      contract: "3 Months",
      session: "2/4",
      date: "1st September 2023",
      icon: "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_800_800/0/1579726624860?e=2147483647&v=beta&t=O-WfKPPz1T6C0bYrq-LG62s2R1Vmnqv2F78MAAOOMDQ",
    },
    {
      name: "Ryann",
      company: "Google",
      contract: "6 Months",
      session: "1/4",
      date: "10th September 2023",
      icon: "https://static.toiimg.com/photo/msid-73204368/73204368.jpg",
    },
    {
      name: "Evan",
      company: "Meta",
      contract: "1 Year",
      session: "3/4",
      date: "15th September 2023",
      icon: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/f7j6hnt4brnuxnqb3ose6lxafm-sixteen_nine.jpg?size=948:533",
    },
    {
      name: "John",
      company: "Apple",
      contract: "2 Years",
      session: "4/4",
      date: "20th September 2023",
      icon: "https://imageio.forbes.com/specials-images/imageserve/61b9144f65931aadf0fc3b9c/Apple-s--CEO-Tim-Cook/960x0.jpg?format=jpg&width=960",
    }
  ]


  return (
    <>
    <View>
      <Text style={{
        color: COLORS.white,
        fontFamily: FONT.medium,
        fontSize: 20,
      }}>
        Hi Sophia!
      </Text>
      <Text style={{
        color: COLORS.gray,
        fontFamily: FONT.medium,
      }}>
        Here are your plans for the month, September!
      </Text>
    </View>
    <View style={{
      gap: 10,
      marginTop: 20,
    }}>
      {plan.map(item => (
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: COLORS.navy,
          width: 350,
          borderRadius: 10,
          padding: 10,
        }}>
          <Image source={{uri: item.icon}} style={{width: 80, height: 80, borderRadius: 100 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{fontFamily: FONT.medium, color: COLORS.white }}>{item.name}</Text>
            <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{item.company}</Text>
            <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{item.contract}</Text>
            <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{item.session}</Text>
            <Text style={{fontFamily: FONT.regular, color: COLORS.white }}>{item.date}</Text>
          </View>
        </View>
      )
      )}
    </View>
    </>
  );
};

export default HomeCard;
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLayout: {
    backgroundColor: "white",
    height: 600,
    borderRadius: 20,
    position: "relative",
  },
  bottomBar: {
    backgroundColor: "white",
    width: "100%",
    height: 130,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textStyle: { fontSize: 20, fontWeight: "bold" },
});

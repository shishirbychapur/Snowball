import { COLORS } from "../../../constants";
import HomeCard from "../../../components/Swiping/HomeCard";
import { SafeAreaView } from "react-native";

const HomePage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.darkBlue }}
    >
      <HomeCard />
    </SafeAreaView>
  );
};
export default HomePage;

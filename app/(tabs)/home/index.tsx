import { SafeAreaView } from "react-native";
import SwipingScreen from "../../../components/Swiping/SwipingScreen";
const DUMMY_DATA = [
  {
    id: 1,
    firstName: "Sonny",
    lastName: "Sangha",

    photoUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
    interest: "Basketball",
    description:
      "Big lakers fan here tryna level up my game. Hmu if you're interested",
  },
  {
    id: 2,
    firstName: "Elon",
    lastName: "Musk",

    photoUrl:
      "https://plus.unsplash.com/premium_photo-1675129256093-a2a7705112e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
    interest: "Basketball",
    description:
      "Big lakers fan here tryna level up my game. Hmu if you're interested",
  },
  {
    id: 3,
    firstName: "Mark",
    lastName: "Zuckerberg",

    photoUrl:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    age: 27,
    interest: "Basketball",
    description:
      "Big lakers fan here tryna level up my game. Hmu if you're interested",
  },
];

const HomePage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SwipingScreen candidateData={DUMMY_DATA} />
    </SafeAreaView>
  );
};
export default HomePage;

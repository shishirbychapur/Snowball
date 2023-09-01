import { COLORS, FONT, SIZES } from "../constants";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainCanvas: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.darkBlue,
  },
  MainScrollableCanvas: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.darkBlue,
  },
});

export default styles;

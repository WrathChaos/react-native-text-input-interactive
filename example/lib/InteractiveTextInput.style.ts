import { ViewStyle, Dimensions, StyleSheet } from "react-native";
import { ImageStyle } from "react-native-fast-image";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
}

export const _textInputStyle = (borderColor: any): ViewStyle => ({
  height: 50,
  width: ScreenWidth * 0.9,
  borderWidth: 1,
  paddingLeft: 16,
  borderRadius: 8,
  paddingRight: 16,
  borderColor: borderColor,
  justifyContent: "center",
  backgroundColor: "#eceef5",
});

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

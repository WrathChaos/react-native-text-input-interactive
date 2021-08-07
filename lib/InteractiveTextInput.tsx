import React from "react";
import {
  View,
  Dimensions,
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./InteractiveTextInput.style";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IInteractiveTextInputProps extends TextInputProps {
  style?: CustomStyleProp;
}

const InteractiveTextInput: React.FC<IInteractiveTextInputProps> = ({
  style,
}) => {
  return (
    <TextInput
      style={{
        height: 50,
        width: ScreenWidth * 0.9,
        backgroundColor: "#f5f6f8",
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
        justifyContent: "center",
      }}
      placeholder="Email"
    />
  );
};

export default InteractiveTextInput;

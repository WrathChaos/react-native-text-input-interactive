import * as React from "react";
import {
  Dimensions,
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
  Animated,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./InteractiveTextInput.style";

const { width: ScreenWidth } = Dimensions.get("screen");
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const SUCCESS_COLOR = "#008FEB";
const ORIGINAL_COLOR = "transparent";
const ORIGINAL_VALUE = 0;
const SUCCESS_VALUE = 1;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IInteractiveTextInputProps extends TextInputProps {
  style?: CustomStyleProp;
}

interface IState {}

export default class InteractiveTextInput extends React.Component<
  IInteractiveTextInputProps,
  IState
> {
  interpolatedColor: Animated.Value;

  constructor(props: IInteractiveTextInputProps) {
    super(props);
    this.interpolatedColor = new Animated.Value(ORIGINAL_VALUE);
    this.state = {};
  }

  showOriginColor = () => {
    Animated.timing(this.interpolatedColor, {
      duration: 450,
      toValue: ORIGINAL_VALUE,
      useNativeDriver: false,
    }).start();
  };

  showFocusColor = () => {
    Animated.timing(this.interpolatedColor, {
      duration: 450,
      toValue: SUCCESS_VALUE,
      useNativeDriver: false,
    }).start();
  };

  render() {
    let borderColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, SUCCESS_VALUE],
      outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR],
    });
    return (
      <AnimatedTextInput
        style={{
          height: 50,
          width: ScreenWidth * 0.9,
          backgroundColor: "#eceef5",
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 8,
          justifyContent: "center",
          borderWidth: 1,
          borderColor: borderColor,
        }}
        placeholder="Email"
        onFocus={() => {
          this.showFocusColor();
        }}
        onBlur={() => {
          this.showOriginColor();
        }}
      />
    );
  }
}

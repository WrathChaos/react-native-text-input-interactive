import * as React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
  Animated,
  Image,
  TouchableOpacity,
  View,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, { _textInputStyle } from "./InteractiveTextInput.style";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const MAIN_COLOR = "#008FEB";
const ORIGINAL_COLOR = "transparent";
const PLACEHOLDER_COLOR = "#757575";
const ORIGINAL_VALUE = 0;
const ANIMATED_VALUE = 1;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IInteractiveTextInputProps extends TextInputProps {
  style?: CustomStyleProp;
  textInputStyle?: CustomTextStyleProp;
  ImageComponent?: any;
  IconComponent?: any;
  enableIcon?: boolean;
  mainColor?: string;
  originalColor?: string;
  animatedPlaceholderTextColor?: string;
  onFocus?: () => void;
  onBlur?: () => void;
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
      duration: 350,
      toValue: ORIGINAL_VALUE,
      useNativeDriver: false,
    }).start();
  };

  showFocusColor = () => {
    Animated.timing(this.interpolatedColor, {
      duration: 450,
      toValue: ANIMATED_VALUE,
      useNativeDriver: false,
    }).start();
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderIcon = () => {
    const {
      enableIcon,
      ImageComponent = Image,
      IconComponent = TouchableOpacity,
    } = this.props;

    return (
      enableIcon && (
        <IconComponent
          style={{
            right: 16,
            position: "absolute",
          }}
        >
          <ImageComponent
            resizeMode="contain"
            source={require("../assets/visibility-button.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: "#b5b9bb",
            }}
          />
        </IconComponent>
      )
    );
  };

  renderAnimatedTextInput = () => {
    const mainColor = this.props.mainColor || MAIN_COLOR;
    const originalColor = this.props.originalColor || ORIGINAL_COLOR;
    const animatedPlaceholderTextColor =
      this.props.animatedPlaceholderTextColor || PLACEHOLDER_COLOR;

    let borderColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [originalColor, mainColor],
    });
    let placeholderTextColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [animatedPlaceholderTextColor, mainColor],
    });
    return (
      <AnimatedTextInput
        placeholderTextColor={placeholderTextColor}
        placeholder="Email"
        {...this.props}
        style={[_textInputStyle(borderColor), this.props.textInputStyle]}
        onFocus={() => {
          this.showFocusColor();
          this.props.onFocus && this.props.onFocus();
        }}
        onBlur={() => {
          this.showOriginColor();
          this.props.onBlur && this.props.onBlur();
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderAnimatedTextInput()}
        {this.renderIcon()}
      </View>
    );
  }
}

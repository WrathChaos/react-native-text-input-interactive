<img alt="React Native Text Input Interactive" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-text-input-interactive)

[![React Native Text Input Interactive](https://img.shields.io/badge/-Fully%20customizable%2C%20animated%20text%20input%20for%20React%20Native%20with%20beautiful%20and%20elegant%20design-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-text-input-interactive)

[![npm version](https://img.shields.io/npm/v/react-native-text-input-interactive.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-text-input-interactive)
[![npm](https://img.shields.io/npm/dt/react-native-text-input-interactive.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-text-input-interactive)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Text Input Interactive"
        src="assets/Screenshots/react-native-text-input-interactive.gif" height='850' width="450" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-text-input-interactive
```

## Peer Dependencies

<b><i>Zero Dependency!</i></b>

# Usage

## Import

```jsx
import TextInput from "react-native-text-input-interactive";
```

## Basic Usage

```jsx
<TextInput onChangeText={(text: string) => {}} />
```

## Example Project 😍

You can checkout the example project 🥰
There is **advanced** usage on example.

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Customization (Optionals)

TextInput and Icon is fully customizable thanks to `prop-drilling`, you can use any `TextInput` props.

| Property                     |        Type         |     Default      | Description                                                                                                           |
| ---------------------------- | :-----------------: | :--------------: | --------------------------------------------------------------------------------------------------------------------- |
| mainColor                    |       string        |     #2a41cb      | change the main animated color                                                                                        |
| originalColor                |       string        |   transparent    | change the original/default animated color                                                                            |
| animatedPlaceholderTextColor |       string        |     #757575      | change the placeholder text animated color                                                                            |
| ImageComponent               |      Component      |      Image       | set your own image component such as; `FastImage`                                                                     |
| IconComponent                |      Component      | TouchableOpacity | set your own icon component such as; [react-native-bounceable](https://github.com/WrathChaos/react-native-bounceable) |
| enableIcon                   |       boolean       |      false       | set the true for using the right sided icon                                                                           |                              |
| iconImageSource              | ImageSourcePropType |    undefined     | set the icon image                                                                                                    |
| onIconPress                  |      Function       |    undefined     | set your own logic for the icon button functionality when the icon is pressed                                         |
| style                        |      ViewStyle      |     default      | set or override the style object for the main container                                                               |
| textInputStyle               |      TextStyle      |     default      | set or override the style object for the text input itself                                                            |
| iconContainerStyle           |      ViewStyle      |     default      | set or override the style object for the icon container                                                               |
| iconImageStyle               |     ImageStyle      |     default      | set or override the style object for the icon image style                                                             |
| buttonText                   |       string        |    undefined     | change the button's text                                                                                              |
| ImageComponent               |        Image        |     default      | set your own component instead of default react-native Image component                                                |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Example mobile design is heavily inspired by [Firman Praadita](https://dribbble.com/shots/14944967-On-Boarding-Money-Management-App/attachments/6661899?mode=media)
Thank you so much for this inspiration :)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Text Input Interactive is available under the MIT license. See the LICENSE file for more info.

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import InteractiveTextInput from 'react-native-text-input-interactive';

const {width: ScreenWidth} = Dimensions.get('screen');

const App = () => {
  const renderHeader = () => (
    <View style={{marginTop: 24}}>
      <Text style={{color: '#2a41cb', fontWeight: 'bold', fontSize: 32}}>
        Welcome Back 👋
      </Text>
      <Text style={{color: '#8e9496', letterSpacing: 1, marginTop: 8}}>
        I am so happy to see you. You can continue to login for manage your
        finance
      </Text>
    </View>
  );

  const renderTextInputs = () => (
    <View style={{marginTop: 52}}>
      <InteractiveTextInput textInputStyle={{width: ScreenWidth * 0.88}} />
      <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <InteractiveTextInput
          placeholder="Password"
          secureTextEntry
          enableIcon
          textInputStyle={{
            width: ScreenWidth * 0.7,
            backgroundColor: '#ccc',
            fontFamily: 'Staatliches-Regular',
          }}
          iconImageSource={require('./assets/visibility-button.png')}
          onIconPress={() => {}}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#2a41cb',
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <Image
            source={require('./assets/fingerprint.png')}
            style={{height: 25, width: 25, tintColor: '#2a41cb'}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft: 'auto', marginTop: 16}}>
        <Text style={{color: '#2a41cb', fontWeight: '500'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderLoginButton = () => (
    <TouchableOpacity
      style={{
        height: 50,
        width: ScreenWidth * 0.88,
        backgroundColor: '#2a41cb',
        marginTop: ScreenWidth * 0.5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: '#2a41cb',
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}
    >
      <Text style={{fontWeight: 'bold', color: '#fff'}}>Login</Text>
    </TouchableOpacity>
  );

  const renderDontHaveAccountButton = () => (
    <TouchableOpacity
      style={{marginTop: ScreenWidth * 0.4, alignItems: 'center'}}
    >
      <Text style={{fontWeight: '700'}}>Don't have an account</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
      }}
    >
      {renderHeader()}
      {renderTextInputs()}
      {renderLoginButton()}
      {renderDontHaveAccountButton()}
    </SafeAreaView>
  );
};
export default App;

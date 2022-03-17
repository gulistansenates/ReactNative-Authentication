import { View, Text ,StyleSheet} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        Console.warn ("Sign In");
    };

    const onSignUpPressed = () => {
        Console.warn ("Sign Up");
    };
  return (
    <View style = {styles.root}>
      <CustomInput 
      placeholder="Username" 
      value = {username} 
      setValue={setUsername}
      />

      <CustomInput 
      placeholder="Password" 
      value = {password} 
      setValue = {setPassword}
      secureTextEntry= {true}
      />
      <CustomButton text = "Sign In" onPress = {onSignInPressed}/>
      <CustomButton text = "Sign Up" onPress = {onSignUpPressed}  type= "TERTIARY"/>
    </View>
  );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center' ,
        padding: 10 ,
    },
});

export default SignInScreen
import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        //validate user
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
      navigation.navigate("ForgotPassword ");
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
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
   </ScrollView>

  );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center' ,
        padding: 10 ,
    },
});

export default SignInScreen
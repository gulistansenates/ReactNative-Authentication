import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';

const SignUpScreen = () => {
    const [username,setUsername] = useState('');
    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordRepat,setPasswordRepeat] = useState('');

    const onSignInPressed = () => {
        Console.warn ("Sign In");
    };

    const onRegisterPressed = () => {
        Console.warn ("onRegisterPressed");
    };
  return (
    <View style = {styles.root}>
      <Text style = {styles.title}> Create an account </Text>

      <CustomInput 
          placeholder ="Username" 
          value = {username} 
          setValue = {setUsername}
          />
           <CustomInput 
          placeholder ="Email" 
          value = {email} 
          setValue = {setEmail}
          />
      <CustomInput 
          placeholder ="Password" 
          value = {password} 
          setValue = {setPassword}
          secureTextEntry= {true}
      />
      <CustomInput 
          placeholder ="Repeat Password" 
          value = {passwordRepat} 
          setValue = {setPasswordRepeat}
          secureTextEntry= {true}
      />
      <CustomButton text ="Register" onPress = {onRegisterPressed}/>
    </View>
  );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center' ,
        padding: 10 ,
    },

    title: {
      fontsize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    }
});

export default SignUpScreen
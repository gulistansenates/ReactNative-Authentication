import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
      navigation.navigate('NewPassword');
    };

    const onSignInPressed = () => {
      navigation.navigate('SignIn');
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Text style = {styles.title}> Reset your password</Text>

      <CustomInput 
          placeholder ="Username" value = {username}  setValue = {setUsername}
          />
        
      <CustomButton text ="Send" onPress = {onSendPressed}/>


      <CustomButton
         text= "Back to Sign In"
         onPress= {onSignInPress}
         type= "Tertiary"
         />
    </View>
    </ScrollView>
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

export default ForgotPasswordScreen
import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setcode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
      navigation.navigate('Home');
    };

    const onSignInPressed = () => {
      navigation.navigate('SignIn');;
  };
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Text style = {styles.title}> Confirm your email </Text>

      <CustomInput 
          placeholder ="Enter your confirmation code" value = {code}  setValue = {setcode}
          />
        
      <CustomButton text ="Confirm" onPress = {onConfirmPressed}/>


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

export default ConfirmEmailScreen
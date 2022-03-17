import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type= "PRIMARY"}) => {
  return (
    <Pressable onPress = {onPress} style= {[styles.container , styles['container_${type}']]}>
      <Text style ={[styles.text , styles['text_${type}]']]}>{text}</Text> 
    </Pressable>
  );
};
 const styles= StyleSheet.create({
container: {
    backgroundColor: '#3871F3',
    
    width: '100%' ,
    padding: 20, 
    marginVertical: 5 ,

    alignItems: 'center', 
    borderRadius: 5, 
},

container_PRIMARY: {
backgroundColor: '#3871F3',
},

container_TERTIARY: {

},

text: {
    fontWeight: 'bold',
    color: 'white',

 text_TERTIARY: {

    },
},
 });
export default CustomButton
import {StyleSheet, View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Task from './src/screens/components/Task';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

export default function index() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    dismissKeyboard();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy= [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style = {styles.container}>
       <View style= {styles.tasksWrapper}>
         <Text style= {styles.sectionTitle}>Today's Task</Text>
         <View style= {styles.Items}>
           {
             taskItems.map((item,index) => {
               return (
                 <TouchableOpacity key= {index} onPress = { () => completeTask(index)}>
                    <Task text= {item}/>

                 </TouchableOpacity>
               )
           })
           }
           <Task text= {'Task 1'} />
           <Task text= {'Task 2'} />

         </View>

       </View>
       <KeyboardAvoidingView 
       behavior= {Platform.OS=== "windows" ?"padding" : "height"}
       style={styles.writeTaskWrapper}>
         <TextInput style= {styles.input} placeholder={'Write a task'} value = {task} onChangeText= {text => setTask(text)} />

         <TouchableOpacity onPress={() => handleAddTask()}>
           <View style= {styles.addWrapper}>
             <Text style ={styles.addText}>+</Text>
           </View>
         </TouchableOpacity>

       </KeyboardAvoidingView>

    </View>
  );
};

const styles= StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
},
tasksWrapper:{
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle:{
  fontSize: 20,
  fontWeight: 'bold',
},
Items:{
  marginTop: 30,
},
writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input:{
  paddingVertical : 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWitdh: 1,
  width: 250,
},
addWrapper:{
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWitdh: 1,

},
addText:{},

});




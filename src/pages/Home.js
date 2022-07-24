import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';

export function Home(){
    const [newSkill, setNewSill] = useState()
    const[mySkills, setMySkills] = useState([])

    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSill}
            />

            <Button />

            <Text style={[styles.title, {marginVertical: 50}]}>
                My skills
            </Text>
            {
                    mySkills.map(skill=>(
                        <SkillCard />
                ))
            }
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#121015",
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title:{
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    input:{
        backgroundColor: "#1F1E25",
        color: "#FFF",
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15:10,
        marginTop: 30,
        borderRadius: 7,
    }
})
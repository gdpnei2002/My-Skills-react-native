import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function Home(){
    const [newSkill, setNewSill] = useState()
    const[mySkills, setMySkills] = useState([])

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSill}
            />

            <TouchableOpacity  
                style={styles.button}
                activeOpacity={.7}>
                <Text  style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, {marginTop: 20}]}>
                My skills
            </Text>

            <TouchableOpacity style={styles.buttonSkill}>
                <Text style={styles.textSkill}>
                    Teste
                </Text>
            </TouchableOpacity>
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
    },
    button: {
        backgroundColor:"#A370F7",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20
    },
    buttonText:{
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold"
    },
    buttonSkill:{
        backgroundColor: "#1F1E25",
        padding: 15,
        borderRadius: 50
    },
    textSkill:{
        color: "#FFF",
        backgroundColor: "#1F1E25",
        fontSize: 22,
        fontWeight: "bold",
    }


})
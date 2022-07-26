import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Button } from '../components/Button/Button';
import { SkillCard } from '../components/SkillCard/SkillCard';
import styles from "./style"

interface SkillData{
    id: string;
    name: string
}

export function Home(){
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [gretting, setGretting] = useState ('')

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
            if(currentHour < 12){
                setGretting('Good morning');
            }
            else if(currentHour >=12 && currentHour <18){
                setGretting('Good afternon')
            }
            else{
                setGretting('Good night')
            }
    }, [mySkills])

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
            <Text style={styles.greetings}>
                {gretting}
            </Text>

        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
            />

            <Button 
                title="Add"
                onPress={handleAddNewSkill}
                 />

            <Text style={[styles.title, {marginVertical: 50}]}>
                My skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)} />
                )} />
      </View>
  );
}


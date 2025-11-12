import React from 'react'
import { ScrollView, Text } from 'react-native';
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3A from "./Exercise3A";
import Exercise3B from "./Exercise3B";
import Exercise3C from "./Exercise3C";
import Exercise3D from "./Exercise3D";
import Exercise3E from "./Exercise3E";

const MyApp = () => {
    return (
        <ScrollView style={{marginTop:50, marginBottom: 50, flex:1}}>
            <Text style={{fontSize:30}}>Lesson 7 Exercises</Text>

            <Text style={{fontSize:20}}>Ex1</Text>

            <Exercise1 />

            <Text style={{fontSize:20}}>Ex2</Text>

            <Exercise2 />

            <Text style={{fontSize:20}}>Ex3A</Text>

            <Exercise3A />

            <Text style={{fontSize:20}}>Ex3B</Text>

            <Exercise3B />

            <Text style={{fontSize:20}}>Ex3C</Text>

            <Exercise3C />

            <Text style={{fontSize:20}}>Ex3D</Text>

            <Exercise3D />

            <Text style={{fontSize:20}}>Ex3E</Text>

            <Exercise3E />

        </ScrollView>
    )
}

export default MyApp;
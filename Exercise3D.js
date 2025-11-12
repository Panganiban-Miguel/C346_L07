// Exercise3D
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24
    }
})

const Exercise3D = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child,{backgroundColor:'powderblue',flex:1}]}>Child One</Text>
            <Text style={[styles.Child,{backgroundColor:'skyblue',flex:2}]}>Child Two</Text>
            <Text style={[styles.Child,{backgroundColor:'steelblue',flex:3}]}>Child Three</Text>
        </View>
    );
};

export default Exercise3D;
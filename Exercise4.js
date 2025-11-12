// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    child: {

    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child,{backgroundColor:'lightblue',padding:10}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child,{backgroundColor:'lightgreen',padding:10}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child,{backgroundColor:'red',padding:10}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
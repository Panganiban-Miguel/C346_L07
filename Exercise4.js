// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 10
    },
    child: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child,{backgroundColor:'skyblue'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child,{backgroundColor:'mediumaquamarine'}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child,{backgroundColor:'crimson'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
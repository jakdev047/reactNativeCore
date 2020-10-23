import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';

const styles = StyleSheet.create({
    textProperty: {
        color: 'green',
        fontSize: 24
    }
});

const ListItem = ({placeName,onItemPressed}) => {
    console.log("data",placeName)
    return (
        // onLongPress
        <Pressable onPress={onItemPressed}>
        <View>
            <Text style={styles.textProperty}>
                {placeName}
            </Text>
        </View>
        </Pressable>
    )
}

export default ListItem;

import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Pressable, Image } from 'react-native';

const styles = StyleSheet.create({
    textProperty: {
        color: 'green',
        fontSize: 24
    }
});

const ListItem = ({placeName,placeImage,onItemPressed}) => {
    return (
        // onLongPress
        <Pressable onPress={onItemPressed}>
        <View>
            <Image style={{width:150,height:150}} source={{uri:placeImage}}/>
            <Text style={styles.textProperty}>
                {placeName}
            </Text>
        </View>
        </Pressable>
    )
}

export default ListItem;

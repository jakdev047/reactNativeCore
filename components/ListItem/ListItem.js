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
            <Image style={{width:'100%',height:300}} source={placeImage}/>
            <Text style={styles.textProperty}>
                {placeName}
            </Text>
        </View>
        </Pressable>
    )
}

export default ListItem;

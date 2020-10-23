import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textProperty: {
        color: 'green',
        fontSize: '24px'
    }
});

const ListItem = ({placeName}) => {
    return (
        <View>
            <Text style={styles.textProperty}>
                {placeName}
            </Text>
        </View>
    )
}

export default ListItem;

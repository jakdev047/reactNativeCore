import React from 'react';
import { StyleSheet, Button, Modal, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '100%'
    },
    textStyles: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    }
});


const PlaceDetail = ({ place }) => {
    return (
        <Modal style={styles.container}>
            <View>
                <Text style={styles.textStyles}>{place.value}</Text>
                <View>
                    <Button title="Delete" />
                </View>
            </View>
        </Modal>
    )
};

export default PlaceDetail;

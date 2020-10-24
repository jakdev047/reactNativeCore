import React from 'react';
import { StyleSheet, Button, Modal, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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


const PlaceDetail = ({ place, handleHideModal, handleDeleteItem }) => {
    return (
        <Modal style={styles.container}>
            <View>
                <Image source={place.image} style={{ width: '100%', height: 300 }} />
                <Text style={styles.textStyles}>{place.value}</Text>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity onPress={() => handleDeleteItem(place.key)}>
                        <Icon name="trash" size={60} color="#eb1b33" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleHideModal()}>
                        <Icon name="times-circle" size={60} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default PlaceDetail;

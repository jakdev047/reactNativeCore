import React from 'react';
import { StyleSheet, Button, Modal, Text, View, Image } from 'react-native';

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


const PlaceDetail = ({ place,handleHideModal,handleDeleteItem }) => {
    return (
        <Modal style={styles.container}>
            <View>
                <Image source={place.image} style={{width:'100%',height:300}}/>
                <Text style={styles.textStyles}>{place.value}</Text>
                <View>
                    <Button title="Delete"  color="red" onPress={()=>handleDeleteItem(place.key)}/>
                    <Button title="close"  onPress={()=>handleHideModal()}/>
                </View>
            </View>
        </Modal>
    )
};

export default PlaceDetail;

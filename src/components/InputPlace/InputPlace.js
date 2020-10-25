import React from 'react';
import { Button,  StyleSheet, TextInput, View } from 'react-native';
// import myImage from '../../assets/images/0burger.jpg';

const styles = StyleSheet.create({
    inputView: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={{
                    width: 200,
                    borderBottomWidth: 1,
                    borderColor: 'green',
                    padding: 7
                }}
                placeholder="Add a Place..."
                value={props.inputValue}
                onChangeText={text => props.setInputValue(text)}
            />
            
        </View>
    )
};

export default InputPlace;

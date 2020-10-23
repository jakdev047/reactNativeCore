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
            <Button
                title="Add"
                onPress={() => {
                    if (props.inputValue !== '') {
                        props.addPlace([
                            ...props.placeList,
                            {
                                key: Math.random().toString(),
                                value: props.inputValue,
                                image: {
                                    uri: 'https://i.ytimg.com/vi/YxpAQcq5-y0/maxresdefault.jpg'
                                }
                            }
                        ])
                        props.setInputValue('');
                    }
                    else {
                        alert('Please enter corect place')
                    }

                }}
            />
        </View>
    )
};

export default InputPlace;

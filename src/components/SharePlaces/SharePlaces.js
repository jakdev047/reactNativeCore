import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../redux/actions/places';
import InputPlace from '../InputPlace/InputPlace';
import PickImage from '../PickImage/PickImage';

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState('');
    const [image, setImage] = useState('');
    const handleAddingPlace = () => {
        if (inputValue === '' || image === '') {
            if (image === '') {
                alert('Pick an Image')
            }
        }
        else {
            props.addPlace({
                key: Math.random().toString(),
                value: inputValue,
                image
            })
            setInputValue('');
            setImage('');
            props.navigation.navigate('Find Places');
        }
    }
    return (
        <View>
            <PickImage image={image} setImage={setImage} />
            <View>
                <InputPlace
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        handleAddingPlace();
                    }}
                />
            </View>
        </View>

    )
};

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
    }
}

export default connect(null, mapDispatchToProps)(SharePlaces);

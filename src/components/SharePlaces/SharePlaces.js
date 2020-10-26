import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../redux/actions/places';
import InputPlace from '../InputPlace/InputPlace';
import PickImage from '../PickImage/PickImage';

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState('');
    const [image, setImage] = useState('');
    return (
        <View>
            <PickImage image={image} setImage={setImage}/>
            <View>
                <InputPlace
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        if (inputValue !== '') {
                            props.addPlace({
                                key: Math.random().toString(),
                                value: inputValue,
                                image: {
                                    uri: 'https://i.ytimg.com/vi/YxpAQcq5-y0/maxresdefault.jpg'
                                }
                            })
                            setInputValue('');
                        }
                        else {
                            alert('Please enter corect place')
                        }

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

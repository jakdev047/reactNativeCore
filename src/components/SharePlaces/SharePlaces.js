import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../redux/actions/places';
import InputPlace from '../InputPlace/InputPlace';

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState('');
    return (
        <InputPlace
            inputValue={inputValue}
            setInputValue={setInputValue}
            addPlace={props.addPlace}
        />
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
    }
}

export default connect(null,mapDispatchToProps)(SharePlaces);

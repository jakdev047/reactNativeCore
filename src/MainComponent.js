import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import PlaceList from './components/PlaceList/PlaceList';
import { addPlace,deletePlace } from './redux/actions/places';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        color: 'red',
        fontSize: 34,
        marginTop: 50
    }
});


const MainComponent = props => {
    const [inputValue, setInputValue] = useState('');
    const [seletedPlace, setSeletedPlace] = useState(null);

    const handleSelectedPlace = key => {
        const place = props.placeList.find(place => {
            return place.key === key;
        });
        setSeletedPlace(place);
    }

    const handleHideModal = () => {
        setSeletedPlace(null);
    }

    const handleDeleteItem = key => {
        props.deletePlace(key)
        setSeletedPlace(null);
    }

    let placeDetail = null;
    if (seletedPlace !== null) {
        placeDetail = <PlaceDetail place={seletedPlace} handleHideModal={handleHideModal} handleDeleteItem={handleDeleteItem} />
    }
    return ( 
        <View style={styles.container}>

            <StatusBar style="auto" />

            {placeDetail}

            <Text style={styles.textStyles}>Hello React Native</Text>

            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                placeList={props.placeList}
                addPlace={props.addPlace}
            />

            <PlaceList
                placeList={props.placeList}
                handleSelectedPlace={handleSelectedPlace}
            />

        </View>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place)),
        deletePlace: key => dispatch(deletePlace(key)),
    }
}

const mapStateToProps = state => {
    return {
        placeList: state.places.placeList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);
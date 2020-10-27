import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import PlaceList from '../PlaceList/PlaceList';
import { deletePlace,loadPlaces } from '../../redux/actions/places';

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


const FindPlaces = props => {
    const [seletedPlace, setSeletedPlace] = useState(null);

    useEffect(()=>{
        props.loadPlaces();
    });

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

            <PlaceList
                placeList={props.placeList}
                handleSelectedPlace={handleSelectedPlace}
            />

        </View>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deletePlace: key => dispatch(deletePlace(key)),
        loadPlaces: () => dispatch(loadPlaces()),
    }
}

const mapStateToProps = state => {
    return {
        placeList: state.places.placeList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FindPlaces);
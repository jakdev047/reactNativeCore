import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
    return (
        <FlatList
            style={{ width: '100%', textAlign: 'center' }}
            data={props.placeList}
            renderItem={info => {
                return (
                    <ListItem placeName={info.item.value} placeImage={info.item.image} onItemPressed={() => props.handleSelectedPlace(info.item.key)} />
                )
            }}
            keyExtractor={item => item.key}

        />
    )
};

export default PlaceList;

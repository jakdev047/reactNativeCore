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
                    <ListItem placeName={info.item.value} onItemPressed={() => alert(info.item.value)} />
                )
            }}
            keyExtractor={item => item.key}

        />
    )
};

export default PlaceList;

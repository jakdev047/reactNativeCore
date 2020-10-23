import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import PlaceList from './components/PlaceList/PlaceList';

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);
  const [seletedPlace, setSeletedPlace] = useState(null);

  const handleSelectedPlace = key => {
    const place = placeList.find(place=>{
      return place.key === key;
    });
    setSeletedPlace(place);
  }

  const handleHideModal = () =>{
    setSeletedPlace(null);
  }

  const handleDeleteItem = key => {
    setPlaceList([
      ...placeList.filter(item=>item.key !== key)
    ]);
    setSeletedPlace(null);
  }

  let placeDetail = null;
  if( seletedPlace !== null) {
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
        placeList={placeList}
        setPlaceList={setPlaceList}
      />

      <PlaceList
        placeList={placeList}
        handleSelectedPlace={handleSelectedPlace}
      />

    </View>
  );
}

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

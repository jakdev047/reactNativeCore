import React from 'react'
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';

const PickImage = props => {
    const handleImagePick = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4,3],
                quality: 1
            });
            if(!result.cancelled) {
                props.setImage(result.uri);
                console.log(result); // get image
            }
        } catch (E) {
            console.log(E);
        }
    };
    let showImage = null;
    if(props.image !== "") {
        showImage  = <Image source={{uri:props.image}} style={{width: 200,height: 200,marginBottom:20}}/>
    }
    return (
        <View>
            {showImage}
            <Button title="Pick an Image" onPress={handleImagePick} />
        </View>
    )
};

export default PickImage;

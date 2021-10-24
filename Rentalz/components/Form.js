import React from 'react';
import {
    Text,View,StyleSheet
} from 'react-native';

export default class Form extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Rentalz Aplication</Text>
            </View>

        );
    }
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#C8E3D4',
        alignContent: 'center',
        justifyContent: 'center',
    },
})
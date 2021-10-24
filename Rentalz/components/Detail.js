import React,{Component} from 'react';
import {
    Text,View,StyleSheet
} from 'react-native';
import Button from 'react-native-button'


export default class Details extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Details Page</Text>
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
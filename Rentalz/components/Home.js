import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import Detail from './Form';
import Form from './Form';

const Stack = createStackNavigator();


const Navigate = () => {
    return (
        <View>
            <Text>Navigation</Text>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Detail"}>
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Navigate;
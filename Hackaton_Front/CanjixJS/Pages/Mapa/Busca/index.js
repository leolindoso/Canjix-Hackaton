import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Modal,
    TouchableOpacity,
    Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';



export default class Busca extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFocused: false
        }
    };

    render() {


        const { onLocationSelected } = this.props;
        return (
            <GooglePlacesAutocomplete
                placeholder='Para onde?'
                placeholderTextColor="#333"
                // currentLocation={true}
                // currentLocationLabel='Sua Localização'
                onPress={onLocationSelected}
                // onPress={(data, details) => {
                //     onLocationSelected
                // }}
                query={{
                    key: "AIzaSyAKi-rf2xDTTLRdMSTmGLHZM2uEOUXgWt0",
                    language: 'pt',
                    components: 'country:br',
                }}
                textInputProps={{
                    onFocus: () => { this.setState({ searchFocused: true }) },
                    onBlur: () => { this.setState({ searchFocused: false }) },
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 80, android: 140 }),
                        width: '100%',

                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        padding: 0,
                        borderRadius: 0,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                        borderWidth: 1,
                        borderColor: '#ddd',
                        fontSize: 18
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: '#ddd',
                        backgroundColor: '#fff',
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                        borderWidth: 1,
                        marginTop: 10,
                        fontSize: 18

                    },
                    description: {
                        fontSize: 16
                    },
                    row: {
                        padding: 20,
                        height: 58
                    },
                }}
            />)
    }

}



const styles = StyleSheet.create({
    loginText: {
        fontWeight: "bold",
        color: "white",
        marginVertical: 10
    },
    gradient: {
        // flex: 1,
        width: 200,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 50,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        elevation: 3,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        margin: 10,
        backgroundColor: "#F194FF",
        paddingHorizontal: 50
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    map: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});
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



const Direcoes = ({ destination, origin, onReady }) => (


    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAKi-rf2xDTTLRdMSTmGLHZM2uEOUXgWt0"
        strokeWidth={3}
        strokeColor="#f99e83"
    />
)

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
export default Direcoes;

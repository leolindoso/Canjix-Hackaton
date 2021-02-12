import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Mapa from '../Mapa';
import Login from '../Login';
import Config from '../Config/Index';
// import Config from '../Config';

const Inicio: () => React$Node = ({ navigation }) => {

    const Drawer = createDrawerNavigator();
    return (
        <>
            <View style={styles.container}>

                <View style={styles.map}>
                    <Drawer.Navigator style={styles.drawer}>
                        <Drawer.Screen name="Mapa" component={Mapa} />
                        <Drawer.Screen name="Configurações" component={Config} />
                        <Drawer.Screen name="Sair" component={Login} />
                    </Drawer.Navigator>
                </View>
                <View style={styles.barView}>
                    <TouchableOpacity style={styles.barIcon} onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                        <Image source={require('../../assets/Bars.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barView: {
        position: 'absolute',
        top: 20,
        height: '5%',
        width: '100%',
        flex: 0.5,
        alignItems: 'flex-start',
        backgroundColor: "transparent",
        justifyContent: 'center',
    },
    barIcon: {
        // marginBottom: 20,
        backgroundColor: '#8270E6',
        marginLeft: 10,
        padding: 20,
        borderRadius: 50,
        elevation: 5
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
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    drawer: {
        marginTop: 20,
        height: '80%',
        width: Dimensions.get('window').width
    }
});

export default Inicio;
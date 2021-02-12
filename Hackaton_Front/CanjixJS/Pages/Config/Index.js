import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Config: () => React$Node = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <FlatList>
                    <TouchableOpacity>
                        <Text style={styles.text}>Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Sair</Text>
                    </TouchableOpacity>
                    {/* <Stack.Navigator initialRouteName={"Login"}>
                        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                        <Stack.Screen options={{ headerShown: false }} name="Inicio" component={Inicio} />
                        <Stack.Screen name="Mapa" component={Mapa} />
                    </Stack.Navigator> */}
                </FlatList>

            </View>
        </>
    );
};
const styles = StyleSheet.create({
    scrollView: {
        height: '150%'
    },
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#f7f4ed",
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
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#f99e83",
        marginBottom: 40
    },
    inputView: {
        width: "90%",
        // flex: 1,
        // backgroundColor: "#f9f8f4",
        // borderRadius: 25,
        // shadowRadius: 10,
        // shadowOpacity: 0.2,
        // shadowColor: 'black',
        // shadowOffset: { height: 5, width: 5 },
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 50,
        // elevation: 3,
    },

    inputFieldGradient: {
        width: "100%",
        // backgroundColor: "#f9f8f4",
        borderRadius: 25,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        height: 50,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: "center",
        paddingHorizontal: 50,
        elevation: 3,
    },

    loginBtnView: {

        backgroundColor: "#f7f4ed",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    inputText: {
        height: 50,
        color: "black",
    },
    loginText: {
        fontWeight: "bold",
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#f6c866",
        borderRadius: 25,
        height: 50,
        marginBottom: 0,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 50,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 },
        elevation: 3,
    },
    forgot: {
        color: "#f99e83",
        fontSize: 11
    },
    gradient: {
        flex: 1,
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
    button: {
        width: '100%',
        height: 45,
        borderRadius: 25,
    },
    text: {
        color: 'black',
        fontSize: 16
    },
    map: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});

export default Config;
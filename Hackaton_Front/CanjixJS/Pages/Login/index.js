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
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login: () => React$Node = ({ navigation }) => {

    const state = {
        email: "",
        password: ""
    }
    function setState(form) {
        state.email = form.email
        state.password = form.password
    }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/Fundo2.png')} style={styles.image}>
                    {/* <Text style={styles.text}>Inside</Text> */}
                </ImageBackground>
                <View style={styles.containerLogo}>
                    <Text style={styles.logo}>Bizu</Text>
                </View>
                <View style={styles.containerLogin}>
                    <View style={styles.inputView}>
                        <LinearGradient colors={['#fcfbf9', '#fcfbf9']} style={styles.inputFieldGradient} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="E-mail"
                                placeholderTextColor="#F78B50"
                                onChangeText={text => setState({ email: text })} />
                        </LinearGradient>
                    </View>
                    <View style={styles.inputView}>
                        <LinearGradient colors={['#fcfbf9', '#fcfbf9']} style={styles.inputFieldGradient} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Senha"
                                placeholderTextColor="#F78B50"
                                onChangeText={text => setState({ password: text })} />
                        </LinearGradient>
                    </View>
                    <View style={styles.loginBtnView} >
                        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                            } colors={['#F78B50', '#F78B50']} style={styles.gradient} >
                                <Text style={styles.loginText}> LOGIN </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        marginRight: 0,
        marginBottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    scrollView: {
        height: '150%'
    },
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo: {
        position: 'absolute',
        top: 200,
        flex: 1,
        height: "20%",
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogin: {
        position: 'absolute',
        bottom: 80,
        flex: 0.5,
        height: "40%",
        width: '80%',
        backgroundColor: "#fcfbf9",
        alignItems: 'center',
        justifyContent: 'center',
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
    logo: {
        fontSize: 60,
        color: "#8270E6",
        marginBottom: 40
    },
    inputView: {
        width: "100%",
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
        paddingHorizontal: 20,
        // elevation: 3,
    },

    inputFieldGradient: {
        width: "100%",
        // backgroundColor: "#f9f8f4",
        borderRadius: 5,
        borderColor: "#F78B50",
        borderWidth: 2,
        // shadowRadius: 10,
        // shadowOpacity: 0.2,
        // shadowColor: 'black',
        // shadowOffset: { height: 5, width: 5 },
        height: 50,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: "center",
        paddingHorizontal: 50,
        // elevation: 3,
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
        alignItems: 'flex-start'
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
        color: "#8270E6",
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
        color: 'white',
        fontSize: 16
    },
    map: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});

export default Login;
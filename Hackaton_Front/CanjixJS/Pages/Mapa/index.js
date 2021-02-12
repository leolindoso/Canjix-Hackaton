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
    Image,
    FlatList,
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
import { Directions } from 'react-native-gesture-handler';
import Direcoes from './Direcoes';
import Busca from './Busca';
import CheckBox from '@react-native-community/checkbox';
import DropdownMenu from 'react-native-dropdown-menu';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';




export default class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -8.0644413,
                longitude: -34.88033,
            },
            error: null,
            modalLocomocaoVisible: true,
            modalCheckPedestreVisible: false,
            modalCheckCiclistaVisible: false,
            modalCheckMotociclistaVisible: false,
            modalReportVisible: false,
            destination: null,
            noTrajeto: null,
            aPe: null,
            bike: null,
            moto: null,
            carro: null,
            data: [
                { key: 'Documentos', checked: false },
                { key: 'Chaves', checked: false },
                { key: 'Mochila', checked: false },
            ],
            TiposSinalizacao: [["Infraestrutura", "Tempo Real", "Sinistro"]],
            tipoSelecionado: "Infraestrutura",
            opcoesInfra: [
                { label: 'Buraco na pista', value: 0 },
                { label: 'Bueiro aberto', value: 1 },
                { label: 'Problema com velocidade na pista', value: 2 }
            ],
            opcoesInfraSelecionada: null,
            opcoesTempoRealSelecionada: null,
            opcoesTempoReal: [
                { label: 'Alagamento', value: 3 },
                { label: 'Semáforo com defeito', value: 4 },
                { label: 'Sinistro', value: 5 }
            ],
            bicicletarios: [
                {
                    key: "1",
                    codigo: "1",
                    nome: "1 - Prefeitura",
                    latitude: -8.05529,
                    longitude: -34.87221,
                    localizacao: "Prefeitura",
                    capacidadebikes: "15"
                },

                {
                    key: "2",
                    codigo: "2",
                    nome: "2 - Praça Tiradentes",
                    latitude: -8.05873,
                    longitude: -34.87247,
                    localizacao: "Praça Tiradentes",
                    capacidadebikes: "15"
                },

                {
                    key: "3",
                    codigo: "3",
                    nome: "3 - Praça do Arsenal",
                    latitude: -8.061392,
                    longitude: -34.871049,
                    localizacao: "Rua do Bom Jesus com Rua Barão Rodrigues Mendes",
                    capacidadebikes: "23"
                },
                {

                    key: "4",
                    codigo: "4",
                    nome: "4 - Boulevard Rio Branco",
                    latitude: -8.0625979,
                    longitude: -34.872696,
                    localizacao: "Av. Rio Branco",
                    capacidadebikes: "23"
                },
                {
                    key: "5",
                    codigo: "5",
                    nome: "5 - Paço Alfândega",
                    latitude: -8.063705,
                    longitude: -34.8742113,
                    localizacao: "Paço Alfândega",
                    capacidadebikes: "23"
                },
                {
                    key: "6",
                    codigo: "6",
                    nome: "6 - Cais de Santa Rita",
                    latitude: -8.06707,
                    longitude: -34.8757,
                    localizacao: "Cais de Santa Rita",
                    capacidadebikes: "15"
                },
                {
                    key: "7",
                    codigo: "7",
                    nome: "7 - Praça da República",
                    latitude: -8.06112,
                    longitude: -34.87839,
                    localizacao: "Praça da República",
                    capacidadebikes: "19"
                },

                {
                    key: "8",
                    codigo: "8",
                    nome: "8 - Praça da Independência",
                    latitude: -8.06418,
                    longitude: -34.87837,
                    localizacao: "Praça da Independência",
                    capacidadebikes: "23"
                },

                {
                    key: "9",
                    codigo: "9",
                    nome: "9 - Praça Joaquim Nabuco",
                    latitude: -8.06444,
                    longitude: -34.88135,
                    localizacao: "Praça Joaquim Nabuco",
                    capacidadebikes: "23"
                },

                {
                    key: "10",
                    codigo: "10",
                    nome: "10 - Casa da Cultura",
                    latitude: -8.06673,
                    longitude: -34.88294,
                    localizacao: "Casa da Cultura",
                    capacidadebikes: "27"
                },

                {
                    key: "11",
                    codigo: "11",
                    nome: "11 - Ponte do Limoeiro",
                    latitude: -8.05039,
                    longitude: -34.87397,
                    localizacao: "Ponte do Limoeiro",
                    capacidadebikes: "15"
                },

                {
                    key: "12",
                    codigo: "12",
                    nome: "12 - Camilo Simões",
                    latitude: -8.05316,
                    longitude: -34.87581,
                    localizacao: "Obelisco Aurora",
                    capacidadebikes: "23"
                },

                {
                    key: "13",
                    codigo: "13",
                    nome: "13 - Tortura Nunca Mais",
                    latitude: -8.056193,
                    longitude: -34.878319,
                    localizacao: "Tortura Nunca Mais",
                    capacidadebikes: "19"
                },

                {
                    key: "14",
                    codigo: "14",
                    nome: "14 - Parque Treze de Maio",
                    latitude: -8.05854,
                    longitude: -34.88106,
                    localizacao: "Parque Treze de Maio",
                    capacidadebikes: "19"
                },

                {
                    key: "15",
                    codigo: "15",
                    nome: "15 - Cine São Luiz",
                    latitude: -8.0623763,
                    longitude: -34.8819838,
                    localizacao: "Rua Dr. Sebastião Lins",
                    capacidadebikes: "lateral do Cinema São Luiz",
                    "field8": "11"
                },

                {
                    key: "16",
                    codigo: "16",
                    nome: "16 - Matriz da Boa Vista",
                    latitude: -8.06263,
                    longitude: -34.88519,
                    localizacao: "Matriz da Boa Vista",
                    capacidadebikes: "15"
                },

                {
                    key: "17",
                    codigo: "17",
                    nome: "17 - Igreja de Santa Cruz",
                    latitude: -8.06231,
                    longitude: -34.88813,
                    localizacao: "Igreja de Santa Cruz",
                    capacidadebikes: "15"
                },

                {
                    key: "18",
                    codigo: "18",
                    nome: "18 - Riachuelo",
                    latitude: -8.05826,
                    longitude: -34.88571,
                    localizacao: "Riachuelo",
                    capacidadebikes: "15"
                },

                {
                    key: "19",
                    codigo: "19",
                    nome: "19 - Sossego.",
                    latitude: -8.0543316,
                    longitude: -34.8840345,
                    localizacao: "Rua Gervásio Pires",
                    capacidadebikes: "em frente ao número 826 e oposto ao Conselho Tutelar",
                    "field8": "15"
                },

                {
                    key: "20",
                    codigo: "20",
                    nome: "20 - Palmares",
                    latitude: -8.0534341,
                    longitude: -34.882595,
                    localizacao: "Rua Gervásio Pires",
                    capacidadebikes: "oposto ao número 1075",
                    "field8": "15"
                }
            ]
        }
        // this.modalLocomocaoVisible = true;
    }

    setmodalLocomocaoVisible(flag) {
        this.modalLocomocaoVisible = flag;
    }
    componentDidUpdate(prevProps, prevState) {
        const { latitude: newLat } = this.state.region;
        const { longitude: newLon } = this.state.region;
        const { latitude: oldLat } = prevState.region;
        const { longitude: oldLon } = prevState.region;
        if (oldLat !== newLat || oldLon !== newLon) {
            // this._animateCamera();
        }
    }

    // _animateCamera() {
    //     this.map.animateCamera(
    //         {
    //             center: this.state.currentRegion, // should be { latitude, longitude }
    //             pitch: 10,
    //         },
    //         { duration: 750 }
    //     );
    // };

    componentWillUnmount() {
        this.map = null;
        navigator.geolocation = require('@react-native-community/geolocation')
        Geolocation.getCurrentPosition(position => {

            var region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            this.setState({

                region: region,
                error: null
            })
        }, error => { this.setState({ error: error.message }) }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 })
    }
    componentDidMount() {
        navigator.geolocation = require('@react-native-community/geolocation')
        Geolocation.getCurrentPosition(position => {

            var region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            this.setState({

                region: region,
                error: null
            })
        }, error => { this.setState({ error: error.message }) }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 })
    }

    handleLocationSelected = (data, details) => {
        // const { location: { lat: latitude, lng: longitude } } = geometry;
        // console.log("AQUI");
        // console.log(details);
        this.setState({
            destination: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                title: "nome"
            }
        })
    }
    onChecked(key, value) {
        const data = this.state.data;
        const index = data.findIndex(x => x.key === key);
        data[index].checked = value;
        this.setState(data);
        // console.log(data);
    }

    render() {


        return (
            <>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalLocomocaoVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setmodalLocomocaoVisible(!this.state.modalLocomocaoVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalLocomocaoView}>
                            <Text style={styles.modalText}>Como você vai se deslocar hoje?</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ modalLocomocaoVisible: false, aPe: true })} >
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#F78B50', '#F78B50']} style={styles.gradient} >
                                    <Text style={styles.loginText}> A PÉ </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>A pé</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ modalLocomocaoVisible: false, bike: true })}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#F78B50', '#F78B50']} style={styles.gradient} >
                                    <Text style={styles.loginText}> BICICLETA </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>Bicicleta</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ modalLocomocaoVisible: false, moto: true })}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#F78B50', '#F78B50']} style={styles.gradient} >
                                    <Text style={styles.loginText}> MOTOCICLETA </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>Moto</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ modalLocomocaoVisible: false, carro: true })}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#F78B50', '#F78B50']} style={styles.gradient} >
                                    <Text style={styles.loginText}> CARRO </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>Carro</Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* MODAL DE CHECKLIST PEDESTRE */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalCheckPedestreVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setmodalLocomocaoVisible(!this.state.modalCheckPedestreVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Está lembrando de tudo?</Text>
                            <FlatList
                                data={this.state.data}
                                renderItem={({ item }) =>
                                    <View style={{
                                        borderBottomWidth: 2,
                                        borderColor: "#ddd",
                                        width: '100%',
                                        alignItems: 'flex-start',
                                        flexDirection: 'row',
                                    }}>
                                        <CheckBox
                                            value={item.checked}
                                            lineWidth={2}
                                            hideBox={false}
                                            boxType={'circle'}
                                            tintColors={{ true: '#F78B50' }}
                                            onValueChange={(value) => {
                                                this.onChecked(item.key, value);
                                            }} />
                                        <Text style={{
                                            padding: 10,
                                            paddingHorizontal: 60,
                                            fontSize: 18,
                                            height: 44,
                                        }}>{item.key}</Text>
                                    </View>
                                } />

                            <TouchableOpacity
                                onPress={() => this.setState({ modalCheckPedestreVisible: false })}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#8270E6', '#8270E6']} style={styles.gradient} >
                                    <Text style={styles.loginText}> CONTINUAR </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>Carro</Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* MODAL DE REPORT */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalReportVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setmodalLocomocaoVisible(!this.state.modalLocomocaoVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Quer sinalizar algum ocorrido?</Text>
                            <View style={{ height: 150 }}>
                                <DropdownMenu
                                    style={{ flex: 1 }}
                                    bgColor={'white'}
                                    tintColor={'#8270E6'}
                                    activityTintColor={'orange'}
                                    useNativeDriver={false}
                                    // arrowImg={}      
                                    // checkImage={}   
                                    // optionTextStyle={{color: '#333333'}}
                                    // titleStyle={{color: '#333333'}} 
                                    // maxHeight={300} 
                                    handler={(selection, row) => this.setState({ tipoSelecionado: this.state.TiposSinalizacao[selection][row] })}
                                    data={this.state.TiposSinalizacao}>

                                    <View style={{ height: '100%' }}>

                                        {this.state.tipoSelecionado == "Infraestrutura" && (<View style={{
                                            // borderBottomWidth: 2,
                                            // borderColor: "#ddd",
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            flexDirection: 'row',
                                        }}>
                                            <RadioForm
                                                radio_props={this.state.opcoesInfra}
                                                initial={0}
                                                selectedButtonColor={'#F78B50'}
                                                buttonColor={'#F78B50'}
                                                onPress={(value) => { this.setState({ opcoesInfraSelecionada: value, opcoesTempoRealSelecionada: null }) }}
                                            />
                                        </View>)}
                                        {this.state.tipoSelecionado == "Tempo Real" && (<View style={{
                                            // borderBottomWidth: 2,
                                            // borderColor: "#ddd",
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            flexDirection: 'row',
                                        }}>
                                            <RadioForm
                                                radio_props={this.state.opcoesTempoReal}
                                                initial={0}
                                                selectedButtonColor={'#F78B50'}
                                                buttonColor={'#F78B50'}
                                                onPress={(value) => { this.setState({ opcoesTempoRealSelecionada: value, opcoesInfraSelecionada: null }) }}
                                            />
                                        </View>)}

                                    </View>

                                </DropdownMenu>

                            </View>
                            <TouchableOpacity
                                onPress={() => this.setState({ modalReportVisible: false })}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                                } colors={['#8270E6', '#8270E6']} style={styles.gradient} >
                                    <Text style={styles.loginText}> CONTINUAR </Text>
                                </LinearGradient>
                                {/* <Text style={styles.textStyle}>Carro</Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <MapView style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    // ref={elem => this.mapview = elem}
                    region={{
                        latitude: -8.0644413,
                        longitude: -34.88033,
                        latitudeDelta: 0.012,
                        longitudeDelta: 0.015
                    }
                    }
                >
                    {/* <FlatList
                        data={this.state.bicicletarios}
                        renderItem={({ item }) =>
                            <Marker coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                                image={require('../../assets/IconBike.png')}
                            // title={item.nome}
                            // description={item.localizacao}
                            />
                        }
                    /> */}

                    <Marker coordinate={{ latitude: this.state.bicicletarios[0].latitude, longitude: this.state.bicicletarios[0].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[0].nome}
                        description={this.state.bicicletarios[0].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[1].latitude, longitude: this.state.bicicletarios[1].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[1].nome}
                        description={this.state.bicicletarios[1].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[2].latitude, longitude: this.state.bicicletarios[2].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[2].nome}
                        description={this.state.bicicletarios[2].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[3].latitude, longitude: this.state.bicicletarios[3].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[3].nome}
                        description={this.state.bicicletarios[3].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[4].latitude, longitude: this.state.bicicletarios[4].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[4].nome}
                        description={this.state.bicicletarios[4].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[5].latitude, longitude: this.state.bicicletarios[5].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[5].nome}
                        description={this.state.bicicletarios[5].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[6].latitude, longitude: this.state.bicicletarios[6].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[6].nome}
                        description={this.state.bicicletarios[6].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[7].latitude, longitude: this.state.bicicletarios[7].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[7].nome}
                        description={this.state.bicicletarios[7].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[8].latitude, longitude: this.state.bicicletarios[8].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[8].nome}
                        description={this.state.bicicletarios[8].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[9].latitude, longitude: this.state.bicicletarios[9].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[9].nome}
                        description={this.state.bicicletarios[9].localizacao} />
                    <Marker coordinate={{ latitude: this.state.bicicletarios[10].latitude, longitude: this.state.bicicletarios[10].longitude }}
                        image={require('../../assets/IconBike.png')}
                        title={this.state.bicicletarios[10].nome}
                        description={this.state.bicicletarios[10].localizacao} />

                    {this.state.destination && (<Direcoes origin={this.state.region} destination={this.state.destination}
                        onReady={() => {
                            // console.log(result);
                            // this.mapView.fitToCoordinates(this.state.region);
                        }} />)}

                </MapView>
                {!this.state.noTrajeto && (<Busca onLocationSelected={this.handleLocationSelected} />)}

                { this.state.destination && !this.state.noTrajeto && (
                    <View style={{
                        position: 'absolute',
                        bottom: Platform.select({ ios: 40, android: 40 }),
                        width: '100%',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#F78B50',
                            elevation: 5,
                            shadowColor: "#000",
                            borderRadius: 50,
                            padding: 20,
                            paddingVertical: 20
                        }}>
                            <Text style={{
                                color: "white",
                                fontSize: 18

                            }}
                                onPress={() => {
                                    this.setState({ noTrajeto: true });
                                    if (this.state.aPe) {
                                        this.setState({ modalCheckPedestreVisible: true });
                                    } else if (this.state.bike) {
                                        this.setState({ modalCheckCiclistaVisible: true });
                                    } else if (this.state.moto) {
                                        this.setState({ modalCheckMotociclistaVisible: true });
                                    }
                                    console.log(this.state);
                                }}>Iniciar Trajeto</Text>
                        </TouchableOpacity>

                    </View>
                )}
                { this.state.noTrajeto && (
                    <>

                        {/* <View style={{
                            position: 'absolute',
                            bottom: Platform.select({ ios: 0, android: 0 }),
                            width: '100%',
                            alignItems: 'center',
                            backgroundColor: '#8270E6'
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#8270E6',
                                elevation: 5,
                                shadowColor: "#000",
                                borderRadius: 50,
                                padding: 20,
                                paddingVertical: 20
                            }}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 18

                                }}
                                    onPress={() => {
                                        this.setState({ modalReportVisible: true });

                                    }}>Sinalizar Algo</Text>
                            </TouchableOpacity>

                        </View> */}
                        <View style={{
                            // position: 'absolute',
                            height: 54,
                            bottom: Platform.select({ ios: 40, android: 0 }),
                            // right: Platform.select({ ios: 40, android: 40 }),
                            width: '100%',
                            alignItems: 'center',
                            backgroundColor: '#8270E6'
                        }}>
                            <View style={{
                                // position: 'absolute',
                                // height: 54,
                                // bottom: Platform.select({ ios: 40, android: 40 }),
                                right: Platform.select({ ios: 40, android: 40 }),
                                width: '100%',
                                alignItems: 'flex-end',

                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#8270E6',
                                    // elevation: 5,
                                    shadowColor: "#000",
                                    borderRadius: 50,
                                    padding: 10,
                                    paddingVertical: 10
                                }}>
                                    <Text style={{
                                        color: "white",
                                        fontSize: 18

                                    }}
                                        onPress={() => {
                                            this.setState({ noTrajeto: false, modalReportVisible: true, destination: null });

                                        }}>Finalizar Rota</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{
                                position: 'absolute',
                                // bottom: Platform.select({ ios: 40, android: 40 }),
                                left: Platform.select({ ios: 40, android: 40 }),
                                width: '100%',
                                alignItems: 'flex-start'
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#8270E6',
                                    // elevation: 5,
                                    shadowColor: "#000",
                                    borderRadius: 50,
                                    padding: 10,
                                    paddingVertical: 10
                                }}>
                                    <Text style={{
                                        color: "white",
                                        fontSize: 18

                                    }}
                                        onPress={() => {
                                            this.setState({ noTrajeto: false, destination: null });

                                        }}>Cancelar Rota</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </>
                )}

            </>
        );
    }
};
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
    modalLocomocaoView: {
        position: 'absolute',
        bottom: 0,
        margin: 0,
        width: '100%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -100
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 10
    },
    modalView: {
        margin: 20,
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -100
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 10
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
        fontWeight: 'bold',
        textAlign: "center",
        color: '#8270E6'
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
        flex: 2,
        marginTop: 0,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('window').width
    }
});

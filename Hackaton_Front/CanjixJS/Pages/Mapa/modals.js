const ModalLocomocao = ({ visibilidade, origin, onReady }) => (

    const { onLocationSelected } = this.props;
<Modal
    animationType="slide"
    transparent={true}
    visible={visibilidade}
    onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        this.setmodalLocomocaoVisible(!this.state.modalLocomocaoVisible);
    }}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Como você vai se deslocar hoje?</Text>
            <TouchableOpacity
                onPress={() => this.setState({ modalLocomocaoVisible: false })} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                } colors={['#f7c968', '#ffa717']} style={styles.gradient} >
                    <Text style={styles.loginText}> A PÉ </Text>
                </LinearGradient>
                {/* <Text style={styles.textStyle}>A pé</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({ modalLocomocaoVisible: false })}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                } colors={['#f7c968', '#ffa717']} style={styles.gradient} >
                    <Text style={styles.loginText}> BICICLETA </Text>
                </LinearGradient>
                {/* <Text style={styles.textStyle}>Bicicleta</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({ modalLocomocaoVisible: false })}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                } colors={['#f7c968', '#ffa717']} style={styles.gradient} >
                    <Text style={styles.loginText}> MOTOCICLETA </Text>
                </LinearGradient>
                {/* <Text style={styles.textStyle}>Moto</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.setState({ modalLocomocaoVisible: false })}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
                } colors={['#f7c968', '#ffa717']} style={styles.gradient} >
                    <Text style={styles.loginText}> CARRO </Text>
                </LinearGradient>
                {/* <Text style={styles.textStyle}>Carro</Text> */}
            </TouchableOpacity>
        </View>
    </View>
</Modal>
)};
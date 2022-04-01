import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    Image,
    Alert,
    Pressable
} from 'react-native';

const HomeScreen = ({navigation, route}) => {

    const handleAlert = () => {
        Alert.alert(
            "Sucesso",
            "Simples Alert.",
            [
                { text: "OK", onPress: () => console.log("OK PRESSED!") }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={ require('../../assets/app_bg.png') } style={styles.imageBackground} >
                <Image 
                    source={ require('../../assets/app_trophy.png') }
                    style={ styles.imageTrophy }
                />
                <Text style={[styles.text, styles.textTitle]} >Home Screen</Text>
                <Text style={styles.text} >Seja bem vindo, { route.params.username }</Text>
                <Button title='Sair' onPress={() => navigation.replace('Login')} />

                <Pressable style={styles.button} onPress={handleAlert}>
                    <Text style={styles.buttonText}>Alert</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={handleAlert}>
                    <Text style={styles.buttonText}>TextInput e States</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Exemplo01')}>
                    <Text style={styles.buttonText}>Tela Exemplo 01</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    imageTrophy: {
        width: 90,
        height: 90,
        margin: 16,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#ee125a',
        marginTop: 8,
        width: '100%'
    },
    buttonText: {
        color: 'white'
    }
});

export default HomeScreen;
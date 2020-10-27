import React, { useState } from 'react'
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../../images/01.jpg';

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: "50%",
        padding: 5,
        marginTop: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 4
    },
    btnStyle: {
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        width: 150,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#009688',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Login = props => {
    const [authState, setAuthState] = useState({
        mode: 'login',
        inputs: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    });
    const switchViews = () => {
        setAuthState({
            ...authState,
            mode: authState.mode === 'login' ? 'signup' : 'login'
        })
    }
    let confirmPassField = null;
    if (authState.mode === 'signup') {
        confirmPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                value={authState?.inputs?.confirmPassword}
            />
        )
    }
    return (
        <ImageBackground source={backgroundImage} style={{width:'100%',flex:1}} blurRadius={3}>
            <View style={styles.loginView}>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => switchViews()}
                >
                    <Text style={styles.btnStyle}>
                        {
                            authState.mode === 'login' ? "Switch to Signup" : "Switch to Login"
                        }
                    </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Your Email Address"
                    value={authState?.inputs?.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={authState?.inputs?.password}
                />
                {confirmPassField}
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnStyle}>
                        {
                            authState.mode === 'login' ? "Login" : "Sign Up"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
};

export default Login;

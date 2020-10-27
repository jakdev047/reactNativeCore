import React, { useState } from 'react'
import { Button, Text, View, TextInput, StyleSheet,TouchableOpacity } from 'react-native';

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
    return (
        <View style={styles.loginView}>
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
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                value={authState?.inputs?.confirmPassword}
            />
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnStyle}>
                    {
                        authState.mode === 'login' ? "Login" : "Sign Up"
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default Login;

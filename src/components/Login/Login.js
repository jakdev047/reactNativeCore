import React, { useEffect, useState } from 'react'
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import backgroundImage from '../../images/01.jpg';
import { tryAuth } from '../../redux/actions/auth';
import { useIsFocused } from '@react-navigation/native';

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
    const isFocused = useIsFocused();

    useEffect(()=>{
        setAuthState({
            ...authState,
            inputs: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        })
    },[isFocused])
    const switchViews = () => {
        setAuthState({
            ...authState,
            mode: authState.mode === 'login' ? 'signup' : 'login',
            inputs: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        })
    }
    const updateInputs = (value, name) => {
        setAuthState({
            ...authState,
            inputs: {
                ...authState.inputs,
                [name]: value
            }
        })
    }
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleAuth = () => {
        const email = authState.inputs.email;
        const password = authState.inputs.password;
        const confirmPassword = authState.inputs.confirmPassword;

        if (email !== "" && password !== "") {
            if (re.test(email)) {
                if (authState.mode === "login") {
                    props.tryAuth(email,password,'login')
                } else {
                    if (password === confirmPassword) {
                        props.tryAuth(email,password,'signup')
                    } else {
                        alert("Password fields doesn't Match!");
                    }
                }
            } else {
                alert("Invalid Email!");
            }
        } else {
            alert("Input all the fields!")
        }

    }
    let confirmPassField = null;
    if (authState.mode === 'signup') {
        confirmPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                value={authState?.inputs?.confirmPassword}
                onChangeText={value => updateInputs(value, 'confirmPassword')}
            />
        )
    }
    return (
        <ImageBackground source={backgroundImage} style={{ width: '100%', flex: 1 }} blurRadius={3}>
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
                    onChangeText={value => updateInputs(value, 'email')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={authState?.inputs?.password}
                    onChangeText={value => updateInputs(value, 'password')}
                />
                {confirmPassField}
                <TouchableOpacity style={styles.btnContainer} onPress={() => { handleAuth() }}>
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

const mapDispatchToProps = dispatch => {
    return {
        tryAuth: (email,password,mode) => dispatch(tryAuth(email,password,mode))
    }
};

const mapStateToProps = state => {
    return {
        isAuth: state.places.isAuth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

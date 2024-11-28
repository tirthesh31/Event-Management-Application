import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
      logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 30,
      },
      logo: {
        width: 420,
        height: 420,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
      },
      formContainer: {
        paddingHorizontal: 30,
        flex:1,
        position:'absolute',
        top:360,
        width:'100%',     
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      },
      passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
      },
      showPasswordButton: {
        paddingRight: 15,
      },
      showPasswordText: {
        color: '#007BFF',
      },
      loginButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
      },
      loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      forgotPasswordText: {
        color: '#007BFF',
        textAlign: 'center',
        marginBottom: 20,
      },
      signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      signupText: {
        color: '#666',
      },
      signupLinkText: {
        color: '#007BFF',
        fontWeight: 'bold',
      },
});

export default styles
import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      logoContainer: {
        alignItems: 'center',
        justifyContent: 'Center',
        position:'absolute',
        top:450,
        width:"100%"
      },
      logo: {
        width: 700,
        height: 600,
      },
      keyboardContainer: {
        flex: 1,
      },
      content: {
        flex: 1,
        marginTop:50,
        paddingHorizontal: 24,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
        textAlign: 'center',
      },
      inputContainer: {
        marginBottom: 16,
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
      },
      visibilityToggle: {
        position: 'absolute',
        right: 12,
        top: 12,
      },
      visibilityText: {
        color: '#666',
      },
      signUpButton: {
        backgroundColor: '#4169E1', // Royal Blue
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
      signUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
      },
      loginText: {
        color: '#666',
      },
      loginLink: {
        color: '#4169E1',
        fontWeight: 'bold',
      },
});

export default styles
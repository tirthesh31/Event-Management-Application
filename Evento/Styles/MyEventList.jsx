import React from 'react'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4169E1',
        paddingVertical: 25,
        paddingHorizontal: 20,
      },
      headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:15
      },
      scrollContainer: {
        padding: 20,
      },
      imagePicker: {
        alignItems: 'center',
        marginBottom: 20,
      },
      imagePreview: {
        width: '100%',
        height: 200,
        borderRadius: 10,
      },
      imagePlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#e1e4e8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      imagePickerText: {
        marginTop: 10,
        color: '#4169E1',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      inputIcon: {
        marginLeft: 15,
      },
      input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
      },
      multilineInput: {
        height: 100,
        textAlignVertical: 'top',
        paddingTop: 15,
      },
      datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      dateText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#333',
      },
      saveButton: {
        flexDirection: 'row',
        backgroundColor: '#4169E1',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
      },
})

export default styles;
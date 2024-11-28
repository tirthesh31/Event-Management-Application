import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
      logoutButton: {
        padding: 5,
        marginTop:15
      },
      listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 80,
      },
      card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
        overflow: 'hidden',
      },
      eventImage: {
        width: 100,
        height: 120,
        resizeMode: 'cover',
      },
      eventDetails: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-between',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
      },
      description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      },
      date: {
        fontSize: 12,
        color: '#888',
        alignItems: 'center',
      },
      actionButtons: {
        flexDirection: 'row',
        marginTop: 10,
      },
      editButton: {
        flexDirection: 'row',
        backgroundColor: '#4169E1',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
      },
      deleteButton: {
        flexDirection: 'row',
        backgroundColor: '#FF4500',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 14,
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
      emptyText: {
        fontSize: 18,
        color: '#666',
        marginTop: 15,
      },
      emptySubtext: {
        fontSize: 14,
        color: '#999',
      },
      addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4169E1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
      },
});

export default styles
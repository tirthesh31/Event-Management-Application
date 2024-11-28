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
      listContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
      },
      eventCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      eventImage: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      eventDetails: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
      },
      eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      eventDescription: {
        color: '#666',
        marginTop: 5,
      },
      eventDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      },
      eventDate: {
        color: '#4169E1',
        marginLeft: 5,
      },
      removeFavoriteButton: {
        flexDirection: 'row',
        backgroundColor: '#FF4500',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      removeFavoriteText: {
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold',
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
        marginTop: 16,
      },
      emptySubtext: {
        color: '#888',
        textAlign: 'center',
        marginTop: 8,
      },
})
export default styles
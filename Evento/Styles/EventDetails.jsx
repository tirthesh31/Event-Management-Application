import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'white',
        paddingTop:'40'
      },
      scrollContent: {
        paddingBottom: 20,
      },
      eventImage: {
        width: '100%', 
        height: 200, 
        resizeMode: 'cover',
      },
      eventTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        color: '#333',
      },
      detailsSection: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
      },
      detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      detailIcon: {
        marginRight: 10,
      },
      detailText: {
        fontSize: 16,
        color: '#666',
      },
      descriptionSection: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
      descriptionText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
      },
      organizerSection: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
      },
      organizerProfile: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      organizerAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
      },
      organizerName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      organizerEmail: {
        fontSize: 14,
        color: '#666',
      },
      registerButton: {
        backgroundColor: '#4169E1',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 16,
      },
      registerButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }
});

export default styles;
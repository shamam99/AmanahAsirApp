import { StyleSheet, Platform } from 'react-native';

export const postDetailStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: Platform.OS === 'ios' ? 70 : 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 20 : 60,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#ddd',
  },
  emptySpacer: {
    width: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 12,
    textAlign: 'right',
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    textAlign: 'right',
  },
});

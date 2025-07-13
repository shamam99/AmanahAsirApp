import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#ddd',
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  body: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
    marginTop: 6,
  },
  readMore: {
    marginTop: 8,
    fontSize: 13,
    color: '#6A4528',
    fontWeight: '500',
    textAlign: 'right',
  },
});

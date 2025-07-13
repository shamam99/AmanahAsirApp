import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingVertical: Platform.OS === 'ios' ? 12 : 2,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: Platform.OS === 'ios' ? 15 : 18,
    color: '#333',
  },
});

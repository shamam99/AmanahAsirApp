import { StyleSheet, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9F7F6',
  },
  container: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 60,
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'right',
    marginHorizontal: 16,
    marginBottom: 12,
    color: '#2E2E2E',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 6,
  },
});

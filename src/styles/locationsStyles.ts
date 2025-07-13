import { StyleSheet, Platform } from 'react-native';

export const locationsStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9F7F6',
  },
  container: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'right',
    marginBottom: 20,
    color: '#2E2E2E',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },
  markerIcon: {
    marginLeft: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
    flexShrink: 1,
  },
  mapButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },
  mapButtonText: {
    color: '#6A4528',
    fontWeight: '500',
    fontSize: 14,
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 40,
  },
});

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
  Alert,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { requestLocationPermission, getCurrentLocation } from '../services/locationService';
import { getLocations } from '../services/nearbyService';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/SearchBar';
import { locationsStyles as styles } from '../styles/locationsStyles';


const LocationsScreen = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [nearbyPlaces, setNearbyPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const initLocation = async () => {
      const granted = await requestLocationPermission();
      if (!granted) {
        Alert.alert('خطأ', 'يرجى تفعيل صلاحية الموقع');
        setLoading(false);
        return;
      }

      try {
        const coords = await getCurrentLocation();
        setLocation(coords);

        const locations = await getLocations();
        setNearbyPlaces(locations?.wakalat ?? []);
      } catch (err: any) {
        Alert.alert('خطأ', err?.message || 'فشل في تحديد الموقع');
      } finally {
        setLoading(false);
      }
    };

    initLocation();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>المواقع القريبة</Text>

        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
        {loading ? (
          <ActivityIndicator size="large" color="#6A4528" />
        ) : nearbyPlaces.length > 0 ? (
          nearbyPlaces
            .filter(place =>
              place.name?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((place, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.iconRow}>
                <FontAwesome name="map-marker" size={18} color="#6A4528" style={styles.markerIcon} />
                <Text style={styles.name}>{place.name ?? 'Unnamed'}</Text>
              </View>

              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => {
                  const url = Platform.select({
                    ios: `maps://?q=${place.name}&ll=${place.x},${place.y}`,
                    android: `geo:${place.x},${place.y}?q=${place.x},${place.y}(${place.name})`,
                  });

                  if (url) {
                    Linking.openURL(url).catch(() =>
                      Alert.alert('خطأ', 'تعذر فتح تطبيق الخرائط'),
                    );
                  }
                }}
              >
                <FontAwesome name="map" size={16} color="#6A4528" />
                <Text style={styles.mapButtonText}>عرض على الخريطة</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noData}>لا توجد بيانات حالياً</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationsScreen;


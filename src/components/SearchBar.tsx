import React from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/searchBarStyles';


interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={16} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'ابحث عن جهة...'}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        textAlign="right"
      />
    </View>
  );
};

export default SearchBar;


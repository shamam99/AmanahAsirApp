import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { PostStackParamList } from '../navigation/PostStack';
import { decode } from 'he';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { postDetailStyles as styles } from '../styles/postDetailStyles';

type PostDetailScreenRouteProp = RouteProp<PostStackParamList, 'PostDetailScreen'>;

const PostDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<PostDetailScreenRouteProp>();
  const { post } = route.params;

  const cleanBody = decode(post.body.replace(/<[^>]*>/g, '') || '');

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>الأخبار</Text>
        <View style={styles.emptySpacer} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.container}>
      {post.imageUrl && (
        <Image
          source={{
            uri: `https://images.weserv.nl/?url=${encodeURIComponent(
              post.imageUrl.replace(/^https?:\/\//, '').replace(/\\/g, '/')
            )}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
        <Text style={styles.title}>{post.title?.toString()}</Text>
        {!!cleanBody && <Text style={styles.body}>{cleanBody}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetailScreen;

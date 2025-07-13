import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getPosts } from '../services/postService';
import { Post } from '../types/Post';
import PostCard from '../components/PostCard';
import { postsStyles as styles } from '../styles/postsStyles';

const PostsScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handlePress = (post: Post) => {
    navigation.navigate('PostDetailScreen', { post });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>كل الأخبار</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#6A4528" />
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} onPress={() => handlePress(post)} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsScreen;


import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../types/Post';
import { getPosts } from '../services/postService';
import PostCard from '../components/PostCard';
import { homeStyles as styles } from '../styles/homeStyles';


const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data.slice(0, 3));
      setLoading(false);
    };
    fetchPosts();
  }, []);


  const handlePress = (post: Post) => {
    navigation.navigate('Posts', {
      screen: 'PostDetailScreen',
      params: { post },
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>أحدث الأخبار</Text>
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

export default HomeScreen;


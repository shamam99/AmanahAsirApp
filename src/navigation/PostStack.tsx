import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from '../screens/PostsScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import { Post } from '../types/Post';

export type PostStackParamList = {
  PostsScreen: undefined;
  PostDetailScreen: { post: Post };
};

const Stack = createNativeStackNavigator<PostStackParamList>();

const PostStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default PostStack;

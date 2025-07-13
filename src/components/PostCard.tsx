import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Post } from '../types/Post';
import { decode } from 'he';
import styles from '../styles/postCardStyles';



interface Props {
  post: Post;
  onPress?: () => void;
}

const PostCard: React.FC<Props> = ({ post, onPress }) => {
  const plainBody = decode(post.body.replace(/<[^>]*>/g, '') || '');

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
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
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {post.title?.toString()}
        </Text>
        {!!plainBody && (
          <Text numberOfLines={2} style={styles.body}>
            {plainBody}
          </Text>
        )}
        <Text style={styles.readMore}>قراءة المزيد</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;


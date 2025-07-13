import axios from 'axios';
import Config from 'react-native-config';
import { Base64 } from 'js-base64';

const BASE_URL = 'https://twk.amanutasir.net/api/PortalAPI';

export const getPosts = async () => {
  try {
    const username = Config.API_USERNAME;
    const password = Config.API_PASSWORD;

    console.log('USERNAME:', username); // debug
    console.log('PASSWORD:', password); // debug
    
    const token = Base64.encode(`${username}:${password}`); 

    const { data } = await axios.get(`${BASE_URL}/Posts?Lang=ar`, {
      headers: { Authorization: `Basic ${token}` },
    });
    return data?.resultData ?? [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

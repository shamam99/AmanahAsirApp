import axios from 'axios';
import Config from 'react-native-config';
import { Base64 } from 'js-base64';

const BASE_URL = 'https://twk.amanutasir.net/api/PortalAPI';

export const getLocations = async () => {
  try {
    const username = Config.API_USERNAME;
    const password = Config.API_PASSWORD;
    const token = Base64.encode(`${username}:${password}`);

    const { data } = await axios.get(`${BASE_URL}/OurLocations`, {
      params: { lang: 'ar' },
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    return data?.resultData ?? {};
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

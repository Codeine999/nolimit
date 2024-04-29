import { http } from "../../utils/local";

export const readNews = async () => {
    try {
      return await http.get('/wp-json/wp/v2/posts?categories=2');

    } catch (error) {
      console.log('api error', error);
      throw error;
    }
  }

  export const readLag = async () => {
    try {
      return await http.get('http://localhost:500/api/text');

    } catch (error) {
      console.log('api error', error);
      throw error;
    }
  }
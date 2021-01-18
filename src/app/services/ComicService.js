import axios from 'axios';

// import BaseServices from './BaseServices';
// extends BaseServices
class ComicService {
  constructor() {
    // super();
    this.limit = '100';
  }

  async getComic() {
    const url = `https://gateway.marvel.com/v1/public/${id}characters?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113&limit=100`;
    const response = await axios.get(url);

    return {
      data:
        response.data.data.results.length > 0
          ? response.data.data.results[0]
          : null,
    };
  }
}

export default new ComicService();

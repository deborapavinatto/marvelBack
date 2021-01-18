import axios from 'axios';

// import BaseServices from './BaseServices';
// extends BaseServices
class CharacterService {
  constructor() {
    // super();
    this.limit = '100';
  }

  async getCharacters(page, title) {
    // const offset = (page - 1) * this.limit;
    let url =
      'https://gateway.marvel.com/v1/public/characters?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113&limit=100';

    if (title !== undefined) {
      url += `&nameStartsWith=${title}`;
    }

    const response = await axios.get(url);

    return {
      current_page: page,
      total_page: Math.ceil(response.data.data.total / this.limit),
      data: response.data.data.results,
    };
  }

  async getCharacter() {
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

export default new CharacterService();

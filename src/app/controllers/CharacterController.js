import CharacterService from '../services/CharacterService';

class CharacterController {
  async index(req, res) {
    const { page, title } = req.query;
    const data = await CharacterService.getCharacters(page ?? 1, title);
    return res.json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    const data = await CharacterService.getCharacter(id);

    return res.json(data);
  }
}

export default new CharacterController();

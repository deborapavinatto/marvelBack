import ComicService from '../services/ComicService';

class ComicController {
  async show(req, res) {
    const { id } = req.params;
    const data = await ComicService.getComic(id);

    return res.json(data);
  }
}

export default new ComicController();

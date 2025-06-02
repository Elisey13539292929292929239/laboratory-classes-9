const Author = require('../models/Author');

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении авторов.' });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при создании автора.' });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!author) {
      return res.status(404).json({ error: 'Автор не найден.' });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при обновлении автора.' });
  }
};


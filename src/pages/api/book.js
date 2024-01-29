// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Book } from "../../database/models";
async function getAll() {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    return error.message;
  }
}

async function getById(id) {
  try {
    const books = await Book.findByPk(id);
    return books;
  } catch (error) {
    return error.message;
  }
}

async function create(data) {
  const { name, publisher, years } = data;
  try {
    const book = await Book.create({
      name,
      publisher,
      years,
    });
    return book;
  } catch (error) {
    return error.message;
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.id) {
      const book = await getById(req.query.id);
      res.status(200).json(book);
    }
    const books = await getAll();
    res.status(200).json(books);
  } else if (req.method === "POST") {
    const data = await create(req.body);
    res.status(201).json(data);
  }
}

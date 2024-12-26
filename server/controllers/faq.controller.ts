import { Request, Response } from "express";
import { createConnection } from "../db/database";

export const getFaq = async (req: Request, res: Response) => {
  let conn;

  const language = (req.query.lan as string) || "Ge";

  try {
    conn = await createConnection();

    const query = `SELECT f.faq_id, f.question, f.answer
    FROM faq f
    JOIN languages l ON f.language_id = l.language_id
    WHERE l.language = ?`;

    const faq = await conn.query(query, language);

    if (faq.length == 0) {
      res
        .status(404)
        .send({ message: "frequently asked question&answer  not found" });
    }

    res.status(200).send(faq);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.release();
  }
};

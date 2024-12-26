import { Request, Response } from "express";
import { createConnection } from "../db/database";

export const getBenefits = async (req: Request, res: Response) => {
  let conn;
  const language = (req.query.lan as string) || "Ge";

  try {
    conn = await createConnection();
    const query = `SELECT b.benefit_id, b.benefit
      FROM benefits b
      JOIN languages l ON b.language_id = l.language_id
      WHERE l.language = ?`;

    const benefits = await conn.query(query, language);

    if (benefits.length == 0) {
      res.status(404).send({ message: "benefits not found" });
    }

    res.status(200).send(benefits);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.release();
  }
};

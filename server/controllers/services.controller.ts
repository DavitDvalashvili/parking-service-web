import { query, Request, Response } from "express";
import { createConnection } from "../db/database";

const getServices = async (req: Request, res: Response) => {
  let conn;
  let language = (req.query.lan as string) || "Ge";

  try {
    conn = await createConnection();
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.release();
  }
};

import { Router } from "express";
import { getFaq } from "../controllers/faq.controller";

const FaqRouter = Router();

FaqRouter.get("/faq", getFaq);

export default FaqRouter;

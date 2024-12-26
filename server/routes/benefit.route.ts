import { Router } from "express";
import { getBenefits } from "../controllers/benefits.controller";

const BenefitRouter = Router();

BenefitRouter.get("/benefits", getBenefits);

export default BenefitRouter;

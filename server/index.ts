import express from "express";
import BenefitRouter from "./routes/benefit.route";
import FaqRouter from "./routes/faq.route";

const { PORT } = process.env;
const app = express();

app.use(BenefitRouter);
app.use(FaqRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

import express from "express";

import answerSheetJSON from "../quiz/answerSheet.json";
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send(answerSheetJSON));
app.listen(port, () => console.log(`initiating on port ${port} 👁️ ...`));

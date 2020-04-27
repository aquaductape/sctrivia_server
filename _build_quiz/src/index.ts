import fs from "fs";
import util from "util";
import rimraf from "rimraf";

import { questionsLotv } from "./quiz/legacyOfTheVoid";
import { JSON_Parse_Stringify } from "./utils/jsonParseStringify";
import { emptyAnswerSheet } from "./utils/emptyAnswerSheet";

const quizFileName = "answerKey.ts";
const quizPath = `./src/quiz/`;
// prettier-ignore
const quizFileContent =
`import { Question } from "../ts/models/quiz";

const answerKey: Question[] = ${util.inspect(questionsLotv, {
  showHidden: false,
  depth: null,
})};
export default answerKey;
`;

const answerSheetFileName = "answerSheet.json";
// deep copy, horrible i know
const answerSheet = JSON_Parse_Stringify(questionsLotv);

emptyAnswerSheet(answerSheet);

// clean directory by removal
rimraf.sync("./src/quiz");
fs.mkdirSync("./src/quiz");

fs.appendFile(
  quizPath + answerSheetFileName,
  JSON.stringify(answerSheet),
  (err) => {
    if (err) console.log(err);
  }
);
fs.appendFile(quizPath + quizFileName, quizFileContent, (err) => {
  if (err) console.log(err);
});

import { Question } from "../models/quiz";
import { emptyProperties } from "./loopingObjects";
import { shuffleSortList } from "./shuffleSortList";

export const emptyAnswerSheet = (answerSheet: Question[]) => {
  for (let item of answerSheet) {
    emptyCurrentItem(item);
  }
};

const emptyCurrentItem = (question: Question) => {
  switch (question.type) {
    case "multiplexCardUnit":
      return emptyProperties(question.answers, [
        "type",
        "parent",
        "description",
      ]);
    case "multipleChoice":
      return emptyProperties(question.choices, ["content"]);
    case "techTree":
      return emptyProperties(question.answers, ["building"]);
    case "trueOrFalse":
      question.answer = false;
      return;
    case "sorting":
      question.bank = shuffleSortList({
        target: question.bank,
        blackList: question.answer,
      });
      question.answer = [];
      return;
  }
};

import { areListsSame } from "./areListsSame";

export const compareAndScoreMultiplexCard = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any },
  score: { current: number; total: number },
  ignore?: string[]
) => {
  for (let key in obj1) {
    if (ignore && ignore.includes(key)) continue;

    const value1 = obj1[key];
    const value2 = obj2[key];

    if (Array.isArray(value1)) {
      if (!isObject(value1[0])) {
        if (areListsSame(value1, value2)) {
          score.current += 1;
          score.total += 1;
        } else {
          score.total += 1;
        }
      } else {
        for (let i = 0; i < value1.length; i++) {
          const item1 = value1[i];
          const item2 = value2[i];
          compareAndScoreMultiplexCard(item1, item2, score, ignore);
        }
      }
      continue;
    }

    if (isObject(value1)) {
      compareAndScoreMultiplexCard(obj1, obj2, score);
      continue;
    }

    debugger;
    if (value1 === value2) {
      score.current += 1;
      score.total += 1;
    } else {
      score.total += 1;
    }
  }
};
export const emptyProperties = (
  question: { [key: string]: any },
  ignore: string[]
) => {
  for (let key in question) {
    const value = question[key];
    if (ignore.includes(key)) {
      continue;
    }

    if (Array.isArray(value)) {
      if (!isObject(value[0])) {
        question[key] = [];
        continue;
      }
      for (let item of value) {
        emptyProperties(item, ignore);
      }
    }
    if (typeof value === "string") {
      question[key] = "";
      continue;
    }
    if (typeof value === "number") {
      question[key] = 0;
      continue;
    }
    if (typeof value === "boolean") {
      question[key] = false;
    }

    if (isObject(value)) {
      emptyProperties(value, ignore);
    }
  }
};
const isObject = (a: any) => {
  return !!a && a.constructor === Object;
};

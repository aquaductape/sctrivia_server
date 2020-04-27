export const areListsSame = (list1: any[], list2: any[]) => {
  if (list1.length !== list2.length) return false;
  return list1.every((item, idx) => list2.includes(item));
};

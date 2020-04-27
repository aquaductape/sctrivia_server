export const shuffleSortList = <T>({
  target,
  blackList,
}: {
  target: T[];
  blackList: any[];
}): T[] => {
  let clone = [...target];
  let result: any[] = [];

  function run(arr: any[]): any[] {
    if (!arr.length) return result;
    const genNum = Math.floor(Math.random() * arr.length);
    const item = arr.splice(genNum, 1)[0];
    result.push(item);

    return run(arr);
  }

  run(clone);

  while (
    result.every((item, idx) => {
      if (item.icon && item.icon === blackList[idx]) {
        return true;
      }
      if (item.content && item.content === blackList[idx]) {
        return true;
      }
      return false;
    })
  ) {
    result = [];
    clone = [...target];
    run(clone);
  }

  return result;
};

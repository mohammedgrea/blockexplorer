export const substring = (str: string) => {
  let subStr = str.length > 16 ? str.substring(0, 16) + "..." : str;
  return subStr;
};

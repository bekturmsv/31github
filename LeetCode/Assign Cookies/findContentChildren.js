const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let contentChildren = 0;

  for (let greed of g) {
    while (s.length > 0 && s[0] < greed) {
      s.shift();
    }

    if (s.length > 0) {
      contentChildren++;
      s.shift();
    }
  }

  return contentChildren;
};

const greedFactors = [1, 2, 3];
const cookieSizes = [1, 1, 2];

const maxContentChildren = findContentChildren(greedFactors, cookieSizes);
console.log("Maximum number of content children:", maxContentChildren);

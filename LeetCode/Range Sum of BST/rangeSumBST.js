class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const rangeSumBST = (root, low, high) => {
  if (!root) {
    return 0;
  }

  let sum = 0;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }

  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }

  return sum;
};

let root = [10, 5, 15, 3, 7, null, 18],
  low = 7,
  high = 15;

console.log(rangeSumBST(root, low, high));

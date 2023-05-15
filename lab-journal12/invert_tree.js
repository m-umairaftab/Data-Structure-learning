class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  function invertTree(root) {
    if (root === null) {
      return null
    }
  
    // Swap the left and right subtrees
    const temp = root.left
    root.left = root.right
    root.right = temp
  
    // Recursively invert the left and right subtrees
    invertTree(root.left)
    invertTree(root.right)
  
    return root
  }
  
  const root = new TreeNode(4)
  root.left = new TreeNode(2)
  root.right = new TreeNode(7)
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(3)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(9)
  
  const invertedRoot = invertTree(root)
  console.log(invertedRoot)
  
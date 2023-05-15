class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  function isSameTree(p, q) {
    if (p === null && q === null) {
      return true
    }
  
    if (p === null || q === null) {
      return false
    }
  
    if (p.val !== q.val) {
      return false
    }
  
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  
  const p = new TreeNode(1)
  p.left = new TreeNode(2)
  p.right = new TreeNode(3)
  
  const q = new TreeNode(1)
  q.left = new TreeNode(2)
//   q.right = new TreeNode(3)
  
  const result = isSameTree(p, q)
  console.log(result) 
  
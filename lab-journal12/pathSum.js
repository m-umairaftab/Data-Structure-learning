class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  function maxPathSum(root) {
    let maxSum = -Infinity
    function dfs(node) {
      if (node === null) {
        return 0
      }
      const leftSum = Math.max(0, dfs(node.left))
      const rightSum = Math.max(0, dfs(node.right))
  
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum)
  
      return node.val + Math.max(leftSum, rightSum)
    }
  
    dfs(root)
  
    return maxSum
  }
  
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  
  const maxSum = maxPathSum(root)
  console.log(maxSum)
  
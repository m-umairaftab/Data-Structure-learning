class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  function levelOrder(root) {
    if (!root) {
      return []
    }
  
    const result = []
    const queue = [root]
  
    while (queue.length > 0) {
      const levelSize = queue.length
      const currentLevel = []
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift()
        currentLevel.push(currentNode.val)
  
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
  
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
  
      result.push(currentLevel)
    }
  
    return result
  }
  const root = new TreeNode(3)
  root.left = new TreeNode(9)
  root.right = new TreeNode(20)
  root.right.left = new TreeNode(15)
  root.right.right = new TreeNode(7)
  
  const traversal = levelOrder(root)
  console.log(traversal)
  
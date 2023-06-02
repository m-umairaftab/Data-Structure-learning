class TreeNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  function serialize(root) {
    if (!root) {
      return 'null'
    }
  
    const leftSerialized = serialize(root.left)
    const rightSerialized = serialize(root.right)
  
    return `${root.val},${leftSerialized},${rightSerialized}`
  }
  
  
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.right.left = new TreeNode(4)
  root.right.right = new TreeNode(5)
  
  const serialized = serialize(root)
  console.log(serialized)
  
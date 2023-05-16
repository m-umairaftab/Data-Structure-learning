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
  
  function deserialize(data) {
    const values = data.split(',')
  
    function buildTree() {
      const val = values.shift()
  
      if (val === 'null') {
        return null
      }
  
      const node = new TreeNode(parseInt(val))
      node.left = buildTree()
      node.right = buildTree()
  
      return node
    }
  
    return buildTree()
  }
  
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.right.left = new TreeNode(4)
  root.right.right = new TreeNode(5)
  
  const serialized = serialize(root)
  console.log(serialized)
  
  const deserialized = deserialize(serialized)
  console.log(deserialized)
  
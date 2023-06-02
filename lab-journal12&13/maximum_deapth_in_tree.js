
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function maxDepth(root) {
    if (root === null) {
        return 0
    }

    const queue = [root]
    let depth = 0

    while (queue.length > 0) {
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (node.left !== null) {
                queue.push(node.left)
            }

            if (node.right !== null) {
                queue.push(node.right)
            }
        }

        depth++
    }

    return depth
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const depth = maxDepth(root)
console.log(depth)

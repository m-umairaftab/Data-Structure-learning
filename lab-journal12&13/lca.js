class TreeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function lowestCommonAncestor(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
}

// Example usage
// Creating the binary search tree
const node1 = new TreeNode(6)
const node2 = new TreeNode(2)
const node3 = new TreeNode(8)
const node4 = new TreeNode(0)
const node5 = new TreeNode(4)
const node6 = new TreeNode(7)
const node7 = new TreeNode(9)
const node8 = new TreeNode(3)
const node9 = new TreeNode(5)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node5.left = node8
node5.right = node9

// Finding the lowest common ancestor of nodes 2 and 8
const p = node9
const q = node8
const lca = lowestCommonAncestor(node1, p, q)

console.log("Lowest Common Ancestor:", lca.val) 

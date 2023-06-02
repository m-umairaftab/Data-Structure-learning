export{}
class Node {
    left: any;
    right: any;
    data: number;
  
    constructor(data: number) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
  
  class BST {
    root: any;
  
    constructor() {
      this.root = null;
    }
  
    isEmpty(): boolean {
      return this.root === null;
    }
  
    insert(data: number): void {
      const newNode = new Node(data);
  
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
        let current = this.root;
        let parent: Node;
  
        while (true) {
          parent = current;
  
          if (data < current.data) {
            current = current.left;
  
            if (current === null) {
              parent.left = newNode;
              break;
            }
          } else {
            current = current.right;
  
            if (current === null) {
              parent.right = newNode;
              break;
            }
          }
        }
      }
    }
  
    // Traversal functions
    preOrderTraversal(node: Node | null): void {
      if (node !== null) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    inOrderTraversal(node: Node | null): void {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  
    postOrderTraversal(node: Node | null): void {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  
    // Count functions
    countLeafNodes(node: Node | null): number {
      if (node === null) {
        return 0;
      } else if (node.left === null && node.right === null) {
        return 1;
      } else {
        return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
      }
    }
  
    countNonLeafNodes(node: Node | null): number {
      if (node === null || (node.left === null && node.right === null)) {
        return 0;
      } else {
        return 1 + this.countNonLeafNodes(node.left) + this.countNonLeafNodes(node.right);
      }
    }
  
    countNodes(node: Node | null): number {
      if (node === null) {
        return 0;
      } else {
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
      }
    }
  }
  
  // Example usage of BST class
  const bst = new BST();
  bst.insert(50);
  bst.insert(30);
  bst.insert(20);
  bst.insert(40);
  bst.insert(70);
  bst.insert(60);
  bst.insert(80);
  
  console.log('In-order traversal:');
  bst.inOrderTraversal(bst.root);
  
  console.log('Leaf nodes count:', bst.countLeafNodes(bst.root));
  console.log('Non-leaf nodes count:', bst.countNonLeafNodes(bst.root));
  console.log('Total nodes count:', bst.countNodes(bst.root));
  
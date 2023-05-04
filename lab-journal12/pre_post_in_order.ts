export{}
class Node {
    public left: Node | null;
    public right: Node | null;
    public data: number;
    
    constructor(data: number) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    private root: Node | null;
  
    constructor() {
      this.root = null;
    }
  
    public isEmpty(): boolean {
      return this.root === null;
    }
  
    public insert(data: number): void {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    private insertNode(node: Node, newNode: Node): void {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    public search(data: number): boolean {
      return this.searchNode(this.root, data);
    }
  
    private searchNode(node: Node | null, data: number): boolean {
      if (node === null) {
        return false;
      } else if (data < node.data) {
        return this.searchNode(node.left, data);
      } else if (data > node.data) {
        return this.searchNode(node.right, data);
      } else {
        return true;
      }
    }
  
    public preOrderTraversal(): void {
      this.preOrder(this.root);
    }
  
    private preOrder(node: Node | null): void {
      if (node !== null) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    public postOrderTraversal(): void {
      this.postOrder(this.root);
    }
  
    private postOrder(node: Node | null): void {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
  
    public inOrderTraversal(): void {
      this.inOrder(this.root);
    }
  
    private inOrder(node: Node | null): void {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
    }
  }
  
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
  
    public insert(item: number): void {
      const newNode = new Node(item);
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
  
    public search(item: number): boolean {
      return this.searchNode(this.root, item);
    }
  
    private searchNode(node: Node | null, item: number): boolean {
      if (node === null) {
        return false;
      }
      if (node.data === item) {
        return true;
      } else if (node.data > item) {
        return this.searchNode(node.left, item);
      } else {
        return this.searchNode(node.right, item);
      }
    }
  }
  
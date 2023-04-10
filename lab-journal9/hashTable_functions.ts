export { }
const MAX = 10;

class Node {
    key: number;
    next: Node | undefined;

    constructor(key: number) {
        this.key = key;
        this.next = undefined
    }
}

class HashTable {
    hashtable: (Node)[];

    constructor() {
        this.hashtable = new Array(MAX).fill(undefined);
    }

    hashfunction(key: number): number {
        return key % MAX;
    }
    // insert function
    insert(key: number): void {
        const index = this.hashfunction(key);
        const newNode = new Node(key);

        if (this.hashtable[index] === undefined) {
            this.hashtable[index] = newNode;
        } else {
            let currentNode = this.hashtable[index];

            while (currentNode.next !== undefined) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
    }
    // display function
    display(): void {
        for (let i = 0; i < MAX; i++) {
            let currentNode = this.hashtable[i];

            while (currentNode !== undefined) {
                console.log(`(${i}, ${currentNode.key})`);
                currentNode = currentNode.next as Node;
            }
        }
    }
    // search function
    search(v: number): void {
        for (let i = 0; i < MAX; i++) {
            let currentNode = this.hashtable[i];

            while (currentNode !== undefined) {
                if (currentNode.key === v) {
                    console.log(`${v} found at index ${i}`);
                    return;
                }

                currentNode = currentNode.next as Node;
            }
        }

        console.log(`${v} not found in hash table`);
    }
}

const ht = new HashTable();
ht.insert(12);
ht.insert(22);
ht.insert(24);
ht.insert(14);
ht.insert(48);
ht.insert(58);

ht.display();

ht.search(14);
ht.search(30);

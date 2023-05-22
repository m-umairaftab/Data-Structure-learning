class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return true;
    }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("ora")); // Output: true
console.log(trie.startsWith("gr")); // Output: false

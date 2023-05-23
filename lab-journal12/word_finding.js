function findWords(board, words) {
    const result = []

    // Trie data structure
    class TrieNode {
        constructor() {
            this.children = {}
            this.isEndOfWord = false
        }
    }

    // Build Trie from the list of words
    function buildTrie(words) {
        const root = new TrieNode()

        for (const word of words) {
            let node = root
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode()
                }
                node = node.children[char]
            }
            node.isEndOfWord = true
        }

        return root
    }

    // Backtracking function to find words on the board
    function backtrack(row, col, node, word) {
        if (node.isEndOfWord) {
            result.push(word)
            node.isEndOfWord = false // Mark word as found
        }

        // Check boundaries and if the cell has been visited
        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[0].length ||
            board[row][col] === "#"
        ) {
            return
        }

        const char = board[row][col]
        node = node.children[char]

        if (!node) return // No word with this prefix exists

        // Mark the cell as visited
        board[row][col] = "#"

        // Explore adjacent cells
        backtrack(row + 1, col, node, word + char) // Down
        backtrack(row - 1, col, node, word + char) // Up
        backtrack(row, col + 1, node, word + char) // Right
        backtrack(row, col - 1, node, word + char) // Left

        // Restore the cell
        board[row][col] = char
    }

    const root = buildTrie(words)

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            backtrack(row, col, root, "")
        }
    }

    return result
}

// Example usage
const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
]
const words = ["oath", "pea", "eat", "rain"]
console.log(findWords(board, words))

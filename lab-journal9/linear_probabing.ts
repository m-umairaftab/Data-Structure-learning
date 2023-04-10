// Hash Function to generate the index
function hash(key: number): number {
    return key % 10
}

// A function that accepts the hash table and key to be inserted 
// and inserts the “key” at appropriate location in the table. 
// Use linear probing to resolve collisions. 
// The returned value is the index at which the key is inserted.
function linearProbing(hashTable: number[], key: number): number {
    let index = hash(key)
    while (hashTable[index] !== undefined) {
        index = (index + 1) % hashTable.length
    }
    hashTable[index] = key
    return index
}


// Inserting the given set of integers into a hash table using linear probing
const hashTable: number[] = new Array(10)
const integers = [12, 22, 24, 14, 48, 58]
for (const integer of integers) {
    linearProbing(hashTable, integer)
}

console.log(hashTable)

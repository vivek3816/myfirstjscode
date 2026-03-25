// CRUD operations in JavaScript

// Create
const createItem = (array, item) => {
    array.push(item);
    return array;
};

// Read
const readItem = (array, index) => {
    return array[index];
};

// Update
const updateItem = (array, index, newItem) => {
    array[index] = newItem;
    return array;
};

// Delete
const deleteItem = (array, index) => {
    array.splice(index, 1);
    return array;
};

// Example Usage
let items = [];
items = createItem(items, 'item1');
console.log(readItem(items, 0)); // Output: item1
items = updateItem(items, 0, 'item1 updated');
console.log(readItem(items, 0)); // Output: item1 updated
items = deleteItem(items, 0);
console.log(items); // Output: []

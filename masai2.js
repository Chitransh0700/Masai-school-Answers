// Item class
class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  // Inventory management functions
  let inventory = [];
  
  function addItem(inventory, item) {
    inventory.push(item);
  }
  
  function updateItem(inventory, id, newDetails) {
    let item = getItem(inventory, id);
    if (item) {
      Object.assign(item, newDetails);
    }
  }
  
  function deleteItem(inventory, id) {
    let index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
      inventory.splice(index, 1);
    }
  }
  
  // Additional utility functions
  function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
  }
  
  function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
  }
  
  // Example usage
  let apple = new Item(1, 'Apple', 10, 0.5);
  let banana = new Item(2, 'Banana', 20, 0.2);
  
  inventory.push(apple);
  inventory.push(banana);
  
  console.log("Initial Inventory:");
  printInventory(inventory);
  
  let orange = new Item(3, 'Orange', 15, 0.7);
  addItem(inventory, orange);
  
  console.log("Adding item:");
  printInventory(inventory);
  
  updateItem(inventory, 2, { quantity: 30 });
  
  console.log("Updating item:");
  printInventory(inventory);
  
  deleteItem(inventory, 2);
  
  console.log("Deleting item:");
  printInventory(inventory);
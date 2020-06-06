import item from './item.js';
const items = [];
const hideCheckedItems = false;


const findById = function(id1) {
  const foundItem1 = items.find( item => item.id === id1);
  return foundItem1;
};


const addItem = function(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name);
    this.items.push(newItem);
  } catch(error) {
    console.log('Cannot add item: ${error.message}');
  }
};


const findAndToggleChecked = function(id) {
  const foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
};


const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const foundItem = this.findById(id);
    foundItem.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};


const findAndDelete = function(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};


const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};


export default {
  findAndDelete,
  findAndToggleChecked,
  findAndUpdateName,
  addItem,
  findById,
  toggleCheckedFilter,
  items,
  hideCheckedItems
};
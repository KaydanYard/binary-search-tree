class TreeNode {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0
  }

  insert(element) {
    // root is null
    if(this.root == null) {
      this.root = new TreeNode(element);
      this.size += 1;
    } 
    else {
      let current = this.root;
      while(current != null) {
        if(current.element.key == element.key) {
          // Key is the same
          break;
        } 
        else if(element.key > current.element.key) {
          // Key is greater
          if(current.right == null) {
            current.right = new TreeNode(element);
            this.size += 1;
            break;
          } 
          else {
            current = current.right;
          }
        } 
        else {
          // Key is less than
          if(current.left == null) {
            current.left = new TreeNode(element);
            this.size += 1;
            break;
          } 
          else {
            current = current.left;
          }
        }
      }
    }
  }

  contains(key) {
    if(key == null) {
      return null;
    }

    if(this.root == null) {
      return null;
    } 
    else {
      let foundElement = this.root;
      while(foundElement != null) {
        if(foundElement.element.key == key) {
          // Key is the same
          return foundElement.element;
        } 
        else if(key > foundElement.element.key) {
          // Key is greater
          if(foundElement.right == null) {
            return null;
          } 
          else {
            foundElement = foundElement.right;
          }
        } 
        else if(key < foundElement.element.key) {
          // Key is less than
          if(foundElement.left == null) {
            return null;
          } 
          else {
            foundElement = foundElement.left;
          } 
        }
      }
    }
  }

  remove(key) {

  }

  // Returns a sorted array of the items in the tree
}
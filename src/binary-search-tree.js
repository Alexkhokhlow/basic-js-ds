const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(x){
    this.root = x;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

    constructor(){
      this.data = null
    }

  root() {
    return this.data === null ? null : {data: this.data.root};
  }

  add(data) {
    let node = new Node(data)
    if (this.data === null) {
        this.data = node
    } else {
        this.insertNode(this.data, node);
    }
  }

  insertNode(root, node) {
    if (root.root > node.root) {
        if (root.left === null) {
            root.left = node;
        } else {
            this.insertNode(root.left, node);
        }
    } else {
        if (root.right === null) {
            root.right = node;
        } else {
            this.insertNode(root.right, node);
        }
    }
}
 
  has(data) {
    return this.find(data) !== null
  }


  find(data,root = this.data){
    if(root == null){
      return null
    } else if(data > root.root){
      return this.find(data, root.right)
    } else if(data < root.root){
      return this.find(data, root.left)
    } else {
      return {data}
    }

  }

  remove(data, root = this.data) {
     if(root == null){
      return null
     } else if(data < root.root){
        root.left = this.remove(data,root.left)
        return root
     } else if(data > root.root){
      root.right = this.remove(data,root.right)
      return root
     } else {
        if(root.right == null && root.left == null){
          root = null
          return root
        }
        if(root.right == null){
          root = root.left
          return root
        }
        if(root.left == null){
          root = root.right
          return root
        }

        let newRoot = this.min(root.right)
        root.root = newRoot
        root.right = this.remove(newRoot,root.right)
        return root
     }
  }

  min(root = this.data) {
    if(root.left === null){
      return root.root
    } else {
     return this.min(root.left)
    }
  }

  max(root = this.data) {
    if(root.right === null){
      return root.root
    } else {
     return this.max(root.right)
    }
  }

}

module.exports = {
  BinarySearchTree
};
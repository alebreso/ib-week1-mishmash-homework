class ShoppingCart {
  constructor(){
    this.items=[];
  }

//method 'addItem' gets 'name,quantity,pricePerUnit' as parameters
//and push the new element inside the array items
  addItem(name,quantity,pricePerUnit){
    return this.items.push({name,quantity,pricePerUnit});
  }

//method 'getItems' display the full array 'items'
  getItems(){
    return this.items;
  }

//method 'clear' remove all items from the ShoppingCart
  clear(){
    if(this.items.length>0) {
         this.items=[];
         console.log('now your shoppincart is empty');
    }
    else console.log('your shoppincart is already empty');
  }
// method 'total' calculates the total price of the items in the ShoppingCart
// quantity * price per unit for each item of the ShoppingCart
  total(){
    if(this.items.length){
      return this.items
        .map(item => item.quantity * item.pricePerUnit)
        .reduce((total,itemTotal) => total=total+itemTotal,0)
    } else return 0;
  }
}

module.exports = ShoppingCart

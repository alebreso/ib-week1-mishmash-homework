class ShoppingCart {
  constructor(){
    this.items=[];
  }

  addItem(name,quantity,pricePerUnit){
    return this.items.push({name,quantity,pricePerUnit});
  }

  getItems(){
    return this.items;
  }

  clear(){
    if(this.items.length>0) {
         this.items=[];
         console.log('now your shoppincart is empty');
    }
    else console.log('your shoppincart is already empty');
  }

  total(){
    if(this.items.length){
      return this.items
        .map(item => item.quantity * item.pricePerUnit)
        .reduce((acc,next) => acc=acc+next,0)
    } else return 0;
  }
}

module.exports = ShoppingCart

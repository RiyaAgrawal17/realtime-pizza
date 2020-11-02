function cartController(){
  // factory functions(pattern), with the help of closures in js
  //used for object creation
  return{
    index(req,res){
      res.render('customers/cart')
    }
  }
}
module.exports = cartController

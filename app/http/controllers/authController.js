function authController(){
  // factory functions(pattern), with the help of closures in js
  //used for object creation
  return{
    login(req,res){
      res.render('auth/login')
    },
    register(req,res){
      res.render('auth/register')
    }
  }
}
module.exports = authController

//area y perimetro de un rectangulo
var rect={
  perimeter:(x,y)=> (2*(x+y)),
  area:(x,y)=>(x*y)
};


function solveRect(l,b){
 console.log("solving for rectangle l= "+l+" and "+b);
  if(l<=0 || b<=0){
    console.log("Dimensions should be greater than 0 ")

  }else{
    console.log("area= "+rect.area(l,b));
    console.log("perimeter= "+rect.perimeter(l,b));
  }
}
solveRect(2,4);
solveRect(1,6);
solveRect(-2,3);
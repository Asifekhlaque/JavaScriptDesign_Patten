// Factory Function Module Pattern
function creatProduct(name,price){
    let stock=10
    return{
        name,
        price,
        checkStock(){
            console.log(`Stock of ${name} is ${stock}`);
        },
        buy(qty){
            if(qty<=stock){
                stock-=qty
                console.log(`Buying ${qty} of ${name} for ${qty*price}`);
            }
            else{
                console.error("Not enough stock");
            }
        },
        refund(qty){
            stock+=qty
            console.log(`Refunding ${qty} of ${name} for ${qty*price}`);
        }
    }
}
let ipnone= creatProduct("Iphone",50000)
ipnone.checkStock()
let kitkat= creatProduct("Kitkat",20)
kitkat.buy(5)
kitkat.checkStock()
ipnone.checkStock()
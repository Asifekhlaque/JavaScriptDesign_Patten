//Reverling Module Pattern (IIFE)
let bank=(()=>{
    let balance=150;
        function deposit(amount){
            console.log(`Depositing ${amount}`);
            balance+=amount;
        }
        function withdraw(amount){
            console.log(`Withdrawing ${amount}`);
            balance-=amount;
        }
        function getBalance(){
            console.log(`Balance is ${balance}`);
        }
    return {
        set:deposit,
        get:withdraw,
        check:getBalance
    }
})()

bank.set(100);
bank.get(50);
bank.check();
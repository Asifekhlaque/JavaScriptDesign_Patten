// Module Pattern (IIFE)
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
        deposit,
        withdraw,
        getBalance
    }
})()

bank.deposit(100);
bank.withdraw(50);
bank.getBalance();
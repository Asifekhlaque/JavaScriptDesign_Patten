// Observer Pattern 
class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }
    subscriber(user){
        this.subscribers.push(user);
        user.update(`${this.name}, welcome to channel`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((subscriber) => subscriber !== user);
        user.update(`${this.name} left channel`);
    }
    notify(message){
        this.subscribers.forEach((subscriber) => subscriber.update(message));
    }
}
class User{
    constructor(name){
        this.name = name;
    }
    update(message){
        console.log(`${this.name} received ${message}`);
    }
}

let channel = new YoutubeChannel();
let user1 = new User("Asif");
let user2 = new User("Vishal");
channel.subscriber(user1);
channel.subscriber(user2);
channel.notify("New video uploaded");
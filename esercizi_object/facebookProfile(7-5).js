/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here


var facebookProfile= {
    name: "Yamir ", //ok
    
    friends:  800,   //ok
    
    messages: ["Hola Juan, un saludo."," Good morning, have a good day! ","Ciao Anna , come stai?","ci vediamo alle 6 in bar","I have a new Job"], //ok
    
    postMessage: function(message){    //ok
            this.messages.push(message);
            return this.messages ;
            },
            
    deleteMessage: function(index){     //ok
       var deleteMessage = this.messages.splice(index,1);
        return deleteMessage;
    },
    
    addFriend: function(){  //ok
        facebookProfile.friends += 1;
        return facebookProfile.friends;
    },
    
    removeFriend: function(){ 
       facebookProfile.friends -= 1; 
       return facebookProfile.friends;
    },
    
};

console.log(facebookProfile.addFriend());
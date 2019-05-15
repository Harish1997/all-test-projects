var counter=require('./counter');
var events=require('events');
var util=require('util');
var myEmitter=new events.EventEmitter();
var fs=require('fs');

fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf-8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt',data,(err) => {
            if (err) throw err;
            console.log('It is saved!');
           }); 
    }); 
});
  


var Person=function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter);

var harish=new Person("Harish");
var abdullah=new Person("Abdullah");
var ryu=new Person("Ryu");

var people=[harish,abdullah,ryu];

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+' said '+mssg);
    })
});

harish.emit('speak','hey duds');
abdullah.emit('speak','hey there! ');
ryu.emit('speak','Im over here');
myEmitter.on('someEvent',function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent',"the Event was emitted");
console.log("Hello node!");
console.log(__dirname);
console.log(__filename);
console.log(counter([1,2,3]));
// array

let names = ["Jhon", "Mark," "Jane"];
let years = new Array(1990, 1991, 1992, 1987, 1992);

console.log(names);
console log(names.lenght);
console.log(years);

console.log(names[1]);
console.log(years[years.lenght - 1]);

names[1] ="Bob";
console.log(names);

let Jhon = ["John", "Smith", 32, true];
console.log(jhon.toString());
console.log(john.join("#"));

john.pop();
john.shift();
console.log(john.pop);

john.push(true);
john.push("blue");
console.log(john);
john.unshift("Jhon");
console.log(john);

//Objek

let jhon = {
    firstName :'Jhon',
    lastName : 'Smith',
    birthYear : 1990,
    isMarried : true,
    family : ["Jane", "Mark", "Bob"],
    calcAge : function() {
        this.age = 2020 - this.birthYear;
    },
};

console.log(john);
console.log(john.birthYear);
console.log(jhon["lastName"]); // untuk menampilkan lastName

jhon.job = "driver";
console.log(jhon);

delete jhon.job; //Untuk menghapus
john.calcAge();
console.log(jhon);

// javaScript DOM
document.getElementsByTagName("h1") [0].innerHTML;
console.log(title);

let username = document.getElementsById("username").value;
console.log(username);

let username2 = document.getElementsByClassName("input-user")[0],value;
console.log(username2);

function helloWorld(){
    alert("Hello World");
}
function getUserName(){
    let username = document.getElementsById("cat-image");
    console.log(image.src);
    image.src ="https://go.aws/2vT5mXU";
    image.alt ="fish";
    image.width ="400";
}
//!Compaing json properties
console.log("Task 1")
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

let str1 = JSON.stringify(obj1,Object.keys(obj1)) 
let str2 = JSON.stringify(obj2,Object.keys(obj1)) 
if(str1===str2){
  console.log("The JSON objects are equal");
}
else{
  console.log("The JSON objects are not equal");
}


//!Countries flag in console

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload = function(){
       var data = request.response;
       var result = JSON.parse(data);

       for(var i=0;i<result.length;i++){
        console.log(result[i].flags.svg);
       }
      
}

//!Countries name,region and subregion in console

var request2 = new XMLHttpRequest();

request2.open("GET","https://restcountries.com/v3.1/all",true);

request2.send();

request2.onload = function(){
       var data2 = request2.response;
       var result2 = JSON.parse(data2);

       for(var i=0;i<result2.length;i++){
        console.log("Country name: "+ result2[i].name.common+" ,Region: "+ result2[i].region+" ,Sub-region: "+ result2[i].subregion+" ,Population:"+ result2[i].population,);
       }
      
}

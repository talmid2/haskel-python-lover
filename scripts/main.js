var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
/*alert("Python the best!");*/
function do_Popup(popupPath) { 
window.open(popupPath,'name', 
'width=550,height=550,scrollbars=NO,left=350,top=100'); 
} 
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);
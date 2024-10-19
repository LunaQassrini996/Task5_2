function calculate(){
const fromLength = document.getElementById('from');
let num =' ';
fromLength.addEventListener('change' , function getValue(){
    num = Number(fromLength.value) ;
    if(num >= 0 ) {
        return num;
    }else{
        alert("please enter a valid length")
    } 
})
 let fromUnit = document.getElementById('fromUnit').value;
 let toUnit = document.getElementById('toUnit').value;
document.getElementById('toLength').value = convert(fromLength.value , fromUnit , toUnit);
function convert(fromLength , fromUnit , toUnit){
    fromLength = Number(fromLength)
    let lengthInMillimeter = 0;
    let targetValue = 0;
    let result;
    // make the given unit in millimeter
    if(fromUnit== "Millimeter"){
        targetValue = 1;
    }else if( fromUnit == "Centimeter"){
        targetValue = 10;
    }else if(fromUnit == "Decimeter"){
        targetValue = 100;
    }else if(fromUnit == "Meter"){
        targetValue = 1000;
    }else{
        targetValue = 1000000;
    }
     lengthInMillimeter = fromLength * targetValue;

    // convert the value from Millimeter to the required unit
    if(toUnit == "Millimeter"){
        result = lengthInMillimeter;
    }else if(toUnit =="Centimeter" ){
        result = lengthInMillimeter / 10;
    }else if(toUnit == "Decimeter"){
        result = lengthInMillimeter / 100;
    }else if(toUnit == "Meter"){
        result = lengthInMillimeter / 1000;
    }else{
        result = lengthInMillimeter / 1000000;
    }
    return result;

}
}
function Reset(){
    document.getElementById('toLength').value="";
    document.getElementById('from').value="";
    
}

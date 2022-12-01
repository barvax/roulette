
//Slots 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 are red;
//Slots 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35 are black.

numOfBets = 0;

let bets = {
    color: "",//red black
    number:"",//1-36
    odd:"",//odd even
    row:"",//1st,2nd,3rd
    section:"",// 1-12 , 13-24 , 25-36
    half: "" //first - 1-18 , 19-36
    
}

let rouletteFinal = {
    color: "",//red black
    number:"",//1-36
    odd:"",//odd even
    row:"",//1st,2nd,3rd
    section:"",// 1-12 , 13-24 , 25-36
    half: "" //first - 1-18 , 19-36
}

let numbers = [ 
    { number:0,
        color:"green",
        isOdd:"",
        x :()=>{
            alert("wow");
        }
    },
    {
        number:1,
        color:"red",
        isOdd:true
    },
    {
        number:2,
        color:"black",
        isOdd:false
  
    },
    {
        number:3,
        color:"red",
        isOdd:false
    },
    { 
    number:4,
    color:"black",
    isOdd:true
    },
   
   {
    number:5,
    color:"red",
    isOdd:true
   },
   {
    number:6,
    color:"black",
    isOdd:false
   },
   {
    number:7,
    color:"red",
    isOdd:true
   },
    {
    number:8,
    color:"black",
    isOdd:false
    },
    {
        number:9,
        color:"red",
        isOdd:true
    },
    {
        number:10,
        color:"black",
        isOdd:false
    },
    {
        number:11,
        color:"black",
        isOdd:true
    },
    {
        number:12,
        color:"red",
        isOdd:false
    },

    {
        number:13,
        color:"black",
        isOdd:true
    },
    {
    number:14,
    color:"red",
    isOdd:false
    },
    {
        number:15,
        color:"black",
        isOdd:false
    },
    {
        number:16,
        color:"red",
        isOdd:false
    },
    {
        number:17,
        color:"black",
        isOdd:true
    },
    {
        number:18,
        color:"red",
        isOdd:false
    },
    {
        number:19,
        color:"red",
        isOdd:true
    },
    {
        number:20,
        color:"black",
        isOdd:false
    },
    {
        number:21,
        color:"red",
        isOdd:true
    },
    {
        number:22,
        color:"black",
        isOdd:false
    },
    {
        number:23,
        color:"red",
        isOdd:true
    },
    {
        number:24,
        color:"black",
        isOdd:false
    },
    {
        number:25,
        color:"red",
        isOdd:true
    },
    {
        number:26,
        color:"black",
        isOdd:false
    },
    {
        number:27,
        color:"red",
        isOdd:true
    },
    {
        number:28,
        color:"black",
        isOdd:false
    },
    {
        number:29,
        color:"black",
        isOdd:true
    },
    {
        number:30,
        color:"red",
        isOdd:false
    },
    {
        number:31,
        color:"black",
        isOdd:true
    },
    {
        number:32,
        color:"red",
        isOdd:false
    },
    {
        number:33,
        color:"black",
        isOdd:true
    },
    {
        number:34,
        color:"red",
        isOdd:false
    },
    {
        number:35,
        color:"black",
        isOdd:true
    },
    {
        number:36,
        color:"red",
        isOdd:false
    }

]
 let coins = 100;   
 let bet=10;
let rand = 0;

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 
function showCoins(){
   let x =  document.getElementById("coins");
   x.innerHTML = coins+" coins";
}

function isCoins(){
    if(coins>=bet){
        coins-=bet;
        showCoins();
        return true;
    }else{
        alert("not enough coins");
        return false;
    }
}
showCoins();


function runRoulette(){
  
    rand = randomNumber(0,37);
    console.log("roulette number is: "+numbers[rand].number+ " "+numbers[rand].color);
   
    // if(numbers[rand].number==0){
    //     alert("0");
    // }
    setRouletteFinalObject();
    console.log(rouletteFinal);
}


function setRow(){
    if((numbers[rand].number%3)==0){
        return "topRow";
    }else if((numbers[rand].number+1)%3==0){
        return "midRow";
    }else if((numbers[rand].number+2)%3==0){
        return "bottomRow";
    }
    return "";
}

function setSection(){
    if(numbers[rand].number<13){
        return "1st";
    }else if(numbers[rand].number<25){
        return "2nd";
    }else if(numbers[rand].number<=36){
        return "3rd";
    }
    return "";
}
// console.log(numbers.length);
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i].number+" ")+numbers[i].color;
    
// }

function betOnColor(numColor){
    if(isCoins()){
    alert("bet on "+numColor)
    numOfBets++;
    }
    bets.color=numColor;
}

function betOnRow(row){
    if(isCoins()){
        alert("bet on "+row)
        numOfBets++;
        }
        bets.row=row;
}

function setRouletteFinalObject(){

    let z =  numbers[rand];
    rouletteFinal.color=z.color;
    rouletteFinal.number = z.number;
     z.number%2==0?rouletteFinal.odd="even":rouletteFinal.odd="odd";
     rouletteFinal.row = setRow();
     rouletteFinal.section = setSection();
     z.number<19?rouletteFinal.half="firstHalf":rouletteFinal.half="secondHalf";

    //  alert(numbers[0]["color"])
}

function checkWins(){


    let z = rouletteFinal;
    console.log("typeof(bets.number: "+typeof(bets.number));
    console.log("typeof(z.number: "+typeof(z.number));
console.log("bets number: "+bets.number);
    if(rand.number==0){
        return;
    }

    if(bets.color==z.color){
        console.log("hit color");
        coins+=(bet*2);
    }

    if(bets.number===z.number){
        console.log("hit number!!!");
        coins+=(bet*35);  
    }

    if(bets.odd==z.odd){
        console.log("hit "+z.odd);
        coins+=(bet*2);  
    }
    if(bets.row==z.row){
        console.log("hit "+z.row);
        coins+=(bet*3);  
    }

    if(bets.section==z.section){
        console.log("hit "+z.section);
        coins+=(bet*3);  
    }

    if(bets.half==z.half){
        console.log("hit "+z.half);
        coins+=(bet*2);  
    }
    
    showCoins();

}

function spin(){
    runRoulette();
    checkWins();
    console.log(bets)
    coins-=(numOfBets*10);
}

maxCoin = 0;

function z(){
    index = 0;
    while (coins>=0) {
        spin();
        index++;
        if(coins>maxCoin){
            maxCoin=coins
        }
    }
    console.log("maxCoin" + maxCoin);
    console.log("num of games" + index);
}



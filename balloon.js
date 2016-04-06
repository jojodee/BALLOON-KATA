var orderPlaced = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
var balloons = orderPlaced
              .replace(/ sets of/g, "")
              .replace('and', "")
              .replace('.', '');
 // console.log(balloons);
var balloonsArray =[];
balloonSets = balloons.split(",");
    //console.log(balloonSets);

balloonSets.forEach(function(sets){
          balloonsArray.push(sets.trim().split(" "));
});
//console.log(balloonsArray);

balloonsOrderedPerColor = [];
balloonsArray.forEach(function(arr){
 balloonsOrderedPerColor.push(Number(arr[0]*3) + " " + arr[1]);
});
  console.log(balloonsOrderedPerColor.toString() + " " + "balloons were ordered");


var priceCalculation = [];
balloonsOrderedPerColor.forEach(function(item){
  priceCalculation.push(item.split(" "));
});
//console.log(priceCalculation);

var balloons = [];
priceCalculation.forEach(function(numb){
  balloons.push(Number(numb[0]));
});

 // console.log(balloons);

totalPrice = balloons[0]*4 + balloons[1]*5 + balloons[2]*5.50;

console.log("The total cost of ballons was " + "R"+totalPrice);


var costToInflate = [];
balloons.forEach(function(set){
  costToInflate.push(set * 2);
});

//console.log(costToInflate);


var inflatingCost = costToInflate.reduce(add, 0);
  function add(a, b) {
    return a + b;
}
console.log("The extra cost for inflating the balloons was " + "R"+inflatingCost);

var totalCostOfBaloons = inflatingCost + totalPrice;
//console.log(totalCostOfBaloons);


  var totalBalloons = balloons.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
 //console.log(totalBalloons);
var people = 25;
if(totalBalloons>people){
  console.log("Everyone gets a baloon!");
}
if( totalBalloons %  people > 0){
  console.log("We have " + " " + totalBalloons %  people + " " + "extra balloons!");
}
var checkIfEveryOnGetsBalloon = totalBalloons %  people;
//console.log(checkIfEveryOnGetsBalloon);
var poppedBalloons = '5 red balloons, 1 blue balloon,and 3 yellow balloons popped';
var numPopdCalc =  poppedBalloons.split(" ");
//console.log(numPopdCalc );
var popped = numPopdCalc.filter(function(item){
  return item.length<=1;
});
//console.log(popped);
calcTotPop = [];
popped.forEach(function(item){
  calcTotPop.push(Number(item));
});
  //console.log(calcTotPop);
  //console.log(numPopped);
totalPop = calcTotPop.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
//console.log(totalPop);
var pplWthNoBal = people -(totalBalloons-totalPop);
console.log(pplWthNoBal + " " + " people have no baloons!");

colorsPopped = '5 red balloons, 1 blue balloon, and 3 yellow balloons popped';
var popdLoons = [];
popdLoons.push(colorsPopped.replace("red balloons", "")
            .replace("blue balloon", "")
            .replace("and", "")
            .replace("yellow balloons popped", "")
            .replace(/ /g, "").split(","));
 // console.log(popdLoons);

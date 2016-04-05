var orderPlaced = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
var balloons = orderPlaced
              .replace(/ sets of/g, "")
              .replace('and', "")
              .replace('.', '');
  //console.log(balloons);
var balloonsArray =[];
balloonSets = balloons.split(",");
    console.log(balloonSets);

balloonSets.forEach(function(sets){
          balloonsArray.push(sets.trim().split(" "));
});
//console.log(balloonsArray);

balloonsOrderedPerColor = [];
balloonsArray.forEach(function(arr){
 balloonsOrderedPerColor.push(Number(arr[0]*3) + " " + arr[1]);
});
  //console.log(balloonsOrderedPerColor);


var priceCalculation = [];
balloonsOrderedPerColor.forEach(function(item){
  priceCalculation.push(item.split(" "));
});
//console.log(priceCalculation);

var balloons = [];
priceCalculation.forEach(function(numb){
  balloons.push(Number(numb[0]));
});

  console.log(balloons);

totalPrice = balloons[0]*4 + balloons[1]*5 + balloons[2]*5.50;

console.log(totalPrice);


var costToInflate = [];
balloons.forEach(function(set){
  costToInflate.push(set * 2);
});

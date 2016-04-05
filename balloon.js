var orderPlaced = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
var balloons = orderPlaced
              .replace(/ sets of/g, "")
              .replace('and', "")
              .replace('.', '');
  //console.log(balloons);
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
  console.log(balloonsOrderedPerColor);

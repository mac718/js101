var largestPrime;
var number = 13195;
var list = [];

for (var i = 2; i <= number/2; i++){
	if(number % i === 0){
  	list.push(i);
  }
}

for (var i = 0; i < list.length; i++){
	if (list[i] % 2 === 0 || list[i] % 3 === 0 && list[i] > 3){
  		list.splice(i,1);
  } else {
  		var j = 7;
  		while(j < list[i]){
    		if(list[i] % j === 0 || list[i] % (j+2) === 0 && list[i] != (j+2)){
      		list.splice(i,2);
       		};
      	j += 2;
     	};
   };
 };
  
 largestPrime = list.pop();
 

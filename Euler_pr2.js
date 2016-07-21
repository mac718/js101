var sum = 0;
var fibNum = 0;
for (var i = 1; i <= 4000000; i += fibNum) {
	fibNum += i; 
	if (fibNum % 2 === 0){
		sum += fibNum;
	} else if (i % 2 === 0){
		sum += i;
  }
};

console.log(sum);
//The following code runs in O(n)
function Difference1(array){
	if(array.length<2){
		return 0;
	}
	var max= 0;
	var diff=0;
    for(var i = 0; i < array.length; i++){
      if(array[i] > max){
        max= array[i];
      }
		var tempDiff=max-array[i]
		if(tempDiff > diff){
			diff=tempDiff;
    	}
  	}
	return diff;
}
//The following code also runs in O(n)
function Difference2(array){
	if(array.length<2){
		return 0;
  }
  var max = array[0];
  var min = array[0];
 	for(var i = 0; i < array.length; i++) {
  	if(max<array[i]){
    	max=array[i];
    }
    if(min>array[i]){
    	min=array[i];
    }   
  }          
  return max-min;
}

//It is better the second one because it consumes less memory, it does less operations
//and it is also easier to understand.
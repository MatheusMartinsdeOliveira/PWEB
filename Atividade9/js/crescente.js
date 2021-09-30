array = [30, 70, 50];
	array.sort(function(a,b){

		if(a > b) return 1;
		if(a < b) return -1;

		return 0;

});

alert(array);


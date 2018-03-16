while(YesorNO=="yes")

alert(output);


var YesorNO=prompt ("WOULD YOU LIKE TO PRINT YOUR NAME?")
var output="hello my name is adam"

while(YesorNO=="yes"){

	alert(output)

	YesorNO=prompt ("WOULD YOU LIKE TO PRINT YOUR AGAIN?")

	if(YesorNO=="yes"){
		output+="!";
	}


}

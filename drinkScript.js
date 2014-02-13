/**
 * @author Harry Stevens
 */
/*
		 * 1.) I'm going to make a list of four drinks. Each drink will have
		 * three attributes: name, caffeine (boollean), and color.
		 */
			var drinkList = [
				{"name":"root beer",
				"caffeine":false,
				"color":"black"},
				
				{"name":"grape juice",
				"caffeine":false,
				"color":"purple"},
				
				{"name":"coffee",
				"caffeine":true,
				"color":"black"},
				
				{"name":"fruit punch",
				"caffeine":false,
				"color":"red"}
			];
			
			/*
			 *2.) I'm going to create two empty lists, one called blackDrinks
			 * and one called colorDrinks.
			 */
			var blackDrinks = [];
			var colorDrinks = [];
			
			/*
			 * 3.) I'm going to create a for loop. It will check each drink in the drinkList
			 * to see if it's black. If it is, it'll put it into blackDrinks. Otherwise, it'll
			 * put it into colorDrinks.
			 */
			for(var i=0;i<drinkList.length;i++){
				var currentDrink = drinkList[i];
				console.log("Drink",i+1,drinkList[i]);//listing the drinks
				
				if(currentDrink.color == "black"){
					console.log("This is a BLACK drink!");//testing to see if it knows it's black
					blackDrinks.push(currentDrink);//put it in the blackDrinks list
				}else{
					console.log("This is a COLOR drink!");//testing to see if it knows it's not black
					colorDrinks.push(currentDrink);//put it in the colorDrinks list
				}//end if
			}//end for
			
			/*
			 * 4.) I'll console log blackDrinks and colorDrinks to see if it sorted properly.
			 */
			console.log(" ");//space to see better in browser console.
			console.log("The black drinks are",blackDrinks);
			console.log("The colorful drinks are",colorDrinks);
			console.log(" ");//space to see better in browser console.
			
			/*
			 * 5.) I want to see if I can single out only the drink that is black and has caffeine.
			 * To do this, I'm going to make two more empty lists, one called blackCaffeine, the other
			 * called otherDrinks.
			 */
			var blackCaffeine = [];
			var otherDrinks = [];
			
			/*
			 * 6.) I'm going to set up another for loop, but it will check to see if a drink is BOTH
			 * black AND has caffeine. If it has both, it'll go to the blackCaffeine list; otherwise,
			 * it's off to the otherDrinks list.
			 */
			for(var i=0;i<drinkList.length;i++){
				var currentDrink = drinkList[i];
				console.log("Drink",i+1,currentDrink);
		
				if(currentDrink.color == 'black',currentDrink.caffeine == true){
					console.log("This is coffee.");//testing to see if the comp knows it's coffee
					blackCaffeine.push(currentDrink);
				}else{
					console.log("Not coffee.");//testing to see if the comp knows it's not coffee
					otherDrinks.push(currentDrink);
				}//end if
			}//end for
			
			/*
			 * 7.) I'm going to find out if the computer has properly sorted my drinks!
			 */
			console.log(" ");//just some space for aesthetics
			console.log("The mystery drink is",blackCaffeine);
			console.log("The other drinks are",otherDrinks);
			console.log(" ");//space
			
			/*
			 * 8.) I'm going to check to see if the computer still knows about my original drink lists.
			 */
			console.log("The black drinks are still",blackDrinks);
			console.log("The colorful drinks are still",colorDrinks);

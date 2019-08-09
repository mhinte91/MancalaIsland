# MANCALA Island

## Welcome to Mancala Island!
Your objective is to accumulate more points in your mancala than your opponent by the end of the game.
Each player has six playable spaces, including one mancala (the rightmost store).
Players will take turns according to the following rules:

## Gameplay
- Player selects a non-empty pot on his/her side, retrieving all pieces in that space.
- Player's hand then automatically moves counter-clockwise, dropping one piece in each pot he/she passes (**including** *their own* mancala, and **exluding** opponent's mancala) until the hand is empty.
- If a player drops his/her final piece in an empty pot on *their own side*, all pieces in the opponent's opposing space are transferred to that pot.
- If a player drops his/her final piece their own mancala, they takes another turn.

## Scoring, Win/Lose
- Each player's score is equal to the number of pieces in their respective mancala.
- The game ends when one player's row is completely empty (all zero's). The total value of each player's mancala is counted and the higher number wins the game!


### Functionality and Game Logic
- **init()** function runs at startup, and can only be accessed again at the endgame, via the 'Play Again?' button. This function performs as follows:
> The **turn** variable is defined with a value of *1*.  
> The **winner** variable is defined with a value of *null*.  
> The **'button'** element is given an empty class (''), allowing it to adhere to the button CSS properties (display: none).  
> The **drawBoard()** function is called.  
> The **render()** function is called.  

- **drawBoard()** function performs as follows:
> **board** variable is defined as a new array of 14 indices, each filled with a value of *4*.  
> Indices *6* and *13* are redefined with a value of *0*. These two indices represent each player's mancala.  

- **render()** function performs as follows: 
> Using a *forEach* method on the **board** array, the method calls HTML elements with ID's corresponding to the array index being iterated on, and sets the innerHTML to the current value held in that index. In turn, an updated version of the **board** array will be displayed on the game board each time this function runs.  
> The **renderMessage()** function is called.

- **renderMessage()** function performs as follows:
> The querySelector selects the **'footer'** element, and sets the innerHTML to `Player ${PLAYER[turn]}'s Turn!`, with the **PLAYER** object having two key/value pairs: *1: 'One'* and *-1: 'Two'*. This allows the message to display the current player's turn based on the current value of **turn**.

- There are two click events tracking gameplay, one for each side of the board. Depending on the current value of **turn**, the code within each click event's function argument (**handleClick()** or **handleClick2()**) will run to completion.

- **handleClick()** and **handleClick2()** functions perform as follows:
> The **playerOneTurn()** or **playerTwoTurn()** function is called (for handleClick() or handleClick2(), respectively).  
> The **render()** function is called.  
> The **getWinner()** function is called.  
> The **playAgain()** function is called, and receives **winner** as an argument.

- **playerOneTurn()** function receives the click event argument, and  performs as follows:
>   A variable **index** is instantiated with the number value of the ID (the array index) of the clicked pot.  
>   A variable **value** is instantiated as the value of **board** at index **[index]**, representing the number of pieces in that pot.   
>   An *if, else* statement checks to insure no illegal move was made, or if **winner** is true (game over). If the selected move is illegal, the function returns without execution. Otherwise, the code continues execution.   
>   A *for loop* declares a temporary variable **i** of value *0* and increases by *1* for each iteration of the loop until **i** is equal to **value**. This allows for the operation to repeat until the player's hand is empty.  
>   Within the for loop, a variable **newIndex** is instantiated with a value of `index + i + 1`. This positions the variable one space counterclockwise to the selected pot.  
>>  Within the for loop, an *if, else* statement checks that the **newIndex** has not reached the end of its array loop, which is one space behind the final array index (the final index being the opponent's mancala). If not, the value of **board** at **[newIndex]** is increased by *1*. Otherwise, a nested *if, else* is executed.  
>>> Within the nested *if, else* statement, if the value of **newIndex** is less than two times the length of its array loop, the value is decreased by the length of the array loop, and **board** at **[newIndex]** is increased by *1*. Otherwise, the same operation is applied, but the value is decreased by two times the length of the array loop. This gives the illusion of a continuous loop.  

> A variable **finalIndex** is instantiated with the value of the final position of the index after looping is complete.  
> A variable **finalValue** is instantiated with the value of **board** at **[finalIndex]**.  
> The **isEmpty()** function is called, and receives **finalValue** and **finalIndex** as arguments.  
> The **isMancala()** function is called, and receives **finalIndex** as an argument.  
> The value of **board** at the original index is decremented by **value**, emptying out the original pieces.  
> The value of **turn** is "flipped".  

- **playerTwoTurn()** function behaves similarly to the previous function, with few key differences:
> The length of the array loop is the full length of the board array.  
> A further *if* statement is required to correct for iteration through Player One's mancala. When the looping index is equal to *6*:
>> The value of **board** at **[newIndex]** (*6*) is decremented remove the piece placed in this pot.  
>> **value** is incremented to correct for the lost iteration.   
>> The value at the new index (*7*) is incremented.  

- **isEmpty()** function checks if a player's turn ends in an empty space on their side, and steals all the pieces of the opposing side. The function performs as follows:
> A temporary variable **a** holds the passed in value of **finalIndex**.  
> A temporary variable **b** holds the value of `board.length - finalIndex - 2`, a formula which determines the index of the opposing pot.  
> An *if* statement checks that the **finalValue** is *1* (signifying a previously empty pot), and is not located in either mancala. If these conditions are met, a nested *if, else* determines the player for which the switch is to be made, adds the value of **board[b]** to **board[a]**, and set the value of **board[b]** to *0*.  

- **isMancala()** function checks if a player's turn ends in their respective mancala. The function performs as follows:
> The function runs an *if, else* statement to check if the value of **finalIndex** is the index of either player's mancala pot. If so, the value of **turn** is "flipped", which is flipped again at the end of the playerTurn functions. This results in the turn remaining the same at the end of the playerTurn function execution. If neither condition is met, the function simply returns.  

- **getWinner()** function checks for a winner at the end of each turn. The function performs as follow: 
> An *if* statement checks whether the sum of array indices 0-5, or 7-12 are equal to *0*. If so, a player's row is empty and the game must end. A nested *if else* determines if there is a winner or the game is a tie, and renders a corresponding message. The value of **winner** is set to *true*. 

- **playAgain()** function performs as follows: 
> if **winner** is *true*, the *show* class is applied to the 'Play Again?' **'button'**, which sets the display to *show*. This button's click event calls the **init()** function, which will reset the game.

## I hope you enjoyed your stay on Mancala Island, sail through anytime!
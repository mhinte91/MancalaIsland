# MANCALA PSEUDOCODE
## Game Setup
- Make an board array of 14 arrays (2 Mancala and 12 Pots).
- Make two empty arrays to represent each player's hand.
- Board should initialize with 4 pieces in each pot, and empty mancala's.

## Gameplay
- Player One selects a pot on his side, and retrieves all pieces in that pot. 
- Player One's hand then automatically moves counter-clockwise, dropping one piece in each pot (including *his own* mancala), skipping the opponent's mancala.
- If a player drops his final piece in an empty pot on *his own side*, he takes all pieces from the opponent's opposite pot. The player's turn now ends.
- If a player drops his final piece in his mancala, he takes another turn.

## Scoring, Win/Lose
- Each player's score is equal to the number of pieces in their mancala.
- The game ends when one player's side contains no more pieces. The total value of each player's mancala is counted and the higher number wins the game.

## Other features
- The game should have a reset option at all times during play.
- The players' scores should be visible throughout gameplay.
- A message displaying the current player's turn should be visible at all times.
- A winning message should be displayed at end-game, with a 'play again' option.
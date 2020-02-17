# Chain Reaction!
1. I have coded the game chain reaction in javascript, my code is a bit messy but i think it will be readable enough. you can open it by the index.html
file or this link [here](https://divy1211.github.io/Chain-reaction/)
2. It is a two to eight player game. if you find a bug you can open a pull request

# Prerequisites
1. Any Internet browser.

# How the program works

1. Two to eight players can play this game

2.How to play:
1. The gameplay takes place in an m×n board. The most commonly used size of the board is 9×6.
2. For each cell in the board, we define a critical mass. The critical mass is equal to the number of orthogonally adjacent cells. That would be 4 for usual cells (up,down,left,right no diagonals), 3 for cells in the edge and 2 for cells in the corner.
3. All cells are initially empty. The players take turns to place "orbs" of their corresponding colors. One player can only place an orb in an empty cell or a cell which already contains one or more of his/her orbs. When two or more orbs are placed in the same cell, they stack up.
4. When a cell is loaded with a number of orbs equal to its critical mass, the stack immediately explodes. As a result of the explosion, to each of the orthogonally adjacent cells, an orb is added and the initial cell looses as many orbs as its critical mass. The explosions might result in overloading of an adjacent cell and the chain reaction of explosion continues until every cell is stable.
When a player's (lets say red) cell explodes and there are other players' cells around, the other players' cells are converted to red and the other rules of explosions still follow. The same rule is applicable for other colors.
5. The winner is the one who eliminates every other player's orbs.

![EmptyGrid](https://github.com/Divy1211/Chain-reaction/blob/master/CR.JPG)

![PlayersMoves](https://github.com/Divy1211/Chain-reaction/blob/master/CR2.JPG)

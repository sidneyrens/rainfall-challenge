**Rainfall Problem**

A group of farmers has some elevation data, and we're going to help them understand how rainfall flows over their farmland.

We'll represent the land as a two-dimensional array of altitudes and use the following model, based on the idea that water flows downhill:

If a cell’s four neighboring cells all have higher altitudes, we call this cell a sink; water collects in sinks.

Otherwise, water will flow to the neighboring cell with the lowest altitude. If a cell is not a sink, you may assume it has a unique lowest neighbor and that this neighbor will be lower than the cell.

Cells that drain into the same sink – directly or indirectly – are said to be part of the same basin.

Your challenge is to partition the map into basins. In particular, given a map of elevations, your code should partition the map into basins and output the sizes of the basins, in descending order.

Assume the elevation maps are square. Input will begin with a line with one integer, S, the height (and width) of the map. The next S lines will each contain a row of the map, each with S integers – the elevations of the S cells in the row. Some farmers have small land plots such as the examples below, while some have larger plots. However, in no case will a farmer have a plot of land larger than S = 5000.

Your code should output a space-separated list of the basin sizes, in descending order. (Trailing spaces are ignored.)

The inputs for testing are the following: 

```
input1 = '3 1 5 2 2 4 7 3 6 9'
input2 = '1 10'
input3 = '5 1 0 2 5 8 2 3 4 7 9 3 5 7 8 9 1 2 5 4 3 3 3 5 2 1'
input4 = '4 0 2 1 3 2 1 0 4 3 3 3 3 5 5 2 1'
```


*A few examples are below:*

```
-----------------------------------------
Input:                 Output: 
 3                      7 2
 1 5 2 
 2 4 7 
 3 6 9 

The basins, labeled with A’s and B’s, are: 
 A A B 
 A A B 
 A A A 
-----------------------------------------
Input:                  Output: 
 1                       1
 10 

There is only one basin in this case. 
The basin, labeled with A’s is: 
 A
-----------------------------------------
Input:                  Output:            
 5                       11 7 7
 1 0 2 5 8 
 2 3 4 7 9 
 3 5 7 8 9 
 1 2 5 4 3 
 3 3 5 2 1 

The basins, labeled with A’s, B’s, and C’s, are: 
 A A A A A 
 A A A A A 
 B B A C C 
 B B B C C 
 B B C C C 
-----------------------------------------
Input:                  Output: 
 4                       7 5 4
 0 2 1 3                
 2 1 0 4 
 3 3 3 3 
 5 5 2 1 

The basins, labeled with A’s, B’s, and C’s, are: 
 A A B B 
 A B B B 
 A B B C 
 A C C C
-----------------------------------------

```

**Challenge Details**

- Entries are due by 6:00 PM Sunday (I know, weird - I will look everything over Sunday eve)
- Post your solution to #coding-challenge Slack Channel as a GitHub repo, CodeSnippet, JSbin, Repl... Whatever works for you
- *Winner will be selected by the readability and cleanliness of their code*, I know this is a twist but I am interested in seeing what people come up with. Can you make your solution shorter? I will be 'grading' (I am a JavaScript gal so if you're working in a different langugage this may mean comments!)
- Have fun! Work together! How can we help each other improve?!
- Winner will be announced on Monday 3/29

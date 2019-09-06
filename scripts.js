/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an undirected graph represented as an adjacency matrix and an integer k, write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.
*/

/* test cases:

test case 1:
  4
/ | \
1 2 3


test case 2:
 2
/ \
3 1
\ /
 4

test case 3:
4---3
|\ /|
| X |
|/ \|
2---1

It would appear the most colors you need is equal to the node with the most adjacent connections.

*/

const test0 = [
[0,0,0,1],  //vertice 1 connects to vertice 4
[0,0,0,1],  //vertice 2 connects to vertice 4
[0,0,0,1],  //vertice 3 connects to vertice 4
[1,1,1,0]   //vertice 4 connects to vertices 1,2,3
]

const test1 = [
[0,1,0,1],
[1,0,1,0],
[0,1,0,1],
[1,0,1,0]
]

const test2 = [
[0,1,1,1],
[1,0,1,1],
[1,1,0,1],
[1,1,1,0]
]

const isColorable = (graphArray,k) => {
  let max = 0;
  let rowMax = 0;
  for ( y = 0; y < graphArray.length; y++ ) {
    for ( x = 0; x < graphArray[y].length; x++ ) {
      if ( graphArray[y][x] == 1 ) {
        rowMax = rowMax + 1;
      }
    }
    if ( rowMax > max ) {
      max = rowMax
    }
    rowMax = 0
  }
  console.log(max)
  return k <= max
}

console.log(isColorable(test0,3))
console.log(isColorable(test1,2))
console.log(isColorable(test2,4))


$(document).ready(function() {
    $('#output-1').text(1)
});

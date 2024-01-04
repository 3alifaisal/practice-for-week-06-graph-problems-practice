function getNeighbors(row, col, graph) {


  let numOfRows = graph.length;
  let numOfCols = graph[0].length;
  let neighbors  = [];



if(row > 0 && graph[row-1][col] ===1){
  neighbors.push([row -1, col])
}
  // Check bottom
  if (row < numOfRows - 1 && graph[row + 1][col] === 1){
  neighbors.push([row +1, col]);
}
  // Check left
  if (col > 0 && graph[row][col -1] === 1){
  neighbors.push([row,col -1 ])
}
  // Check right
  if (col < numOfCols - 1 && graph[row ][col +1] === 1) {
  neighbors.push([row, col + 1])
  }
  // Return neighbors
return neighbors;
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visitedNodes = new Set();
  visitedNodes.add([row,col].toString());
  // Create a stack, put the starting node in the stack
  const stack = [[row,col]];
  // Put the stringified starting node in visited

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stack.length > 0){
    // Pop the first node
  let [row,col] = stack.pop();
    // DO THE THING (increment size by 1)
    if(graph[row][col] ===1 ) size++;
    
    let neighbors = getNeighbors(row,col,graph);

    for(let neighbor of neighbors){
      if(visitedNodes.has(neighbor.toString()) === false){
    // Then push all the UNVISITED neighbors on top of the stack
       stack.push(neighbor);
    // and mark them as visited
        visitedNodes.add(neighbor.toString())
      }
    }
  }
  return size;

  // Your code here
}

module.exports = [getNeighbors, islandSize];
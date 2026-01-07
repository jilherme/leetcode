const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
console.log(airports)

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// 2 ways to represent, adjacent MATRIX or LIST
// MATRIX takes more space, but is easier to visualize

// ADJACENCY list can be represented by an OBJECT or a MAP
const adjacencyList = new Map();

// add node
function addNode(airport: string) {
  adjacencyList.set(airport, [])

}

// add EDGE, undirected
function addEdge(origin: string, destination: string) {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

// create the graph
function createGraph() {
  for (const airport of airports) {
    addNode(airport)
  }

  for (const [origin, destination] of routes) {
    addEdge(origin, destination)
  }

  console.log(adjacencyList)
}

createGraph()

// graph search/traversal

function bfs(start: string, targetDestination="BKK") {
  const visited = new Set() // unique values
  const queue = [start]

  while (queue.length > 0) {
    const airport = queue.shift() // mutates original array
    const destinations = adjacencyList.get(airport) // all airport destinations/children

    for (const destination of destinations) {
      if (destination === targetDestination) {
        console.log("found it!!")
      }
      
      if (!visited.has(destination)) {
        visited.add(destination)
        // item only gets enqueued, if has not been visited already
        queue.push(destination)
        console.log("destination", destination)
      }
    }
  }
}

// bfs("PHX", "BKK")
const airports = ["PHX", "BKK", "OKC", "JFK", "LAX", "MEX", "EZE", "HEL", "LOS", "LAP", "LIM"]
type Airports = typeof airports
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
]

const adjacencyList = new Map<string, string[]>()
function addNodes(nodes: Airports) {
    nodes.forEach(airport => adjacencyList.set(airport, []))
}

function addEdges(origin: Airports[number], destination: Airports[number]) {
    adjacencyList.get(origin)!.push(destination)
    adjacencyList.get(destination)!.push(origin)
}

function createGraph() {
  addNodes(airports)
  routes.forEach(route => addEdges(route[0], route[1]))
  console.log(adjacencyList)
}

createGraph()

function bfs(start: string, targetDestination = "BKK" ) {
  const queue = [start]
  const visited = new Set()

  while (queue.length > 0) {
    const airport = queue.shift()!
    const destinations = adjacencyList.get(airport)!
    for (const destination of destinations) {
      console.log(destination)
      if (destination === targetDestination) {
        console.log("found it!")
      }
      if (!visited.has(destination)) {
        queue.push(destination)
        visited.add(destination)
      }
    }
  }
}
bfs("PHX", "BKK")
export {};
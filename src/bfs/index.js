const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I'],
};

const bfs = (graph, startNode) => {
  let queue = [];
  let visited = [];

  queue.push(startNode);

  while (queue.length !== 0) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      queue.push(...graph[node]);
    }
  }
  return visited;
};

console.log(bfs(graph, 'A'));

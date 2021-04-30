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

const dfs = (graph, startEdge) => {
  let stack = [];
  let visited = [];

  stack.push(startEdge);

  while (stack.length !== 0) {
    const edge = stack.pop();
    if (!visited.includes(edge)) {
      visited.push(edge);
      stack.push(...graph[edge]);
    }
  }

  return visited;
};

console.log(dfs(graph, 'A'));

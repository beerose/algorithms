/**
 * Goal: for given weighted tree and number C find how many pairs
 * of vertices are distant by C
 */

type Edge = {
  vertices: number[];
  weight: number;
};

type TNode = number;

const edges: Edge[] = [
  { vertices: [1, 2], weight: 1 },
  { vertices: [2, 3], weight: 3 },
  { vertices: [3, 4], weight: 1 },
  { vertices: [4, 5], weight: 2 },
  { vertices: [5, 6], weight: 1 },
  { vertices: [5, 7], weight: 1 },
];

const nodes: TNode[] = [1, 2, 3, 4, 5, 6, 7];

const C = 4;

const neighbours = (v: TNode) => edges.filter(e => e.vertices.includes(v));

const dfs = (v: TNode, c: number, visited: number[]) => {
  if (c < 0) return 0;
  if (c === 0) return 1;

  let sum = 0;
  visited.push(v);
  neighbours(v).forEach(n => {
    if (!visited.includes(n.vertices.find(ver => ver != v))) {
      sum += dfs(n.vertices.find(ver => ver != v), c - n.weight, visited);
    }
  });
  return sum;
};

const findAll = () => {
  let sum = 0;
  let visited = [];
  nodes.forEach(n => {
    sum += dfs(n, C, visited);
  });

  return sum;
};

console.log(findAll());

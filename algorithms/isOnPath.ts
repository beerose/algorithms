/**
 * Algorithm for the list of {node1, node2} checks if
 * node1 is on path from node2 to root
 * Complexity: DFS O(|E| + |V|) + O(n)
 * n = length of given list
 */

type TreeNode = {
  parentId: number | null;
  id: number;
  visited?: boolean;
  visitTimeStart: number;
  visitTimeEnd: number;
};

let visitTime = 0;
let tree = [
  {
    id: 1,
  },
  {
    parentId: 1,
    id: 2,
  },
  {
    parentId: 1,
    id: 3,
  },
  {
    parentId: 2,
    id: 4,
  },
  {
    parentId: 2,
    id: 5,
  },
  {
    parentId: 4,
    id: 6,
  },
  {
    parentId: 6,
    id: 7,
  },
] as TreeNode[];

const setTimes = (u: TreeNode) => {
  u.visited = true;
  u.visitTimeStart = visitTime;
  tree
    .filter(p => p.parentId && p.parentId === u.id)
    .forEach(n => {
      if (!n.visited) {
        visitTime++;
        setTimes(n);
      }
    });
  u.visitTimeEnd = visitTime;
};

setTimes(tree[0]);

const isOnPath = ({ u1, u2 }: { u1: TreeNode; u2: TreeNode }) =>
  u1.visitTimeStart < u2.visitTimeStart && u1.visitTimeEnd >= u2.visitTimeEnd;

const checkAll = (pairs: { u1: TreeNode; u2: TreeNode }[]) =>
  pairs.forEach(p => console.log(isOnPath(p)));

checkAll([
  { u1: tree[0], u2: tree[1] },
  { u1: tree[1], u2: tree[2] },
  { u1: tree[5], u2: tree[6] },
  { u1: tree[1], u2: tree[4] },
  { u1: tree[3], u2: tree[2] },
]);

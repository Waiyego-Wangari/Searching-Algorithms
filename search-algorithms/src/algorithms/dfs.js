import { getUnvisitedNeighbors } from "./dijkstra";

export function dfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  dfsVisit(startNode, finishNode, visitedNodesInOrder, grid);
  return visitedNodesInOrder;
}

function dfsVisit(node, finishNode, visitedNodesInOrder, grid) {
  // Mark the node as visited and add it to the list of visited nodes
  node.isVisited = true;
  visitedNodesInOrder.push(node);

  // If the node is the finish node, stop the search
  if (node === finishNode) return true;

  // Get all unvisited neighbors
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

  for (const neighbor of unvisitedNeighbors) {
    if (!neighbor.isVisited && !neighbor.isWall) {
      neighbor.previousNode = node;
      if (dfsVisit(neighbor, finishNode, visitedNodesInOrder, grid)) {
        return true; // Found the finish node
      }
    }
  }

  return false; // Finish node not found from this path
}

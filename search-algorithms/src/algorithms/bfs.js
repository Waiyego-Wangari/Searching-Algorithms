import { getUnvisitedNeighbors } from "./dijkstra";
import { getNodesInShortestPathOrder } from "./dijkstra";

export function bfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const queue = [startNode]; // Use a queue to keep track of nodes to visit

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Get the first node in the queue

    // Skip this node if it's a wall or has been visited
    if (currentNode.isWall || currentNode.isVisited) continue;

    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);

    if (currentNode === finishNode) break; // Stop if we've reached the finish node

    const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.previousNode = currentNode; // Keep track of path
      queue.push(neighbor); // Add neighbor to the queue to visit next
    }
  }

  return visitedNodesInOrder;
}

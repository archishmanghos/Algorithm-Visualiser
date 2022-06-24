import React from "react";
import "../../../style.css";

export function Bfs(startNode, endNode, grid) {
  const orderedVisitedNodes = [];
  startNode.distance = 0;
  const nodesToVisit = getNodes(grid);
  while (!!nodesToVisit.length) {
    sortDistance(nodesToVisit);
    const curNode = nodesToVisit.shift();
    if (curNode.wall) continue;
    if (curNode.distance === Infinity) return orderedVisitedNodes;
    curNode.visited = true;
    orderedVisitedNodes.push(curNode);
    if (curNode === endNode) return orderedVisitedNodes;
    updateVisit(curNode, grid);
  }
}

function getNodes(grid) {
  const nodes = [],
    n = grid.length,
    m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      nodes.push(grid[i][j]);
    }
  }
  return nodes;
}

function sortDistance(nodes) {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateVisit(curNode, grid) {
  const getNewNeighbours = getNeighbours(curNode, grid);
  for (const neighbour of getNewNeighbours) {
    neighbour.distance = curNode.distance + 1;
    neighbour.prevNode = curNode;
  }
}

function getNeighbours(curNode, grid) {
  const newNeighbours = [];
  const { row, col } = curNode;
  if (row > 0) newNeighbours.push(grid[row - 1][col]);
  if (col > 0) newNeighbours.push(grid[row][col - 1]);
  if (row < grid.length - 1) newNeighbours.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) newNeighbours.push(grid[row][col + 1]);
  return newNeighbours.filter((neighbour) => !neighbour.visited);
}

export function findShortestPath(endNode) {
  const finalPath = [];
  while (endNode !== null) {
    finalPath.unshift(endNode);
    endNode = endNode.prevNode;
  }
  return finalPath;
}

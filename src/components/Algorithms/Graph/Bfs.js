// import React from "react";
import "../../../style.css";

export function Bfs(startNode, endNode, grid) {
  const orderedVisitedNodes = [];
  startNode.distance = 0;
  const unvisitedNodes = getNodes(grid, startNode);
  while (!!unvisitedNodes.length) {
    sortDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.visited || closestNode.wall) continue;
    if (closestNode.distance === Infinity) return orderedVisitedNodes;
    closestNode.visited = true;
    orderedVisitedNodes.push(closestNode);
    updateVisit(closestNode, grid);
    if (closestNode.row === endNode.row && closestNode.col === endNode.col)
      return orderedVisitedNodes;
  }
  return orderedVisitedNodes;
}

function getNodes(grid, startNode) {
  const nodes = [],
  n = grid.length,
  m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === startNode.row && j === startNode.col) {
        grid[i][j].distance = 0;
      }
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
    grid[neighbour.row][neighbour.col].prevNode = curNode;
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

export function findShortestPath(endNode, grid) {
  const finalPath = [];
  let newEndNode = grid[endNode.row][endNode.col];
  while (newEndNode !== null) {
    finalPath.unshift(newEndNode);
    newEndNode = newEndNode.prevNode;
  }
  return finalPath;
}

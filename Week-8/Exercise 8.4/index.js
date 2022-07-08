/**
 * Problem 8.4: Find if Path Exists in Graph
 *  There is a bi-directional graph with n vertices, where each vertex is labeled 
 *  from 0 to n -1 (inclusive). The edges in the graph are represented as a 2D integer
 *  array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between 
 *  vertex ui and vertexvi. Every vertex pair is connected by at most one edge, and no 
 *  vertex has an edge toitself.You want to determine if there is a valid path that exists 
 *  from vertex source to vertexdestination.Given edges and the integers n, source, and 
 *  destination, return true if there is a validpath from source to destination, or false otherwise.
 */

 class Graph
 {
   constructor()
   {
     this.numberOfNodes = 0;
     this.adjacencyList = {};
   }
 
   addVertex(node)
   {
     this.adjacencyList[node] = [];
     this.numberOfNodes++;
   }
   addEdge(node1, node2)
   {
     this.adjacencyList[node1].push(node2);
     this.adjacencyList[node2].push(node1);  
   }
 
   hasPath(n,edges,source,dest){
    if (source === dest) return true;

    for(let i=0;i<n;i++){
        this.addVertex(i);
    }

    for(let i=0;i<edges.length;i++){
        this.addEdge(edges[i][0],edges[i][1]);
    }

    const visited = new Set();
	const queue = [source]

	while(queue.length){
		const curr = queue.shift()
		visited.add(curr)

		if(curr === dest) return true;

		for(let node of this.adjacencyList[curr]){
			if(!visited.has(node)) queue.push(node)
		}
	}
	return false;
   }
} 

let myGraph=new Graph();
let edges=[[0,1],[0,2],[3,5],[5,4],[4,3]];
let n=6,source=0,dest=2;
console.log(myGraph.hasPath(n,edges,source,dest));

/**
 * Problem 8.6: All Path from source to target
 *  Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
 *  find all possiblepaths from node 0 to node n - 1 and return them in any 
 *  order.The graph is given as follows: graph[i] is a list of all nodes you 
 *  can visit from node i (i.e.,there is a directed edge from node i to node 
 *  graph[i][j]).
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

   findPaths(current, node, results) {
    let graph=this.adjacencyList;
    if (node == graph.length - 1) {
        results.push(current.slice(0));
        return;
    }
    
    for(let i = 0; i < graph[node].length; i++) {
        current.push(graph[node][i]);
        this.findPaths(current, graph[node][i], results);
        current.pop();
    }
  }  
   allPathsSourceTarget() {
        const results = [];
        this.findPaths([0], 0, results);
        return results;
    };

    
 }

let myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge(3,1);
myGraph.addEdge(3,4);
myGraph.addEdge(4,2);
myGraph.addEdge(4,5);
myGraph.addEdge(1,2);
myGraph.addEdge(1,0);
myGraph.addEdge(0,2);
myGraph.addEdge(6,5);
console.log(myGraph.allPathsSourceTarget());


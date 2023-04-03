class ShortestPathDijkstras {
    NO_PARENT = -1;
    path = new Set(); //nodes in the shortest path
    allDists = new Set(); //list of shortest distance
    //use Dijkstra’s Shortest Path Algorithm, Time O(n^2)  n is number of nodes
    //auxillary Space O(n)
    shortestPath(adjacencyMatrix, src, dest) {
        var n = adjacencyMatrix[0].length;
        var shortest = {};
        var visited = {};
        var parents = {};
        for (let v = 0; v < n; v++) {
            shortest[v] = Number.MAX_VALUE;
            visited[v] = false;
        }
        shortest[src] = 0;
        parents[src] = this.NO_PARENT;
        for (let i = 1; i < n; i++) {
            let pre = -1;
            let min = Number.MAX_VALUE;
            for (let v = 0; v < n; v++) {
                if (!visited[v] && shortest[v] < min) {
                    pre = v;
                    min = shortest[v];
                }
            }
            if (pre == -1)
                return;
            visited[pre] = true;
            for (let v = 0; v < n; v++) {
                let dist = adjacencyMatrix[pre][v];
                if (dist > 0 && ((min + dist) < shortest[v])) {
                    parents[v] = pre;
                    shortest[v] = min + dist;
                }
            }
        }
        this.allDists.add(shortest[dest]);
        this.addPath(dest, parents);
    }
    //utility func to add nodes in the path recursively
    //Time O(n), Space O(n)
    addPath(i, parents) {
        if (i == this.NO_PARENT)
            return;
        this.addPath(parents[i], parents);
        this.path.add(i);
    }

}


function shortestPath(src, dest) {
    const adjacencyMatrix = [
        [0, 5, 7, 0, 0, 0],
        [5, 0, 0, 15, 20, 0],
        [7, 0, 0, 5, 35, 0],
        [0, 15, 5, 0, 0, 20],
        [0, 20, 35, 0, 0, 10],
        [0, 0, 0, 20, 10, 0],
    ];

    // let src = 4, dest = 5;
    myObj = new ShortestPathDijkstras();
    myObj.shortestPath(adjacencyMatrix, src, dest);
    let list = Array.from(myObj.allDists);
    return list[0];
}
module.exports = { shortestPath };

class Graph:

    def __init__(self):
        self.graphValues = {}

    def add_node_and_edges(self, node, edges):
        self.graphValues[node] = edges

    def bfs(self, start):
        explored = []
        frontier = [start]
        while len(frontier) != 0:
            start = frontier.pop(0)
            explored.append(start)
            for i in self.graphValues[start]:
                try:
                    explored.index(i)
                except ValueError:
                    frontier.append(i)
                    explored.append(i)
        return explored

    def find_path(self, start, end):
        bfs_path = self.bfs(start)
        path = [end]
        current = bfs_path.index(end) -1
        while bfs_path[current] != start and current >= 0:
            if end in self.graphValues[bfs_path[current]]:
                end = bfs_path[current]
                path.append(end)
            current -= 1
        path.append(start)
        path.reverse()
        return path


graph = Graph()
graph.add_node_and_edges('D4', ['E4'])
graph.add_node_and_edges('E4', ['D4', 'F4'])
graph.add_node_and_edges('F4', ['E4', 'G4'])
graph.add_node_and_edges('G4', ['F4', 'G3', 'G5'])
graph.add_node_and_edges('G3', ['G4', 'G2'])
graph.add_node_and_edges('G2', ['G3', 'F2'])
graph.add_node_and_edges('F2', ['G2', 'E2'])
graph.add_node_and_edges('E2', ['F2', 'D2'])
graph.add_node_and_edges('D2', ['E2', 'C2'])
graph.add_node_and_edges('C2', ['D2', 'B2'])
graph.add_node_and_edges('B2', ['C2', 'B3'])
graph.add_node_and_edges('B3', ['B2', 'B4'])
graph.add_node_and_edges('B4', ['B3', 'B5'])
graph.add_node_and_edges('B5', ['B4', 'B6'])
graph.add_node_and_edges('B6', ['B5', 'B7', 'A6'])
graph.add_node_and_edges('A6', ['B6'])
graph.add_node_and_edges('G5', ['G4', 'G6'])
graph.add_node_and_edges('G6', ['G5', 'G7', 'F6'])
graph.add_node_and_edges('G7', ['G6', 'G7'])
graph.add_node_and_edges('F6', ['G7', 'F7'])
graph.add_node_and_edges('F7', ['G7', 'F6', 'E7'])
graph.add_node_and_edges('E7', ['F7', 'D7'])
graph.add_node_and_edges('D6', ['D7'])
graph.add_node_and_edges('D7', ['E7', 'D6'])
graph.add_node_and_edges('C7', ['D7', 'B7'])
graph.add_node_and_edges('B7', ['C7', 'B6'])

print(graph.find_path('D4', 'A6'))

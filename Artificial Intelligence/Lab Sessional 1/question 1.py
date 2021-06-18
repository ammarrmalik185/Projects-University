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
            if start not in explored:
                explored.append(start)
            for i in self.graphValues[start]:
                if i not in explored:
                    frontier.append(i)
                    explored.append(i)
        return explored

    def find_path(self, start, end):
        bfs_path = self.bfs(start)
        path = [end]
        current = bfs_path.index(end) - 1
        while bfs_path[current] != start and current >= 0:
            if end in self.graphValues[bfs_path[current]]:
                end = bfs_path[current]
                path.append(end)
            current -= 1
        path.append(start)
        path.reverse()
        return path


graph = Graph()
graph.add_node_and_edges('g08', ['department gate', 'admin table'])
graph.add_node_and_edges('admin table', ['g08', 'department gate'])
graph.add_node_and_edges('department gate', ['g08', 'main gate', 'admin table', 'cafeteria', 'physics department',
                                             'electrical department'])
graph.add_node_and_edges('physics department', ['department gate', 'electrical department', 'main gate'])
graph.add_node_and_edges('electrical department', ['physics department', 'main gate', 'department gate'])
graph.add_node_and_edges('main gate', ['parking lot', 'electrical department', 'physics department', 'department gate',
                                       'cafeteria', 'park road'])
graph.add_node_and_edges('cafeteria', ['main gate', 'department gate'])
graph.add_node_and_edges('park road', ['main gate', 'parking lot'])
graph.add_node_and_edges('parking lot', ['park road', 'main gate'])


start = input("Enter starting point: ")
end = input("Enter ending point: ")

# print(graph.bfs('parking lot'))

print("from go8 to parking lot:")
print(graph.find_path('g08', 'parking lot'))

print("from start to finish")
print(graph.find_path(start, end))

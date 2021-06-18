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
            for weight in sorted(self.graphValues[start][1]):
                i = self.graphValues[start][1].index(weight)
                i = self.graphValues[start][0][i]
                try:
                    explored.index(i)
                except ValueError:
                    frontier.append(i)
                    explored.append(i)
        return explored

    # def dfs(self, start):
    #     explored = []
    #     frontier = [start]
    #     while len(frontier) != 0:
    #         currentNode = frontier.pop(len(frontier)-1)
    #         print(currentNode)
    #         explored.append(currentNode)
    #         currentChildern = 0
    #         for child in self.graphValues[currentNode][0]:
    #             if child not in frontier and child not in explored:


    def find_path(self, start, end):
        bfs_path = self.bfs(start)
        path = [end]
        # attempt_no = 1
        current = bfs_path.index(end) -1
        while bfs_path[current] != start:
            # print(str(attempt_no) + " c=" + str(current))
            if end in self.graphValues[bfs_path[current]][0]:
                # print(bfs_path[current] + " contains " + end)
                end = bfs_path[current]
                path.append(end)
            current -= 1
            # attempt_no += 1
        path.append(start)
        path.reverse()
        return path


graph = Graph()
graph.add_node_and_edges('Oradea', (['Zerind', 'Sibiu'], [71, 151]))
graph.add_node_and_edges('Zerind', (['Oradea', 'Arad'], [71, 75]))
graph.add_node_and_edges('Arad', (['Zerind', 'Sibiu', 'Timisoara'], [75, 140, 118]))
graph.add_node_and_edges('Timisoara', (['Arad', 'Lugoj'], [118, 111]))
graph.add_node_and_edges('Lugoj', (['Mehadia', 'Timisoara'], [70, 111]))
graph.add_node_and_edges('Mehadia', (['Lugoj', 'Drobeta'], [70, 75]))
graph.add_node_and_edges('Drobeta', (['Mehadia', 'Craiova'], [75, 120]))
graph.add_node_and_edges('Sibiu', (['Oradea', 'Rimnicu Vilcea', 'Arad', 'Fagaras'], [151, 80, 140, 99]))
graph.add_node_and_edges('Rimnicu Vilcea', (['Sibiu', 'Craiova', 'Pitesti'], [80, 146, 97]))
graph.add_node_and_edges('Craiova', (['Drobeta', 'Rimnicu Vilcea', 'Pitesti'], [120, 146, 138]))
graph.add_node_and_edges('Fagaras', (['Sibiu', 'Bucharest'], [99, 211]))
graph.add_node_and_edges('Pitesti', (['Rimnicu Vilcea', 'Craiova', 'Bucharest'], [97, 138, 101]))
graph.add_node_and_edges('Bucharest', (['Pitesti', 'Fagaras', 'Giurgiu', 'Urziceni'], [101, 211, 90, 85]))
graph.add_node_and_edges('Giurgiu', (['Bucharest'], [90]))
graph.add_node_and_edges('Urziceni', (['Bucharest', 'Hirsova', 'Vaslui'], [85, 98, 142]))
graph.add_node_and_edges('Hirsova', (['Urziceni', 'Eforie'], [98, 86]))
graph.add_node_and_edges('Eforie', (['Hirsova'], [86]))
graph.add_node_and_edges('Vaslui', (['Urziceni', 'Iasi'], [142, 92]))
graph.add_node_and_edges('Iasi', (['Vaslui', 'Neamt'], [97, 87]))
graph.add_node_and_edges('Neamt', (['Iasi'], [87]))

print(graph.find_path('Hirsova', 'Iasi'))




































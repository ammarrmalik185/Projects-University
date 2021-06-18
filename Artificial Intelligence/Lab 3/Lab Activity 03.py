class Graph: 

    def __init__(self): 
        self.graph = {}
        
    def AddEdge(self, node, edge):
        self.graph[node] = edge

    def PrintGraphState(self):
        print(self.graph)

    def GetNodes(self):
        return self.graph.keys()
  
    def BFS(self, s):
        visit_order = []
        visited = {city : False for city in self.graph.keys()}
        queue = [s]
        visited[s] = True
        while queue:
            s = queue.pop(0) 
            visit_order.append(s) 
            for weight in sorted(self.graph[s][1]):
                i = self.graph[s][1].index(weight)
                i = self.graph[s][0][i]
                if visited[i] == False: 
                    queue.append(i) 
                    visited[i] = True
        return visit_order

    def FindPath(self, start, end, path):
        true_path = [end]
        current = path.index(end) -1
        while path[current] != start:
            if end in self.graph[path[current]][0]:
                end = path[current]
                true_path.append(end)
            current -= 1
        true_path.append(start)
        true_path.reverse()
        print('Path\n', true_path)
                    
graph = Graph() 
graph.AddEdge('Oradea', (['Zerind', 'Sibiu'], [71, 151]))
graph.AddEdge('Zerind', (['Oradea', 'Arad'], [71, 75]))
graph.AddEdge('Arad', (['Zerind', 'Sibiu', 'Timisoara'], [75, 140, 118]))
graph.AddEdge('Timisoara', (['Arad', 'Lugoj'], [118, 111]))
graph.AddEdge('Lugoj', (['Mehadia', 'Timisoara'], [70, 111]))
graph.AddEdge('Mehadia', (['Lugoj', 'Drobeta'], [70, 75]))
graph.AddEdge('Drobeta', (['Mehadia', 'Craiova'], [75, 120]))
graph.AddEdge('Sibiu', (['Oradea', 'Rimnicu Vilcea', 'Arad', 'Fagaras'], [151, 80, 140, 99]))
graph.AddEdge('Rimnicu Vilcea', (['Sibiu', 'Craiova', 'Pitesti'], [80, 146, 97]))
graph.AddEdge('Craiova', (['Drobeta', 'Rimnicu Vilcea', 'Pitesti'], [120, 146, 138]))
graph.AddEdge('Fagaras', (['Sibiu', 'Bucharest'], [99, 211]))
graph.AddEdge('Pitesti', (['Rimnicu Vilcea', 'Craiova', 'Bucharest'], [97, 138, 101]))
graph.AddEdge('Bucharest', (['Pitesti', 'Fagaras', 'Giurgiu', 'Urziceni'], [101, 211, 90, 85]))
graph.AddEdge('Giurgiu', (['Bucharest'],[90]))
graph.AddEdge('Urziceni', (['Bucharest', 'Hirsova', 'Vaslui'], [85, 98, 142]))
graph.AddEdge('Hirsova', (['Urziceni', 'Eforie'], [98, 86]))
graph.AddEdge('Eforie', (['Hirsova'],[86]))
graph.AddEdge('Vaslui', (['Urziceni', 'Iasi'], [142, 92]))
graph.AddEdge('Iasi', (['Vaslui', 'Neamt'],[97, 87]))
graph.AddEdge('Neamt', (['Iasi'],[87]))
#graph.AddEdge('', [])

print('Starting Cities: ')
cities = []
for city in graph.GetNodes():
    cities.append(city)
print(cities)
# start = input('Start From: ')
# end = input('Destination From: ')
path = graph.BFS('Hirsova')
print(path)
graph.FindPath('Hirsova', 'Vaslui', path)


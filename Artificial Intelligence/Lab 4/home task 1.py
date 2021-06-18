import math


class Node:
    def __init__(self, state, parent, actions, total_cost):
        self.state = state
        self.parent = parent
        self.actions = actions
        self.total_cost = total_cost


def action_sequence(graph, initial_state, goal_state):
    solution = [goal_state]
    current_parent = graph[goal_state].parent
    while current_parent is not None:
        solution.append(current_parent)
        current_parent = graph[current_parent].parent
    solution.reverse()
    return solution


def find_min(frontier):
    min_v = math.inf
    node = ''
    for i in frontier:
        if min_v > frontier[i][1]:
            min_v = frontier[i][1]
            node = i
    return node


def bfs(graph, initial_state, goal_state):
    frontier = [initial_state]
    explored = []
    while len(frontier) != 0:
        current_node = frontier.pop(len(frontier)-1)
        explored.append(current_node)
        for child in graph[current_node].actions:
            if child[0] not in frontier and child[0] not in explored:
                graph[child[0]].parent = current_node
                if graph[child[0]].state == goal_state:
                    return action_sequence(graph, initial_state, goal_state)
                frontier.append(child[0])


def dfs(graph, initial_state, goal_state):
    frontier = [initial_state]
    explored = []
    while len(frontier) != 0:
        current_node = frontier.pop(len(frontier)-1)
        explored.append(current_node)
        current_children = 0
        for child in graph[current_node].actions:
            if child[0] not in frontier and child[0] not in explored:
                graph[child[0]].parent = current_node
                if graph[child[0]].state == goal_state:
                    return action_sequence(graph, initial_state, goal_state)
                current_children = current_children + 1
                frontier.append(child[0])
        if current_children == 0:
            del explored[len(explored)-1]


def ucs(graph, initial_state, goal_state):
    frontier = dict()
    frontier[initial_state] = (None, 0)
    explored = []
    while len(frontier) != 0:
        current_node = find_min(frontier)
        del frontier[current_node]
        if graph[current_node].state == goal_state:
            return action_sequence(graph, initial_state, goal_state)
        explored.append(current_node)
        for child in graph[current_node].actions:
            current_cost = child[1] + graph[current_node].total_cost
            if child[0] not in frontier and child[0] not in explored:
                graph[child[0]].parent = current_node
                graph[child[0]].total_cost = current_cost
                frontier[child[0]] = (graph[child[0]].parent, graph[child[0]].total_cost)
            elif child[0] in frontier:
                if frontier[child[0]][1] < current_cost:
                    graph[child[0]].parent = frontier[child[0]][0]
                    graph[child[0]].total_cosr = frontier[child[0]][1]
                else:
                    frontier[child[0]] = (current_node, current_cost)
                    graph[child[0]].parent = frontier[child[0]][0]
                    graph[child[0]].total_cosr = frontier[child[0]][1]


test_graph = {
    'A': Node('A', None, [('B', 6), ('C', 9), ('E', 1)], 0),
    'B': Node('B', None, [('A', 6), ('D', 3), ('E', 4)], 0),
    'C': Node('C', None, [('A', 9), ('F', 2), ('G', 3)], 0),
    'D': Node('D', None, [('B', 3), ('E', 5), ('F', 7)], 0),
    'E': Node('E', None, [('A', 1), ('B', 4), ('D', 5), ('F', 6)], 0),
    'F': Node('F', None, [('C', 2), ('E', 6), ('D', 7)], 0),
    'G': Node('G', None, [('C', 3)], 0)
}

romania_graph = {
    'Oradea': Node("Oradea", None, [('Zerind', 71), ('Sibiu', 151)], 0),
    'Zerind': Node("Zerind", None, [('Oradea', 71), ('Arad', 75)], 0),
    'Arad': Node("Arad", None, [('Zerind', 75), ('Sibiu', 140), ('Timisoara', 118)], 0),
    'Timisoara': Node("Timisoara", None, [('Arad', 118), ('Lugoj', 111)], 0),
    'Lugoj': Node("Lugoj", None, [('Mehadia', 70), ('Timisoara', 111)], 0),
    'Mehadia': Node("Mehadia", None, [('Lugoj', 70), ('Drobeta', 75)], 0),
    'Drobeta': Node("Drobeta", None, [('Mehadia', 75), ('Craiova', 120)], 0),
    'Sibiu': Node("Sibiu", None, [('Oradea', 151), ('Rimnicu Vilcea', 80), ('Arad', 140), ('Fagaras', 99)], 0),
    'Rimnicu Vilcea': Node("Rimnicu Vilcea", None, [('Sibiu', 80), ('Craiova', 146), ('Pitesti', 97)], 0),
    'Craiova': Node("Craiova", None, [('Drobeta', 120), ('Rimnicu Vilcea', 146), ('Pitesti', 80)], 0),
    'Fagaras': Node("Fagaras", None, [('Sibiu', 99), ('Bucharest', 211)], 0),
    'Pitesti': Node("Pitesti", None, [('Rimnicu Vilcea', 97), ('Craiova', 138), ('Bucharest', 101)], 0),
    'Bucharest': Node("Bucharest", None, [('Pitesti', 101), ('Fagaras', 211), ('Giurgiu', 90), ('Urziceni', 85)], 0),
    'Giurgiu': Node("Giurgiu", None, [('Bucharest', 90)], 0),
    'Urziceni': Node("Urziceni", None, [('Bucharest', 85), ('Hirsova', 98), ('Vaslui', 142)], 0),
    'Hirsova': Node("Hirsova", None, [('Urziceni', 98), ('Eforie', 86)], 0),
    'Eforie': Node("Eforie", None, [('Hirsova', 86)], 0),
    'Vaslui': Node("Vaslui", None, [('Urziceni', 142), ('Iasi', 92)], 0),
    'Iasi': Node("Iasi", None, [('Vaslui', 97), ('Neamt', 87)], 0),
    'Neamt': Node("Neamt", None, [('Iasi', 87)], 0),
}


romania_solution1 = bfs(romania_graph.copy(), "Arad", "Bucharest")
print("bfs solution: (Arad to Bucharest): ")
print(romania_solution1)

# romania_solution2 = dfs(romania_graph.copy(), "Sibiu", "Bucharest")
# print("dfs solution: (Sibiu to Bucharest): ")
# print(romania_solution2)
#
# romania_solution3 = dfs(romania_graph.copy(), "Zerind", "Urziceni")
# print("dfs solution: (Zerind to Urziceni): ")
# print(romania_solution3)

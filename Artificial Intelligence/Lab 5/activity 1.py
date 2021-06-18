import math


class Node:
    def __init__(self, state, parent, actions,  heuristic, total_cost):
        self.state = state
        self.parent = parent
        self.actions = actions
        self.total_cost = total_cost
        self.heuristic = heuristic


def find_min(frontier):
    min_v = math.inf
    node = ''
    for i in frontier:
        if min_v > frontier[i][1]:
            min_v = frontier[i][1]
            node = i
    return node


def action_sequence(graph, goal_state):
    solution = [goal_state]
    current_parent = graph[goal_state].parent
    while current_parent is not None:
        solution.append(current_parent)
        current_parent = graph[current_parent].parent
    solution.reverse()
    return solution


def a_star_search(graph, initial_state, goal_state):
    frontier = dict()
    heuristic_cost = math.sqrt(((graph[goal_state].heuristic[0] - graph[initial_state].heuristic[0])
                                ** 2) + ((graph[goal_state].heuristic[1] - graph[initial_state].heuristic[1]) ** 2))
    frontier[initial_state] = (None, heuristic_cost)
    explored = dict()
    while len(frontier) != 0:
        current_node = find_min(frontier)
        del frontier[current_node]
        if graph[current_node].state == goal_state:
            return action_sequence(graph, goal_state)

        heuristic_cost = math.sqrt(((graph[goal_state].heuristic[0] - graph[current_node].heuristic[0]) ** 2) + (
                (graph[goal_state].heuristic[1] - graph[current_node].heuristic[1]) ** 2))
        current_cost = graph[current_node].total_cost
        explored[current_node] = (graph[current_node].parent, heuristic_cost + current_cost)
        for child in graph[current_node].actions:
            current_cost = child[1] + graph[current_node].total_cost
            heuristic_cost = math.sqrt(((graph[goal_state].heuristic[0] - graph[child[0]].heuristic[0])
                                        ** 2) + ((graph[goal_state].heuristic[1] - graph[child[0]].heuristic[1]) ** 2))
            if child[0] in explored:
                if graph[child[0]].parent == current_node or child[0] == initial_state or explored[child[0]][1] \
                        <= current_cost + heuristic_cost:
                    continue
            if child[0] not in frontier:
                graph[child[0]].parent = current_node
                graph[child[0]].total_cost = current_cost
                frontier[child[0]] = (graph[child[0]].parent, current_cost + heuristic_cost)
            else:
                if frontier[child[0]][1] < current_cost + heuristic_cost:
                    graph[child[0]].parent = frontier[child[0]][0]
                    graph[child[0]].total_cost = frontier[child[0]][1] - heuristic_cost
                else:
                    frontier[child[0]] = (current_node, current_cost+heuristic_cost)
                    graph[child[0]].parent = frontier[child[0]][0]
                    graph[child[0]].total_cost = current_cost


given_graph = {'A': Node('A', None, [('F', 1)], (0, 0), 0),
               'B': Node('B', None, [('G', 1), ('C', 1)], (2, 0), 0),
               'C': Node('C', None, [('B', 1), ('D', 1)], (3, 0), 0),
               'D': Node('D', None, [('C', 1), ('E', 1)], (4, 0), 0),
               'E': Node('E', None, [('D', 1)], (5, 0), 0),
               'F': Node('F', None, [('A', 1), ('H', 1)], (0, 1), 0),
               'G': Node('G', None, [('B', 1), ('J', 1)], (2, 1), 0),
               'H': Node('H', None, [('F', 1), ('I', 1), ('M', 1)], (0, 2), 0),
               'I': Node('I', None, [('H', 1), ('J', 1), ('N', 1)], (1, 2), 0),
               'J': Node('J', None, [('G', 1), ('I', 1)], (2, 2), 0),
               'K': Node('K', None, [('L', 1), ('P', 1)], (4, 2), 0),
               'L': Node('L', None, [('K', 1), ('Q', 1)], (5, 2), 0),
               'M': Node('M', None, [('H', 1), ('N', 1), ('R', 1)], (0, 3), 0),
               'N': Node('N', None, [('I', 1), ('M', 1), ('S', 1)], (1, 3), 0),
               'O': Node('o', None, [('P', 1), ('U', 1)], (3, 3), 0),
               'P': Node('P', None, [('O', 1), ('Q', 1)], (4, 3), 0),
               'Q': Node('Q', None, [('L', 1), ('P', 1), ('V', 1)], (5, 3), 0),
               'R': Node('R', None, [('M', 1), ('S', 1)], (0, 4), 0,),
               'S': Node('S', None, [('N', 1), ('R', 1), ('T', 1)], (1, 4), 0),
               'T': Node('T', None, [('S', 1), ('U', 1), ('W', 1)], (2, 4), 0),
               'U': Node('U', None, [('O', 1), ('T', 1)], (3, 4), 0),
               'V': Node('V', None, [('Q', 1), ('Y', 1)], (5, 4), 0),
               'W': Node('W', None, [('T', 1)], (2, 5), 0),
               'X': Node('x', None, [('Y', 1)], (4, 5), 0),
               'Y': Node('Y', None, [('V', 1), ('X', 1)], (5, 5), 0)
 }

sol = a_star_search(given_graph, 'A', 'Y')
print(sol)

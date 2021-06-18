import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def load_data():
    url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data'
    complete_data = pd.read_csv(url, header=None)

    control = complete_data.iloc[0:100, 4].values
    loaded_data = complete_data.iloc[50:150, 4].values

    control = np.where(control == 'Iris-versicolor', 0, 1)

    return control, loaded_data


def perceptron(data, num_iter):
    features = data[:, :-1]
    labels = data[:, -1]

    # set weights to zero
    w = np.zeros(shape=(1, features.shape[1] + 1))

    misclassified_ = []

    for epoch in range(num_iter):
        misclassified = 0
        for x, label in zip(features, labels):
            x = np.insert(x, 0, 1)
            y = np.dot(w, x.transpose())
            target = 1.0 if (y > 0) else 0.0

            delta = (label.item(0, 0) - target)

            if (delta):  # misclassified
                misclassified += 1
                w += (delta * x)

        misclassified_.append(misclassified)
    return (w, misclassified_)


control, data = load_data()
# num_iter = 10
# w, misclassified_ = perceptron(data, num_iter)

# epochs = np.arange(1, num_iter+1)
# plt.plot(epochs, misclassified_)
# plt.xlabel('iterations')
# plt.ylabel('misclassified')
# plt.show()

# plt.scatter(data[:50, 0], data[:50, 1], color='red', marker='o', label='versicolor')
# plt.scatter(data[50:100, 0], data[50:100, 1], color='blue', marker='x', label='virginica')
# plt.xlabel('petal length')
# plt.ylabel('sepal length')
# plt.legend(loc='upper left')
# plt.show()

plt.scatter(data[50:100, 0], data[50:100, 1], color='red', marker='o', label='versicolor')
plt.scatter(data[100:150, 0], data[100:150, 1], color='red', marker='x', label='virginica')
plt.xlabel('petal length')
plt.ylabel('sepal length')
plt.legend(loc='upper left')
plt.show()



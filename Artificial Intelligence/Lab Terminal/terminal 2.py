import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def load_data():
    url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/forest-fires/forestfires.csv'
    loaded_data = pd.read_csv(url, header=None)
    print(loaded_data)
    loaded_data = loaded_data.drop(0)
    print(loaded_data.iloc[:, -2])

    loaded_data[12] = np.where(loaded_data.iloc[:, -2] == "", 0, 1)
    # loaded_data = np.asmatrix(loaded_data, dtype='float64')
    return loaded_data


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

            if delta:
                misclassified += 1
                w += (delta * x)

        misclassified_.append(misclassified)
    return (w, misclassified_)


data = load_data()
num_iter = 10
w, misclassified_ = perceptron(data, num_iter)

epochs = np.arange(1, num_iter+1)
plt.plot(epochs, misclassified_)
plt.xlabel('iterations')
plt.ylabel('misclassified')
plt.show()

plt.scatter(np.array(data[:50, 0]), np.array(data[:50, 1]), marker='o', label='rain')
plt.scatter(np.array(data[50:, 0]), np.array(data[50:, 1]), marker='x', label='no rain')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.show()



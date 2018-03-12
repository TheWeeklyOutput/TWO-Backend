import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

def meta(x): 
    if x is None:
        return None
    return x.__meta__()

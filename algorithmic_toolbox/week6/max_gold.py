# Uses python3
import sys

def knapSackNoRep(capacity, bars):
    amount = len(bars)
    value=[[0 for row in range(0, amount+1)] for col in range(0, capacity+1)]
    for i in range(1, amount+1):
        wi = bars[i-1]
        vi = bars[i-1]
        for w in range(1, capacity+1):
            value[w][i] = value[w][i-1]
            if wi <= w:
                val = value[w-wi][i-1] + vi
                if value[w][i] < val:
                    value[w][i] = val
    return value[capacity][amount]


def optimal_weight(W, w):
    result = 0
    for x in w:
        if result + x <= W:
            result = result + x
    return result

if __name__ == '__main__':
    input = sys.stdin.read()
    W, n, *w = list(map(int, input.split()))
    print(knapSackNoRep(W, w))

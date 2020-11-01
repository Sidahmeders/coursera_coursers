// knapsack problem without repetion;

function knapsack(W) {
    initialize all value(0, j) = 0
    initialize all value(w, 0) = 0
    
    for i from 1 to n:
      for w from 1 to W:
        value(w, i) = value(w, i-1)
        if w~i <= w
          val = value(w - w~i, i-1) + v~i
          if value(w, i) < val
            value(w, i) = val
    return value(W, n)
}

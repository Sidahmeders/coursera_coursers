// singly linked Lists

[HEAD] -> [value=7, pointer] -> [value=10, pointer] -> [value=4, /] <- [TAIL]

//pushfront(key)
  node ←new node
  node.key ← key
  node.next ← head
  head ← node
  if tail = nil:
    tail ← head

//PopFront()
  if head = nil:
    ERROR: empty list
  head ← head.next
  if head = nil:
    tail ← nil

//PushBack(key)
  node ←new node
  node.key ← key
  node.next =nil
  if tail = nil:
    head ← tail ← node
  else:
    tail.next ← node
    tail ← node

//PopBack()
  if head = nil: ERROR: empty list
  if head = tail:
    head ← tail ←nil
  else:
    p ← head
    while p.next.next != nil:
      p ← p.next
    p.next ← nil; tail ← p

//AddAfter(node, key)
  node2 ←new node
  node2.key ← key
  node2.next = node.next
  node.next = node2
  if tail = node:
    tail ← node2

// doubly linked List

[HEAD] -> <- [pointer, value=7, pointer] -> <- [pointer ,value=10, pointer] -> <- [pointer, value=3, /] <- [pointer, TAIL]




const queue = new algium.priorityQueue(true)

queue.add(1.0)
queue.add(4.3)
queue.add(1.3)
queue.add(44.3)
console.log(queue.items)
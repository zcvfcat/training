function bfs(search, target, words, count, result) {
  let queue = []

  for (let i = 0; i < words.length; i++) {
    let unmatch = words[i].split('').reduce((acc, cur, idx) => {
      return cur !== search[idx] ? acc + 1 : acc
    }, 0)

    if (unmatch === 1) {
      if (target === words[i]) {
        result.push(count + 1)
      }

      let clone = words.slice()
      clone.splice(1, i)
      queue.push({
        search: words[i],
        words: clone,
      })
    }
  }

  if (queue.length) {
    count++
    for (let i = 0; i < queue.length; i++) {
      bfs(queue[i].search, target, queue[i].words, count, result)
    }
  }
}

function solution(begin, target, words) {
  var result = []

  if (words.findIndex((word) => word === target) < 0) {
    return 0
  }

  bfs(begin, target, words, 0, result)
  return Math.min.apply(null, result)
}

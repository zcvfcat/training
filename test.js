const solution = (tickets) => {
  let answer = [];
  const DFS = (airport, tickets, path) => {
    let newPath = [...path, airport];
    if (tickets.length === 0) {
      answer = [...answer, newPath];
    } else {
      tickets.forEach((ticket, idx) => {
        if (ticket[0] === airport) {
          let copiedTickets = [...tickets];
          const [[from, to]] = copiedTickets.splice(idx, 1);
          DFS(to, copiedTickets, newPath);
        }
      });
    }
  };
  DFS('ICN', tickets, []);
  return answer.sort()[0];
};

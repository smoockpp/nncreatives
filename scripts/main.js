$(function() {
  let loc = $(location).attr('pathname');
  console.log(loc);

  switch (loc) {
    case '/':
      treehouseRequest('https://teamtreehouse.com/nikolaynikolov2.json');
      github('https://api.github.com/users/smoockpp');
      break;
    case '/index.html':
      treehouseRequest('https://teamtreehouse.com/nikolaynikolov2.json');
      github('https://api.github.com/users/smoockpp');
      break;
    case '/nncreatives/':
      treehouseRequest('https://teamtreehouse.com/nikolaynikolov2.json');
      github('https://api.github.com/users/smoockpp');
      break;
    case '/portfolio.html':
      break;
  }
});

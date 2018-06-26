//Plain HTTPS request and json returned.
function queryRandomUserAPI() {
  var url = 'https://randomuser.me/api/?results=10';
  fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp){
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
      const usersElement = document.querySelector('#users');
      data.results.forEach(
        user => {
          let pTag = document.createElement('p');
          pTag.innerText = `Name: ${user.name.first} ${user.name.last} Email: ${user.email} Gender: ${user.gender}`;
          usersElement.appendChild(pTag);
      });

      //How can we display this data?
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
};



//slightly more complicated example using same structure
function queryWithParams(queryCategory, queryTerm) {
  //How can we dynamically get queryCategory and query?

  const url =`https://randomuser.me/api/?${queryCategory}=${queryTerm}&results=10`;
  fetch(url)
  .then(function(resp){
    return resp.json()// Transform the data into json
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
}

function calculateVisits() {
  let visitCount = 0;
  visitCount++;
  function logCount() {
    console.log(visitCount);
  }
  return logCount();
}
calculateVisits();

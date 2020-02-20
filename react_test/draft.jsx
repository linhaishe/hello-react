fetch(url, { method: "POST", body: JSON.stringify(data) })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(e) {
    console.log(e);
  });

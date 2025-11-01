axios.get('bad-url')
  .then(response => {
    // ... success logic
  })
  .catch(error => {
    if (error.response) {
      // The server responded with a non-2xx status
      console.log(error.response.data);
    } else if (error.request) {
      // The request was made, but no response received
      console.log(error.request);
    } else {
      // Something else happened
      console.log('Error', error.message);
    }
  });

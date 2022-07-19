let db;

const request = indexedDB.open('musicology', 1)

request.onupgradeneeded = function(event) {
  const db = event.target.result
  db.createObjectStore('new_post', { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.online) {
      uploadPost();
    }
  };
  
  request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
  };
  
  // eslint-disable-next-line no-unused-vars
  function saveRecord(record) {
    const transaction = db.transaction(['new_post'], 'readwrite');
    const postObjectStore = transaction.objectStore('new_post');
    postObjectStore.add(record);
  }
  
  function uploadPost() {
    const transaction = db.transaction(['new_post'], 'readwrite');
    const postObjectStore = transaction.objectStore('new_post');
    const getAll = postObjectStore.getAll();
    getAll.onsuccess = function() {
      if(getAll.result.length > 0) {
        fetch('api/post', {
          method: 'POST',
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(serverResponse => {
            if(serverResponse.message) {
              throw new Error(serverResponse);
            }
            const transaction = db.transaction(['new_post'], 'readwrite');
            const postObjectStore = transaction.objectStore('new_post');
            postObjectStore.clear();
            alert('All saved posts have been submitted')
          })
          .catch(err => {
            console.log(err);
          });
      }
    }; 
  }
  
  window.addEventListener('online', uploadPost);
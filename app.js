// Search Input
const searchUser = document.getElementById('searchUser');

// Init Github
const github = new Github;
// Init UI
const ui = new UI; 
// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make http call
    github.getUser(userText)
      .then((data) => {
       console.log(data);
        if(data.profile.message === 'Not Found') {
          // show alert
          
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile

  }
});
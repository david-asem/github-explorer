//Init Github class
const github = new GitHub;
//Search input
const searchUser = document.getElementById('searchUser');
//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const inputText = e.target.value;

  if (inputText !== '') {
    //make http call
    github.getUser(inputText).then(data => {
      if (data.profile.message === 'Not Found') {
        //show alert
      } else {
        //show profile
      }
    })
  } else {
    //clear profle
  }
});
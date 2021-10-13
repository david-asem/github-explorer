//Init UI
const ui = new UI;
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
        ui.showAlert('Sorry, this user does not exist', 'alert alert-danger d-flex align-items-center')
      } else {
        //show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    //clear profle
    ui.clearProfile();
  }
});
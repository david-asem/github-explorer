class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
//show user profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-success d-grid gap-2 col-6 mx-auto mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-success">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-primary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-info">Followers: ${user.followers}</span>
            <span class="badge bg-dark">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  //show alert
  showAlert() {
    
  }
  //clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
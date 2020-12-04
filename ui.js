class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="cold-md-3">
        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
      <span class="badge badge-success">Followers:${user.followers}</span>
      <span class="badge badge-info">Following:${user.public_following}</span>
      </div>
    </div>
  </div>
    `;
  }
}
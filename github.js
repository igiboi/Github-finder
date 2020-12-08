class Github {
  constructor() {
    this.client_id = '38a6ea0c4d2e30d0e04e';
    this.client_secret = 'd160a517e7cf03deaa646867013a9f95ee6e5dea';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Github Profile url 
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clied_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Repos url 
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clied_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); 
    const repos = await repoResponse.json();

    return {
      profile,
      // similar repos: repos
      repos
    }
  }
}
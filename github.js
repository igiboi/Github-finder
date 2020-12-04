class Github {
  constructor() {
    this.client_id = '38a6ea0c4d2e30d0e04e';
    this.client_secret = 'd160a517e7cf03deaa646867013a9f95ee6e5dea';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clied_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); 

    return {
      profile
    }
  }
}
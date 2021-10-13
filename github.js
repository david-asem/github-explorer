class GitHub{
  constructor() {
    this.client_id = '0bf4d8106233b57b9657';
    this.client_secret = '9b58e0a3e5fecfd8601fcbc862ae51748d5463c3';
  }

  //Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile:profileData,
    }
  }
}
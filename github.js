class GitHub{
  constructor() {
    this.client_id = '0bf4d8106233b57b9657';
    this.client_secret = '9b58e0a3e5fecfd8601fcbc862ae51748d5463c3';
    this.repos_count = 10;
    this.repos_sort = 'created:asc';
  }

  //Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos:reposData
    }
  }
}
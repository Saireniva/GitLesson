class Github {
    constructor(){
        this.client_id = 'fa85dd769cf5239acdbd';
        this.client_secret = '00781b29955673b0b9e501ce02aa72c3699162a0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user){   
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}
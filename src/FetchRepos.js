const axios = require('axios')
//promised based node js library for making async http requests 

const fetchPopularRepos = function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
    return axios.get(encodedURI)
      .then((response) => response.data.items);
  }
export default fetchPopularRepos;
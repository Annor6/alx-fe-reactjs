import axios from "axios";

export const fetchUserData = async (query, location, minRepos, page = 1) => {
  let searchQuery = `${query}`;

  if (location) {
    searchQuery += ` location:${location}`;
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(
    `https://api.github.com/search/users`,
    {
      params: {
        q: searchQuery,
        page,
        per_page: 5
      }
    }
  );

  return response.data;
};


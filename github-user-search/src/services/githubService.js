import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (query, location = "", minRepos = 0) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }


import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUserData(query, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await fetchUserData(query, location, minRepos, nextPage);
    setUsers(prev => [...prev, ...data.items]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 bg-gray-100 p-4 rounded"
      >
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div
            key={user.id}
            className="border p-3 rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                className="text-blue-500"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-4 w-full bg-gray-300 p-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;


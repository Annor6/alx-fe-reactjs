import { useState } from "react";

// Simple mock authentication hook
export function useAuth() {
  // Holds the user object (null if not logged in)
  const [user, setUser] = useState(null);

  // Simulate login
  const login = (username) => setUser({ name: username });

  // Simulate logout
  const logout = () => setUser(null);

  return { user, login, logout };
}
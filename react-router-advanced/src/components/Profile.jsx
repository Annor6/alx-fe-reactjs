import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      {/* Navigation for nested routes */}
      <nav className="mb-4">
        <Link className="mr-4 text-blue-500" to="details">Details</Link>
        <Link className="text-blue-500" to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
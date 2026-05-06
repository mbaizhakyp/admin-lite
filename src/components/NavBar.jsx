import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar() {
  const user = useContext(UserContext);
  return (
    <nav className="navbar">
      <h1>Admin Lite</h1>
      <span>{user.name} / {user.role}</span>
    </nav>
  )
}

export default NavBar
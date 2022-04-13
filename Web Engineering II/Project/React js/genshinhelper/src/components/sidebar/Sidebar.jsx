import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

            <Link to="/" className="link">
            <li className="sidebarListItem active">
              Home
            </li>
            </Link>

            <Link to="/character" className="link">
            <li className="sidebarListItem active">
              Characters
            </li>
            </Link>

            <Link to="/weapon" className="link">
            <li className="sidebarListItem active">
              Weapons
            </li>
            </Link>

            <Link to="/artifact" className="link">
            <li className="sidebarListItem active">
              Artifacts
            </li>
            </Link>

          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Player</h3>
          <ul className="sidebarList">

            <Link to="/playerTeams" className="link">
              <li className="sidebarListItem">
                Teams
              </li>

            </Link>

            <Link to="/playerCharacters" className="link">
              <li className="sidebarListItem">
                Characters
              </li>
            </Link>

            
            <Link to="/playerWeapons" className="link">
              <li className="sidebarListItem">
                Weapons
              </li>
            </Link>

            
            <Link to="/playerArtifacts" className="link">
              <li className="sidebarListItem">
                Artifacts
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

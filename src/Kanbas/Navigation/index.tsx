import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaEnvelope,
  FaClock,
  FaTv,
  FaArrowRight,
  FaQuestionCircle,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle style={{color : "white", fontSize : "2em"}}  className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt style={{color : "red", fontSize : "2em"}} className="fs-2" /> },
    { label: "Courses", icon: <FaBook style={{color : "red", fontSize : "2em"}}  className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt style={{color : "red", fontSize : "2em"}}  className="fs-2" /> },
    { label: "Inbox", icon: <FaEnvelope style={{color : "red", fontSize : "2em"}}  className="fs-2"/>},
    { label: "History", icon: <FaClock style={{color : "red", fontSize : "2em"}}  className="fs-2"/>},
    { label: "Studio", icon: <FaTv style={{color : "red", fontSize : "2em"}}  className="fs-2"/>},
    { label: "Commons", icon: <FaArrowRight style={{color : "red", fontSize : "2em"}}  className="fs-2"/>},
    { label: "Help", icon: <FaQuestionCircle style={{color : "red", fontSize : "2em"}}  className="fs-2"/>},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon}<br/> {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

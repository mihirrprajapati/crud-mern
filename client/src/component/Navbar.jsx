import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Navbar = ({ text, navText, navUrl, navIcon }) => {
  return (
    <div className="position-relative">
      <div className="fs-1 my-4 text-center">{text}</div>
      <Link
        to={navUrl}
        className="fs-4 text-primary cursor-pointer position-absolute top-0 end-0 me-5 text-decoration-none d-flex align-items-center"
      >
        {navIcon}
        <p className="pb-0 mb-0">{navText}</p>
      </Link>
    </div>
  );
};

export default Navbar;

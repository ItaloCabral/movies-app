import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import {
  NavbarContainer,
  Avatar,
  Search
} from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MoviesApp
        </Link>
      </h2>

      <Search>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </Search>

      <Avatar>
        <div className="img-wrapper">
          <img src="https://github.com/italocabral.png" alt="User avatar" />
        </div>
      </Avatar>
    </NavbarContainer>
  );
};


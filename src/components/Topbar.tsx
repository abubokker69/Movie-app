import "../styles/__Topbar.scss";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./ui/Dropdown";
import SearchInput from "./ui/Input";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="full bg-gray-300">
        <div className="container-main flex bg-gray-300 py-4 items-center">
          <Dropdown
            text="Dropdown"
            icon={<FaChevronDown />}
            menu={[{ text: "menu one" }, { text: "menu two" }]}
            itemList="cursor-pointer"
          />
          <Link to={"/home"}>
            <Dropdown text="Home" />
          </Link>
          <Link to={"/about"}>
            <Dropdown text="About" />
          </Link>
          <Link to={"/contact"}>
            <Dropdown text="Contact" />
          </Link>
          <Link to={"/email"}>
            <Dropdown text="Email" />
          </Link>
          <Link to={"/facebook"}>
            <Dropdown text="Facebook" />
          </Link>

          <Dropdown
            text="Youtube"
            menu={[{ text: "menu one" }, { text: "menu two" }]}
            itemList="cursor-pointer"
            icon={<FaChevronDown />}
          />
          <Dropdown text="Google" />
          <Dropdown text="Twitter" />
          <Dropdown
            text="Apple"
            menu={[{ text: "menu one" }, { text: "menu two" }]}
            itemList="cursor-pointer"
            icon={<FaChevronDown />}
          />
          <Dropdown text="WhatsApp" />
          <SearchInput
            icon={<FaSearch />}
            placeholder="Search..."
            inputClass="rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Topbar;

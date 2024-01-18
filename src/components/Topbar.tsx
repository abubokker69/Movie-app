import "../styles/__Topbar.scss";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./ui/Dropdown";
import SearchInput from "./ui/SearchInput";
import { FaSearch } from "react-icons/fa";

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
          <Dropdown text="About" />
          <Dropdown text="Contact" />
          <Dropdown text="Chat" />
          <Dropdown text="Email" />
          <Dropdown
            text="Facebook"
            url="https://web.facebook.com/md.abubokker.69/"
          />
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
            text="Search..."
            inputClass="rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-10 mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PJUbBzqG2qs?si=Pxkj5GUBiQ3Rj0wg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ar6JIIJn9cI?si=IYocXfFg28wP2MbE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AxkRp3yHiVU?si=fNft0qDtw7wndY-o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S5gcMwh8ayI?si=Ke1_kYytli0tUj8S"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yIrU21hoHys?si=0bU3aIy-FOSKvHn4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2U-znILCZFM?si=q_NBC6yqgHLetsC2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3dBIC2GKVjE?si=oFYxpPl-JTZi9Mfn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PJUbBzqG2qs?si=Pxkj5GUBiQ3Rj0wg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ar6JIIJn9cI?si=IYocXfFg28wP2MbE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AxkRp3yHiVU?si=fNft0qDtw7wndY-o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S5gcMwh8ayI?si=Ke1_kYytli0tUj8S"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yIrU21hoHys?si=0bU3aIy-FOSKvHn4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2U-znILCZFM?si=q_NBC6yqgHLetsC2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3dBIC2GKVjE?si=oFYxpPl-JTZi9Mfn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Topbar;

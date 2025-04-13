import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Package,
  Briefcase,
  Building,
  Code,
  HelpCircle,
  LogIn,
  Users2,
  AlignRight,
  X,
} from "lucide-react";
import img from "../../../assets/Website_Media/Website_Media/salesdriver_logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      {
        label: "Services",
        path: "/services",
        icon: <Package className="size-5 transition-all" />,
      },
      {
        label: "Solutions",
        path: "/solutions",
        icon: <Briefcase className="size-5 transition-all" />,
      },
      {
        label: "Industries",
        path: "/industries",
        icon: <Building className="size-5 transition-all" />,
      },
      {
        label: "Company",
        path: "/company",
        icon: <Users2 className="size-5 transition-all" />,
      },
      {
        label: "API",
        path: "/api",
        icon: <Code className="size-5 transition-all" />,
      },
      {
        label: "Help",
        path: "/help",
        icon: <HelpCircle className="size-5 transition-all" />,
      },
      {
        label: "Login",
        path: "/login",
        icon: <LogIn className="size-5 transition-all" />,
      },
    ],
    []
  );

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const matchedItem = navItems.find(
      (item) => item.path.toLowerCase() === currentPath
    );
    setActiveItem(matchedItem ? matchedItem.label : "");
  }, [location.pathname, navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-30">
      <nav
        className={`fixed top-0 left-0 w-full border-gray-200 transition-all duration-500 ease-in-out ${
          location.pathname.startsWith("/post/")
            ? "bg-transparent"
            : isScrolled
            ? "bg-white opacity-100"
            : location.pathname === "/"
            ? "bg-white md:bg-[linear-gradient(to_right,#fff_53%,#ecf7fd_47%)]"
            : "bg-white"
        }`}
      >
        {" "}
        <div className="flex items-center justify-between pr-10 pl-5 py-4 mr-5 lg:mr-0">
          <img
            onClick={() => navigate("/")}
            src={img}
            alt="logo"
            className="md:h-[40px] cursor-pointer h-[32px] md:0 z-10"
          />
          <button
            onClick={toggleMenu}
            className="custom-lg:hidden absolute mr-5 right-0 z-[1050]"
          >
            {isOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
          <ul
            className={`hidden custom-lg:flex 
             ${
               location.pathname === "/"
                 ? "lg:-ml-[450px] 2xl:-ml-[590px]"
                 : "lg:-ml-10"
             } 
             lg:space-x-8 text-black`}
          >
            {" "}
            {["Services", "Solutions", "Industries", "Company"].map((label) => {
              const path = `/${label.toLowerCase()}`;

              return (
                <li
                  key={label}
                  className="relative group"
                  onMouseEnter={undefined}
                  onMouseLeave={undefined}
                >
                  <button
                    onClick={() => navigate(path)}
                    className={`relative group flex items-center justify-between w-full px-3 py-2 min-[1090px]:p-0 transition duration-300 ease-in-out ${
                      activeItem === label
                        ? "text-blueclr"
                        : "hover:text-blueclr"
                    }`}
                  >
                    <span className="font-semibold">{label}</span>
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blueclr rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden sm:flex">
            <button
              onClick={() => navigate("/contact")}
              className="hidden ml-4 z-[1050] transform transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1] hover:bg-[#DA9613] sm:flex sm:items-center text-white bg-yellowclr rounded-full shadow-md px-1 py-1.5 min-[1090px]:mb-1"
            >
              <h1 className="font-medium px-3">Start Now</h1>
            </button>
          </div>
        </div>
        <div
          className={`custom-lg:hidden overflow-hidden fixed top-0 left-0 w-full bg-white rounded-b-3xl shadow-md transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[520px] opacity-100 pt-16" : "max-h-0 opacity-0"
          }`}
        >
          <hr className="mt-2 min-[1090px]:my-0 bg-black min-[1090px]:hidden" />
          <ul className="flex flex-col space-y-3 text-black px-4 py-4">
            {navItems.map(({ label, path, icon, hiddenOnSmall }) => (
              <li
                key={label}
                className={`group ${hiddenOnSmall ? "sm:hidden" : ""}`}
              >
                <button
                  onClick={() => {
                    navigate(path);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 text-lg pl-6 py-2 transition-all group-hover:text-blueclr"
                >
                  <span className="group-hover:text-blueclr">{icon}</span>
                  <span>{label}</span>
                </button>
                <hr className="mt-1 min-[1090px]:my-0 bg-black min-[1090px]:hidden" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

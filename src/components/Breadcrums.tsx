import { useState } from "react";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [query, setQuery] = useState("");

  const name = "John Doe";
  const email = "john.doe5email@example.com";
  const avatarUrl = "https://i.pravatar.cc/100";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("User search input:", query);
    }
  };

  return (
    <div className="flex justify-between items-center border border-gray-300">
      {/* Breadcrumb section */}
      <div className="text-sm text-gray-500 px-4 py-4 flex items-center">
        {/* Icon */}
        <div className="w-5 h-4 bg-white rounded-sm relative border-2 border-green-700 mr-2">
          <div className="w-2.5 h-full bg-green-700 absolute left-0 top-0 rounded-l-[1px]"></div>
        </div>

        <nav className="flex items-center gap-1">
          {location.pathname === "/" ? (
            <>
              <span className="hover:underline">Home</span>
              <span className="mx-1">&gt;</span>
              <span className="font-medium text-black">Workspace</span>
            </>
          ) : (
            <>
              <Link to="/" className="hover:underline">Workspace</Link>
              {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;
                return (
                  <span key={index} className="flex items-center gap-1">
                    &gt;
                    {isLast ? (
                      <span className="font-medium text-black">
                        {decodeURIComponent(name)}
                      </span>
                    ) : (
                      <Link to={routeTo} className="hover:underline">
                        {decodeURIComponent(name)}
                      </Link>
                    )}
                  </span>
                );
              })}
            </>
          )}
        </nav>

        <span className="ml-2"><IoIosMore /></span>
      </div>

      {/* Right section: search, bell, user */}
      <div className="flex gap-4 items-center pr-4">
        <div className="flex items-center gap-1 bg-gray-200 rounded-md px-2 py-2 my-1 text-sm">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search within Sheet"
            className="bg-transparent outline-none text-sm "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="relative">
          <GoBell className="text-xl" />
          <span className="absolute -top-1.5 -right-1 bg-green-700 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        <div className="flex items-center gap-2 relative group">
          <img
            src={avatarUrl}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-sm leading-tight max-w-[140px]">
            <span className="font-medium truncate">{name}</span>
            <span className="text-gray-500 text-xs truncate">{email}</span>
          </div>

          {/* Tooltip */}
          <div className="absolute top-full -left-5 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 text-sm z-50">
            <div className="flex flex-col items-center gap-4">
              <img
                src={avatarUrl}
                alt="user-large"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center w-full text-center px-2 break-words">
                <div className="font-semibold text-base break-words">{name}</div>
                <div className="text-gray-500 text-sm break-all">{email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;

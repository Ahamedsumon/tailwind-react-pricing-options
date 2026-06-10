import { Menu, X } from "lucide-react";
import Link from "../Link/Link";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Products", path: "/products" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];
const links = navItems.map((route) => (
  <Link key={route.id} route={route}></Link>
));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between mx-6 relative mt-3">
      <span className="flex gap-2">
        <span
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className=""></X> : <Menu className=""></Menu>}
        </span>
        <ul
          className={`md:hidden absolute ${open ? "top-7" : "-top-65"} transition-all  duration-1000 ease-in-out shadow w-30`}
        >
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex md:justify-center hidden">{links}</ul>
      <button>Sign In</button>
      {/* <ul className="flex">
        {navItems.map((route) => (
          <li className="mr-10" key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className="flex gap-2">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;

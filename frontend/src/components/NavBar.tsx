interface NavbarProps {
  title: string;
  links: string[];
}

function Navbar({ title, links }: NavbarProps) {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-lg font-bold">{title}</div>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-gray-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
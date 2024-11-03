import { Link } from "react-scroll";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const returnLink = (text, id) => {
    return (
      <Link
        smooth={true}
        spy={true}
        offset={-70}
        duration={500}
        to={id}
        className="hover:underline block lg:inline"
        onClick={() => setIsOpen(false)} // Fechar o menu ao clicar no link em dispositivos móveis
      >
        {text}
      </Link>
    );
  };

  return (
    <div className="bg-pink-400 w-full h-20 flex items-center justify-between p-4 fixed border-b-2 border-black">
      <h1 className="text-2xl lg:text-3xl font-bold">Samuel Fiais</h1>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden flex flex-col gap-4 p-4 absolute top-20 left-0 w-full bg-red-400 border-b-2 border-black`}
      >
        {returnLink("Skills", "skills")}
        {returnLink("Projects", "projects")}
        {returnLink("Contact", "contact")}
      </div>
      <div className="gap-4 hidden lg:flex">
        {returnLink("Skills", "skills")}
        {returnLink("Projects", "projects")}
        {returnLink("Contact", "contact")}
      </div>
    </div>
  );
};

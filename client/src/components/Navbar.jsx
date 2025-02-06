import { motion } from "framer-motion";

const NavBar = () => {
  const navLinks = [
    { name: "Home", icon: "fa-house", link: "#hero" },
    { name: "About", icon: "fa-user", link: "#about" },
    { name: "Resume", icon: "fa-file", link: "#resume" },
    { name: "Skills", icon: "fa-server", link: "#skills" },
    { name: "Portfolio", icon: "fa-folder-open", link: "#portfolio" },
    { name: "Contact", icon: "fa-envelope", link: "#contact" },
  ];

  const socials = [
    { link: "https://twitter.com/Damilordz", icon: "fa-twitter" },
    { link: "https://www.facebook.com/Damilordz", icon: "fa-facebook" },
    { link: "https://www.instagram.com/damilordz01/", icon: "fa-instagram" },
    { link: "https://github.com/Damilordz", icon: "fa-github" },
    {
      link: "https://www.linkedin.com/in/adebowaleemmanuel/",
      icon: "fa-linkedin",
    },
  ];

  return (
    <div className="h-screen w-[300px] fixed top-0 left-0 bg-[#040b14] z-5 overflow-hidden py-10 px-[20px] flex flex-col gap-10">
      <div className="profile flex flex-col gap-4 justify-center items-center">
        {/* Profile Image */}
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-8 border-[#2c2f3f]">
          <img
            src="./assets/images/personal-img.jpg"
            alt="personal image"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="profile-name">
          <h1 className="text-[26px] text-[#fff]">Damilola Emmanuel</h1>
        </div>

        {/* Socials */}
        <div className="flex gap-2">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className="h-9 w-9 bg-[#2c2f3f] text-[#fff] hover:bg-[#149ddd] transition-[background-color] duration-1000 ease-in-out rounded-full flex justify-center items-center"
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Nav Links */}
      <div className="mx-4">
        <nav>
          <ul className="flex flex-col items-start gap-9">
            {navLinks.map((navLink, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className="nav-item"
              >
                <a
                  href={navLink.link}
                  className=" flex items-center gap-2.5 text-[#a8a9b4] hover:text-[#149ddd] transition-colors duration-300 ease-in-out"
                >
                  <i className={`fa-solid ${navLink.icon} fa-lg`}></i>
                  <span>{navLink.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

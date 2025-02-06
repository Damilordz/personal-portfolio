const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-[15px] bg-[#040b14] text-[#f4f6fd] text-[14px] z-10 fixed bottom-0 left-0 w-[300px]">
      <div className="text-center">
        <p className="copyright">&copy; Copyright {currentYear}</p>
        <div className="credits">
          Designed by {""}
          <a
            href="https://www.linkedin.com/in/adebowaleemmanuel"
            target="_blank"
            className="text-[#149ddd] hover:text-[#f4f6fd] transition-colors duration-300 ease-in-out"
          >
            Damilola Emmanuel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

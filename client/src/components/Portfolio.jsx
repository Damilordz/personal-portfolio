import PropTypes from "prop-types";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolioData";

// Portfolio Component
const Portfolio = ({ isMobile, isMenuOpen }) => {
  return (
    <section
      id="portfolio"
      className="bg-[#f5f8fd] py-16 px-[20px] lg:px-[40px]"
    >
      <div className="portfolio-container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[20px]">
          {portfolioData.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
              index={index}
              isMobile={isMobile}
              isMenuOpen={isMenuOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
Portfolio.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Portfolio;

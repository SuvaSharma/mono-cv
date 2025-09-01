import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  date: string;
  description: string;
}

export default function ExperienceCard({
  logo,
  company,
  role,
  date,
  description,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`full-width-container ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="content-wrapper">
        {/* LEFT IMAGE */}
        <div className="image-side">
          <img src={logo} alt={`${company} Logo`} />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-side">
          <h3 className="company-name">{company}</h3>
          <p className="role-text">{role}</p>
        </div>

        {/* DATE + ARROW */}
        <div className="date-side">
          <span className="date-text">{date}</span>
          {isOpen ? (
            <FiChevronUp className="arrow-icon" />
          ) : (
            <FiChevronDown className="arrow-icon" />
          )}
        </div>
      </div>

      {/* COLLAPSIBLE DESCRIPTION */}
      <div className={`description-wrapper ${isOpen ? "open" : ""}`}>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

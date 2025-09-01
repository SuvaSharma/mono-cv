
import ncitLogo from '../assets/ncit.png';
import trinityLogo from '../assets/Trinity.jpg';
import EducationCard from './educations';

export default function EducationSection() {
  return (
    <div className="experience-container">
      <EducationCard
        logo={ncitLogo}
        company="Nepal College Of Information And Technology"
        role="Computer Engineering"
        date="Sept 18 - Sept 22"
        description="Graduated with a strong foundation in software development, data structures & algorithms, 
computer networks, and database systems. "
      />

      <EducationCard
        logo={trinityLogo}
        company="Trinity international College"
        role="+2 Science"
        date="March 16 - March 18"
        description=""
      />
    </div>
  );
}

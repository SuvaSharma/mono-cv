
import bcLogo from '../assets/bclogo.png';
import ExperienceCard from './experiences';

export default function ExperienceSection() {
  return (
    <div className="experience-container">
      <ExperienceCard
        logo={bcLogo}
        company="BrainCast NeuroTechnologies"
        role="Software Engineer"
        date="Jul 23 - Present"
        description="At BrainCast NeuroTechnologies, I led end-to-end development and deployment of cross-platform mobile applications. Implemented scalable state management (GetX, Riverpod, BLoC), integrated REST APIs and GraphQL, and optimized app performance across Android and iOS. Directed a team of developers, maintained clean and testable codebases, and ensured smooth delivery of high-quality applications to the Play Store and App Store."
      />

      <ExperienceCard
        logo={bcLogo}
        company="BrainCast NeuroTechnologies"
        role="Software Engineer Intern"
        date="Jan 22 - Jun 23"
        description="Contributed to building and maintaining backend services and APIs, improving data exchange between mobile apps and servers. Designed and optimized database queries and schemas, enhancing performance and reliability. Implemented and tested RESTful endpoints for production-ready mobile applications, while gaining hands-on experience with Git, agile workflows, and the complete software development lifecycle."
      />
    </div>
  );
}

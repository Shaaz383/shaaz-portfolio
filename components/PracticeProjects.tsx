// components/PracticeProjects.jsx
import React from "react";
import MagicButton from "./MagicButton"; // Make sure MagicButton is implemented
import { FaPaperPlane } from 'react-icons/fa'; // Example icon import

const projects = [
  {
    title: "Add to cart",
    image: "../javascript-projects/Screenshot (82).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
  {
    title: "Searching and Sorting",
    image: "../javascript-projects/Screenshot (81).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
  {
    title: "Form validation",
    image: "../javascript-projects/Screenshot (80).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
  {
    title: "To-do List",
    image: "../javascript-projects/Screenshot (79).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
  {
    title: "Pagination",
    image: "../javascript-projects/Screenshot (78).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
  {
    title: "Memory Game",
    image: "../javascript-projects/Screenshot (77).png",  // Add the actual image path here
    githubLink: "https://github.com/Shaaz383/Mini-Javascript-Projects",
  },
];

const PracticeProjects = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">JavaScript Practice Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className=" shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section with GitHub Link */}
      <div className="text-center mt-8">
        <a
          href="https://github.com/Shaaz383/Mini-Javascript-Projects" // Link to your GitHub repository
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="See All Projects"
            icon={<FaPaperPlane />} // Icon on the button
            position="right"        // Custom property to handle icon position in MagicButton
          />
        </a>
      </div>
    </section>
  );
};

export default PracticeProjects;

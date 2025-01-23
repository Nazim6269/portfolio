import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Selected Projects"
          sub="Recent Work"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-10">
          {projects.map((project, index) => (
            <GlowCard card={project} key={project.id} index={index}>
              {/* Project Image */}
              {/* <img
                src={project.screenshots?.[0]}
                alt={project.title}
                className="w-full rounded-lg mb-4"
              /> */}

              {/* Project Info */}
              <h3 className="font-semibold text-base text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{project.des}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {project?.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs rounded bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-3 text-sm">
                <Link
                  to={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Demo
                </Link>

                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  Source
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

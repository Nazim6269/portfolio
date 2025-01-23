import TitleHeader from "../components/TitleHeader";
import { groupedSkills } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technical Skills"
          sub="Stack & Tools"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {groupedSkills.map((group, index) => (
            <div key={index} className="card-border rounded-xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-md bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

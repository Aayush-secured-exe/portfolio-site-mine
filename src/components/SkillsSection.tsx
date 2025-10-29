import { title } from "process";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C/C++', 'Python', 'JavaScript']
    },
    {
      title: 'Frontend Technologies',
      skills: ['CSS3', 'React', 'HTML5', 'Tailwind CSS']
    },
    {
      title: 'Backend Technologies',
      skills: ['JSP', 'PHP', 'Java Servlet']
    },
    {
      title: 'Databases & Tools',
      skills: ['JDBC', 'MySQL', 'XAMPP', 'phpMyAdmin']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Git', 'Vercel', 'GitHub', 'Railway']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Team Leadership', 'Project Management']
    }
  ];

  return (
    <>
      {/* Black Header Section */}
      <section className="bg-[var(--portfolio-dark-card)] py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[var(--portfolio-bg)] px-8 lg:px-12">Skills</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="skills" className="section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="bg-[var(--portfolio-card)] rounded-2xl card-padding lg:px-12 lg:py-14"
              >
                <h3
                  className="fade-in-up text-3xl leading-[1] md:text-2xl text-[var(--portfolio-dark-card)]"
                  style={{ animationDelay: `${catIndex * 0.2}s` }}
                >
                  {category.title}
                </h3>
                <div className="fade-in-up">
                  {catIndex < skillCategories.length && (
                    <div
                      className="experience-divider fade-in-up my-4"
                      style={{ animationDelay: `${catIndex * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                  {category.skills.map((skill, skillIndex) => (
                    <p
                      key={`${category.title}-${skill}`}
                      className="fade-in-up text-base font-body text-[var(--portfolio-dark-card)] mb-1"
                      style={{ animationDelay: `${skillIndex * 0.2 + 0.5}s` }}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;

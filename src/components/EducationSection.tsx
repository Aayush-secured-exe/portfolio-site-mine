const EducationSection = () => {
  const education = [
    // {
    //   institution: 'Stanford University',
    //   degree: 'Master of Science in Computer Science',
    //   period: '2017 - 2019',
    //   details: 'Focus on Software Engineering and Machine Learning'
    // },
    {
      institution: 'University of Calcutta, India',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 - 2025',
      details: 'Graduated with great praise, CGPA: 6.3/10'
    }
  ];

  const internships = [
    // {
    //   company: 'Google',
    //   role: 'Software Engineering Intern',
    //   period: 'Summer 2018'
    // },
    {
      company: 'TECHOCTANET Services Pvt. Ltd.',
      role: 'Web Development Intern',
      period: 'October 2024'
    }
  ];

  // New: Projects data
  const techStack = [
    'VS Code, Eclipse IDE, PyCharm',
    'MySQL Workbench, XAMPP',
    'Git, GitHub, Vite'
  ];
  
  const certifications = [
    'C Programming Certificate - State Govt.',
    'Java Programming Certificate - State Govt.'
  ];

  return (
    <>
      {/* [var(--portfolio-dark-card)] Header Section */}
      <section className="bg-[var(--portfolio-dark-card)] py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[var(--portfolio-bg)] px-8 lg:px-12">Education & Certifications</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="education" className="md:my-4 section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {/* Education Column */}
            <div className="bg-[var(--portfolio-card)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-3xl leading-[1] fade-in-up md:text-2xl text-[var(--portfolio-dark-card)] mb-8">Education</h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-[var(--portfolio-dark-card)] font-body">{edu.degree}</h4>
                  <p className="text-[var(--portfolio-dark-card)] text-sm font-medium font-body">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#6c757d] mb-2 font-body">{edu.period}</p>
                  <p className="text-sm text-[var(--portfolio-dark-card)] font-body">{edu.details}</p>
                  {index < education.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Internships Column */}
            <div className="bg-[var(--portfolio-card)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-3xl leading-[1] fade-in-up md:text-2xl text-[var(--portfolio-dark-card)] mb-8">Internships</h3>
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${(education.length + techStack.length + index) * 0.2}s` }}
                >
                  <h4 className="text-[var(--portfolio-dark-card)] font-body">{internship.role}</h4>
                  <p className="text-[var(--portfolio-dark-card)] text-sm font-medium font-body">
                    {internship.company}
                  </p>
                  <p className="text-xs text-[#6c757d] font-body">{internship.period}</p>
                  {index < internships.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Projects Column (replaces cloned Internships) */}
            <div className="bg-[var(--portfolio-card)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-3xl leading-[1] fade-in-up md:text-2xl text-[var(--portfolio-dark-card)] mb-8">Tools & Technologies</h3>
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${(education.length + internships.length + index) * 0.2}s` }}
                >
                  <p className="text-sm font-medium text-[var(--portfolio-dark-card)] font-body">{tech}</p>
                  {index < techStack.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="bg-[var(--portfolio-card)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-3xl leading-[1] fade-in-up md:text-2xl text-[var(--portfolio-dark-card)] mb-8">Certifications</h3>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${(education.length + techStack.length + internships.length + index) * 0.2}s` }}
                >
                  <p className="text-sm font-medium text-[var(--portfolio-dark-card)] font-body">{cert}</p>
                  {index < certifications.length && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;

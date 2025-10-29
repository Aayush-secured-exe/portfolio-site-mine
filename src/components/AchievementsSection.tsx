const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Deployed First Full-Stack Project',
      organization: 'Stanford University',
      description: 'Successfully deployed a Java Servlet + MySQL web app on Railway.'
    },
    {
      title: 'Face Recognition in Python',
      organization: 'Tech Solutions Inc.',
      description: 'Built an attendance system using OpenCV and MySQL for student management.'
    },
    {
      title: 'Certification in C & Advanced Java',
      organization: 'DevCommunity',
      description: 'Certified by Government of West Bengal for proficiency in C and Advanced Java.'
    },
    {
      title: 'Mastered Core Java & JDBC',
      organization: 'TechCrunch Disrupt',
      description: 'Gained strong knowledge in backend development and database connectivity.'
    }
  ];

  return (
    <>
      {/* [var(--portfolio-dark-card)] Header Section */}
      <section className="bg-[var(--portfolio-dark-card)] py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[var(--portfolio-bg)] px-8 lg:px-12">Milestones</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-[var(--portfolio-card)] rounded-2xl card-padding lg:px-12 lg:py-14"
              >
                <h3
                  className="fade-in-up text-3xl leading-[1] md:text-2xl text-[var(--portfolio-dark-card)]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {achievement.title}
                </h3>
                <div className="fade-in-up">
                  {index < achievements.length && (
                    <div
                      className="experience-divider fade-in-up my-4"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
                <p
                  className="text-sm fade-in-up text-[var(--portfolio-dark-card)] font-body mb-4"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  {/* {achievement.organization} */}
                </p>
                <p
                  className="fade-in-up font-body text-[var(--portfolio-dark-card)] leading-relaxed pl-4"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;
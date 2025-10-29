const AboutSection = () => {
  return <section id="about" className="md:py-20 p-8 md:my-4 bg-[var(--portfolio-card)] rounded-2xl section-responsive">
      <div className="w-full sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="fade-in-up">
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--portfolio-dark-card)]">
              I'm a passionate software engineer with experience in web development, 
              mobile applications, and system design. I love creating efficient, 
              scalable solutions that make a real impact. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
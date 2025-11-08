import experienceImage from '@/assets/expr.jpeg';
import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');

    const apply = () => {
      if (mql.matches && leftRef.current) {
        setImgHeight(leftRef.current.offsetHeight);
      } else {
        setImgHeight(null);
      }
    };

    // Observe left column size changes
    let ro: ResizeObserver | null = null;
    if (leftRef.current) {
      ro = new ResizeObserver(apply);
      ro.observe(leftRef.current);
    }

    apply();

    const handleChange = () => apply();
    window.addEventListener('resize', handleChange);

    // Preferred API
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange);
    } else if ('addListener' in mql) {
      (mql as MediaQueryList & {
        addListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
        removeListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
      }).addListener(handleChange as any);
    }

    return () => {
      window.removeEventListener('resize', handleChange);
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', handleChange);
      } else if ('removeListener' in mql) {
        (mql as any).removeListener(handleChange);
      }
      ro?.disconnect();
    };
  }, []);

  const experiences = [
    {
      company: 'Personal Project',
      role: 'Personal Portfolio Website',
      period: 'Autumn 2025',
      link: 'https://portfolio-site-by-aayush.vercel.app/', // Add your portfolio link
      responsibilities: [
        'Built a responsive portfolio website using React, Tailwind CSS, and Vite',
        'Designed a modern UI with animations to showcase projects and skills',
        'Deployed on Vercel with a custom domain',
      ],
    },
    {
      company: 'Personal Project',
      role: 'Blood Donation Portal',
      period: 'Summer 2025',
      link: 'https://github.com/Aayush-secured-exe/BloodDonationProject', // Add your project link
      responsibilities: [
        'Developed a donor management system using Java Servlets, JSP, and MySQL',
        'Implemented secure login/signup with bcrypt and added light/dark theme toggle',
        'Deployed the project on Railway for live usage',
      ],
    },
    {
      company: 'Group Project',
      role: 'Attendance System with Face Recognition',
      period: 'Summer 2025',
      link: 'https://github.com/yourusname/attendance-system', // Add your project links
      responsibilities: [
        'Built a real-time attendance system using Python, OpenCV, and MySQL',
        'Implemented face recognition for automated student attendance tracking',
        'Collaborated with team to design a web interface and manage the database',
      ],
    },
  ];

  return (
    <section id="experience" className="flex section-responsive md:my-4 rounded-2xl">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] md:gap-4 md:items-stretch">
          {/* Left column */}
          <div ref={leftRef} className="order-2 md:order-1 space-y-[5px] sm:space-y-[5px] md:space-y-[20px] lg:space-y-[20px] md:h-full">
            <div className="bg-[var(--portfolio-dark-card)] py-12 rounded-2xl">
              <div className="fade-in-up">
                <h2 className="text-4xl lg:text-5xl leading-[1] text-[var(--portfolio-bg)] px-8 lg:px-12">
                  Projects
                </h2>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--portfolio-card)] md:pr-[2px] card-padding lg:px-12 lg:py-14">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <div className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="mb-4">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-3xl leading-[1] md:text-xl text-[var(--portfolio-dark-card)] mb-1 cursor-pointer hover:underline decoration-1 font-heading"
                        >
                          {exp.role}
                        </a>

                        <p className="text-[var(--portfolio-dark-card)] font-body text-sm">{exp.company}</p>
                        <p className="text-xs font-body text-[#6c757d] mb-2">{exp.period}</p>
                      </div>
                      <ul className="space-y-0 list-disc list-outside pl-5 marker:text-[var(--portfolio-dark-card)]">
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx} className="text-sm fade-in-up text-[var(--portfolio-dark-card)] leading-relaxed">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="fade-in-up">
                      {index < experiences.length - 1 && (
                        <div
                          className="md:my-4 lg:my-8 experience-divider fade-in-up"
                          style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: image (top on mobile, right on md+) */}
          <div className="order-1 md:order-2 md:h-full">
            <div className="w-full md:h-full">
              <img
                src={experienceImage}
                alt="Professional working environment"
                style={imgHeight ? { height: `${imgHeight}px` } : undefined}
                className="w-full h-[450px] md:h-auto object-cover object-right rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

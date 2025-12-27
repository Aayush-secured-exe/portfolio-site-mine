import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero22.png";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)"); // Tailwind md
    const apply = () => {
      if (mql.matches && leftRef.current) {
        setImgHeight(leftRef.current.offsetHeight);
      } else {
        setImgHeight(null);
      }
    };

    let ro: ResizeObserver | null = null;
    if (leftRef.current) {
      ro = new ResizeObserver(apply);
      ro.observe(leftRef.current);
    }

    apply();
    const handleChange = () => apply();
    window.addEventListener("resize", handleChange);
    mql.addEventListener?.("change", handleChange);
    // legacy fallback

    mql.addListener?.(handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
      mql.removeEventListener?.("change", handleChange);

      mql.removeListener?.(handleChange);
      ro?.disconnect();
    };
  }, []);

  const contactInfo = [
    { icon: Phone, label: "98XXX-XXX28", href: "tel:+9198XXXXX328" },
    { icon: Mail, label: "aayush@gmail.com", href: "mailto:aayushshaw240@gmail.com" },
    { icon: MapPin, label: "West Bengal, IN", href: "https://maps.app.goo.gl/3xv8VydBs1suk6Y9A" },
    { icon: Linkedin, label: "aayushshaw", href: "https://www.linkedin.com/in/aayushshaw/" },
  ];

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
      </Helmet>
      <section className="flex section-responsive md:my-4 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-[5px] md:gap-4 md:items-stretch w-full">
          {/* Right Column - Profile Image (first on mobile) */}
          <div className="order-1 md:order-2 md:h-full">
            <div className="w-full md:h-full">
              <img
                src={heroImage}
                alt="Aayush Shaw - Professional Portrait"
                // Enforce exact match on md+; mobile falls back to class height
                style={imgHeight ? { height: `${imgHeight}px` } : undefined}
                className="w-full h-[450px] md:h-auto object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Left Column - Name and Contact Cards (second on mobile) */}
          <div
            ref={leftRef}
            className="order-2 md:order-1 md:h-full space-y-[5px] sm:space-y-[5px] md:space-y-[20px] lg:space-y-[20px]"
          >
            <div className="bg-[var(--portfolio-dark-card)] text-[var(--portfolio-bg)] name-card-padding md:p-12 md:pb-20 rounded-2xl">
              <h1 className="fade-in-up text-4xl md:text-6xl lg:text-7xl leading-tight">
                Aayush <br className="hidden md:block" /> Shaw
              </h1>
            </div>

            <div className="bg-[var(--portfolio-card)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <p className="fade-in-up text-md md:text-lg lg:text-xl font-medium text-[var(--portfolio-dark-card)]">
                Aspiring Software Developer
                <br />
                and Coding Enthusiast
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target='_blank'
                    className="bg-[var(--portfolio-card)] card-padding rounded-2xl flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="fade-in-up w-4 h-4 text-[var(--portfolio-dark-card)] shrink-0" />
                    <span className="fade-in-up text-[12px] md:text-xs font-medium text-[var(--portfolio-dark-card)]">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

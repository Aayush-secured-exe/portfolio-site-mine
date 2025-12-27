import { Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: Phone, text: '+91 98311 7XXXX' },
    { icon: Mail, text: 'aayushshaw240@gmail.com' },
    { icon: MapPin, text: 'Hooghly, West Bengal, IN' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aayushshaw/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Aayush-secured-exe', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/ig_aayush_yt', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[var(--portfolio-dark-card)] text-[var(--portfolio-bg)] rounded-t-2xl rounded-b-none my-1 mx-0 mb-0 md:my-4 md:mx-0 md:mb-0 lg:m-4 lg:rounded-2xl">
      <div className="w-full card-padding lg:px-12 lg:py-14">
        {/* Name */}
        <div>
          <h3 className="text-7xl fade-in-up mb-8 md:mb-20">Aayush Shaw</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-body mb-4 fade-in-up">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-[var(--portfolio-bg)] fade-in-up" />
                    <span className="text-sm fade-in-up">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-lg font-body mb-4 fade-in-up">Connect With Me</h4>
            <div className="flex md:justify-end space-x-4 fade-in-up">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="text-[var(--portfolio-bg)] hover:text-[#6c757d] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-[var(--portfolio-bg)] hover:text-[#6c757d] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="fade-in-up">
          <div
            className="footer-divider fade-in-up my-8"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <p className="text-sm">
          © 2035 by Aayush Shaw. Powered and secured by{" "}
          <a
            href="https://www.linkedin.com/in/aayushshaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6c757d] transition-colors"
          >
            Aayush
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
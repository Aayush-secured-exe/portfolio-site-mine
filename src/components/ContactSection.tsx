import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_gldz9yr";
const EMAILJS_TEMPLATE_ID = "template_vusf2rg";
const EMAILJS_PUBLIC_KEY = "QoENOA3zi3cDHv5Wd";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Anti-spam: if honeypot is filled, silently ignore
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          page_url: window.location.href,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ firstName: '', lastName: '', email: '', message: '', honeypot: '' });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="md:my-4 section-responsive">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-[5px] md:gap-5 items-center">
          {/* Left Column - Heading */}
          <div className="bg-[var(--portfolio-dark-card)] rounded-2xl h-full card-padding lg:px-12 lg:py-14">
            <div className="fade-in-up">
              <div className='text-lg mb-2 text-[var(--portfolio-bg)] leading-tight'>
                Contact Me
              </div>
              <h2 className="text-4xl lg:text-5xl text-[var(--portfolio-bg)] leading-tight">
                Reach Out for <br className="hidden lg:block" />Opportunities
              </h2>
              <p className="text-base font-body text-[var(--portfolio-bg)] mt-6">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology and innovation.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full bg-[var(--portfolio-card)] rounded-2xl justify-end">
            <form onSubmit={handleSubmit} className="fade-in-up p-8 lg:ml-auto lg:max-w-sm lg:pt-14 lg:pr-12 pb-24">
              <div className="space-y-8">
                <div>
                  <label htmlFor="firstName" className="block text-base text-[var(--portfolio-dark-card)] mb-3">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-[0.5px] border-[var(--portfolio-dark-card)] pb-2 focus:outline-none focus:border-[#6c757d] text-[var(--portfolio-dark-card)] placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-base text-[var(--portfolio-dark-card)] mb-3">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-[0.5px] border-[var(--portfolio-dark-card)] pb-2 focus:outline-none focus:border-[#6c757d] text-[var(--portfolio-dark-card)] placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base text-[var(--portfolio-dark-card)] mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-[0.5px] border-[var(--portfolio-dark-card)] pb-2 focus:outline-none focus:border-[#6c757d] text-[var(--portfolio-dark-card)] placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base text-[var(--portfolio-dark-card)] mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-0 border-b-[0.5px] border-[var(--portfolio-dark-card)] pb-2 focus:outline-none focus:border-[#6c757d] text-[var(--portfolio-dark-card)] placeholder-gray-500 resize-none"
                  />
                </div>
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px", opacity: 0 }}
                />
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      bg-[var(--portfolio-dark-card)] text-[var(--portfolio-bg)] border border-[var(--portfolio-dark-card)]
                      w-full lg:w-auto lg:px-12 py-3 rounded-full text-base 
                      transition-colors 
                      disabled:opacity-50 disabled:cursor-not-allowed
                      hover:bg-transparent hover:text-[var(--portfolio-dark-card)] hover:border-[0.5px] hover:border-[var(--portfolio-dark-card)]
                    "
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
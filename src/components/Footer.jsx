import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading text-3xl font-black text-white tracking-widest block mb-6">
              BODY<span className="text-accent">CARE</span>
            </a>
            <p className="text-gray-400 font-body mb-6 leading-relaxed">
              Premium gym facility dedicated to building strength, burning limits, and transforming lives. Your journey to the strongest version of yourself starts here.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaYoutube} />
              <SocialIcon Icon={FaTwitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Membership', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-gray-400 hover:text-accent transition-colors block w-fit">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-xl mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block text-white font-semibold mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span className="block text-white font-semibold mb-1">Email</span>
                hello@bodycare.com
              </li>
              <li>
                <span className="block text-white font-semibold mb-1">Address</span>
                123 Fitness Avenue, Iron City, NY 10001
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-semibold text-xl mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest fitness tips and exclusive offers.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => {e.preventDefault();}}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary border border-white/10 p-3 text-white focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-accent text-white font-heading font-semibold py-3 px-6 hover:bg-white hover:text-primary transition-all duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 Body Care. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 text-white rounded-full">
    <Icon size={18} />
  </a>
);

export default Footer;

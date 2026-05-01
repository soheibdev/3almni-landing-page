import { motion } from 'framer-motion';
import { BookOpen, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import './Footer.css';

const platformLinks = [
  { label: 'لوحة المعلم', href: 'https://3almni-teacher.vercel.app' },
  { label: 'منصة الولي', href: 'https://3almni-parent.vercel.app' },
  { label: 'لوحة الأخصائي', href: 'https://3almni-psychologist.vercel.app' },
  { label: 'إدارة المدرسة', href: 'https://3almni-admin.vercel.app' },
];

const pageLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'المشكلة', href: '#problem' },
  { label: 'الحل', href: '#solution' },
  { label: 'المميزات', href: '#features' },
  { label: 'التحميل', href: '#download' },
];

const Footer = () => {
  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top CTA */}
        <motion.div
          className="footer__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>مستعد لتغيير تجربة التعلم؟</h2>
          <p>انضم إلى منظومة علّمني وامنح أطفالك مستقبلًا أفضل</p>
          <div className="footer__cta-actions">
            <a href="#download" className="btn btn-primary btn-lg" onClick={(e) => handleLinkClick(e, '#download')}>
              ابدأ الآن مجانًا 🚀
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="علّمني" className="footer__logo-img" />
              <span>عَلِّمْني</span>
            </div>
            <p className="footer__brand-desc">
              منظومة تعليمية ذكية متكاملة تحوّل التعلم إلى مغامرة ممتعة للأطفال
              مع متابعة شاملة من المعلمين والأولياء.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>روابط سريعة</h4>
            <ul>
              {pageLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="footer__col">
            <h4>المنصات</h4>
            <ul>
              {platformLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>تواصل معنا</h4>
            <ul className="footer__contact">
              <li>
                <Mail size={16} />
                <span>contact@3almni.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+213 XX XXX XXXX</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>الجزائر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            صُنع بكل <Heart size={14} style={{ color: '#FD79A8', display: 'inline', verticalAlign: 'middle' }} /> بواسطة فريق علّمني © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

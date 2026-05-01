import { motion } from 'framer-motion';
import { Smartphone, MonitorDot, Users, Brain, Building2, ArrowLeft, ExternalLink, Layers } from 'lucide-react';
import './Modules.css';

const modules = [
  {
    title: 'تطبيق التلميذ',
    desc: 'بيئة تعلم تفاعلية ممتعة تشمل دروسًا، قصصًا، ألعابًا تعليمية، ونظام مكافآت يُحفّز الطفل على التعلم والإبداع.',
    icon: <Smartphone size={28} />,
    emoji: '👦',
    gradient: 'linear-gradient(135deg, #6C5CE7, #A29BFE)',
    shadowColor: 'rgba(108, 92, 231, 0.3)',
    link: 'https://github.com/soheibdev/3almni-app/releases/download/v1.0.0/app-release.apk',
    linkText: 'تحميل التطبيق',
    isApp: true,
  },
  {
    title: 'لوحة المعلم',
    desc: 'لوحة تحكم شاملة لإدارة الفصول الدراسية، متابعة تقدم التلاميذ، إنشاء الدروس والاختبارات، والتواصل مع الأولياء.',
    icon: <MonitorDot size={28} />,
    emoji: '👨‍🏫',
    gradient: 'linear-gradient(135deg, #00CEC9, #55EFC4)',
    shadowColor: 'rgba(0, 206, 201, 0.3)',
    link: 'https://3almni-teacher.vercel.app',
    linkText: 'الدخول',
  },
  {
    title: 'منصة الولي',
    desc: 'متابعة مباشرة لأداء الأبناء الدراسي، تقارير مفصّلة، التواصل مع المعلمين، والاطلاع على الواجبات والنتائج.',
    icon: <Users size={28} />,
    emoji: '👨‍👩‍👦',
    gradient: 'linear-gradient(135deg, #FDCB6E, #F39C12)',
    shadowColor: 'rgba(253, 203, 110, 0.3)',
    link: 'https://3almni-parent.vercel.app',
    linkText: 'الدخول',
  },
  {
    title: 'لوحة الأخصائي النفسي',
    desc: 'أدوات متخصصة لمتابعة الحالة النفسية والسلوكية للتلاميذ، تقديم تقارير دورية، والتواصل مع الأولياء والمعلمين.',
    icon: <Brain size={28} />,
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #FD79A8, #A29BFE)',
    shadowColor: 'rgba(253, 121, 168, 0.3)',
    link: 'https://3almni-psychologist.vercel.app',
    linkText: 'الدخول',
  },
  {
    title: 'نظام إدارة المدرسة',
    desc: 'نظام ERP متكامل لإدارة شؤون المدرسة: التلاميذ، المعلمين، الجداول الزمنية، الامتحانات، الحضور، والمالية.',
    icon: <Building2 size={28} />,
    emoji: '🏫',
    gradient: 'linear-gradient(135deg, #E17055, #FDCB6E)',
    shadowColor: 'rgba(225, 112, 85, 0.3)',
    link: 'https://3almni-admin.vercel.app',
    linkText: 'الدخول',
  },
];

const Modules = () => {
  return (
    <section id="modules" className="modules section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge" style={{ background: 'rgba(108, 92, 231, 0.1)', color: 'var(--primary)' }}>
            <Layers size={16} />
            المنصات
          </div>
          <h2>منظومة <span style={{ color: 'var(--primary)' }}>علّمني</span> المتكاملة</h2>
          <p>5 منصات متصلة تعمل معًا لتقديم تجربة تعليمية شاملة لكل الأطراف</p>
        </motion.div>

        {/* Modules Grid */}
        <div className="modules__grid">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className="modules__card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Top Gradient Bar */}
              <div className="modules__card-bar" style={{ background: mod.gradient }} />

              {/* Emoji Badge */}
              <div className="modules__emoji">{mod.emoji}</div>

              {/* Icon */}
              <div className="modules__icon" style={{ background: mod.gradient, boxShadow: `0 8px 25px ${mod.shadowColor}` }}>
                {mod.icon}
              </div>

              <h3 className="modules__title">{mod.title}</h3>
              <p className="modules__desc">{mod.desc}</p>

              {/* CTA Button */}
              <a
                href={mod.link}
                className="modules__btn"
                style={{ background: mod.gradient, boxShadow: `0 4px 15px ${mod.shadowColor}` }}
                target={mod.isApp ? '_self' : '_blank'}
                rel={mod.isApp ? '' : 'noopener noreferrer'}
                onClick={mod.isApp ? (e) => {
                  e.preventDefault();
                  document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                <span>{mod.linkText}</span>
                {mod.isApp ? <ArrowLeft size={16} /> : <ExternalLink size={16} />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;

import { motion } from 'framer-motion';
import { BookX, UsersRound, EyeOff, Clock, AlertTriangle } from 'lucide-react';
import './Problem.css';

const problems = [
  {
    icon: <BookX size={32} />,
    title: 'صعوبة الفهم والتلقين',
    desc: 'الأساليب التقليدية تعتمد على الحفظ والتلقين مما يُصعّب على الطفل فهم المحتوى واستيعابه بشكل حقيقي.',
    color: '#E17055',
    bg: 'rgba(225, 112, 85, 0.08)',
  },
  {
    icon: <UsersRound size={32} />,
    title: 'نقص التفاعل والمشاركة',
    desc: 'بيئة الفصل الدراسي التقليدية لا توفر مساحة كافية لمشاركة كل تلميذ بشكل فعّال في العملية التعليمية.',
    color: '#6C5CE7',
    bg: 'rgba(108, 92, 231, 0.08)',
  },
  {
    icon: <EyeOff size={32} />,
    title: 'غياب المتابعة المستمرة',
    desc: 'الأولياء لا يملكون أدوات فعّالة لمتابعة تقدم أبنائهم الدراسي ونشاطهم اليومي في المدرسة.',
    color: '#00CEC9',
    bg: 'rgba(0, 206, 201, 0.08)',
  },
  {
    icon: <Clock size={32} />,
    title: 'ملل وانعدام الدافعية',
    desc: 'غياب عنصر المتعة والتحفيز يجعل التعلم تجربة مملة ويُقلل من رغبة الأطفال في الدراسة والمذاكرة.',
    color: '#FDCB6E',
    bg: 'rgba(253, 203, 110, 0.08)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const Problem = () => {
  return (
    <section id="problem" className="problem section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge" style={{ background: 'rgba(225, 112, 85, 0.1)', color: '#E17055' }}>
            <AlertTriangle size={16} />
            المشكلة
          </div>
          <h2>مشاكل التعليم التقليدي</h2>
          <p>تحديات حقيقية يعاني منها ملايين التلاميذ والأولياء والمعلمين كل يوم</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="problem__grid">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              className="problem__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="problem__icon" style={{ background: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="problem__title">{item.title}</h3>
              <p className="problem__desc">{item.desc}</p>
              <div className="problem__accent" style={{ background: item.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

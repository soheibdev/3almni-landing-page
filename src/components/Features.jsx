import { motion } from 'framer-motion';
import { Target, MessageCircleHeart, TrendingUp, Settings2, Shield, Zap, Globe, Star } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Target size={28} />,
    title: 'تعلم متكيّف',
    desc: 'المحتوى يتكيّف تلقائيًا مع مستوى كل تلميذ لتقديم تجربة تعلم مخصصة.',
    color: '#6C5CE7',
  },
  {
    icon: <MessageCircleHeart size={28} />,
    title: 'نظام تواصل متكامل',
    desc: 'قنوات تواصل فعّالة بين المعلمين والأولياء لمتابعة الأبناء بشكل مستمر.',
    color: '#00CEC9',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'تتبع التقدم',
    desc: 'تقارير مفصلة ورسوم بيانية تعرض تطور مستوى التلميذ في كل مادة.',
    color: '#FDCB6E',
  },
  {
    icon: <Settings2 size={28} />,
    title: 'توصيات ذكية',
    desc: 'اقتراحات محتوى مخصصة بناءً على نقاط القوة والضعف لكل تلميذ.',
    color: '#FD79A8',
  },
  {
    icon: <Shield size={28} />,
    title: 'بيئة آمنة',
    desc: 'محتوى تعليمي مراقب ومحمي يضمن تجربة آمنة تمامًا للأطفال.',
    color: '#E17055',
  },
  {
    icon: <Zap size={28} />,
    title: 'أداء سريع',
    desc: 'تطبيقات خفيفة وسريعة تعمل على جميع الأجهزة دون تأخير.',
    color: '#A29BFE',
  },
  {
    icon: <Globe size={28} />,
    title: 'دعم متعدد',
    desc: 'يدعم المنهاج الجزائري مع إمكانية التوسع لمناهج دراسية أخرى.',
    color: '#55EFC4',
  },
  {
    icon: <Star size={28} />,
    title: 'تحفيز مستمر',
    desc: 'نظام مكافآت وإنجازات يحافظ على دافعية التلميذ طوال رحلة التعلم.',
    color: '#74B9FF',
  },
];

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge" style={{ background: 'rgba(0, 206, 201, 0.1)', color: '#00CEC9' }}>
            <Star size={16} />
            المميزات
          </div>
          <h2>لماذا <span style={{ color: 'var(--primary)' }}>علّمني</span>؟</h2>
          <p>مميزات تجعل تجربة التعلم استثنائية لكل الأطراف</p>
        </motion.div>

        {/* Features Grid */}
        <div className="features__grid">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="features__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="features__icon" style={{ color: item.color, background: `${item.color}12` }}>
                {item.icon}
              </div>
              <h3 className="features__title">{item.title}</h3>
              <p className="features__desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

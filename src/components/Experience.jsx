import { motion } from 'framer-motion';
import { Gamepad2, BookOpenText, Puzzle, Trophy, Wand2 } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    icon: <Gamepad2 size={36} />,
    title: 'ألعاب تعليمية',
    desc: 'تعلّم من خلال ألعاب ممتعة تُحوّل المفاهيم الصعبة إلى تحديات مشوّقة.',
    gradient: 'linear-gradient(135deg, #6C5CE7, #A29BFE)',
  },
  {
    icon: <BookOpenText size={36} />,
    title: 'قصص تفاعلية',
    desc: 'قصص تعليمية مصوّرة تُشرك الطفل في أحداثها وتُعلّمه بأسلوب سردي ممتع.',
    gradient: 'linear-gradient(135deg, #00CEC9, #55EFC4)',
  },
  {
    icon: <Puzzle size={36} />,
    title: 'تحديات وألغاز',
    desc: 'ألغاز ذكية وتحديات يومية تُنمّي مهارات التفكير النقدي وحل المشكلات.',
    gradient: 'linear-gradient(135deg, #FDCB6E, #E17055)',
  },
  {
    icon: <Trophy size={36} />,
    title: 'مكافآت وإنجازات',
    desc: 'اجمع النقاط والشارات وتسلّق لوحة المتصدرين لتصبح بطل التعلم!',
    gradient: 'linear-gradient(135deg, #FD79A8, #A29BFE)',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge" style={{ background: 'rgba(253, 121, 168, 0.1)', color: '#FD79A8' }}>
            <Wand2 size={16} />
            التجربة
          </div>
          <h2>تعلّم بطريقة <span style={{ color: 'var(--primary)' }}>مختلفة تمامًا</span></h2>
          <p>اكتشف كيف يتعلم أطفالنا عبر اللعب والمتعة والتحدي</p>
        </motion.div>

        {/* Content */}
        <div className="experience__layout">
          {/* Image Side */}
          <motion.div
            className="experience__image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="experience__image-wrapper">
              <img src="/gamification.png" alt="أطفال يتعلمون عبر اللعب" />
              <div className="experience__image-glow" />
            </div>
            {/* Floating Badge */}
            <motion.div
              className="experience__float-badge"
              animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span>🎮</span>
              <span>تعلّم باللعب!</span>
            </motion.div>
          </motion.div>

          {/* Cards Side */}
          <div className="experience__cards">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                className="experience__card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ x: -8, transition: { duration: 0.3 } }}
              >
                <div className="experience__card-icon" style={{ background: item.gradient }}>
                  {item.icon}
                </div>
                <div className="experience__card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

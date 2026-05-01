import { motion } from 'framer-motion';
import { Sparkles, Gamepad2, BrainCircuit, LineChart, CheckCircle2, Lightbulb, ArrowLeft } from 'lucide-react';
import './Solution.css';

const solutions = [
  {
    icon: <Sparkles size={32} />,
    title: 'تعلم تفاعلي ذكي',
    desc: 'دروس تفاعلية مصممة بعناية تشمل فيديوهات وتمارين وقصص تعليمية تُحفّز الفضول وتبسّط المفاهيم.',
    features: ['فيديوهات تعليمية', 'تمارين تفاعلية', 'قصص ممتعة'],
    gradient: 'linear-gradient(135deg, #6C5CE7, #A29BFE)',
    lightBg: 'rgba(108, 92, 231, 0.06)',
  },
  {
    icon: <Gamepad2 size={32} />,
    title: 'تعلم عبر اللعب (Gamification)',
    desc: 'نظام نقاط وشارات ومستويات يحوّل كل درس إلى تحدٍّ ممتع يُحفّز الطفل على المواصلة والتفوق.',
    features: ['نظام نقاط', 'شارات إنجاز', 'لوحة المتصدرين'],
    gradient: 'linear-gradient(135deg, #00CEC9, #55EFC4)',
    lightBg: 'rgba(0, 206, 201, 0.06)',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'متابعة ذكية شاملة',
    desc: 'لوحات تحكم ذكية للمعلمين والأولياء والأخصائيين النفسيين لمتابعة تقدم كل تلميذ بدقة.',
    features: ['تقارير فورية', 'تنبيهات ذكية', 'تحليل الأداء'],
    gradient: 'linear-gradient(135deg, #FDCB6E, #E17055)',
    lightBg: 'rgba(253, 203, 110, 0.06)',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="solution section">
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
            <Lightbulb size={16} />
            الحل
          </div>
          <h2>كيف تحلّ <span style={{ color: 'var(--primary)' }}>علّمني</span> المشكلة؟</h2>
          <p>نقدّم منظومة تعليمية متكاملة تجمع بين المتعة والفعالية</p>
        </motion.div>

        {/* Solution Cards */}
        <div className="solution__grid">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              className="solution__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ background: item.lightBg }}
            >
              <div className="solution__icon" style={{ background: item.gradient }}>
                {item.icon}
              </div>
              <h3 className="solution__title">{item.title}</h3>
              <p className="solution__desc">{item.desc}</p>
              <ul className="solution__features">
                {item.features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle2 size={16} style={{ color: '#00CEC9', flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#modules" className="solution__link">
                <span>اكتشف المزيد</span>
                <ArrowLeft size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

import { motion } from 'framer-motion';
import { Download, MonitorPlay, Star, Rocket, BookOpen, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
        <div className="hero__bg-grid" />
      </div>

      {/* Floating Decorations */}
      <div className="hero__decorations">
        <motion.div className="hero__deco hero__deco--star" animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Star size={28} />
        </motion.div>
        <motion.div className="hero__deco hero__deco--rocket" animate={{ y: [-15, 5, -15], x: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }}>
          <Rocket size={32} />
        </motion.div>
        <motion.div className="hero__deco hero__deco--book" animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity }}>
          <BookOpen size={26} />
        </motion.div>
        <motion.div className="hero__deco hero__deco--sparkle" animate={{ y: [-8, 12, -8], scale: [1, 1.2, 1] }} transition={{ duration: 3.5, repeat: Infinity }}>
          <Sparkles size={22} />
        </motion.div>
      </div>

      <div className="container hero__container">
        {/* Text Content */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={16} />
            <span>منصة تعليمية ذكية للجيل الجديد</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            مع <span className="hero__title-highlight">عَلِّمْني</span>
            <br />
            التعلّم أصبح <span className="hero__title-fun">مغامرة ممتعة</span> 🚀
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            منظومة تعليمية متكاملة تحوّل التعليم التقليدي إلى تجربة تفاعلية ممتعة
            من خلال الألعاب والقصص والذكاء الاصطناعي، مع متابعة مستمرة من الأولياء والمعلمين.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#download" className="btn btn-primary btn-lg hero__btn-download">
              <Download size={20} />
              تحميل التطبيق
            </a>
            <a href="#modules" className="btn btn-secondary btn-lg hero__btn-demo">
              <MonitorPlay size={20} />
              تجربة المنصة
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-num">5</span>
              <span className="hero__stat-label">منصات متكاملة</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100+</span>
              <span className="hero__stat-label">درس تفاعلي</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">∞</span>
              <span className="hero__stat-label">متعة التعلم</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.85, x: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__image-glow" />
          <motion.img
            src="/hero.png"
            alt="أطفال يتعلمون بسعادة مع منصة علّمني"
            className="hero__image-main"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating Cards */}
          <motion.div
            className="hero__float-card hero__float-card--1"
            animate={{ y: [-5, 10, -5], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="hero__float-emoji">🏆</span>
            <span>+50 نقطة</span>
          </motion.div>
          <motion.div
            className="hero__float-card hero__float-card--2"
            animate={{ y: [5, -10, 5], rotate: [2, -2, 2] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="hero__float-emoji">⭐</span>
            <span>ممتاز!</span>
          </motion.div>
          <motion.div
            className="hero__float-card hero__float-card--3"
            animate={{ y: [-8, 6, -8] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <span className="hero__float-emoji">📚</span>
            <span>درس جديد</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Bottom */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

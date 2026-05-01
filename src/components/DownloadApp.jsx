import { motion } from 'framer-motion';
import { Download, Star, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import './DownloadApp.css';

const highlights = [
  { icon: <Zap size={20} />, text: 'سريع وخفيف' },
  { icon: <ShieldCheck size={20} />, text: 'آمن 100%' },
  { icon: <Star size={20} />, text: 'تجربة ممتعة' },
];

const DownloadApp = () => {
  return (
    <section id="download" className="download section">
      <div className="download__bg">
        <div className="download__bg-orb download__bg-orb--1" />
        <div className="download__bg-orb download__bg-orb--2" />
        <div className="download__bg-pattern" />
      </div>

      <div className="container download__container">
        {/* Text Side */}
        <motion.div
          className="download__content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="download__badge">
            <Smartphone size={16} />
            <span>تطبيق الهاتف</span>
          </div>

          <h2 className="download__title">
            حمّل تطبيق <span>علّمني</span> الآن
          </h2>
          <p className="download__desc">
            تطبيق التلميذ متوفر الآن للتحميل. بيئة تعلم تفاعلية غنية بالألعاب والقصص
            والمكافآت. امنح طفلك تجربة تعليمية لا تُنسى!
          </p>

          {/* Highlights */}
          <div className="download__highlights">
            {highlights.map((item, i) => (
              <div key={i} className="download__highlight">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <motion.a
            href="https://github.com/soheibdev/3almni-app/releases/download/v1.0.0/app-release.apk"
            className="download__btn"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={22} />
            <div className="download__btn-text">
              <span className="download__btn-small">تحميل مجاني</span>
              <span className="download__btn-main">تنزيل ملف APK</span>
            </div>
          </motion.a>

          <p className="download__note">* التطبيق متوفر حاليًا لنظام Android</p>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          className="download__mockup"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="download__phone">
            <div className="download__phone-glow" />
            <motion.img
              src="/app-mockup.png"
              alt="واجهة تطبيق علّمني"
              className="download__phone-img"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Floating Elements */}
            <motion.div
              className="download__phone-float download__phone-float--1"
              animate={{ y: [-5, 10, -5], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⭐ +100 نقطة
            </motion.div>
            <motion.div
              className="download__phone-float download__phone-float--2"
              animate={{ y: [5, -10, 5] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🏆 شارة جديدة!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadApp;

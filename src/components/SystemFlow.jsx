import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import './SystemFlow.css';

const nodes = [
  { emoji: '👦', label: 'التلميذ', desc: 'يتعلم ويلعب ويجمع النقاط', color: '#6C5CE7' },
  { emoji: '👨‍🏫', label: 'المعلم', desc: 'ينشئ الدروس ويتابع التقدم', color: '#00CEC9' },
  { emoji: '👨‍👩‍👦', label: 'الولي', desc: 'يتابع أداء أبنائه', color: '#FDCB6E' },
  { emoji: '🧠', label: 'الأخصائي', desc: 'يراقب الحالة النفسية', color: '#FD79A8' },
  { emoji: '🏫', label: 'المدرسة', desc: 'تدير كل العمليات', color: '#E17055' },
];

const SystemFlow = () => {
  return (
    <section id="system-flow" className="flow section">
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
            <GitBranch size={16} />
            كيف يعمل النظام
          </div>
          <h2>منظومة <span style={{ color: 'var(--primary)' }}>متصلة</span> ومتكاملة</h2>
          <p>كل الأطراف تعمل معًا في بيئة واحدة لضمان أفضل تجربة تعليمية</p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="flow__diagram">
          {/* Central Hub */}
          <motion.div
            className="flow__hub"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flow__hub-inner">
              <span className="flow__hub-logo">عَلِّمْني</span>
              <span className="flow__hub-sub">المنصة المركزية</span>
            </div>
            <div className="flow__hub-ring flow__hub-ring--1" />
            <div className="flow__hub-ring flow__hub-ring--2" />
          </motion.div>

          {/* Nodes */}
          <div className="flow__nodes">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                className="flow__node"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, type: 'spring' }}
              >
                <div className="flow__node-line" style={{ background: `linear-gradient(to bottom, ${node.color}40, ${node.color})` }} />
                <div className="flow__node-card" style={{ borderColor: `${node.color}30` }}>
                  <span className="flow__node-emoji">{node.emoji}</span>
                  <h4 style={{ color: node.color }}>{node.label}</h4>
                  <p>{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connection Lines Description */}
        <motion.div
          className="flow__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flow__desc-card">
            <span>📊</span>
            <p>البيانات تتدفق بين جميع المنصات في الوقت الحقيقي لضمان متابعة دقيقة وشاملة</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemFlow;

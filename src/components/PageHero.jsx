import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageHero({ tag, title, subtitle, homeLabel = "Home" }) {
  return (
    <header className="page-hero">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </motion.span>

        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="page-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/">{homeLabel}</Link>
          <span className="crumb-sep">→</span>
          <span className="crumb-current">{title}</span>
        </motion.div>
      </div>
    </header>
  );
}

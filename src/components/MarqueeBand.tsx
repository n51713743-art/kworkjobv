import { motion } from "framer-motion";

const items = [
  "Управление активами",
  "Стратегический консалтинг",
  "Wealth Management",
  "Инвестиционная аналитика",
  "Портфельные решения",
  "Налоговое планирование",
  "Family Office",
  "Due Diligence",
];

export function MarqueeBand() {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-brand-600 py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-[14px] font-medium text-white/90"
          >
            {item}
            <span className="flex h-1.5 w-1.5 rounded-full bg-white/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

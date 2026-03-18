import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-surface to-surface" />
      
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-200/20 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-brand-300/15 blur-[80px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-[800px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-[13px] font-medium text-brand-700 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brand-500 opacity-75" />
              </span>
              Ведущая инвестиционная платформа
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-text-primary"
          >
            Управляем капиталом.{" "}
            <span className="text-text-tertiary">
              Создаём будущее.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-[540px] text-[clamp(1rem,2vw,1.2rem)] leading-[1.6] text-text-secondary"
          >
            Стратегические инвестиционные решения для тех, кто ценит надёжность,
            прозрачность и долгосрочный результат.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex h-13 items-center justify-center rounded-2xl bg-text-primary px-7 text-[15px] font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:shadow-black/15 active:scale-[0.98]"
            >
              Бесплатная консультация
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex h-13 items-center justify-center rounded-2xl border border-border-strong bg-white px-7 text-[15px] font-medium text-text-primary transition-all duration-300 hover:bg-neutral-50 hover:border-border-subtle hover:shadow-lg hover:shadow-black/5 active:scale-[0.98]"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap items-center gap-8 lg:gap-12"
          >
            {[
              { value: "₽12.4 млрд", label: "Под управлением" },
              { value: "340+", label: "Клиентов" },
              { value: "15 лет", label: "На рынке" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[24px] lg:text-[28px] font-semibold tracking-[-0.02em] text-text-primary">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[13px] text-text-tertiary">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-medium tracking-[0.1em] text-text-tertiary uppercase">Листайте вниз</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-[1.5px] border-text-tertiary/50 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

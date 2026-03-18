import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    number: "01",
    title: "Управление активами",
    description:
      "Персональные портфельные стратегии с учётом риск-профиля, горизонта инвестирования и финансовых целей клиента.",
    features: ["Акции и облигации", "ETF и фонды", "Структурные продукты"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Стратегический консалтинг",
    description:
      "Комплексный анализ и разработка инвестиционных стратегий для корпоративных и частных клиентов.",
    features: ["Due Diligence", "Оценка бизнеса", "M&A консультирование"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wealth Management",
    description:
      "Комплексное управление благосостоянием: от налогового планирования до передачи капитала следующим поколениям.",
    features: ["Налоговая оптимизация", "Наследственное планирование", "Family Office"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Аналитика и исследования",
    description:
      "Глубокая аналитика рынков, макроэкономический анализ и количественные модели для принятия инвестиционных решений.",
    features: ["Рыночная аналитика", "Макроэкономика", "Количественные модели"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-text-primary overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection>
          <div className="max-w-[600px]">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-400">
              Услуги
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Полный спектр
              <br />
              финансовых решений
            </h2>
            <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.7] text-white/50">
              Каждая услуга адаптирована под ваши задачи. Мы не предлагаем
              шаблонные решения — мы создаём стратегии.
            </p>
          </div>
        </AnimatedSection>

        {/* Services grid */}
        <StaggerContainer className="mt-14 lg:mt-20 grid md:grid-cols-2 gap-4 lg:gap-5" staggerDelay={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <article className="group relative rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 lg:p-9 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15]">
                {/* Number */}
                <span className="text-[13px] font-medium text-white/20 tracking-wider">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-400 transition-colors duration-300 group-hover:bg-brand-600/20">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[20px] lg:text-[22px] font-semibold tracking-[-0.02em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] lg:text-[15px] leading-[1.65] text-white/45">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex rounded-lg bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-[14px] font-medium text-white/30 group-hover:text-brand-400 transition-colors duration-300">
                  <span>Подробнее</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

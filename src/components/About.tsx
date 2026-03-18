import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const principles = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Надёжность",
    description: "Строгое управление рисками и диверсификация — основа каждого инвестиционного решения.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Прозрачность",
    description: "Полная отчётность и открытость на каждом этапе. Вы всегда знаете, как работает ваш капитал.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Результат",
    description: "Систематический подход и аналитика, обеспечивающие стабильно высокую доходность.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <div>
            <AnimatedSection>
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-600">
                О компании
              </span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                Инвестиционная
                <br />
                философия нового
                <br />
                поколения
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.7] text-text-secondary max-w-[480px]">
                Apex Capital объединяет передовые технологии анализа данных 
                с глубокой экспертизой финансовых рынков. Мы создаём 
                индивидуальные стратегии, которые адаптируются к вашим целям
                и горизонту инвестирования.
              </p>
              <p className="mt-4 text-[16px] lg:text-[17px] leading-[1.7] text-text-secondary max-w-[480px]">
                Наша команда аналитиков и портфельных управляющих работает
                с институциональными и частными клиентами, обеспечивая
                персональный подход на каждом уровне.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-text-primary group"
                >
                  <span className="border-b border-text-primary/30 pb-0.5 group-hover:border-text-primary transition-colors duration-300">
                    Наши услуги
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Principles */}
          <StaggerContainer className="flex flex-col gap-6 lg:pt-12" staggerDelay={0.15}>
            {principles.map((principle) => (
              <StaggerItem key={principle.title}>
                <div className="group relative rounded-2xl border border-border-subtle bg-surface-elevated p-6 lg:p-7 transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-black/[0.03]">
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-100">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.65] text-text-secondary">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

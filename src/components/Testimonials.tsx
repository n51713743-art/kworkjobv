import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    quote: "Apex Capital кардинально изменил наш подход к управлению активами. Профессионализм команды и индивидуальный подход — на высочайшем уровне.",
    author: "Игорь Петров",
    position: "CEO, Технологическая компания",
    initials: "ИП",
  },
  {
    quote: "За 5 лет сотрудничества наш портфель стабильно опережает рынок. Прозрачная отчётность и оперативная коммуникация — именно то, что мне было нужно.",
    author: "Анна Красильникова",
    position: "Частный инвестор",
    initials: "АК",
  },
  {
    quote: "Команда Apex Capital помогла нам структурировать семейный капитал и выстроить стратегию передачи активов. Рекомендую без оговорок.",
    author: "Сергей Николаев",
    position: "Основатель, Девелоперская группа",
    initials: "СН",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-[500px] mx-auto">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-600">
              Отзывы
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Нам доверяют
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonials grid */}
        <StaggerContainer className="mt-14 grid md:grid-cols-3 gap-4 lg:gap-5" staggerDelay={0.12}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <blockquote className="relative rounded-2xl border border-border-subtle bg-surface-elevated p-7 lg:p-8 transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-black/[0.03] h-full flex flex-col">
                {/* Quote mark */}
                <svg className="w-8 h-8 text-brand-200 mb-4 shrink-0" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M6 18H2V14C2 8.477 6.477 4 12 4v4c-3.314 0-6 2.686-6 6v4zm18 0h-4v-4c0-5.523 4.477-10 10-10v4c-3.314 0-6 2.686-6 6v4z"/>
                </svg>

                <p className="text-[15px] leading-[1.7] text-text-secondary flex-1">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border-subtle">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-[13px] font-semibold text-brand-700">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-[12px] text-text-tertiary">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

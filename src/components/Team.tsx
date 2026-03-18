import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const team = [
  {
    name: "Александр Волков",
    role: "Генеральный директор",
    bio: "20+ лет в инвестиционном банкинге. Ранее — управляющий директор в Goldman Sachs Moscow.",
    initials: "АВ",
    color: "bg-brand-100 text-brand-700",
  },
  {
    name: "Елена Морозова",
    role: "Директор по инвестициям",
    bio: "CFA, 15 лет опыта управления портфелями. Экспертиза в глобальных рынках акций и фиксированного дохода.",
    initials: "ЕМ",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Дмитрий Чернов",
    role: "Руководитель аналитики",
    bio: "PhD в финансовой математике. Разработчик количественных моделей оценки и прогнозирования рисков.",
    initials: "ДЧ",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Мария Белова",
    role: "Директор по Wealth Management",
    bio: "Эксперт по налоговому и наследственному планированию. 12 лет работы с UHNWI-клиентами.",
    initials: "МБ",
    color: "bg-rose-100 text-rose-700",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-neutral-50">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-[500px]">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-600">
              Команда
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Люди, которым
              <br />
              доверяют капитал
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-text-secondary">
              Наша сила — в экспертизе каждого члена команды.
              Мы объединяем лучших профессионалов рынка.
            </p>
          </div>
        </AnimatedSection>

        {/* Team grid */}
        <StaggerContainer className="mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" staggerDelay={0.1}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="group rounded-2xl border border-border-subtle bg-surface-elevated p-6 lg:p-7 transition-all duration-300 hover:border-border-strong hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
                {/* Avatar */}
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-[18px] font-semibold ${member.color} transition-transform duration-300 group-hover:scale-105`}>
                  {member.initials}
                </div>

                {/* Info */}
                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                  {member.name}
                </h3>
                <span className="mt-1 block text-[13px] font-medium text-brand-600">
                  {member.role}
                </span>
                <p className="mt-3 text-[13px] leading-[1.65] text-text-secondary">
                  {member.bio}
                </p>

                {/* Social */}
                <div className="mt-5 flex gap-2">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-text-tertiary hover:bg-brand-50 hover:text-brand-600 transition-colors" aria-label="LinkedIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

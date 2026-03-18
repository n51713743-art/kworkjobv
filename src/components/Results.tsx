import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useInView } from "../hooks/useInView";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 12.4, suffix: " млрд ₽", label: "Активы под управлением", description: "Совокупный объём средств клиентов" },
  { value: 23, suffix: "%", label: "Средняя доходность", description: "За последние 3 года, годовых" },
  { value: 340, suffix: "+", label: "Клиентов", description: "Частных и институциональных инвесторов" },
  { value: 98, suffix: "%", label: "Удержание клиентов", description: "Продолжают работу более 3 лет" },
];

const milestones = [
  { year: "2009", event: "Основание компании" },
  { year: "2013", event: "Первый миллиард под управлением" },
  { year: "2017", event: "Запуск Wealth Management" },
  { year: "2020", event: "Цифровая платформа" },
  { year: "2024", event: "₽12+ млрд активов" },
];

export function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-[600px] mx-auto">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-600">
              Результаты
            </span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Цифры говорят
              <br />
              сами за себя
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats grid */}
        <StaggerContainer className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="relative rounded-2xl border border-border-subtle bg-surface-elevated p-6 lg:p-7 text-center transition-all duration-300 hover:border-border-strong hover:shadow-lg hover:shadow-black/[0.03]">
                <div className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-text-primary">
                  <AnimatedCounter target={Math.floor(stat.value)} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-[14px] font-medium text-text-primary">
                  {stat.label}
                </div>
                <div className="mt-1 text-[12px] text-text-tertiary">
                  {stat.description}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20 lg:mt-28">
            <h3 className="text-center text-[13px] font-semibold tracking-[0.08em] uppercase text-text-tertiary mb-10 lg:mb-14">
              Ключевые вехи
            </h3>
            <div className="relative">
              {/* Line */}
              <div className="absolute top-5 left-0 right-0 h-[1px] bg-border-subtle hidden lg:block" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex flex-col items-center text-center lg:px-4">
                    {/* Dot */}
                    <div className="hidden lg:flex h-10 w-10 items-center justify-center">
                      <div className="h-3 w-3 rounded-full border-2 border-brand-400 bg-surface" />
                    </div>
                    <span className="mt-0 lg:mt-4 text-[22px] font-semibold tracking-[-0.02em] text-text-primary">
                      {milestone.year}
                    </span>
                    <span className="mt-1 text-[13px] text-text-secondary leading-[1.5]">
                      {milestone.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-text-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-400/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <AnimatedSection>
            <div>
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-brand-400">
                Контакты
              </span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                Начните с бесплатной
                <br />
                консультации
              </h2>
              <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.7] text-white/50 max-w-[440px]">
                Расскажите о ваших финансовых целях, и мы предложим
                оптимальную стратегию. Первая встреча — без обязательств.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    ),
                    label: "+7 (495) 123-45-67",
                    sublabel: "Пн–Пт, 9:00–19:00",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: "info@apexcapital.ru",
                    sublabel: "Ответим в течение 2 часов",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: "Москва, Пресненская наб., 8с1",
                    sublabel: "Башня «Город Столиц», 42 этаж",
                  },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-brand-400">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-medium text-white">
                        {contact.label}
                      </div>
                      <div className="mt-0.5 text-[13px] text-white/40">
                        {contact.sublabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 lg:p-9 backdrop-blur-sm"
            >
              <h3 className="text-[20px] font-semibold text-white tracking-[-0.02em]">
                Оставить заявку
              </h3>
              <p className="mt-2 text-[14px] text-white/40">
                Заполните форму, и мы свяжемся с вами в ближайшее время.
              </p>

              <div className="mt-7 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-white/60 mb-2">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full h-12 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-[15px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full h-12 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-[15px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[13px] font-medium text-white/60 mb-2">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                    className="w-full h-12 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 text-[15px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-white/60 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20 resize-none"
                    placeholder="Расскажите о ваших целях..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 text-[15px] font-medium text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/20 active:scale-[0.98]"
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Отправлено!
                  </motion.span>
                ) : (
                  "Отправить заявку"
                )}
              </button>

              <p className="mt-4 text-center text-[12px] text-white/25">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="underline hover:text-white/40 transition-colors">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

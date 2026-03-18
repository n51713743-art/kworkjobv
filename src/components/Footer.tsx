export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Компания",
      links: [
        { label: "О нас", href: "#about" },
        { label: "Команда", href: "#team" },
        { label: "Карьера", href: "#" },
        { label: "Пресс-центр", href: "#" },
      ],
    },
    {
      title: "Услуги",
      links: [
        { label: "Управление активами", href: "#services" },
        { label: "Стратегический консалтинг", href: "#services" },
        { label: "Wealth Management", href: "#services" },
        { label: "Аналитика", href: "#services" },
      ],
    },
    {
      title: "Правовая информация",
      links: [
        { label: "Раскрытие информации", href: "#" },
        { label: "Политика конфиденциальности", href: "#" },
        { label: "Пользовательское соглашение", href: "#" },
        { label: "Документы", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 lg:py-16 grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L16.5 5.5V12.5L9 17L1.5 12.5V5.5L9 1Z" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 1V17M1.5 5.5L16.5 12.5M16.5 5.5L1.5 12.5" stroke="#0a0a0a" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
              <span className="text-[17px] font-semibold text-white tracking-[-0.02em]">
                Apex Capital
              </span>
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.65] text-white/35">
              Премиальные финансовые решения для тех, кто ценит
              профессионализм и результат.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Telegram", icon: <path d="M21 5L2 12.5l7 1.5M21 5l-2.5 15L9 14M21 5L9 14m0 0v6l3.5-3.5"/> },
                { label: "LinkedIn", icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/> },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-white/40 hover:bg-white/[0.1] hover:text-white/70 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[13px] font-semibold text-white/60 tracking-[0.02em]">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] py-6">
          <span className="text-[13px] text-white/25">
            © {currentYear} Apex Capital. Все права защищены.
          </span>
          <span className="text-[12px] text-white/15">
            Лицензия ФСФР № 000-00000-000000
          </span>
        </div>
      </div>
    </footer>
  );
}

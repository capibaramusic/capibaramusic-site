"use client";

import { useLocale } from "./LocaleProvider";

export default function Contact() {
  const { content } = useLocale();
  const { contact } = content;

  return (
    <section
      id="contacto"
      className="grid grid-cols-1 items-center gap-7 border-t border-[#DDD] px-8 pt-10 pb-8 min-[769px]:grid-cols-2 min-[769px]:gap-20 min-[769px]:px-[8%] min-[769px]:py-14 lg:py-16"
    >
      <div>
        <p
          className="type-section-label"
          style={{
            color: "#888",
            marginBottom: "16px",
          }}
        >
          {contact.label}
        </p>

        <h2
          className="type-section-heading"
          style={{
            margin: 0,
          }}
        >
          {contact.heading[0]}
          <br />
          {contact.heading[1]}
        </h2>
      </div>

      <div className="flex min-w-0 flex-col items-start gap-4 min-[769px]:gap-5">
        {contact.emails.map((email) => (
          <div key={email.href} className="min-w-0 max-w-full">
            <h3 className="type-item-title mb-1.5">{email.area}:</h3>
            <a
              className="type-text-link [overflow-wrap:anywhere] no-underline underline-offset-4 hover:underline focus-visible:underline"
              href={email.href}
            >
              {email.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { content } = useLocale();
  const { footer } = content;

  return (
    <footer className="border-t border-[#DDD] px-[8%] py-5 md:py-6">
      <div
        className="grid grid-cols-2 items-start gap-x-8 gap-y-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-16"
      >
        <div>
          <h2
            className="type-footer-signature"
            style={{
              margin: 0,
            }}
          >
            {footer.brand}
          </h2>

          <p
            className="type-footer-text"
            style={{
              margin: "10px 0 0",
              color: "#666",
            }}
          >
            {footer.association}
          </p>

          <p className="type-footer-text mt-1.5 whitespace-nowrap text-[#666]">
            {footer.socialLinks.map((link, index) => (
              <span key={link.label}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </p>
        </div>

        <div
          className="flex h-28 w-[168px] items-center justify-center justify-self-center md:h-36 md:w-[216px]"
        >
          <Image
            src="/logo/logo capi vectorial.svg"
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 768px) 216px, 168px"
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>

        <nav
          className="col-span-2 justify-self-start md:col-span-1 md:justify-self-end"
          aria-label={footer.navigationLabel}
        >
          <h4 className="type-footer-label mb-3">
            {footer.navigationLabel}
          </h4>

          <div className="type-footer-text grid grid-cols-2 gap-x-12 gap-y-1.5 text-[#666]">
            {footer.navigationItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </nav>
      </div>

      <div
        className="type-footer-meta mt-5 flex flex-wrap justify-between gap-3 border-t border-[#DDD] pt-3 text-[#888]"
      >
        <span>{footer.copyright}</span>

        <span>{footer.location}</span>
      </div>
    </footer>
  );
}

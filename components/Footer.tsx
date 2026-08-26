"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { content } = useLocale();
  const { footer } = content;

  return (
    <footer className="border-t border-[#DDD] px-8 pt-5 pb-6 min-[769px]:px-[8%] min-[769px]:py-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-3 min-[769px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[769px]:gap-x-16 min-[769px]:gap-y-0">
        <div className="min-w-0">
          <h2 className="type-footer-signature m-0">{footer.brand}</h2>

          <p className="type-footer-text mt-1 text-[#666] min-[769px]:mt-[10px]">
            {footer.association}
          </p>
        </div>

        <div className="flex h-16 w-24 self-end justify-self-end min-[769px]:col-start-2 min-[769px]:row-span-2 min-[769px]:row-start-1 min-[769px]:h-36 min-[769px]:w-[216px] min-[769px]:self-start min-[769px]:justify-self-center">
          <Image
            src="/logo/logo capi vectorial.svg"
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 769px) 216px, 96px"
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>

        <p className="type-footer-text col-span-2 whitespace-nowrap text-[#666] min-[769px]:col-span-1 min-[769px]:col-start-1 min-[769px]:row-start-2 min-[769px]:mt-1.5">
          {footer.socialLinks.map((link, index) => (
            <span key={link.label}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>

        <nav
          className="col-span-2 mt-1 w-full justify-self-start min-[769px]:col-span-1 min-[769px]:col-start-3 min-[769px]:row-span-2 min-[769px]:row-start-1 min-[769px]:mt-0 min-[769px]:w-auto min-[769px]:justify-self-end"
          aria-label={footer.navigationLabel}
        >
          <h4 className="type-footer-label mb-2 min-[769px]:mb-3">
            {footer.navigationLabel}
          </h4>

          <div className="type-footer-text flex flex-row flex-nowrap justify-between text-[#666] min-[769px]:grid min-[769px]:grid-cols-2 min-[769px]:gap-x-12 min-[769px]:gap-y-1.5">
            {footer.navigationItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </nav>
      </div>

      <div className="type-footer-meta mt-4 flex flex-col gap-0.5 border-t border-[#DDD] pt-3 text-[#888] min-[769px]:mt-5 min-[769px]:flex-row min-[769px]:flex-wrap min-[769px]:justify-between min-[769px]:gap-3">
        <span>{footer.copyright}</span>

        <span>{footer.location}</span>
      </div>
    </footer>
  );
}

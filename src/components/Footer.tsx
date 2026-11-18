import { contacts, profile, ui } from "@/content/content";
import { Fill } from "@/components/Fill";
import { LangToggle } from "@/components/LangToggle";
import { LocalTime } from "@/components/LocalTime";
import { T } from "@/components/T";
import { ArrowUpIcon, BriefcaseIcon, CameraIcon, ChatIcon, CodeIcon, MailIcon } from "@/components/icons";

const NAV = [
  { href: "/#experience", label: ui.nav.experience },
  { href: "/#projects", label: ui.nav.projects },
  { href: "/#skills", label: ui.nav.skills },
  { href: "/#contact", label: ui.nav.contact },
];

const ICONS = {
  whatsapp: ChatIcon,
  email: MailIcon,
  linkedin: BriefcaseIcon,
  instagram: CameraIcon,
  github: CodeIcon,
} as const;

const heading = "m-0 mb-3 text-[15px] font-semibold text-white";
const rowLink = "flex min-h-11 items-center gap-3 border-b border-navy-line py-2";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-navy-deep text-on-navy">
      <div className="container grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-8 gap-y-9 pt-14">
        <div>
          <p className="m-0 text-[24px] font-extrabold leading-tight text-white [font-stretch:75%]">
            {profile.shortName}
          </p>
          <p className="m-0 mt-2 text-[15px] leading-snug">
            <T x={profile.role} />
          </p>
          <p className="m-0 mt-4 flex flex-wrap items-center gap-x-2 text-[15px]">
            <span aria-hidden="true" className="inline-block h-[9px] w-[9px] rounded-full bg-live" />
            <T x={ui.footer.localTime} />
            <span>
              <LocalTime timeZone={profile.timeZone} /> <T x={ui.footer.timeZoneLabel} />
            </span>
          </p>
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className={heading}>
            <T x={ui.footer.onThisPage} />
          </h2>
          <ul className="m-0 list-none p-0">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-white hover:underline hover:underline-offset-4">
                  <T x={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>
            <T x={ui.footer.reachMe} />
          </h2>
          <ul className="m-0 list-none p-0">
            {contacts.map((c) => {
              const Icon = ICONS[c.key];
              const body = (
                <>
                  <Icon />
                  <span className="min-w-0">
                    <span className="block font-semibold leading-tight text-white">{c.label}</span>
                    <span className="block break-words text-[14px] leading-snug">
                      <Fill text={c.handle} />
                    </span>
                  </span>
                </>
              );
              return (
                <li key={c.key}>
                  {c.href === "#" ? (
                    <span className={rowLink}>{body}</span>
                  ) : (
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                      className={`${rowLink} hover:text-white`}
                    >
                      {body}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className={heading}>
            <T x={ui.footer.language} />
          </h2>
          <LangToggle variant="onDark" />
          <a
            href="#top"
            className="mt-6 flex min-h-11 w-fit items-center gap-2 text-white hover:underline hover:underline-offset-4"
          >
            <ArrowUpIcon size={18} />
            <T x={ui.footer.backToTop} />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-[#2f3c7a] py-5 text-[15px]">
          <p className="m-0">
            © {profile.copyrightYear} {profile.name}
          </p>
          <p className="m-0">
            <T x={ui.footer.built} />
          </p>
        </div>
      </div>

      {/* Oversized closing wordmark. Flex centring keeps it centred even when it is wider than the screen;
          the footer's overflow-hidden clips the sides so the page never scrolls sideways. */}
      <div
        aria-hidden="true"
        className="flex select-none justify-center whitespace-nowrap text-[clamp(120px,24vw,330px)] font-extrabold leading-[0.74] text-[#1e2b6d] [font-stretch:62%]"
      >
        {profile.wordmark}
      </div>
    </footer>
  );
}

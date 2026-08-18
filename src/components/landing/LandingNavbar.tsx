import { useState } from "react";
import { Instagram, Linkedin, Menu, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavbarBrand } from "./NavbarBrand";
import { loginUrl, navItems, socialLinks } from "./landing.data";

const socialIcons = { instagram: Instagram, youtube: Youtube, linkedin: Linkedin } as const;

export function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <NavbarBrand />

        <div className="flex items-center gap-6">
          <div className="hidden space-x-4 text-sm font-medium text-gray-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-1 border-l border-gray-200 pl-4 sm:flex">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 transition-colors hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </Button>
                </a>
              );
            })}
          </div>

          <a
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[linear-gradient(180deg,hsl(var(--accent-green))_0%,hsl(var(--accent-green))_100%)] px-6 py-3 text-base font-bold text-white shadow-[0_10px_24px_rgba(34,197,94,0.18)] ring-1 ring-[hsl(var(--accent-green))/0.18] transition-colors hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-green))/0.96] hover:shadow-[0_14px_30px_rgba(34,197,94,0.24)]"
          >
            Prueba gratis
          </a>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="flex-shrink-0 md:hidden" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-600 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-1 border-t border-gray-100 pt-4">
                  {socialLinks.map((social) => {
                    const Icon = socialIcons[social.platform];
                    return (
                      <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary">
                          <Icon className="h-4 w-4" />
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

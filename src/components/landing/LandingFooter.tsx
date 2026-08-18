import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { socialLinks } from "./landing.data";

const socialIcons = { instagram: Instagram, youtube: Youtube, linkedin: Linkedin } as const;

export function LandingFooter() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50 rounded-t-2xl">
      <div className="text-center">
        <div className="flex justify-center gap-4 mb-2">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.platform];
            return (
              <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary transition-colors"><Icon className="h-4 w-4" /></Button>
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 mb-2">
          Contacto: <a href="mailto:kittypau.mascotas@gmail.com" className="text-primary hover:underline">kittypau.mascotas@gmail.com</a>
        </p>
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">Soporte</a>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} KittyPau · IOT Chile SpA · Con amor para tus mascotas 🐾
        </p>
      </div>
    </footer>
  );
}


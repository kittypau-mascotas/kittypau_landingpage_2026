import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50 rounded-t-2xl">
      <div className="text-center">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></Button>
          </a>
          <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></Button>
          </a>
          <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></Button>
          </a>
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


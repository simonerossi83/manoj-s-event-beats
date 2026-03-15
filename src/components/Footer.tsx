import { Instagram, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-bold text-foreground">DJ MANOJ</p>
          <p className="text-muted-foreground text-sm font-light mt-1">
            La colonna sonora dei tuoi eventi.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="SoundCloud"
          >
            <Music size={20} />
          </a>
        </div>

        <p className="text-muted-foreground/50 text-xs font-light">
          © 2026 DJ Manoj. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

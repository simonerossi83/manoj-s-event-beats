import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import piazzaImg from "@/assets/event-piazza.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import privateImg from "@/assets/event-private.jpg";

const events = [
  {
    title: "Eventi di Piazza",
    subtitle: "La piazza esplode",
    description: "Migliaia di persone, un'unica energia. DJ Amery gestisce eventi di piazza con set potenti e coinvolgenti, trasformando ogni piazza italiana nel main stage di un festival. Esperienza comprovata con pubblici da 1.000 a 10.000 persone.",
    image: piazzaImg,
    glowClass: "hover:shadow-[0_0_40px_-10px_hsl(220_90%_60%_/_0.4)]",
  },
  {
    title: "Matrimoni",
    subtitle: "L'emozione in musica",
    description: "Dal rito civile al party scatenato. DJ Amery firma la colonna sonora del tuo matrimonio: aperitivo, primo ballo, cena e serata danzante. Set personalizzati per ogni coppia, con repertorio concordato nei minimi dettagli.",
    image: weddingImg,
    glowClass: "hover:shadow-[0_0_40px_-10px_hsl(40_90%_55%_/_0.4)]",
  },
  {
    title: "Feste Private",
    subtitle: "Esclusività totale",
    description: "Compleanni, inaugurazioni, party aziendali ed eventi esclusivi. DJ Amery crea set su misura che trasformano ogni ricorrenza in un evento leggendario, con selezione musicale adattata al pubblico e al contesto.",
    image: privateImg,
    glowClass: "hover:shadow-[0_0_40px_-10px_hsl(330_80%_60%_/_0.4)]",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="label-uppercase text-primary mb-4">I Miei Servizi</p>
          <h2 className="h2-section text-foreground">
            Tre mondi, un'unica <span className="gradient-text">energia</span>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            DJ Amery è disponibile per ogni tipo di evento: scegli il servizio più adatto alle tue esigenze.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 0.98, rotate: -1 }}
              className={`event-card group cursor-pointer ${event.glowClass}`}
            >
              <div className="relative h-80 md:h-[60vh] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="label-uppercase text-primary mb-2">{event.subtitle}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

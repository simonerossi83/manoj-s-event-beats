import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImg from "@/assets/dj-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden event-card">
              <img
                src={portraitImg}
                alt="DJ Amery – ritratto del DJ professionista italiano"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-uppercase text-primary mb-4">Chi Sono</p>
            <h2 className="h2-section text-foreground mb-4">
              La musica è la mia <span className="gradient-text">voce</span>
            </h2>
            <p className="text-primary/70 font-light mb-8 text-base">
              DJ Amery — DJ professionista per eventi di piazza, matrimoni e feste private in Lombardia e Nord Italia.
            </p>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Oltre 10 anni dietro la consolle, più di 500 eventi all'attivo e una sola missione:
                creare esperienze musicali indimenticabili. Dalle piazze gremite della Lombardia
                e del Nord Italia ai matrimoni più eleganti, ogni set è un viaggio sonoro costruito
                su misura per il pubblico e per il momento.
              </p>
              <p>
                Lo stile di DJ Amery è un mix calibrato di hit internazionali, classici
                intramontabili e sonorità elettroniche — Dance, House, Pop e R&B —
                capaci di adattarsi a qualsiasi pubblico ed età. Leggo la pista,
                sento l'energia e la trasformo in ritmo puro.
              </p>
              <p>
                Che si tratti del tuo matrimonio, di una festa di piazza o di un compleanno
                esclusivo, DJ Amery è il partner che trasforma ogni serata in un evento leggendario.
                Disponibile in tutta la Lombardia e nel Nord Italia.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: "500+", label: "Eventi" },
                { value: "10+", label: "Anni" },
                { value: "100%", label: "Energia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="label-uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

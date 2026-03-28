import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marco & Giulia",
    event: "Matrimonio",
    text: "DJ Amery ha reso il nostro matrimonio indimenticabile. Dal primo ballo all'ultima canzone, tutti i nostri ospiti non hanno mai smesso di ballare. Una scelta che rifaremmo mille volte!",
    rating: 5,
  },
  {
    name: "Comune di Rivalta",
    event: "Festa di Piazza",
    text: "Un DJ professionista eccezionale. Ha gestito un pubblico di oltre 3.000 persone con energia e naturalezza incredibile. La piazza non aveva mai ballato così — torneremo a chiamarla ogni anno.",
    rating: 5,
  },
  {
    name: "Alessandra P.",
    event: "Festa Privata",
    text: "Il mio 30° compleanno è stato il party dell'anno grazie a DJ Amery. Set perfetto, selezione musicale impeccabile e un'energia contagiosa che ha coinvolto tutti, dai 20 agli 80 anni.",
    rating: 5,
  },
  {
    name: "Luca & Francesca",
    event: "Matrimonio",
    text: "Ci hanno consigliato DJ Amery e non potevamo fare scelta migliore. Puntuale, professionale, attenta ai dettagli e con un gusto musicale straordinario. Il nostro matrimonio è stato perfetto.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-uppercase text-primary mb-4">Recensioni</p>
          <h2 className="h2-section text-foreground">
            Cosa dicono i <span className="gradient-text">clienti</span>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            Più di 500 eventi, centinaia di spose, sindaci e festeggiati soddisfatti.
            Leggi le esperienze di chi ha scelto DJ Amery per il proprio evento speciale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-surface rounded-2xl p-8 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div>
                <p className="text-foreground font-medium text-sm">{review.name}</p>
                <p className="label-uppercase text-primary/70 text-xs mt-1">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

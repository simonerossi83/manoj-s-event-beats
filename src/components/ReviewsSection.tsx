import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marco & Giulia",
    event: "Matrimonio",
    text: "DJ manoy ha reso il nostro matrimonio indimenticabile. Dal primo ballo all'ultima canzone, tutti i nostri ospiti non hanno mai smesso di ballare!",
    rating: 5,
  },
  {
    name: "Comune di Rivalta",
    event: "Festa di Piazza",
    text: "Una professionista eccezionale. Ha gestito un pubblico di 3000 persone con una naturalezza incredibile. La piazza non ha mai ballato così.",
    rating: 5,
  },
  {
    name: "Alessandra P.",
    event: "Festa Privata",
    text: "Il mio 30° compleanno è stato il party dell'anno grazie a DJ manoy. Set perfetto, luci spettacolari e un'energia contagiosa.",
    rating: 5,
  },
  {
    name: "Luca & Francesca",
    event: "Matrimonio",
    text: "Ci hanno consigliato DJ manoy e non potevamo fare scelta migliore. Professionale, attenta ai dettagli e con un gusto musicale impeccabile.",
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
            Dicono di <span className="gradient-text">me</span>
          </h2>
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

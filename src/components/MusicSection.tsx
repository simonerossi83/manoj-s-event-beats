import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tracks = [
  {
    title: "Tuesday Classic House Mix",
    genre: "Classic House",
    feed: "%2FManoy_DJ%2Ftuesday-classic-house-mix%2F",
  },
  {
    title: "Tuesday Classic House Mix 2",
    genre: "Classic House",
    feed: "%2FManoy_DJ%2Ftuesday-classic-house-mix-2%2F",
  },
  {
    title: "Monday Tech House DJ Set",
    genre: "Tech House",
    feed: "%2FManoy_DJ%2Fmonday-tech-house-dj-set%2F",
  },
  {
    title: "Manoy Sunday Tech House DJ Set",
    genre: "Tech House",
    feed: "%2FManoy_DJ%2Fmanoy-sunday-tech-house-dj-set%2F",
  },
];

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-uppercase text-primary mb-4">Ascolta</p>
          <h2 className="h2-section text-foreground">
            Senti il <span className="gradient-text">beat</span>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            Un mix di Classic House e Tech House selezionato per ogni occasione — dal warm-up
            all'apice della serata.
          </p>
        </motion.div>

        <div className="space-y-4">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-surface rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="px-5 pt-5 pb-3">
                <p className="text-foreground font-medium">{track.title}</p>
                <p className="text-muted-foreground text-sm font-light mb-3">{track.genre} · Manoy DJ</p>
                <iframe
                  title={track.title}
                  width="100%"
                  height="60"
                  src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${track.feed}`}
                  frameBorder="0"
                  allow="autoplay"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/50 text-sm mt-8 font-light"
        >
          Ascolta i miei mix su Mixcloud · Contattami per scoprire il set completo per il tuo evento
        </motion.p>
      </div>
    </section>
  );
};

export default MusicSection;

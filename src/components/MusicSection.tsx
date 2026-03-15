import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const tracks = [
  { title: "Summer Vibes Mix", duration: "3:45", genre: "Dance / Pop" },
  { title: "Wedding First Dance", duration: "4:12", genre: "Romantic" },
  { title: "Festival Banger Set", duration: "5:30", genre: "EDM / House" },
  { title: "Deep Night Session", duration: "6:15", genre: "Deep House" },
];

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
        </motion.div>

        <div className="space-y-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-surface rounded-xl p-5 flex items-center gap-5 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
            >
              <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                {playingIndex === index ? (
                  <Pause size={18} className="text-primary" />
                ) : (
                  <Play size={18} className="text-primary ml-0.5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <p className="text-foreground font-medium truncate">{track.title}</p>
                <p className="text-muted-foreground text-sm font-light">{track.genre}</p>
              </div>

              {/* EQ bars animation */}
              {playingIndex === index && (
                <div className="flex items-end gap-0.5 h-5">
                  {[0, 0.15, 0.3, 0.1].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{ height: ["4px", "20px", "8px", "16px", "4px"] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay }}
                    />
                  ))}
                </div>
              )}

              <span className="text-muted-foreground text-sm font-light">{track.duration}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/50 text-sm mt-8 font-light"
        >
          Demo tracks · Contattami per il set completo
        </motion.p>
      </div>
    </section>
  );
};

export default MusicSection;

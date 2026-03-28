import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const tracks = [
  { title: "Age Of Love", genre: "Dance / House", src: "/music/Age_Of_Love.mp3" },
  { title: "Britt Teshyr", genre: "Electronic", src: "/music/Britt-Teshyr.mp3" },
  { title: "I Just Might", genre: "Pop / R&B", src: "/music/I_Just_Might.mp3" },
  { title: "Ultra Nate x Hugel", genre: "Dance / Pop", src: "/music/Ultra_Nate_Hugel.mp3" },
];

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number[]>(tracks.map(() => 0));
  const [durations, setDurations] = useState<string[]>(tracks.map(() => ""));
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(tracks[index].src);
    audioRef.current = audio;
    audio.play();
    setPlayingIndex(index);

    audio.addEventListener("timeupdate", () => {
      setProgress((prev) => {
        const next = [...prev];
        next[index] = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        return next;
      });
    });
    audio.addEventListener("loadedmetadata", () => {
      const m = Math.floor(audio.duration / 60);
      const s = Math.floor(audio.duration % 60).toString().padStart(2, "0");
      setDurations((prev) => {
        const next = [...prev];
        next[index] = `${m}:${s}`;
        return next;
      });
    });
    audio.addEventListener("ended", () => {
      setPlayingIndex(null);
      setProgress((prev) => {
        const next = [...prev];
        next[index] = 0;
        return next;
      });
    });
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

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
          </h2>          <p className="text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            Un mix tra Dance, House, Electronic, Pop internazionale e R&B. Ogni traccia è scelta
            per creare la giusta energia — dal warm-up all'apice della serata.
          </p>        </motion.div>

        <div className="space-y-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-surface rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              onClick={() => handlePlay(index)}
            >
              <div className="p-5 flex items-center gap-5">
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

                <span className="text-muted-foreground text-sm font-light">
                  {durations[index] || "—"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-0.5 bg-primary/10 w-full">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress[index]}%` }}
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
          Clicca su un brano per ascoltarlo · Contattami per scoprire il set completo per il tuo evento
        </motion.p>
      </div>
    </section>
  );
};

export default MusicSection;

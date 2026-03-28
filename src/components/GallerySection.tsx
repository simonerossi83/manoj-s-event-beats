import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-dj.jpg";
import piazzaImg from "@/assets/event-piazza.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import privateImg from "@/assets/event-private.jpg";
import portraitImg from "@/assets/dj-portrait.jpg";

const images = [
  { src: heroImg, alt: "DJ Amery – live set durante un grande evento", span: "col-span-2 row-span-2" },
  { src: piazzaImg, alt: "DJ Amery – evento di piazza con migliaia di persone", span: "" },
  { src: weddingImg, alt: "DJ Amery – musica per matrimonio elegante", span: "" },
  { src: privateImg, alt: "DJ Amery – festa privata esclusiva", span: "col-span-2" },
  { src: portraitImg, alt: "DJ Amery – DJ professionista italiano", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-uppercase text-primary mb-4">Gallery</p>
          <h2 className="h2-section text-foreground">
            Momenti <span className="gradient-text">indimenticabili</span>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            Immagini dai set di DJ Amery: eventi di piazza, matrimoni e feste private in tutta Italia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${img.span} rounded-xl overflow-hidden event-card group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

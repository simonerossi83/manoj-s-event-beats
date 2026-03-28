import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/djamery1980@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40" ref={ref}>
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-uppercase text-primary mb-4">Contatti</p>
          <h2 className="h2-section text-foreground">
            Riserva la <span className="gradient-text">data</span>
          </h2>
          <p className="text-muted-foreground font-light mt-4">
            Hai in mente un evento? Raccontami tutto: tipo di evento, data e luogo.
            DJ Amery opera in tutta la Lombardia e nel Nord Italia e risponde entro 24 ore con disponibilità e preventivo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-surface rounded-2xl p-8 md:p-12 space-y-6"
        >
          {/* Campi nascosti Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              required
              className="input-neon"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input-neon"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              className="input-neon"
            />
            <select name="tipo_evento" className="input-neon" required>
              <option value="" className="bg-background">Tipo di evento</option>
              <option value="piazza" className="bg-background">Evento di Piazza</option>
              <option value="matrimonio" className="bg-background">Matrimonio</option>
              <option value="privato" className="bg-background">Festa Privata</option>
              <option value="altro" className="bg-background">Altro</option>
            </select>
          </div>
          <input
            type="date"
            name="data_evento"
            placeholder="Data evento"
            className="input-neon w-full"
          />
          <textarea
            name="messaggio"
            placeholder="Raccontami il tuo evento..."
            rows={4}
            className="input-neon w-full resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg tracking-wide flex items-center justify-center gap-3 hover:glow-primary transition-shadow duration-300"
          >
            {submitted ? (
              "Messaggio Inviato ✓"
            ) : error ? (
              "Errore — riprova più tardi"
            ) : (
              <>
                Invia Richiesta
                <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

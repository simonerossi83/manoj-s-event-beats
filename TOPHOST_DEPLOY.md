# Guida Deploy su Tophost

## 📋 Prerequisiti
- Account Tophost attivo
- Accesso al pannello di controllo (Plesk o cPanel)
- Client FTP (es. FileZilla, WinSCP)

## 🚀 Step by Step

### 1. Verifica Build
Il progetto è già compilato in `/dist`. Contiene:
- `index.html` (entry point)
- `assets/` (JS, CSS, immagini)
- `.htaccess` (routing SPA)

### 2. Accedi a Tophost
- Vai su `https://www.tophost.it/` (o il tuo pannello)
- Accedi con le tue credenziali
- Apri il pannello di controllo

### 3. Configura FTP
Nel pannello controlliamo i dati FTP:
- **Host FTP**: es. `ftp-123.tophost.it` o IP
- **Username**: il tuo username Tophost
- **Password**: la tua password Tophost
- **Porta**: 21 (default)

### 4. Carica i File via FTP
1. Apri il client FTP (es. FileZilla)
2. Connettiti con i dati sopra
3. Naviga a `/public_html/` (cartella principale del sito)
4. **Cancella il contenuto** della cartella (se c'è)
5. Carica **TUTTO il contenuto di `/dist/`**:
   - `index.html`
   - `assets/` (cartella intera)
   - `.htaccess`
   - `404.html`, `robots.txt`, `sitemap.xml` (se presenti in public/)

### 5. Configura il Dominio
Nel pannello Tophost:
1. Vai su **Domini**
2. Aggiungi il tuo dominio (es. `djamery.it`)
3. Punta il dominio a questa installazione
4. Aspetta il propagamento DNS (oppure modifica i nameserver)

### 6. Testa il Sito
- Visita il tuo dominio: `https://djamery.it`
- Prova il form di contatto
- Verifica i link di navigazione
- Controlla su mobile

## 🔧 Configurazione Avanzata

### Email per il Form
Il form attualmente invia a `djamery1980@gmail.com` via [formsubmit.co](https://formsubmit.co).
Se vuoi usare un'email Tophost:
- Crea una casella email nel pannello Tophost (es. info@djamery.it)
- Modifica il file `src/components/ContactSection.tsx`
- Cambia: `djamery1980@gmail.com` → `info@djamery.it`
- Esegui `npm run build` di nuovo
- Carica i nuovi file

### Cache e Performance
Se il sito non si aggiorna:
1. Cancella la cache del browser (Ctrl+Shift+Del)
2. Aspetta 1-2 ore per il cache builder CloudFlare (se attivo)

## ❓ Troubleshooting

**Errore 404 su link interni**: Il `.htaccess` non è attivo
- Assicurati che sia stato caricato in `/public_html/`
- Contatta support Tophost se `mod_rewrite` non è attivo

**Form non funziona**: 
- Verifica la connessione internet
- Controlla la console (F12) per errori CORS
- Usa mail più semplici (senza caratteri speciali)

**Immagini non caricate**:
- Assicurati che `/assets/` sia stata caricata completamente
- Controlla i permessi file (644 per file, 755 per cartelle)

## 📱 Update Futuro
Quando vuoi aggiornare il sito:
```bash
npm run build  # Compila
# Carica i file da /dist/ su FTP (stesso processo)
```

---
**Domande?** Contatta il supporto Tophost o verifica la documentazione del tuo pannello.

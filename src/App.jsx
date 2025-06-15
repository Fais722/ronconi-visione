import './App.css'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Immagine di sfondo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/ronconi-immagine.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      ></div>

      {/* Overlay scuro */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      ></div>

      {/* Contenuto */}
      <div
        style={{
          color: 'white',
          padding: '3rem',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          textShadow: '0 0 8px rgba(0,0,0,0.7)',
        }}
      >
        <h1>Ronconi: Visione Strategica per la Riorganizzazione</h1>
        <p><strong>Azione mirata, nessun rumore. Risultati misurabili.</strong></p>

        <h2>Obiettivi chiari</h2>
        <ul>
          <li>✅ Mappatura silenziosa dei processi, senza interrompere l'operatività</li>
          <li>✅ Analisi delle attività reali, tempi e colli di bottiglia</li>
          <li>✅ Organizzazione del personale per carichi, ruoli e priorità</li>
          <li>✅ Pianificazione agile con strumenti semplici (es: Smartsheet)</li>
          <li>✅ Revisione software: fatturazione, magazzino, spedizioni</li>
          <li>✅ Integrazione tecnica e gestionale con l'ambiente Gucon</li>
          <li>✅ Stress relief per l’ufficio tecnico e valorizzazione dei ricambi</li>
          <li>✅ Standardizzazione del flusso: offerta → ordine → progettazione → produzione → installazione</li>
        </ul>

        <h2>Approccio</h2>
        <p>
          Primo periodo di osservazione silenziosa. Nessun disturbo all’operatività.  
          Solo dati, realtà e una proposta concreta.
        </p>

        <h2>Prossimo passo</h2>
        <p>
          Una riunione tecnica interna con accesso riservato.  
          Questo è il mio contributo per trasformare Ronconi da azienda stressata a impianto che lavora in pace, con margine.
        </p>

        <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '1.2rem' }}>Faisal Bahar</p>
      </div>
    </div>
  )
}

export default App

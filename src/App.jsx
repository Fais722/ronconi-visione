import './App.css'

function App() {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      fontFamily: 'Helvetica, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 1rem',
      color: '#222',
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 0 40px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          Ronconi: Visione Strategica per la Riorganizzazione
        </h1>
        <p style={{ textAlign: 'center', fontWeight: 500, marginBottom: '2rem' }}>
          Azione mirata, nessun rumore. Risultati misurabili.
        </p>

        <h2>🎯 Obiettivi chiari</h2>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
          <li>✅ Mappatura silenziosa dei processi, senza interrompere l’operatività</li>
          <li>✅ Analisi delle attività reali, tempi e colli di bottiglia</li>
          <li>✅ Organizzazione del personale per carichi, ruoli e priorità</li>
          <li>✅ Pianificazione agile con strumenti semplici (es: Smartsheet)</li>
          <li>✅ Revisione software: fatturazione, magazzino, spedizioni</li>
          <li>✅ Integrazione tecnica e gestionale con l’ambiente Gucon</li>
          <li>✅ Stress relief per l’ufficio tecnico e valorizzazione dei ricambi</li>
          <li>✅ Standardizzazione del flusso: offerta → ordine → progettazione → produzione → installazione</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>🧭 Approccio</h2>
        <p>
          Primo periodo di osservazione silenziosa. Nessun disturbo all’operatività.
          Solo dati, realtà e una proposta concreta.
        </p>

        <h2 style={{ marginTop: '2rem' }}>🚀 Prossimo passo</h2>
        <p>
          Una riunione tecnica interna con accesso riservato.
          Questo è il mio contributo per trasformare Ronconi da azienda stressata a impianto che lavora in pace, con margine.
        </p>

        <p style={{
          textAlign: 'right',
          marginTop: '3rem',
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Faisal Bahar
        </p>
      </div>
    </div>
  )
}

export default App

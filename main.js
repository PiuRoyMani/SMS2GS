const points = [
  {
    number: '01',
    title: 'Rules first',
    text: 'Reads only SMS messages that match rules defined by the user in the app.',
  },
  {
    number: '02',
    title: 'Your spreadsheet',
    text: 'Sends matched SMS data only to the user\'s own Google Spreadsheet; no data is sent to our servers.',
  },
  {
    number: '03',
    title: 'Google APIs',
    text: 'Uses Google API Services to interact with Google Sheets, and data handling is governed by Google\'s Privacy Policy.',
  },
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="SMS2GS home">
      <img class="brand-logo" src="ic_app_logo.svg" alt="" aria-hidden="true" />
      <span>SMS2GS</span>
    </a>
    <nav aria-label="Primary navigation">
      <a class="nav-link active" href="#top">Home</a>
      <a class="nav-link" href="privacy-policy.html">Privacy Policy</a>
      <a class="nav-link" href="terms-of-service.html">Terms of Service</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">Android utility · private by design</p>
        <h1>SMS<br /><em>to</em> Sheets.</h1>
        <p class="intro">A focused Android app that reads incoming SMS messages matching your rules and sends the data to your personal Google Spreadsheet.</p>
        <a class="scroll-cue" href="#principles"><span>Explore the details</span><span class="arrow">↓</span></a>
      </div>
      <div class="hero-art" aria-label="Illustration of an SMS message flowing into a spreadsheet">
        <div class="art-label label-top">MESSAGE<br /><strong>RECEIVED</strong></div>
        <div class="phone">
          <div class="phone-speaker"></div>
          <div class="phone-screen">
            <div class="status-row"><span>9:41</span><span>● ● ▮</span></div>
            <div class="message-meta"><span class="avatar">S</span><span><b>SecureBank</b><small>now</small></span></div>
            <div class="message-bubble">Payment received<br /><strong>$240.00</strong><br /><small>•••• 4280 · Today</small></div>
            <div class="rule-chip">✓ rule matched</div>
          </div>
        </div>
        <div class="sheet-card">
          <div class="sheet-top"><span class="sheet-icon">▦</span><span>My transactions</span><span class="live-dot"></span></div>
          <div class="sheet-grid"><span>DATE</span><span>TYPE</span><span>AMOUNT</span><b>Today</b><b>Credit</b><b>$240.00</b><b>May 08</b><b>Debit</b><b>$42.80</b></div>
        </div>
        <div class="connector" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="art-label label-bottom">DATA<br /><strong>DELIVERED</strong></div>
      </div>
    </section>

    <section id="principles" class="principles section-shell">
      <div class="section-heading"><p class="eyebrow">How it works</p><h2>Only what<br /><em>you</em> choose.</h2></div>
      <div class="principle-list">
        ${points.map((point) => `<article class="principle"><span class="principle-number">${point.number}</span><div><h3>${point.title}</h3><p>${point.text}</p></div></article>`).join('')}
      </div>
    </section>
  </main>

  <footer class="site-footer section-shell"><span>SMS2GS</span><span><a href="privacy-policy.html">Privacy Policy</a> · <a href="terms-of-service.html">Terms of Service</a></span><span>© ${new Date().getFullYear()}</span></footer>
`

import { useState } from 'react'
import './App.css'

const gold = '#d9b32f'

const properties = [
  { name: 'Maplewood House', type: 'House', units: '12', price: 'Rs.85L', leads: '+35', views: '125', status: '8/12 Occupied', image: '🏡' },
  { name: 'Serenity Villa', type: 'Villa', units: '9300', price: 'Rs.2.8Cr', leads: '+40', views: '930', status: 'Available', image: '🏘️' },
  { name: 'Rosehill Cottage', type: 'House', units: '25', price: 'Rs.1.1Cr', leads: '+15', views: '355', status: 'Available', image: '🏠' },
  { name: 'Skyline Edge', type: 'Apartment', units: '17', price: 'Rs.75L', leads: '+11', views: '425', status: 'Sold Out', image: '🏢' },
]

const contacts = [
  { name: 'John Doe', place: 'New York', color: '#9eaa88', initials: 'JD' },
  { name: 'Jessica Chen', place: 'California, LA', color: '#b68d74', initials: 'JC' },
  { name: 'Evan Chris', place: 'New York', color: '#8496a8', initials: 'EC' },
  { name: 'Jack B.', place: 'Ohio, Columbus', color: '#b7a080', initials: 'JB' },
  { name: 'Emily Paris', place: 'California, LA', color: '#c58d9b', initials: 'EP' },
]

const stages = [
  { name: 'Interested', a: 3, b: 2.5, c: 2.5 },
  { name: 'Site Visit Done', a: 3.8, b: 3.4, c: 2.8 },
  { name: 'Unit Shortlisted', a: 3.5, b: 3.1, c: 2.8 },
  { name: 'Contracts Signed', a: 3.8, b: 3.3, c: 2.9 },
  { name: 'Offer Initiated', a: 3.2, b: 2.7, c: 2.4 },
  { name: 'Offer Accepted', a: 3.8, b: 3.3, c: 2.9 },
]

const reminders = [
  ['Submit Final Offer- Villa Deal', 'Finalize and send offer documents.', 'gold'],
  ['Review Contract with Legal', 'Ensure attorney reviews apartment deal contract today.', 'gold'],
  ['Call Jessica Chen – Follow-up', 'Discuss her feedback after site visit to Angel Plaza.', 'pink'],
  ['Submit Internal Review – Apartment Pricing', 'Update CRM with latest market rates.', 'gold'],
]

function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    home: '◆', person: '♟', handshake: '♧', coins: '◉', search: '⌕',
    phone: '☎', arrow: '↗', left: '‹', right: '›', more: '···',
  }
  return <span className="icon">{icons[name] || '•'}</span>
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>
}

function Metric({ icon, title, value, change, negative = false }: {
  icon: string; title: string; value: string; change: string; negative?: boolean
}) {
  return (
    <Card className="metric">
      <div className="metric-heading">
        <span className="metric-icon"><Icon name={icon} /></span>
        <span>{title}</span>
      </div>
      <div className="metric-bottom">
        <strong>{value}</strong>
        <span className={`change ${negative ? 'negative' : ''}`}>{change} {negative ? '↘' : '↗'}</span>
      </div>
    </Card>
  )
}

function DonutChart() {
  return (
    <div className="donut-area">
      <div className="donut">
        <div className="donut-hole" />
      </div>
      <span className="donut-label website">Website<br />10 (24.83%)</span>
      <span className="donut-label inbound">Inbound Call<br />9 (37.87%)</span>
      <span className="donut-label facebook">Facebook<br />1 (6.78%)</span>
      <span className="donut-label reference">Reference<br />1 (30.6%)</span>
      <svg className="donut-arrows" viewBox="0 0 500 260" aria-hidden="true">
        <path d="M135 72 Q95 56 70 90 M70 90 L72 73 M70 90 L87 92" />
        <path d="M330 63 Q365 40 390 58 M390 58 L382 42 M390 58 L372 62" />
        <path d="M125 190 Q105 226 70 219 M70 219 L82 205 M70 219 L88 223" />
        <path d="M300 210 Q340 235 390 213 M390 213 L376 207 M390 213 L382 228" />
      </svg>
    </div>
  )
}

function StageChart() {
  return (
    <div className="stage-chart">
      <div className="y-label">Record Count</div>
      <div className="chart-main">
        <div className="grid-lines">
          {[10, 7.5, 5, 2.5, 0].map((n) => <div key={n}><span>{n}</span></div>)}
        </div>
        <div className="stage-bars">
          {stages.map((s) => (
            <div className="stage-column" key={s.name}>
              <div className="bar-stack">
                <i style={{ height: `${s.c * 10}%`, background: '#f5efd8' }} />
                <i style={{ height: `${s.b * 10}%`, background: '#efe0a9' }} />
                <i style={{ height: `${s.a * 10}%`, background: gold }} />
              </div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
        <div className="x-label">Stage</div>
      </div>
    </div>
  )
}

function HorizontalBars() {
  return (
    <div className="horizontal-chart">
      <span className="horizontal-y">Deal Owner</span>
      <div className="horizontal-main">
        {[{ a: 5, b: 6, c: 6.5 }, { a: 2.5, b: 5.5, c: 4.2 }].map((row, i) => (
          <div className="horizontal-row" key={i}>
            <span style={{ width: `${row.a * 5}%`, background: gold }} />
            <span style={{ width: `${row.b * 5}%`, background: '#efe0a9' }} />
            <span style={{ width: `${row.c * 5}%`, background: '#f5efd8' }} />
          </div>
        ))}
        <div className="axis-numbers">{[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20].map(n => <span key={n}>{n}</span>)}</div>
        <div className="x-label">Record Count</div>
      </div>
    </div>
  )
}

function Calendar() {
  const [month, setMonth] = useState(new Date(2025, 6, 1))
  const [selected, setSelected] = useState(8)
  const year = month.getFullYear()
  const m = month.getMonth()
  const firstDay = new Date(year, m, 1).getDay()
  const days = new Date(year, m + 1, 0).getDate()

  return (
    <Card className="calendar-card">
      <div className="calendar-title">
        <h2>{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <div>
          <button onClick={() => setMonth(new Date(year, m - 1, 1))}>‹</button>
          <button onClick={() => setMonth(new Date(year, m + 1, 1))}>›</button>
        </div>
      </div>
      <div className="calendar-grid">
        {'SMTWTFS'.split('').map((d, i) => <span className="weekday" key={`${d}-${i}`}>{d}</span>)}
        {Array.from({ length: firstDay }, (_, i) => <span key={`blank-${i}`} />)}
        {Array.from({ length: days }, (_, i) => i + 1).map((d) => (
          <button
            key={d}
            className={`${selected === d ? 'selected-day' : ''} ${[10, 17].includes(d) ? 'teal-day' : ''} ${[11, 14].includes(d) ? 'pink-day' : ''}`}
            onClick={() => setSelected(d)}
          >{d}</button>
        ))}
      </div>
      <div className="schedule">
        <h3>My Schedule</h3>
        {[
          ['Visit Client- Angel Plaza', 'Sector 45, Gurugram, Haryana', 'teal'],
          ['Visit Client – Site Walkthrough', 'Whitefield Road, Bengaluru, Karnataka', 'teal'],
          ['Follow Up – Jessica Chen', 'jessica.chen@email.com', 'pink'],
          ['Follow Up – Roger Bouchard', 'roger.bouchard@clientmail.com', 'pink'],
          ['Submit Final Offer – Villa Deal', 'Finalize and send offer documents.', 'gold'],
          ['Submit Internal Review – Apartment Pricing', 'Update CRM with latest market rates.', 'gold'],
        ].map(([title, subtitle, color]) => (
          <div className={`schedule-item ${color}`} key={title}>
            <strong>{title}</strong>
            <span>{subtitle}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [cookieBanner, setCookieBanner] = useState(true)
  const [search, setSearch] = useState('')
  const [reminderExpanded, setReminderExpanded] = useState(true)

  const nav = ['Home', 'Developments', 'Buildings', 'Units', 'Leads', 'Companies', 'Contacts', 'Deals', 'Activities', 'Attorney Firms', 'Reports', '···']

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">♧</span><strong>REALTOR360</strong></div>
        <nav className="navigation">
          {nav.map((item) => <button key={item} className={activeNav === item ? 'active' : ''} onClick={() => setActiveNav(item)}>{item}</button>)}
        </nav>
        <label className="search-box">
          <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
          <Icon name="search" />
        </label>
        <button className="profile" aria-label="User profile"><span>👨🏻‍💼</span><b>⌄</b></button>
      </header>

      <main className="dashboard">
        <div className="main-column">
          <div className="metrics-grid">
            <Metric icon="home" title="Active Listing" value="23" change="-12%" negative />
            <Metric icon="person" title="Active Leads" value="120" change="+12%" />
            <Metric icon="handshake" title="Total Closed" value="42" change="+12%" />
            <Metric icon="coins" title="Total Revenue" value="Rs.22Cr." change="+12%" />
          </div>

          <div className="analytics-grid">
            <Card><h2>Deals by Lead Source</h2><DonutChart /></Card>
            <Card><h2>Deals by Stages by Development</h2><StageChart /><div className="legend"><span><i className="dot a" />Angel Plaza</span><span><i className="dot b" />Angel Garden</span><span><i className="dot c" />None</span></div></Card>
            <Card className="sales-card"><h2>Deals by Sales People by Development</h2><HorizontalBars /><div className="legend"><span><i className="dot a" />Angel Plaza</span><span><i className="dot b" />Angel Garden</span><span><i className="dot c" />None</span></div></Card>
            <Card className="pipeline-card"><h2>Deals in Pipeline by Development</h2><table><thead><tr><th>Development Name</th><th>Record Count</th></tr></thead><tbody>{[['None', 14], ['Angel Plaza', 3], ['Angel Garden', 1]].map(([name, count]) => <tr key={name}><td>{name}</td><td>{count}</td></tr>)}</tbody></table></Card>
            <Card className="closed-card"><h2>Total Deals Closed</h2><div className="progress-track"><span /></div><div className="progress-labels"><strong>42 <small>Closed Deals</small></strong><strong>132 <small>On Progress</small></strong></div></Card>
          </div>

          <div className="bottom-grid">
            <Card className="property-card">
              <h2>Active Listing</h2>
              <div className="table-scroll"><table><thead><tr><th>Property</th><th>Type</th><th>Units</th><th>Price</th><th>Active Leads</th><th>Views</th><th>Status</th></tr></thead>
                <tbody>{properties.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map(p => (
                  <tr key={p.name}><td><span className="property-thumb">{p.image}</span><span className="property-name">{p.name}</span></td><td>{p.type}</td><td>{p.units}</td><td>{p.price}</td><td><span className="avatars">👨🏻‍💼👩🏻‍💼<small>{p.leads}</small></span></td><td>{p.views}</td><td><span className={`status ${p.status === 'Sold Out' ? 'sold' : ''}`}>{p.status}</span></td></tr>
                ))}</tbody>
              </table></div>
            </Card>
            <Card className="contacts-card">
              <h2>Leads Contacts <button aria-label="Open contacts">↗</button></h2>
              {contacts.map(c => <div className="contact-row" key={c.name}><span className="avatar" style={{ background: c.color }}>{c.initials}</span><div><strong>{c.name}</strong><span>{c.place}</span></div><button aria-label={`Call ${c.name}`} onClick={() => window.alert(`Contact ${c.name}`)}>☎</button></div>)}
            </Card>
          </div>
        </div>

        <aside className="sidebar">
          <Card className="reminder-card">
            <button className="reminder-title" onClick={() => setReminderExpanded(!reminderExpanded)}>Reminder</button>
            {reminderExpanded && <>
              <div className="followup"><strong>Follow-Ups</strong><span>15 leads need to be followed up.</span><div>👨🏻‍💼👩🏻‍💼👨🏻‍💼 <small>+11</small></div></div>
              {reminders.slice(0, 3).map(([title, text]) => <div className="reminder-item" key={title}><strong>{title}</strong><span>{text}</span></div>)}
            </>}
          </Card>
          <Calendar />
        </aside>
      </main>

      {cookieBanner && <div className="cookie-banner"><p>This website uses cookies, pixel tags, and local storage for performance, personalization, and marketing purposes. We use our own cookies and some from third parties. Only essential cookies are turned on by default. <a href="#cookies">Cookies settings</a></p><button onClick={() => setCookieBanner(false)}>Do not allow cookies</button><button className="allow" onClick={() => setCookieBanner(false)}>Allow all cookies</button><button className="close-cookie" onClick={() => setCookieBanner(false)}>×</button></div>}
    </div>
  )
}
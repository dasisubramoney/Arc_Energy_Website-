import { useState } from 'react'
import './VictronDiagramDetailed.css'

const FILTERS = ['All flows', 'Solar', 'DC / Battery', 'AC loads', 'Grid']
const FILTER_CLASS = {
  Solar: 'vd--solar',
  'DC / Battery': 'vd--dc',
  'AC loads': 'vd--ac',
  Grid: 'vd--grid',
}

// Lighter colour palette (per user request)
const C = {
  solar:  '#FFD166',
  dc:     '#FF8585',
  ac:     '#67E8F9',
  grid:   '#94A3B8',
  blue:   '#6AA0FF',
  amber:  '#FFD166',
  cyan:   '#67E8F9',
  fill:   'rgba(8, 14, 28, 0.97)',
  text:   '#CBD5E1',
  dim:    '#4A5568',
  green:  '#6EE7B7',
}

export default function VictronDiagramDetailed({ compact = false }) {
  const [filter, setFilter] = useState('All flows')
  const cls = FILTER_CLASS[filter] || ''

  return (
    <div className={`vd ${cls} ${compact ? 'vd--compact' : ''}`}>
      {/* ── Top bar — hidden in compact mode ── */}
      {!compact && (
        <div className="vd__topbar">
          <span className="vd__topbar-title">ARC ENERGY — VICTRON SYSTEM DIAGRAM</span>
          <span className="vd__interactive-badge">⚡ Interactive</span>
        </div>
      )}

      {/* ── Filter tabs ── */}
      <div className="vd__filters" role="tablist" aria-label="Filter energy flows">
        {FILTERS.map(f => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`vd__filter ${filter === f ? 'vd__filter--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── SVG Canvas ── */}
      <div className="vd__canvas-wrap">
        <svg viewBox="0 0 520 720" fill="none" xmlns="http://www.w3.org/2000/svg" className="vd__svg">

          {/* ════════════════════════════════
              SOLAR ARRAYS  (y: 12–75)
          ════════════════════════════════ */}

          {/* Array 1 */}
          <g>
            <rect x="8" y="12" width="148" height="63" rx="5" fill={C.fill} stroke={C.solar} strokeWidth="1.4" strokeOpacity="0.65" />
            <SolarPanelGrid x={18} y={20} />
            <text x="82" y="88" textAnchor="middle" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">8 × 405W — Array 1</text>
          </g>

          {/* Array 2 */}
          <g>
            <rect x="186" y="12" width="148" height="63" rx="5" fill={C.fill} stroke={C.solar} strokeWidth="1.4" strokeOpacity="0.65" />
            <SolarPanelGrid x={196} y={20} />
            <text x="260" y="88" textAnchor="middle" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">8 × 405W — Array 2</text>
          </g>

          {/* Array 3 */}
          <g>
            <rect x="364" y="12" width="148" height="63" rx="5" fill={C.fill} stroke={C.solar} strokeWidth="1.4" strokeOpacity="0.65" />
            <SolarPanelGrid x={374} y={20} />
            <text x="438" y="88" textAnchor="middle" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">8 × 405W — Array 3</text>
          </g>

          {/* ════════════════════════════════
              SOLAR FLOW LINES
          ════════════════════════════════ */}
          <g className="vd__flow-solar">
            {/* Verticals from array centers down to bus */}
            <DashLine x1={82}  y1={75}  x2={82}  y2={100} color={C.solar} />
            <DashLine x1={260} y1={75}  x2={260} y2={100} color={C.solar} />
            <DashLine x1={438} y1={75}  x2={438} y2={100} color={C.solar} />
            {/* Horizontal bus */}
            <DashLine x1={82}  y1={100} x2={438} y2={100} color={C.solar} />
            {/* Down to each MPPT */}
            <DashLine x1={122} y1={100} x2={122} y2={130} color={C.solar} />
            <DashLine x1={398} y1={100} x2={398} y2={130} color={C.solar} />
            {/* Arrows */}
            <Arrow x={82}  y={90}  dir="down" color={C.solar} />
            <Arrow x={260} y={90}  dir="down" color={C.solar} />
            <Arrow x={438} y={90}  dir="down" color={C.solar} />
            <Arrow x={122} y={118} dir="down" color={C.solar} />
            <Arrow x={398} y={118} dir="down" color={C.solar} />
          </g>

          {/* ════════════════════════════════
              MPPT CONTROLLERS  (y: 130–197)
          ════════════════════════════════ */}

          {/* MPPT 1 */}
          <g>
            <rect x="8" y="130" width="228" height="67" rx="6" fill={C.fill} stroke={C.blue} strokeWidth="1.4" strokeOpacity="0.75" />
            {/* Mini display */}
            <rect x="16" y="138" width="42" height="50" rx="3" fill="rgba(20,40,80,0.8)" stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="19" y="141" width="36" height="8" rx="1" fill={C.blue} opacity="0.35" />
            <rect x="19" y="152" width="36" height="4" rx="1" fill={C.blue} opacity="0.2" />
            <rect x="19" y="159" width="28" height="4" rx="1" fill={C.blue} opacity="0.2" />
            {/* Labels */}
            <text x="65" y="148" fill={C.text} fontSize="10.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">SmartSolar MPPT</text>
            <text x="65" y="162" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">250 / 100</text>
            <text x="65" y="173" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">DB#1 · Fusebox#1</text>
            <text x="65" y="187" fill={C.solar} fontSize="8.5" fontFamily="JetBrains Mono,monospace">Max 5,000W</text>
          </g>

          {/* MPPT 2 */}
          <g>
            <rect x="284" y="130" width="228" height="67" rx="6" fill={C.fill} stroke={C.blue} strokeWidth="1.4" strokeOpacity="0.75" />
            <rect x="292" y="138" width="42" height="50" rx="3" fill="rgba(20,40,80,0.8)" stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="295" y="141" width="36" height="8" rx="1" fill={C.blue} opacity="0.35" />
            <rect x="295" y="152" width="36" height="4" rx="1" fill={C.blue} opacity="0.2" />
            <rect x="295" y="159" width="28" height="4" rx="1" fill={C.blue} opacity="0.2" />
            <text x="341" y="148" fill={C.text} fontSize="10.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">SmartSolar MPPT</text>
            <text x="341" y="162" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">250 / 100</text>
            <text x="341" y="173" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">DB#2 · Fusebox#2</text>
            <text x="341" y="187" fill={C.solar} fontSize="8.5" fontFamily="JetBrains Mono,monospace">Max 5,000W</text>
          </g>

          {/* ════════════════════════════════
              DC FLOWS: MPPTs → Fusebox
          ════════════════════════════════ */}
          <g className="vd__flow-dc">
            <DashLine x1={122} y1={197} x2={122} y2={218} color={C.dc} />
            <DashLine x1={398} y1={197} x2={398} y2={218} color={C.dc} />
            <DashLine x1={122} y1={218} x2={398} y2={218} color={C.dc} />
            <DashLine x1={260} y1={218} x2={260} y2={237} color={C.dc} />
            <Arrow x={122} y={208} dir="down" color={C.dc} />
            <Arrow x={398} y={208} dir="down" color={C.dc} />
            <Arrow x={260} y={230} dir="down" color={C.dc} />
          </g>

          {/* ════════════════════════════════
              FUSEBOX / ISOLATOR  (y: 237–274)
          ════════════════════════════════ */}
          <g>
            <rect x="118" y="237" width="284" height="37" rx="5" fill={C.fill} stroke={C.dc} strokeWidth="1.4" strokeOpacity="0.7" />
            {/* Fuse symbols */}
            <rect x="130" y="248" width="18" height="14" rx="2" fill="rgba(255,133,133,0.25)" stroke={C.dc} strokeWidth="0.8" strokeOpacity="0.6" />
            <rect x="153" y="248" width="18" height="14" rx="2" fill="rgba(160,160,160,0.15)" stroke={C.dim} strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="176" y="248" width="18" height="14" rx="2" fill="rgba(160,160,160,0.15)" stroke={C.dim} strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="260" y="250" textAnchor="middle" fill={C.text} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="600">Fusebox / Isolator</text>
            <text x="260" y="264" textAnchor="middle" fill={C.dc} fontSize="9" fontFamily="JetBrains Mono,monospace">300A DC</text>
          </g>

          {/* ════════════════════════════════
              DC FLOW: Fusebox → Quattro
          ════════════════════════════════ */}
          <g className="vd__flow-dc">
            <DashLine x1={260} y1={274} x2={260} y2={300} color={C.dc} />
            <Arrow x={260} y={292} dir="down" color={C.dc} />
          </g>

          {/* ════════════════════════════════
              GRID INPUT  (y: 312–382)
          ════════════════════════════════ */}
          <g>
            <rect x="372" y="312" width="140" height="70" rx="5" fill="rgba(20,25,40,0.7)" stroke={C.grid} strokeWidth="1.2" strokeOpacity="0.5" />
            {/* H symbol */}
            <text x="392" y="345" fill={C.grid} fontSize="26" fontFamily="JetBrains Mono,monospace" fontWeight="700">H</text>
            <text x="422" y="338" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">Municipal</text>
            <text x="422" y="349" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">230Vac</text>
            <text x="422" y="360" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">50Hz</text>
          </g>

          {/* Grid → Quattro line */}
          <g className="vd__flow-grid">
            <DashLine x1={372} y1={347} x2={351} y2={347} color={C.grid} />
            <Arrow x={360} y={347} dir="left" color={C.grid} />
          </g>

          {/* ════════════════════════════════
              VICTRON QUATTRO  (y: 300–402)
          ════════════════════════════════ */}
          <g>
            <rect x="8" y="300" width="342" height="102" rx="6" fill={C.fill} stroke={C.blue} strokeWidth="1.8" strokeOpacity="0.85" />
            {/* Internal display panel */}
            <rect x="16" y="308" width="62" height="86" rx="4" fill="rgba(15,35,75,0.9)" stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.5" />
            <text x="47" y="323" textAnchor="middle" fill={C.blue} fontSize="7.5" fontFamily="JetBrains Mono,monospace">QUATTRO</text>
            <rect x="20" y="327" width="54" height="10" rx="1" fill="rgba(100,160,255,0.15)" />
            <text x="47" y="335" textAnchor="middle" fill={C.text} fontSize="7" fontFamily="JetBrains Mono,monospace">230.2V</text>
            <rect x="20" y="341" width="54" height="10" rx="1" fill="rgba(100,160,255,0.15)" />
            <text x="47" y="349" textAnchor="middle" fill={C.text} fontSize="7" fontFamily="JetBrains Mono,monospace">51.4V 98%</text>
            {/* LED dots */}
            <circle cx="24" cy="365" r="3" fill={C.green} opacity="0.9" />
            <circle cx="34" cy="365" r="3" fill={C.solar} opacity="0.7" />
            <circle cx="44" cy="365" r="3" fill={C.solar} opacity="0.5" />
            <circle cx="54" cy="365" r="3" fill={C.dim} opacity="0.5" />
            {/* Specs */}
            <text x="90" y="319" fill={C.text} fontSize="12" fontFamily="JetBrains Mono,monospace" fontWeight="700">Victron Quattro</text>
            <text x="90" y="335" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">48V / 10,000VA</text>
            <text x="90" y="348" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">Inverter / Charger</text>
            <text x="90" y="361" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">2× AC input · 230Vac out</text>
            <text x="90" y="376" fill={C.solar} fontSize="9" fontFamily="JetBrains Mono,monospace" fontWeight="600">Peak: 20,000W</text>
          </g>

          {/* Quattro → Shunt (DC down) */}
          <g className="vd__flow-dc">
            <DashLine x1={175} y1={402} x2={175} y2={415} color={C.dc} />
            <Arrow x={175} y={410} dir="down" color={C.dc} />
          </g>

          {/* Quattro → Cerbo (monitoring) */}
          <g className="vd__flow-ac">
            <DashLine x1={352} y1={355} x2={375} y2={355} color={C.ac} />
            <Arrow x={366} y={355} dir="right" color={C.ac} />
          </g>

          {/* ════════════════════════════════
              SHUNT  (y: 415–443)
          ════════════════════════════════ */}
          <g>
            <rect x="108" y="415" width="134" height="28" rx="4" fill="rgba(20,25,40,0.9)" stroke={C.dim} strokeWidth="1.1" strokeOpacity="0.5" />
            <text x="175" y="427" textAnchor="middle" fill={C.dim} fontSize="9" fontFamily="JetBrains Mono,monospace">Shunt</text>
            <text x="175" y="438" textAnchor="middle" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">500A/50mV</text>
          </g>

          {/* Shunt → Battery */}
          <g className="vd__flow-dc">
            <DashLine x1={175} y1={443} x2={175} y2={458} color={C.dc} />
            <Arrow x={175} y={453} dir="down" color={C.dc} />
          </g>

          {/* ════════════════════════════════
              BMV-702  (y: 458–523)
          ════════════════════════════════ */}
          <g>
            <rect x="8" y="458" width="95" height="65" rx="5" fill={C.fill} stroke={C.blue} strokeWidth="1.2" strokeOpacity="0.55" />
            <text x="55" y="473" textAnchor="middle" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">SOC 97%</text>
            <text x="55" y="484" textAnchor="middle" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">51.8V 18A</text>
            <line x1="16" y1="490" x2="94" y2="490" stroke={C.dim} strokeWidth="0.6" strokeOpacity="0.4" />
            <text x="55" y="503" textAnchor="middle" fill={C.text} fontSize="8.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">BMV-702</text>
            <text x="55" y="515" textAnchor="middle" fill={C.dim} fontSize="7.5" fontFamily="JetBrains Mono,monospace">Battery Monitor</text>
          </g>

          {/* Battery ← BMV wire */}
          <g className="vd__flow-dc">
            <DashLine x1={104} y1={490} x2={110} y2={490} color={C.dc} />
          </g>

          {/* ════════════════════════════════
              BATTERY BANK  (y: 458–553)
          ════════════════════════════════ */}
          <g>
            <rect x="110" y="458" width="240" height="95" rx="6" fill={C.fill} stroke={C.solar} strokeWidth="1.5" strokeOpacity="0.65" />
            {/* 3 battery cells */}
            <BatteryCell x={120} y={468} pct={97} />
            <BatteryCell x={200} y={468} pct={96} />
            <BatteryCell x={280} y={468} pct={98} />
            {/* Label */}
            <text x="230" y="540" textAnchor="middle" fill={C.text} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="600">Battery Bank</text>
            <text x="230" y="552" textAnchor="middle" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">52V · 460Ah · 24kWh</text>
          </g>

          {/* ════════════════════════════════
              COLOUR CONTROL GX  (y: 405–520)
          ════════════════════════════════ */}
          <g>
            <rect x="375" y="405" width="140" height="115" rx="5" fill={C.fill} stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.72" />
            {/* Header: Cerbo GX label */}
            <rect x="385" y="413" width="50" height="12" rx="2" fill="rgba(103,232,249,0.12)" />
            <text x="410" y="422" textAnchor="middle" fill={C.cyan} fontSize="7.5" fontFamily="JetBrains Mono,monospace">CERBO GX</text>
            <text x="430" y="414" fill={C.text} fontSize="8" fontFamily="JetBrains Mono,monospace">Colour</text>
            <text x="430" y="423" fill={C.text} fontSize="8" fontFamily="JetBrains Mono,monospace">Control GX</text>
            <line x1="383" y1="430" x2="507" y2="430" stroke={C.cyan} strokeWidth="0.6" strokeOpacity="0.3" />
            <text x="383" y="442" fill={C.dim} fontSize="7.5" fontFamily="JetBrains Mono,monospace">Grid: 230.1V</text>
            <text x="383" y="453" fill={C.dim} fontSize="7.5" fontFamily="JetBrains Mono,monospace">Solar: 4,820W</text>
            <text x="383" y="464" fill={C.dim} fontSize="7.5" fontFamily="JetBrains Mono,monospace">Batt: 97% 51.8V</text>
            <line x1="383" y1="471" x2="507" y2="471" stroke={C.cyan} strokeWidth="0.6" strokeOpacity="0.3" />
            {/* VRM badge */}
            <text x="383" y="483" fill={C.text} fontSize="8" fontFamily="JetBrains Mono,monospace">VRM Remote</text>
            <text x="383" y="494" fill={C.text} fontSize="8" fontFamily="JetBrains Mono,monospace">Monitoring</text>
            <line x1="383" y1="500" x2="507" y2="500" stroke={C.cyan} strokeWidth="0.6" strokeOpacity="0.3" />
            {/* Status dots */}
            <rect x="383" y="505" width="115" height="2" rx="1" fill={C.blue} opacity="0.4" />
            <rect x="383" y="509" width="115" height="2" rx="1" fill={C.blue} opacity="0.3" />
            <text x="383" y="522" fill={C.green} fontSize="8" fontFamily="JetBrains Mono,monospace">Arc Energy Diag. ✓</text>
          </g>

          {/* ════════════════════════════════
              AC FLOWS: Battery → DBs
          ════════════════════════════════ */}
          <g className="vd__flow-ac">
            {/* Battery → DB3 */}
            <DashLine x1={175} y1={553} x2={175} y2={568} color={C.ac} />
            {/* Battery → DB4 (via horizontal bus) */}
            <DashLine x1={280} y1={553} x2={390} y2={553} color={C.ac} />
            <DashLine x1={390} y1={553} x2={390} y2={568} color={C.ac} />
            <Arrow x={175} y={562} dir="down" color={C.ac} />
            <Arrow x={390} y={562} dir="down" color={C.ac} />
          </g>

          {/* ════════════════════════════════
              DB#3 — Non-Essential  (y: 568–655)
          ════════════════════════════════ */}
          <g>
            <rect x="8" y="568" width="252" height="87" rx="5" fill={C.fill} stroke={C.blue} strokeWidth="1.3" strokeOpacity="0.55" />
            {/* Breaker LEDs */}
            <rect x="16" y="578" width="10" height="8" rx="1" fill="rgba(255,133,133,0.5)" />
            <rect x="30" y="578" width="10" height="8" rx="1" fill="rgba(255,133,133,0.5)" />
            <rect x="44" y="578" width="10" height="8" rx="1" fill="rgba(160,160,160,0.3)" />
            <rect x="58" y="578" width="10" height="8" rx="1" fill="rgba(160,160,160,0.3)" />
            <text x="140" y="580" textAnchor="middle" fill={C.text} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="600">DB#3</text>
            <text x="140" y="594" textAnchor="middle" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">Non-Essential Loads</text>
            <line x1="16" y1="600" x2="250" y2="600" stroke={C.dim} strokeWidth="0.5" strokeOpacity="0.35" />
            <text x="16" y="612" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">Lights · Plugs · General</text>
            <text x="16" y="623" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">Switches to grid if overload</text>
            <text x="16" y="648" fill={C.dc} fontSize="8" fontFamily="JetBrains Mono,monospace">Grid-backed</text>
          </g>

          {/* ════════════════════════════════
              DB#4 — Essential  (y: 568–655)
          ════════════════════════════════ */}
          <g>
            <rect x="268" y="568" width="252" height="87" rx="5" fill={C.fill} stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
            {/* Breaker LEDs */}
            <rect x="276" y="578" width="10" height="8" rx="1" fill={`${C.green}99`} />
            <rect x="290" y="578" width="10" height="8" rx="1" fill={`${C.green}99`} />
            <rect x="304" y="578" width="10" height="8" rx="1" fill={`${C.green}99`} />
            <rect x="318" y="578" width="10" height="8" rx="1" fill={`${C.green}99`} />
            <text x="394" y="580" textAnchor="middle" fill={C.text} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="600">DB#4</text>
            <text x="394" y="594" textAnchor="middle" fill={C.dim} fontSize="8.5" fontFamily="JetBrains Mono,monospace">Essential Loads</text>
            <line x1="276" y1="600" x2="510" y2="600" stroke={C.dim} strokeWidth="0.5" strokeOpacity="0.35" />
            <text x="276" y="612" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">Servers · Security · Critical</text>
            <text x="276" y="623" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">Always-on via inverter</text>
            <text x="276" y="648" fill={C.green} fontSize="8" fontFamily="JetBrains Mono,monospace">Battery-backed ✓</text>
          </g>

          {/* ════════════════════════════════
              FOOTER SYSTEM SPEC LINE
          ════════════════════════════════ */}
          <text x="260" y="672" textAnchor="middle" fill={C.dim} fontSize="8" fontFamily="JetBrains Mono,monospace">
            24 × 405W · 9,720Wp · 52V 460Ah 24kWh · Quattro 48/10000 · Arc Energy
          </text>

        </svg>
      </div>

      {/* ── Legend ── */}
      <div className="vd__legend">
        <LegendItem color={C.solar} label="DC solar (PV)" />
        <LegendItem color={C.dc}    label="DC battery" />
        <LegendItem color={C.ac}    label="AC output" />
        {!compact && <LegendItem color={C.grid} label="Grid input" />}
      </div>

      {/* ── Quattro Spec Cards — hidden in compact mode ── */}
      {!compact && (
        <div className="vd__specs">
          <div className="vd__spec-heading">Victron Quattro 48/10000</div>
          <div className="vd__spec-grid">
            <SpecCard label="CONTINUOUS"  value="8,000W" />
            <SpecCard label="PEAK POWER"  value="20,000W" />
            <SpecCard label="BATTERY"     value="48V nominal" />
            <SpecCard label="AC INPUTS"   value="2× 230Vac" />
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════ SVG SUB-COMPONENTS ══════════════════ */

function SolarPanelGrid({ x, y }) {
  const cellW = 36, cellH = 20, gap = 3, cols = 3, rows = 2
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = x + c * (cellW + gap)
      const py = y + r * (cellH + gap)
      cells.push(
        <g key={`${r}-${c}`}>
          <rect x={px} y={py} width={cellW} height={cellH} rx="2"
            fill="rgba(18,35,70,0.9)" stroke="#FFD166" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1={px + cellW / 3}     y1={py}    x2={px + cellW / 3}     y2={py + cellH} stroke="#FFD166" strokeWidth="0.4" strokeOpacity="0.3" />
          <line x1={px + cellW * 2 / 3} y1={py}    x2={px + cellW * 2 / 3} y2={py + cellH} stroke="#FFD166" strokeWidth="0.4" strokeOpacity="0.3" />
          <line x1={px}                 y1={py + cellH / 2} x2={px + cellW} y2={py + cellH / 2} stroke="#FFD166" strokeWidth="0.4" strokeOpacity="0.3" />
        </g>
      )
    }
  }
  return <>{cells}</>
}

function BatteryCell({ x, y, pct }) {
  const h = 45
  const fillH = Math.round(h * pct / 100)
  return (
    <g>
      <rect x={x} y={y} width="58" height={h + 14} rx="3"
        fill="rgba(15,28,60,0.8)" stroke="#FFD166" strokeWidth="1" strokeOpacity="0.45" />
      {/* charge fill */}
      <rect x={x + 4} y={y + 4 + (h - fillH)} width="50" height={fillH} rx="2"
        fill="rgba(110,231,183,0.35)" />
      <text x={x + 29} y={y + h / 2 + 10} textAnchor="middle" fill="#6EE7B7" fontSize="11"
        fontFamily="JetBrains Mono,monospace" fontWeight="600">{pct}%</text>
    </g>
  )
}

function DashLine({ x1, y1, x2, y2, color }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth="1.6" strokeDasharray="6,4"
      strokeLinecap="round"
      className="vd__animated-flow"
    />
  )
}

function Arrow({ x, y, dir, color }) {
  const size = 5
  let points
  if (dir === 'down')  points = `${x},${y + size} ${x - size},${y - size} ${x + size},${y - size}`
  if (dir === 'up')    points = `${x},${y - size} ${x - size},${y + size} ${x + size},${y + size}`
  if (dir === 'right') points = `${x + size},${y} ${x - size},${y - size} ${x - size},${y + size}`
  if (dir === 'left')  points = `${x - size},${y} ${x + size},${y - size} ${x + size},${y + size}`
  return <polygon points={points} fill={color} opacity="0.9" />
}

function LegendItem({ color, label }) {
  return (
    <div className="vd__legend-item">
      <svg width="32" height="8" viewBox="0 0 32 8" aria-hidden="true">
        <line x1="0" y1="4" x2="32" y2="4" stroke={color} strokeWidth="2" strokeDasharray="6,3" />
      </svg>
      <span>{label}</span>
    </div>
  )
}

function SpecCard({ label, value }) {
  return (
    <div className="vd__spec-card">
      <div className="vd__spec-label">{label}</div>
      <div className="vd__spec-value">{value}</div>
    </div>
  )
}

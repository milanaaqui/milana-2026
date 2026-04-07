import { useState, useEffect } from "react";
import {
  ISR_TABLE, RESICO_TABLE, UMA_DIARIA, SALARIO_MINIMO, VACACIONES,
  ISN_POR_ESTADO, calcularISR, formatMoney, GUIAS, GLOSARIO, CALENDARIO
} from "./data.js";

const F = "system-ui, -apple-system, sans-serif";
const S = "Georgia, serif";

const LIGHT = {
  bg: "#fafbfc", card: "#fff", card2: "#f9fafb", tx: "#111827", tx2: "#6b7280",
  tx3: "#9ca3af", bd: "#e5e7eb", bd2: "#f3f4f6", nav: "rgba(255,255,255,0.95)",
  green: "#006847", dark: "#0f172a"
};
const DARK = {
  bg: "#0f172a", card: "#1e293b", card2: "#334155", tx: "#f1f5f9", tx2: "#94a3b8",
  tx3: "#64748b", bd: "#334155", bd2: "#1e293b", nav: "rgba(15,23,42,0.95)",
  green: "#4ade80", dark: "#020617"
};

/* ═══ GLOBAL CSS ═══ */
function GlobalStyles() {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = `
      @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
      .fade-up { animation: fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both; }
      .scale-in { animation: scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
      .delay-1 { animation-delay: 0.05s; } .delay-2 { animation-delay: 0.1s; }
      .delay-3 { animation-delay: 0.15s; } .delay-4 { animation-delay: 0.2s; }
      .hover-lift { transition: transform 0.25s, box-shadow 0.25s; }
      .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,0.08); }
      .grad-text { background: linear-gradient(135deg, #006847, #00a86b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      input:focus, select:focus { border-color: #006847 !important; box-shadow: 0 0 0 3px rgba(0,104,71,0.08) !important; }
      * { box-sizing: border-box; }
      .help-dot { position: relative; display: inline-flex; align-items: center; justify-content: center;
        width: 16px; height: 16px; border-radius: 50%; background: #e2e8f0; color: #64748b;
        font-size: 9px; font-weight: 700; cursor: help; margin-left: 5px; flex-shrink: 0; }
      .help-dot:hover .help-tip { display: block; }
      .help-tip { display: none; position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%);
        background: #1e293b; color: #fff; font-size: 11px; font-weight: 400; padding: 8px 11px;
        border-radius: 8px; width: 220px; line-height: 1.45; z-index: 50; pointer-events: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
      @media (max-width: 640px) {
        .calc-grid { grid-template-columns: 1fr !important; }
        .home-banner { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);
  return null;
}

/* ═══ ATOMS ═══ */
function HelpDot({ text }) {
  return <span className="help-dot">?<span className="help-tip">{text}</span></span>;
}

function NavBar({ page, go, dark, setDark, t }) {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: t.nav, backdropFilter: "blur(14px)", borderBottom: "1px solid " + t.bd, padding: "0 16px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 50 }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }} onClick={() => go("home")}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, #006847, #00a86b)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14 }}>M</div>
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 17, color: t.tx }}>Mi<span className="grad-text">Lana</span></span>
        </div>
        <div style={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
          {[["home", "Inicio"], ["worker", "Para Ti"], ["biz", "Empresas"], ["guias", "Guías"], ["tools", "Más"]].map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{
              padding: "4px 9px", border: "none", borderRadius: 5, cursor: "pointer",
              background: page === id ? (dark ? "#1e3a2f" : "#f0fdf4") : "transparent",
              color: page === id ? t.green : t.tx2, fontWeight: page === id ? 700 : 500,
              fontSize: 11, fontFamily: F
            }}>{label}</button>
          ))}
          <button onClick={() => setDark(!dark)} style={{ padding: "3px 7px", border: "1px solid " + t.bd, borderRadius: 5, cursor: "pointer", background: t.card, fontSize: 13, marginLeft: 3 }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NumInput({ label, value, setValue, prefix, tip, t }) {
  return (
    <div style={{ marginBottom: 11 }}>
      <label style={{ display: "flex", alignItems: "center", fontFamily: F, fontSize: 11, fontWeight: 600, color: t.tx2, marginBottom: 3 }}>
        {label}{tip && <HelpDot text={tip} />}
      </label>
      <div style={{ display: "flex" }}>
        {prefix && <span style={{ padding: "7px 9px", background: t.card2, border: "1px solid " + t.bd, borderRight: "none", borderRadius: "7px 0 0 7px", fontSize: 12, color: t.tx2, fontFamily: F }}>{prefix}</span>}
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} style={{
          flex: 1, padding: "7px 9px", border: "1px solid " + t.bd, borderRadius: prefix ? "0 7px 7px 0" : "7px",
          fontSize: 15, fontWeight: 600, color: t.tx, fontFamily: F, outline: "none", width: "100%", minWidth: 0, background: t.card
        }} />
      </div>
    </div>
  );
}

function StateSelect({ label, value, setValue, tip, t }) {
  return (
    <div style={{ marginBottom: 11 }}>
      <label style={{ display: "flex", alignItems: "center", fontFamily: F, fontSize: 11, fontWeight: 600, color: t.tx2, marginBottom: 3 }}>
        {label}{tip && <HelpDot text={tip} />}
      </label>
      <select value={value} onChange={(e) => setValue(e.target.value)} style={{
        width: "100%", padding: "7px 9px", border: "1px solid " + t.bd, borderRadius: 7,
        fontSize: 12, color: t.tx, background: t.card, fontFamily: F
      }}>
        {Object.keys(ISN_POR_ESTADO).map((s) => (
          <option key={s} value={s}>{s} ({(ISN_POR_ESTADO[s] * 100).toFixed(1)}%)</option>
        ))}
      </select>
    </div>
  );
}

function ResultRow({ label, value, red, t }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid " + t.bd2 }}>
      <span style={{ fontFamily: F, fontSize: 12, color: t.tx2 }}>{label}</span>
      <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: red ? "#dc2626" : t.tx }}>${formatMoney(value)}</span>
    </div>
  );
}

function BigResult({ label, value, sub }) {
  return (
    <div className="scale-in" style={{ background: "linear-gradient(135deg, #006847, #00a86b)", borderRadius: 11, padding: "16px 18px", marginTop: 12, textAlign: "center", boxShadow: "0 6px 20px rgba(0,104,71,0.2)" }}>
      <div style={{ fontFamily: F, fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{label}</div>
      <div style={{ fontFamily: F, fontSize: 26, fontWeight: 800, color: "#fff", margin: "3px 0" }}>${formatMoney(value)}</div>
      {sub && <div style={{ fontFamily: F, fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{sub}</div>}
    </div>
  );
}

function FormatGuideText({ texto, t, preview }) {
  const lines = texto.split("\n").filter((l) => l.trim() !== "");
  const limit = preview ? 6 : lines.length;
  return lines.slice(0, limit).map((line, i) => {
    const trimmed = line.trim();
    // Section headers (ALL CAPS lines)
    if (trimmed.length > 5 && trimmed.length < 120 && trimmed === trimmed.toUpperCase() && !trimmed.startsWith("-") && !trimmed.startsWith("P:") && !trimmed.startsWith("R:")) {
      return <h3 key={i} style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: t.green, margin: "20px 0 8px", lineHeight: 1.3 }}>{trimmed}</h3>;
    }
    // Bullet points
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      return <p key={i} style={{ fontFamily: F, fontSize: 14, color: t.tx, lineHeight: 1.7, margin: "0 0 6px", paddingLeft: 16 }}>• {trimmed.substring(2)}</p>;
    }
    // Q&A format
    if (trimmed.startsWith("P: ") || trimmed.startsWith("R: ")) {
      const isQ = trimmed.startsWith("P:");
      return <p key={i} style={{ fontFamily: F, fontSize: 14, color: isQ ? t.tx : t.tx2, lineHeight: 1.7, margin: isQ ? "14px 0 2px" : "0 0 8px", fontWeight: isQ ? 700 : 400 }}>{trimmed}</p>;
    }
    // Regular paragraph
    return <p key={i} style={{ fontFamily: F, fontSize: 14, color: t.tx, lineHeight: 1.75, margin: "0 0 12px" }}>{trimmed}</p>;
  });
}

function GuideEmbed({ calcId, go, t }) {
  const guia = GUIAS.find((g) => g.id === calcId);
  if (!guia) return null;
  return (
    <div className="fade-up delay-3" style={{ maxWidth: 800, margin: "10px auto 0", padding: "0 16px 16px" }}>
      <div style={{ background: t.card, borderRadius: 10, padding: 18, border: "1px solid " + t.bd }}>
        <h3 style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: t.green, margin: "0 0 10px" }}>📘 {guia.titulo}</h3>
        <FormatGuideText texto={guia.texto} t={t} preview />
        <button onClick={() => go("g-" + guia.id)} style={{
          fontFamily: F, fontSize: 12, color: t.green, background: "none", border: "1px solid " + t.green + "40",
          borderRadius: 6, padding: "7px 16px", cursor: "pointer", marginTop: 8, fontWeight: 600
        }}>Leer guía completa →</button>
      </div>
    </div>
  );
}

function CalcLayout({ title, badge, left, right, calcId, t, go }) {
  return (
    <div>
      <div className="fade-up" style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px 12px" }}>
        {badge && <span style={{ display: "inline-block", padding: "3px 9px", borderRadius: 5, marginBottom: 6, background: t.green + "20", color: t.green, fontSize: 10, fontWeight: 700, fontFamily: F }}>{badge}</span>}
        <h2 style={{ fontFamily: S, fontSize: 22, fontWeight: 400, color: t.tx, margin: "0 0 16px" }}>{title}</h2>
        <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="fade-up delay-1" style={{ background: t.card, borderRadius: 11, padding: 18, border: "1px solid " + t.bd }}>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: t.green, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>Tus datos</div>
            {left}
          </div>
          <div className="fade-up delay-2" style={{ background: t.card, borderRadius: 11, padding: 18, border: "1px solid " + t.bd }}>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: t.green, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>Resultado</div>
            {right}
          </div>
        </div>
        <p style={{ fontFamily: F, fontSize: 9, color: t.tx3, marginTop: 10 }}>
          Datos fiscales 2026 · Anexo 8 RMF (DOF 28/12/2025) · UMA: $117.31/día · Sal. mínimo: $315.04/día · Última actualización: marzo 2026
        </p>
      </div>
      {calcId && <GuideEmbed calcId={calcId} go={go} t={t} />}
    </div>
  );
}

function ToolCard({ icon, title, desc, tag, onClick, t }) {
  return (
    <div onClick={onClick} className="hover-lift" style={{ background: t.card, borderRadius: 10, padding: 14, cursor: "pointer", border: "1px solid " + t.bd }}>
      <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
      <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: t.tx, marginBottom: 2 }}>{title}</div>
      <div style={{ fontFamily: F, fontSize: 11, color: t.tx2, lineHeight: 1.4 }}>{desc}</div>
      {tag && <span style={{ display: "inline-block", marginTop: 5, padding: "2px 6px", borderRadius: 4, background: tag === "NUEVO" ? "#fef3c7" : "#dbeafe", color: tag === "NUEVO" ? "#92400e" : "#1e40af", fontSize: 9, fontWeight: 700 }}>{tag}</span>}
    </div>
  );
}

/* ═══ CALCULADORAS ═══ */
function CalcISR({ t, go }) {
  const [bruto, setBruto] = useState("20000");
  const v = parseFloat(bruto) || 0;
  const isr = calcularISR(v), imss = v * 0.025, neto = v - isr - imss;
  const tasa = v > 0 ? ((isr + imss) / v * 100).toFixed(1) : "0";
  return (
    <CalcLayout t={t} go={go} title="Calculadora ISR — Bruto a Neto" badge="DATOS 2026" calcId="isr"
      left={<NumInput t={t} label="Sueldo mensual BRUTO" value={bruto} setValue={setBruto} prefix="$" tip="Lo que dice tu contrato ANTES de cualquier descuento. Aparece en tu recibo como 'Total percepciones'." />}
      right={<div>
        <ResultRow t={t} label="ISR mensual" value={isr} />
        <ResultRow t={t} label="IMSS obrera (~2.5%)" value={imss} />
        <ResultRow t={t} label="Total que te descuentan" value={isr + imss} red />
        <BigResult label="Lo que realmente recibes" value={neto} sub={"Cada quincena: $" + formatMoney(neto / 2) + " · Tasa efectiva: " + tasa + "%"} />
        <ResultRow t={t} label="Neto anual (12 meses)" value={neto * 12} />
      </div>} />
  );
}

function CalcFiniquito({ t, go }) {
  const [sal, setSal] = useState("15000");
  const [mes, setMes] = useState("8");
  const [dAg, setDAg] = useState("15");
  const [dVa, setDVa] = useState("12");
  const v = parseFloat(sal) || 0, ms = parseFloat(mes) || 0;
  const da = parseFloat(dAg) || 15, dv = parseFloat(dVa) || 12;
  const sd = v / 30;
  const ag = sd * da * (ms / 12), vc = sd * dv * (ms / 12), pv = vc * 0.25;
  return (
    <CalcLayout t={t} go={go} title="Calculadora de Finiquito" badge="RENUNCIA VOLUNTARIA" calcId="fin"
      left={<div>
        <NumInput t={t} label="Sueldo mensual BRUTO" value={sal} setValue={setSal} prefix="$" tip="Tu sueldo antes de descuentos. Si ganas $15,000 al mes, pon 15000." />
        <NumInput t={t} label="Meses trabajados este año" value={mes} setValue={setMes} tip="Si entraste en mayo y renuncias en diciembre, son 8 meses." />
        <NumInput t={t} label="Días de aguinaldo" value={dAg} setValue={setDAg} tip="Mínimo 15 por ley. Tu contrato puede decir más (20, 30, 40). Revisa tu contrato o pregunta a RH." />
        <NumInput t={t} label="Días de vacaciones" value={dVa} setValue={setDVa} tip="Depende de tu antigüedad: 1° año = 12, 2° = 14, 3° = 16, 4° = 18, 5° = 20 días." />
      </div>}
      right={<div>
        <ResultRow t={t} label="Aguinaldo proporcional" value={ag} />
        <ResultRow t={t} label="Vacaciones proporcionales" value={vc} />
        <ResultRow t={t} label="Prima vacacional (25%)" value={pv} />
        <BigResult label="Tu finiquito estimado" value={ag + vc + pv} sub="Antes de ISR · Por renuncia voluntaria" />
      </div>} />
  );
}

function CalcLiquidacion({ t, go }) {
  const [sal, setSal] = useState("18000");
  const [ant, setAnt] = useState("5");
  const [mes, setMes] = useState("6");
  const [dAg, setDAg] = useState("15");
  const [dVa, setDVa] = useState("20");
  const v = parseFloat(sal) || 0, an = parseFloat(ant) || 0, ms = parseFloat(mes) || 0;
  const da = parseFloat(dAg) || 15, dv = parseFloat(dVa) || 12;
  const sd = v / 30;
  const sdi = sd * (1 + (da / 365) + (dv * 0.25 / 365));
  const i90 = sdi * 90, i20 = sdi * 20 * an;
  const pa = Math.min(sd * 12, SALARIO_MINIMO * 2 * 12) * an;
  const ag = sd * da * (ms / 12), vc = sd * dv * (ms / 12), pv = vc * 0.25;
  const total = i90 + i20 + pa + ag + vc + pv;
  return (
    <CalcLayout t={t} go={go} title="Calculadora de Liquidación" badge="DESPIDO INJUSTIFICADO" calcId="liq"
      left={<div>
        <NumInput t={t} label="Sueldo mensual BRUTO" value={sal} setValue={setSal} prefix="$" tip="El sueldo completo de tu contrato." />
        <NumInput t={t} label="Años de antigüedad" value={ant} setValue={setAnt} tip="Si llevas 2 años y medio, pon 2.5" />
        <NumInput t={t} label="Meses trabajados este año" value={mes} setValue={setMes} tip="De enero hasta el mes que te despidieron." />
        <NumInput t={t} label="Días de aguinaldo" value={dAg} setValue={setDAg} tip="Los que dice tu contrato. Mínimo 15 por ley." />
        <NumInput t={t} label="Días de vacaciones" value={dVa} setValue={setDVa} tip="Según tu antigüedad: 5 años = 20 días." />
      </div>}
      right={<div>
        <ResultRow t={t} label="SDI (Sal. Diario Integrado)" value={sdi} />
        <ResultRow t={t} label="90 días indemnización" value={i90} />
        <ResultRow t={t} label={"20 días × " + an + " año" + (an > 1 ? "s" : "")} value={i20} />
        <ResultRow t={t} label="Prima de antigüedad" value={pa} />
        <ResultRow t={t} label="Aguinaldo proporcional" value={ag} />
        <ResultRow t={t} label="Vacaciones + prima vac." value={vc + pv} />
        <BigResult label="Liquidación total estimada" value={total} sub={"SDI: $" + formatMoney(sdi) + "/día · Antes de ISR"} />
      </div>} />
  );
}

function CalcAguinaldo({ t, go }) {
  const [sal, setSal] = useState("18000");
  const [mes, setMes] = useState("12");
  const [dAg, setDAg] = useState("15");
  const v = parseFloat(sal) || 0, ms = parseFloat(mes) || 12, da = parseFloat(dAg) || 15;
  const sd = v / 30, bruto = sd * da * (ms / 12);
  const exencion = UMA_DIARIA * 30, gravado = Math.max(bruto - exencion, 0), isr = gravado * 0.1;
  return (
    <CalcLayout t={t} go={go} title="Calculadora de Aguinaldo" badge="TU MES 13 🎄" calcId="agu"
      left={<div>
        <NumInput t={t} label="Sueldo mensual BRUTO" value={sal} setValue={setSal} prefix="$" />
        <NumInput t={t} label="Días de aguinaldo" value={dAg} setValue={setDAg} tip="MÍNIMO 15 por ley. Muchas empresas dan 20, 30 o 40. Revisa tu contrato o pregunta a RH." />
        <NumInput t={t} label="Meses trabajados en el año" value={mes} setValue={setMes} tip="Año completo = 12. Si entraste en junio = 7." />
      </div>}
      right={<div>
        <ResultRow t={t} label="Aguinaldo bruto" value={bruto} />
        <ResultRow t={t} label={"Exento de ISR (30 UMAs = $" + formatMoney(exencion) + ")"} value={Math.min(bruto, exencion)} />
        <ResultRow t={t} label="Gravado (paga impuesto)" value={gravado} />
        <ResultRow t={t} label="ISR estimado" value={isr} red />
        <BigResult label="Aguinaldo que recibes" value={bruto - isr} sub={ms < 12 ? "Proporcional " + ms + " meses" : ""} />
      </div>} />
  );
}

function CalcRESICO({ t, go }) {
  const [ing, setIng] = useState("40000");
  const v = parseFloat(ing) || 0;
  let tasa = 0.01;
  for (const b of RESICO_TABLE) { if (v >= b.l && v <= b.u) { tasa = b.r; break; } }
  const isrR = v * tasa, isrG = calcularISR(v), ahorro = isrG - isrR;
  return (
    <CalcLayout t={t} go={go} title="Calculadora RESICO" badge="PARA FREELANCERS" calcId="res"
      left={<div>
        <NumInput t={t} label="Ingreso mensual facturado" value={ing} setValue={setIng} prefix="$" tip="Lo que facturas al mes (sin IVA). Si facturas $40,000 + IVA, pon 40000." />
        <div style={{ padding: "7px 11px", background: t.green + "15", borderRadius: 7, fontFamily: F, fontSize: 12, color: t.green }}>
          Tu tasa RESICO: <strong>{(tasa * 100).toFixed(1)}%</strong>
        </div>
      </div>}
      right={<div>
        <ResultRow t={t} label="ISR en RESICO" value={isrR} />
        <ResultRow t={t} label="ISR en Régimen General" value={isrG} red />
        <ResultRow t={t} label="Ahorro mensual" value={ahorro} />
        <BigResult label="Te ahorras con RESICO" value={ahorro} sub={"$" + formatMoney(ahorro * 12) + " al año"} />
      </div>} />
  );
}

function CalcPTU({ t, go }) {
  const [ptu, setPtu] = useState("25000");
  const v = parseFloat(ptu) || 0;
  const ex = UMA_DIARIA * 15, grav = Math.max(v - ex, 0), isr = grav * 0.1;
  return (
    <CalcLayout t={t} go={go} title="Calculadora PTU" badge="REPARTO DE UTILIDADES" calcId="ptu"
      left={<NumInput t={t} label="PTU bruto que te dieron" value={ptu} setValue={setPtu} prefix="$" tip="La cantidad ANTES de descuentos que te corresponde del reparto. RH te debe dar un recibo." />}
      right={<div>
        <ResultRow t={t} label={"Exento (15 UMAs = $" + formatMoney(ex) + ")"} value={Math.min(v, ex)} />
        <ResultRow t={t} label="Gravado (paga impuesto)" value={grav} />
        <ResultRow t={t} label="ISR estimado" value={isr} red />
        <BigResult label="PTU neto" value={v - isr} />
      </div>} />
  );
}

function CalcVacaciones({ t, go }) {
  const [ant, setAnt] = useState("3");
  const v = parseInt(ant) || 1;
  const dias = VACACIONES[Math.min(v, 16) - 1] || 12;
  return (
    <CalcLayout t={t} go={go} title="Tabla de Vacaciones" badge="VACACIONES DIGNAS 2023" calcId="vac"
      left={<NumInput t={t} label="Años de antigüedad" value={ant} setValue={setAnt} tip="Años cumplidos en la empresa. Si llevas 2 años y 8 meses, pon 2." />}
      right={<div style={{ maxHeight: 280, overflowY: "auto" }}>
        {VACACIONES.map((d, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", padding: "6px 10px",
            background: (i + 1) === v ? t.green + "15" : i % 2 ? t.card2 : t.card,
            borderRadius: 5, border: (i + 1) === v ? "2px solid " + t.green : "none",
            fontFamily: F, fontSize: 12, marginBottom: 2
          }}>
            <span style={{ color: t.tx2, fontWeight: (i + 1) === v ? 700 : 400 }}>Año {i + 1}</span>
            <span style={{ fontWeight: 700, color: (i + 1) === v ? t.green : t.tx }}>{d} días</span>
          </div>
        ))}
      </div>} />
  );
}

function CalcCosto({ t, go }) {
  const [sal, setSal] = useState("15000");
  const [est, setEst] = useState("CDMX");
  const v = parseFloat(sal) || 0, isn = ISN_POR_ESTADO[est] || 0.03;
  const imss = v * 0.204, info = v * 0.05, sar = v * 0.02, isnM = v * isn;
  const ag = (v / 30 * 15) / 12, vc = (v / 30 * 12 * 0.25) / 12;
  const total = v + imss + info + sar + isnM + ag + vc;
  return (
    <CalcLayout t={t} go={go} title="Costo Real de un Empleado" badge="PARA EMPRESAS · POR ESTADO" calcId="cos"
      left={<div>
        <NumInput t={t} label="Sueldo que quieres ofrecer" value={sal} setValue={setSal} prefix="$" tip="El sueldo bruto mensual que pondrás en el contrato." />
        <StateSelect t={t} label="Estado donde opera tu empresa" value={est} setValue={setEst} tip="El ISN cambia según el estado. Por ejemplo: Jalisco cobra 2% pero CDMX cobra 3%." />
      </div>}
      right={<div>
        <ResultRow t={t} label="Sueldo bruto" value={v} />
        <ResultRow t={t} label="IMSS patronal (~20.4%)" value={imss} red />
        <ResultRow t={t} label="Infonavit (5%)" value={info} red />
        <ResultRow t={t} label="SAR/retiro (2%)" value={sar} red />
        <ResultRow t={t} label={"ISN " + est + " (" + (isn * 100).toFixed(1) + "%)"} value={isnM} red />
        <ResultRow t={t} label="Prestaciones prorrateadas" value={ag + vc} red />
        <BigResult label="Costo REAL mensual" value={total} sub={v > 0 ? "$" + formatMoney(total - v) + " extra (+" + ((total - v) / v * 100).toFixed(0) + "% sobre sueldo)" : ""} />
      </div>} />
  );
}

function CalcAumento({ t, go }) {
  const [act, setAct] = useState("15000");
  const [nue, setNue] = useState("18000");
  const [est, setEst] = useState("CDMX");
  const a = parseFloat(act) || 0, n = parseFloat(nue) || 0;
  const mult = 1 + 0.204 + 0.05 + 0.02 + (ISN_POR_ESTADO[est] || 0.03);
  return (
    <CalcLayout t={t} go={go} title="Simulador de Aumento" badge="PARA EMPRESAS" calcId="aum"
      left={<div>
        <NumInput t={t} label="Sueldo actual del empleado" value={act} setValue={setAct} prefix="$" tip="Lo que pagas actualmente (bruto)." />
        <NumInput t={t} label="Sueldo nuevo que quieres dar" value={nue} setValue={setNue} prefix="$" tip="A cuánto quieres subirle." />
        <StateSelect t={t} label="Estado" value={est} setValue={setEst} />
      </div>}
      right={<div>
        <ResultRow t={t} label="Aumento nominal" value={n - a} />
        <ResultRow t={t} label="Costo actual total" value={a * mult} />
        <ResultRow t={t} label="Costo nuevo total" value={n * mult} />
        <BigResult label="El aumento realmente te cuesta" value={(n - a) * mult} sub={"No son $" + formatMoney(n - a) + ", son $" + formatMoney((n - a) * mult)} />
      </div>} />
  );
}

function CalcDespido({ t, go }) {
  const [sal, setSal] = useState("18000");
  const [ant, setAnt] = useState("5");
  const v = parseFloat(sal) || 0, an = parseFloat(ant) || 0;
  const sd = v / 30, sdi = sd * 1.0493;
  const ind = sdi * 90 + sdi * 20 * an;
  const pa = Math.min(sd * 12, SALARIO_MINIMO * 2 * 12) * an;
  return (
    <CalcLayout t={t} go={go} title="Costo de Despido" badge="PARA EMPRESAS" calcId="des"
      left={<div>
        <NumInput t={t} label="Sueldo del empleado" value={sal} setValue={setSal} prefix="$" tip="Sueldo mensual bruto del trabajador." />
        <NumInput t={t} label="Años de antigüedad" value={ant} setValue={setAnt} tip="Años completos que lleva en la empresa." />
      </div>}
      right={<div>
        <ResultRow t={t} label="Indemnización (90d + 20d/año)" value={ind} />
        <ResultRow t={t} label="Prima de antigüedad" value={pa} />
        <BigResult label="Costo total del despido" value={ind + pa} sub="+ finiquito proporcional (aguinaldo, vacaciones)" />
      </div>} />
  );
}

/* ═══ PAGES ═══ */
function HomePage({ go, goCalc, t }) {
  const workerCalcs = [
    ["💰", "ISR Bruto → Neto", "¿Cuánto recibo realmente?", "isr", "POPULAR"],
    ["📋", "Finiquito", "Renuncié, ¿qué me toca?", "fin", ""],
    ["⚖️", "Liquidación", "Me despidieron", "liq", ""],
    ["🎄", "Aguinaldo", "Mi mes 13", "agu", ""],
    ["🧾", "RESICO", "Para freelancers", "res", "NUEVO"],
    ["💵", "PTU", "Reparto de utilidades", "ptu", ""],
    ["🏖️", "Vacaciones", "¿Cuántos días me tocan?", "vac", ""],
  ];
  const bizCalcs = [
    ["🏢", "Costo Real Empleado", "Desglose por estado", "cos", "NUEVO"],
    ["📊", "Sim. de Aumento", "El costo real de subir sueldo", "aum", "NUEVO"],
    ["🚪", "Costo de Despido", "Presupuesta liquidaciones", "des", "NUEVO"],
  ];
  return (
    <div className="fade-up">
      {/* Hero */}
      <div style={{ background: t === DARK ? "linear-gradient(165deg, #0a1628, #0f2318, #0a1628)" : "linear-gradient(165deg, #f0fdf4, #ecfeff 40%, #fff)", padding: "52px 16px 36px", textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 50, background: "#006847", color: "#fff", fontSize: 10, fontWeight: 600, fontFamily: F, marginBottom: 14, letterSpacing: "0.3px" }}>
            DATOS FISCALES 2026 · SAT · IMSS · LFT
          </div>
          <h1 className="fade-up" style={{ fontFamily: S, fontSize: "clamp(30px, 5vw, 38px)", fontWeight: 400, color: t.tx, lineHeight: 1.1, margin: "0 0 12px" }}>
            Entiende tu dinero.<br /><span className="grad-text">Toma el control.</span>
          </h1>
          <p className="fade-up delay-1" style={{ fontFamily: F, fontSize: 14, color: t.tx2, lineHeight: 1.5, margin: "0 0 22px" }}>
            Calculadoras financieras + guías laborales diseñadas para México.<br />Gratis. Actualizadas. Fáciles de entender.
          </p>
          <div className="fade-up delay-2" style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => go("worker")} className="hover-lift" style={{ padding: "10px 24px", borderRadius: 9, border: "none", cursor: "pointer", background: "#006847", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: F, boxShadow: "0 4px 14px rgba(0,104,71,0.3)" }}>Para trabajadores</button>
            <button onClick={() => go("biz")} className="hover-lift" style={{ padding: "10px 24px", borderRadius: 9, border: "2px solid " + t.bd, cursor: "pointer", background: t.card, color: t.tx, fontSize: 14, fontWeight: 600, fontFamily: F }}>Para empresas</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: t.dark, padding: "18px 16px", display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap" }}>
        {[["10", "Calculadoras"], ["2026", "Actualizado"], ["$0", "Gratis"], [String(GUIAS.length), "Guías"]].map(([n, l], i) => (
          <div key={i} className={"fade-up delay-" + (i + 1)} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: F, fontSize: 20, fontWeight: 800, color: "#4ade80" }}>{n}</div>
            <div style={{ fontFamily: F, fontSize: 10, color: "#94a3b8" }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Calcs */}
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "36px 16px 16px" }}>
        <h2 className="fade-up" style={{ fontFamily: S, fontSize: 19, color: t.tx, margin: "0 0 12px", fontWeight: 400 }}>Para trabajadores</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 8, marginBottom: 28 }}>
          {workerCalcs.map(([ic, ti, de, id, tg], i) => (
            <ToolCard key={id} t={t} icon={ic} title={ti} desc={de} tag={tg} onClick={() => goCalc(id)} />
          ))}
        </div>

        <h2 className="fade-up" style={{ fontFamily: S, fontSize: 19, color: t.tx, margin: "0 0 12px", fontWeight: 400 }}>Para empresas y patrones</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 8, marginBottom: 28 }}>
          {bizCalcs.map(([ic, ti, de, id, tg], i) => (
            <ToolCard key={id} t={t} icon={ic} title={ti} desc={de} tag={tg} onClick={() => goCalc(id)} />
          ))}
        </div>

        {/* Banners */}
        <div className="home-banner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          <div className="hover-lift" onClick={() => go("guias")} style={{ background: "linear-gradient(135deg, #006847, #00a86b)", borderRadius: 12, padding: "22px 18px", cursor: "pointer" }}>
            <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px" }}>{GUIAS.length} ARTÍCULOS</span>
            <h3 style={{ fontFamily: S, fontSize: 17, color: "#fff", margin: "5px 0", fontWeight: 400 }}>Guías financieras</h3>
            <p style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>Tus derechos laborales explicados fácil</p>
          </div>
          <div className="hover-lift" onClick={() => go("quiz")} style={{ background: t.card, borderRadius: 12, padding: "22px 18px", cursor: "pointer", border: "1px solid " + t.bd, textAlign: "center" }}>
            <span style={{ fontSize: 26 }}>🧭</span>
            <h3 style={{ fontFamily: F, fontSize: 15, color: t.tx, margin: "5px 0 2px", fontWeight: 700 }}>¿No sabes qué te toca?</h3>
            <p style={{ fontFamily: F, fontSize: 11, color: t.tx2, margin: 0 }}>Quiz rápido de 2 preguntas</p>
          </div>
        </div>
      </div>
      <Footer go={go} t={t} />
    </div>
  );
}

function ListPage({ go, goCalc, t, type }) {
  const worker = [["💰", "ISR", "Bruto a neto", "isr", "POPULAR"], ["📋", "Finiquito", "Renuncia", "fin", ""], ["⚖️", "Liquidación", "Despido", "liq", ""], ["🎄", "Aguinaldo", "Mes 13", "agu", ""], ["🧾", "RESICO", "Freelancers", "res", "NUEVO"], ["💵", "PTU", "Utilidades", "ptu", ""], ["🏖️", "Vacaciones", "Días libres", "vac", ""]];
  const biz = [["🏢", "Costo Empleado", "Por estado", "cos", "NUEVO"], ["📊", "Sim. Aumento", "Costo real", "aum", "NUEVO"], ["🚪", "Costo Despido", "Liquidaciones", "des", "NUEVO"]];
  const items = type === "biz" ? biz : worker;
  return (
    <div className="fade-up" style={{ maxWidth: 940, margin: "0 auto", padding: "24px 16px 32px" }}>
      <h2 style={{ fontFamily: S, fontSize: 22, color: t.tx, margin: "0 0 14px", fontWeight: 400 }}>{type === "biz" ? "Para Empresas y Patrones" : "Para Trabajadores"}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 9 }}>
        {items.map(([ic, ti, de, id, tg]) => (
          <ToolCard key={id} t={t} icon={ic} title={ti} desc={de} tag={tg} onClick={() => goCalc(id)} />
        ))}
      </div>
    </div>
  );
}

function GuidesPage({ go, t }) {
  return (
    <div className="fade-up" style={{ maxWidth: 740, margin: "0 auto", padding: "24px 16px 32px" }}>
      <h2 style={{ fontFamily: S, fontSize: 22, color: t.tx, margin: "0 0 4px", fontWeight: 400 }}>Guías Financieras</h2>
      <p style={{ fontFamily: F, fontSize: 12, color: t.tx2, margin: "0 0 16px" }}>{GUIAS.length} artículos sobre tus derechos laborales y financieros en México.</p>
      {GUIAS.map((g, i) => (
        <div key={g.id} className={"hover-lift fade-up delay-" + Math.min(i % 4 + 1, 4)} onClick={() => go("g-" + g.id)} style={{
          background: t.card, borderRadius: 9, padding: 14, cursor: "pointer", border: "1px solid " + t.bd,
          marginBottom: 7, display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: t.tx }}>{g.titulo}</div>
            {g.calc && <span style={{ fontFamily: F, fontSize: 9, color: t.green }}>Incluye calculadora</span>}
          </div>
          <span style={{ color: t.tx3, marginLeft: 8, flexShrink: 0, fontSize: 16 }}>→</span>
        </div>
      ))}
    </div>
  );
}

function GuidePage({ id, go, goCalc, t }) {
  const guia = GUIAS.find((g) => g.id === id);
  if (!guia) return null;
  return (
    <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 32px" }}>
      <button onClick={() => go("guias")} style={{ fontFamily: F, fontSize: 11, color: t.green, background: "none", border: "none", cursor: "pointer", marginBottom: 14 }}>← Todas las guías</button>
      <span style={{ display: "inline-block", padding: "3px 9px", borderRadius: 5, marginBottom: 8, background: t.green + "15", color: t.green, fontSize: 10, fontWeight: 700, fontFamily: F }}>GUÍA ACTUALIZADA 2026</span>
      <h1 style={{ fontFamily: S, fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 400, color: t.tx, margin: "0 0 6px", lineHeight: 1.25 }}>{guia.titulo}</h1>
      <p style={{ fontFamily: F, fontSize: 11, color: t.tx3, margin: "0 0 24px" }}>Fuentes oficiales: DOF, SAT, LFT vigente · Última actualización: marzo 2026</p>
      <div style={{ background: t.card, borderRadius: 12, padding: "24px 22px", border: "1px solid " + t.bd }}>
        <FormatGuideText texto={guia.texto} t={t} />
      </div>
      {guia.calc && (
        <div className="fade-up" style={{ background: t.green + "10", borderRadius: 11, padding: 20, textAlign: "center", border: "1px solid " + t.green + "30", marginTop: 16 }}>
          <p style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: t.green, margin: "0 0 10px" }}>¿Quieres calcular tu caso exacto? 👇</p>
          <button onClick={() => goCalc(guia.calc)} className="hover-lift" style={{ padding: "11px 28px", borderRadius: 9, border: "none", cursor: "pointer", background: "#006847", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: F }}>Abrir calculadora</button>
        </div>
      )}
    </div>
  );
}

function QuizPage({ goCalc, t }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
    { q: "¿Cuál es tu situación?", opts: [["Renuncié o voy a renunciar", "ren"], ["Me corrieron o van a correrme", "desp"], ["Sigo trabajando, solo quiero info", "info"]] },
    { q: "¿Qué necesitas saber?", opts: [["Cuánto gano realmente (neto)", "neto"], ["Soy freelancer / independiente", "free"], ["Soy patrón / tengo negocio", "biz"]] }
  ];
  const done = step >= questions.length || (step === 1 && (answers[0] === "ren" || answers[0] === "desp"));
  let result = null;
  if (done) {
    if (answers[0] === "ren") result = ["fin", "Te corresponde un finiquito: aguinaldo proporcional + vacaciones + prima vacacional."];
    else if (answers[0] === "desp") result = ["liq", "Te corresponde una liquidación completa: 3 meses + 20 días/año + prima de antigüedad + finiquito."];
    else if (answers[1] === "free") result = ["res", "RESICO puede ahorrarte miles de pesos al año en impuestos."];
    else if (answers[1] === "biz") result = ["cos", "Calcula el costo real de tus empleados incluyendo todas las cargas patronales."];
    else result = ["isr", "La calculadora ISR te muestra exactamente cuánto te descuentan y cuánto recibes."];
  }
  return (
    <div className="fade-up" style={{ maxWidth: 460, margin: "0 auto", padding: "36px 16px 44px", textAlign: "center" }}>
      <h2 style={{ fontFamily: S, fontSize: 24, color: t.tx, margin: "0 0 6px", fontWeight: 400 }}>¿No sabes qué te toca?</h2>
      <p style={{ fontFamily: F, fontSize: 13, color: t.tx2, margin: "0 0 20px" }}>Responde y te decimos qué calculadora necesitas</p>
      {!done && (
        <div className="fade-up delay-1">
          <p style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color: t.tx, marginBottom: 14 }}>{questions[step].q}</p>
          {questions[step].opts.map(([label, val], i) => (
            <button key={i} onClick={() => { setAnswers({ ...answers, [step]: val }); setStep(step + 1); }} className="hover-lift" style={{
              display: "block", width: "100%", padding: "13px 16px", borderRadius: 9, border: "1px solid " + t.bd,
              cursor: "pointer", background: t.card, color: t.tx, fontFamily: F, fontSize: 14, textAlign: "left", marginBottom: 7
            }}>{label}</button>
          ))}
        </div>
      )}
      {done && result && (
        <div className="scale-in">
          <div style={{ background: t.card, borderRadius: 12, padding: 24, border: "1px solid " + t.bd, marginBottom: 10 }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>✅</div>
            <p style={{ fontFamily: F, fontSize: 14, color: t.tx2, lineHeight: 1.6, margin: "0 0 16px" }}>{result[1]}</p>
            <button onClick={() => goCalc(result[0])} className="hover-lift" style={{ padding: "11px 26px", borderRadius: 8, border: "none", cursor: "pointer", background: "#006847", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: F }}>Ir a la calculadora →</button>
          </div>
          <button onClick={() => { setStep(0); setAnswers({}); }} style={{ fontFamily: F, fontSize: 11, color: t.tx3, background: "none", border: "none", cursor: "pointer" }}>Empezar de nuevo</button>
        </div>
      )}
    </div>
  );
}

function CalendarPage({ t }) {
  const [mes, setMes] = useState(new Date().getMonth());
  return (
    <div className="fade-up" style={{ maxWidth: 660, margin: "0 auto", padding: "24px 16px 32px" }}>
      <h2 style={{ fontFamily: S, fontSize: 22, color: t.tx, margin: "0 0 16px", fontWeight: 400 }}>Calendario Fiscal México 2026</h2>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
        {CALENDARIO.map((m, i) => (
          <button key={i} onClick={() => setMes(i)} style={{
            padding: "5px 10px", borderRadius: 5, border: "1px solid " + t.bd, cursor: "pointer",
            background: mes === i ? t.tx : t.card, color: mes === i ? t.bg : t.tx2,
            fontFamily: F, fontSize: 11, fontWeight: 600
          }}>{m.mes.substring(0, 3)}</button>
        ))}
      </div>
      <div className="fade-up" style={{ background: t.card, borderRadius: 11, padding: 18, border: "1px solid " + t.bd }}>
        <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: t.green, margin: "0 0 14px" }}>{CALENDARIO[mes].mes} 2026</h3>
        {CALENDARIO[mes].eventos.map((ev, i) => (
          <div key={i} className={"fade-up delay-" + Math.min(i + 1, 4)} style={{ padding: "9px 0", borderBottom: "1px solid " + t.bd2, fontFamily: F, fontSize: 13, color: t.tx }}>
            {ev}
          </div>
        ))}
      </div>
    </div>
  );
}

function GlossaryPage({ t }) {
  const [search, setSearch] = useState("");
  const filtered = GLOSARIO.filter((g) => g.termino.toLowerCase().includes(search.toLowerCase()) || g.definicion.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="fade-up" style={{ maxWidth: 660, margin: "0 auto", padding: "24px 16px 32px" }}>
      <h2 style={{ fontFamily: S, fontSize: 22, color: t.tx, margin: "0 0 12px", fontWeight: 400 }}>Glosario Financiero</h2>
      <input placeholder="Buscar término..." value={search} onChange={(e) => setSearch(e.target.value)} style={{
        width: "100%", padding: "10px 14px", border: "1px solid " + t.bd, borderRadius: 8,
        fontFamily: F, fontSize: 14, color: t.tx, background: t.card, marginBottom: 14, outline: "none"
      }} />
      {filtered.map((g, i) => (
        <div key={g.termino} className={"fade-up delay-" + Math.min(i % 4 + 1, 4)} style={{ background: t.card, borderRadius: 9, padding: 14, border: "1px solid " + t.bd, marginBottom: 6 }}>
          <span style={{ fontFamily: F, fontSize: 13, fontWeight: 800, color: t.green }}>{g.termino}</span>
          <p style={{ fontFamily: F, fontSize: 12, color: t.tx2, margin: "3px 0 0", lineHeight: 1.5 }}>{g.definicion}</p>
        </div>
      ))}
    </div>
  );
}

function ToolsPage({ go, t }) {
  return (
    <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 32px" }}>
      <h2 style={{ fontFamily: S, fontSize: 22, color: t.tx, margin: "0 0 14px", fontWeight: 400 }}>Más Herramientas</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 9 }}>
        <ToolCard t={t} icon="🧭" title="¿Qué te toca?" desc="Quiz rápido de 2 preguntas" tag="NUEVO" onClick={() => go("quiz")} />
        <ToolCard t={t} icon="📅" title="Calendario Fiscal" desc="Fechas clave 2026" tag="NUEVO" onClick={() => go("calendar")} />
        <ToolCard t={t} icon="📖" title="Glosario" desc={GLOSARIO.length + " términos financieros"} tag="NUEVO" onClick={() => go("glossary")} />
      </div>
    </div>
  );
}

function AboutPage({ t }) {
  return (
    <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", color: t.tx }}>Acerca de MiLana</h2>
      <div style={{ background: t.card, padding: 24, borderRadius: 12, border: "1px solid "+t.bd, fontSize: 15, color: t.tx2, lineHeight: 1.7 }}>
        <p>MiLana es un proyecto fundado en México dedicado a la transparencia financiera. Nuestra misión es facilitar el entendimiento de los derechos laborales y fiscales para todos los trabajadores mexicanos.</p>
        <p>Todas nuestras herramientas están actualizadas con los datos del DOF, SAT y la LFT vigentes para <strong>2026</strong>.</p>
      </div>
    </div>
  );
}

function ContactPage({ t }) {
  return (
    <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", color: t.tx }}>Contacto</h2>
      <div style={{ background: t.card, padding: 36, borderRadius: 12, border: "1px solid "+t.bd, textAlign: "center" }}>
        <p style={{ color: t.tx2, marginBottom: 20 }}>¿Dudas o reportes? Estamos para ayudarte:</p>
        <a href="mailto:milanaaqui@gmail.com" style={{ fontSize: 20, color: t.green, fontWeight: 700, textDecoration: "none" }}>milanaaqui@gmail.com</a>
      </div>
    </div>
  );
}

function LegalPage({ t, type }) {
  if (type === "priv") {
    return (
      <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", color: t.tx }}>Aviso de Privacidad</h2>
        <div style={{ background: t.card, padding: 24, borderRadius: 12, border: "1px solid "+t.bd, fontSize: 14, color: t.tx2, lineHeight: 1.6 }}>
          <p><strong>Uso de Cookies:</strong> MiLana utiliza cookies para mejorar la navegación. Google, como proveedor externo, utiliza cookies para publicar anuncios en este sitio. El uso de la cookie DART permite a Google mostrar anuncios basados en las visitas de los usuarios a este y otros sitios web.</p>
          <p><strong>Publicidad Personalizada:</strong> Los usuarios pueden inhabilitar el uso de la cookie de DART y la publicidad personalizada a través de la configuración de anuncios de Google o visitando <a href="https://www.aboutads.info" style={{color:t.green}}>www.aboutads.info</a>.</p>
          <p>Cumplimos con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en México. Para ejercer tus derechos ARCO contacta a: <a href="mailto:milanaaqui@gmail.com" style={{color:t.green}}>milanaaqui@gmail.com</a></p>
        </div>
      </div>
    );
  }
  return (
    <div className="fade-up" style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", color: t.tx }}>Términos de Uso</h2>
      <div style={{ background: t.card, padding: 24, borderRadius: 12, border: "1px solid "+t.bd, fontSize: 14, color: t.tx2, lineHeight: 1.6 }}>
        <p>MiLana es una plataforma informativa. Los cálculos son estimaciones basadas en la LFT y leyes fiscales de 2026. No sustituyen la asesoría profesional de un contador o abogado. Última actualización: marzo 2026.</p>
      </div>
    </div>
  );
}

function Footer({ go, t }) {
  return (
    <footer style={{ borderTop: "1px solid " + t.bd, padding: "20px 16px", marginTop: 16 }}>
      <div style={{ maxWidth: 660, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <strong style={{ fontFamily: F, fontSize: 14, color: t.tx }}>Mi<span className="grad-text">Lana</span></strong>
          <p style={{ fontFamily: F, fontSize: 10, color: t.tx3, margin: "3px 0 0" }}>Herramientas financieras para México</p>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          {[["about", "Acerca de"], ["contact", "Contacto"], ["priv", "Privacidad"], ["terms", "Términos"]].map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{ fontFamily: F, fontSize: 11, color: t.tx2, background: "none", border: "none", cursor: "pointer" }}>{label}</button>
          ))}
        </div>
      </div>
      <p style={{ textAlign: "center", fontFamily: F, fontSize: 9, color: t.tx3, marginTop: 10 }}>
        © 2026 MiLana · Datos fiscales oficiales · Hecho en México 🇲🇽
      </p>
    </footer>
  );
}

/* ═══ APP ═══ */
const CALC_MAP = {
  isr: CalcISR, fin: CalcFiniquito, liq: CalcLiquidacion, agu: CalcAguinaldo,
  res: CalcRESICO, ptu: CalcPTU, vac: CalcVacaciones,
  cos: CalcCosto, aum: CalcAumento, des: CalcDespido
};

export default function App() {
  const [page, setPage] = useState("home");
  const [calc, setCalc] = useState("isr");
  const [dark, setDark] = useState(false);
  const [key, setKey] = useState(0);

  const t = dark ? DARK : LIGHT;
  const go = (p) => { setPage(p); setKey((k) => k + 1); };
  const goCalc = (c) => { setCalc(c); setPage("calc"); setKey((k) => k + 1); };

  const CalcComp = CALC_MAP[calc];
  const guideMatch = page.startsWith("g-") ? page.slice(2) : null;

  return (
    <div key={key} style={{ minHeight: "100vh", background: t.bg }}>
      <GlobalStyles />
      <NavBar page={page} go={go} dark={dark} setDark={setDark} t={t} />
      {page === "home" && <HomePage go={go} goCalc={goCalc} t={t} />}
      {page === "worker" && <ListPage go={go} goCalc={goCalc} t={t} type="worker" />}
      {page === "biz" && <ListPage go={go} goCalc={goCalc} t={t} type="biz" />}
      {page === "guias" && <GuidesPage go={go} t={t} />}
      {page === "tools" && <ToolsPage go={go} t={t} />}
      {page === "quiz" && <QuizPage goCalc={goCalc} t={t} />}
      {page === "calendar" && <CalendarPage t={t} />}
      {page === "glossary" && <GlossaryPage t={t} />}
      {page === "about" && <AboutPage t={t} />}
      {page === "contact" && <ContactPage t={t} />}
      {page === "priv" && <LegalPage t={t} type="priv" />}
      {page === "terms" && <LegalPage t={t} type="terms" />}
      {page === "calc" && CalcComp && <CalcComp t={t} go={go} />}
      {guideMatch && <GuidePage id={guideMatch} go={go} goCalc={goCalc} t={t} />}
      {page !== "home" && <Footer go={go} t={t} />}
    </div>
  );
}

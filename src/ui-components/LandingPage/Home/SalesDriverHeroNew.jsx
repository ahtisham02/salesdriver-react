import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Database, Users, Mail,
  Globe, Zap, Tag, LayoutList, BarChart2, Code, Key,
  CheckCircle2, Loader2, Star, TrendingUp, Search,
  Lock, ChevronDown, ChevronRight, Send, Check,
  Building2, Phone, MapPin, Briefcase, Activity,
  AlertCircle, Download, ExternalLink, Filter,
  Linkedin, Copy, Eye, EyeOff,
  Workflow, FlaskConical, Server, Bot, Inbox,
  MessageSquare, Clock, Play, Plus, X, Rocket,
  CalendarCheck, ArrowLeft,
} from "lucide-react";
import { BOOKING_PATH } from "../../../config/booking";
import { triggerPlaygroundVisitorTracking } from "../../../utils/initVisitorTracking";

/* ── Tool logos ── */
import logoMtnVerify   from "../../../assets/new_assets/logo/mtnverify (2).png";
import logoMtnData     from "../../../assets/new_assets/logo/mtndata (2).png";
import logoExactMails  from "../../../assets/new_assets/logo/exactmails (2).png";
import logoTrafera     from "../../../assets/new_assets/logo/trafera.io.png";
import logoHyperPitch  from "../../../assets/new_assets/logo/hyperpitch (2).png";
import logoSalesDriver from "../../../assets/new_assets/logo/salesdriver.png";

/* ── tokens ── */
const T = {
  orange:"#f97316", navy:"#0f172a", muted:"#64748b",
  border:"#e2e8f0", blue:"#2563eb", green:"#059669", bg:"#f8fafc",
};

/* ════════════════════════════════════════
   SHARED HELPERS
════════════════════════════════════════ */
const Badge = ({ color, bg, children }) => (
  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color, background: bg }}>
    {children}
  </span>
);

const CreditBar = ({ used, total, color }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-sm border"
          style={{ background: i < used ? color : "transparent", borderColor: color }} />
      ))}
    </div>
    <span className="text-[10px] font-bold" style={{ color }}>{total - used}/{total} credits</span>
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: T.muted }}>
    {children}
  </div>
);

/* ════════════════════════════════════════
   SHARED helpers for client widgets
════════════════════════════════════════ */
const STAT = {
  Safe:       { bg: '#E6F4F1', fg: '#0B6B58', c: '#0E7C66' },
  'Catch-All':{ bg: '#FBF3DC', fg: '#7A5C00', c: '#D4A017' },
  'Role-based':{ bg: '#EAF0FB', fg: '#2F4F8F', c: '#E07B39' },
  Disposable: { bg: '#FDEBDD', fg: '#9A4310', c: '#E07B39' },
  Invalid:    { bg: '#FBE7E5', fg: '#A52A1E', c: '#C0392B' },
  Unknown:    { bg: '#EEF0F3', fg: '#4B5563', c: '#8C9AAE' },
};
const badgeSt = (s) =>
  `display:inline-block;font-size:11px;font-weight:700;padding:2px 9px;border-radius:999px;background:${(STAT[s]||STAT.Unknown).bg};color:${(STAT[s]||STAT.Unknown).fg}`;
const DISPOSABLE = ['mailinator.com','tempmail.com','10minutemail.com','guerrillamail.com','yopmail.com','trashmail.com'];
const FREE_PROV  = ['gmail.com','yahoo.com','outlook.com','hotmail.com','icloud.com','proton.me','aol.com'];
const ROLE_LOCAL = ['info','sales','admin','support','contact','hello','team','office','billing','hr'];
const TYPOS      = { 'gmial.com':'gmail.com','gamil.com':'gmail.com','gmai.com':'gmail.com','hotmial.com':'hotmail.com','yahooo.com':'yahoo.com','outlok.com':'outlook.com' };
const VFY_SAMPLE = [
  ['olivia.chen@northwind.io','Safe'],['m.garcia@brightpath.co','Safe'],['info@lumenhq.com','Catch-All'],
  ['d.okafor@vectorworks.ai','Safe'],['sales@harborfin.com','Invalid'],['j.smith@gmial.com','Invalid'],
  ['p.raman@cloudline.dev','Safe'],['k.lee@orbitlabs.io','Unknown'],['t.nguyen@summitdata.com','Safe'],['a.berg@hartwell.co','Catch-All']
];
const LIST_TOTALS = { Safe:18,'Catch-All':3,Invalid:3,Unknown:1 };
const ICONS = {
  single: 'M3 6h18v12H3zM3 7l9 6 9-6',
  list:   'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  overview:'M4 20V10M10 20V4M16 20v-7M22 20H2',
  docs:   'M8 6l-6 6 6 6M16 6l6 6-6 6',
  keys:   'M15 7a4 4 0 1 1-3.9 5H3v3h3v3h3v-3h2.1A4 4 0 0 1 15 7z',
};
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h; }
function classifyEmail(raw){
  const email=String(raw||'').trim().toLowerCase();
  const ok=/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email);
  const [local,domain]=ok?email.split('@'):['',''];
  const yes=(b,good)=>({v:b?'Yes':'No',color:b===good?'#0B6B58':'#A52A1E'});
  if(!ok) return {email:raw||'(empty)',status:'Invalid',score:0,note:'Syntax error',suggestion:null,
    checks:[{k:'Syntax',v:'Failed',color:'#A52A1E'},{k:'Domain',v:'—',color:'#4B5563'},{k:'MX records',v:'—',color:'#4B5563'},{k:'Mailbox (SMTP)',v:'—',color:'#4B5563'}]};
  const typo=TYPOS[domain]||null;
  const disp=DISPOSABLE.includes(domain);
  const role=ROLE_LOCAL.includes(local);
  const free=FREE_PROV.includes(domain);
  const catchAll=!free&&!disp&&!typo&&hashStr(domain)%5===0;
  let status='Safe',score=90+(hashStr(email)%9),note='Mailbox exists';
  if(typo){status='Invalid';score=4;note='Domain has no mail server';}
  else if(disp){status='Disposable';score=18;note='Temporary inbox';}
  else if(catchAll){status='Catch-All';score=61;note='Domain accepts all mail';}
  else if(role){status='Role-based';score=72;note='Shared team inbox';}
  const mx=!typo;
  return{email,status,score,note,suggestion:typo?local+'@'+typo:null,
    checks:[
      {k:'Syntax',v:'Valid',color:'#0B6B58'},
      {k:'MX records',v:mx?'Found':'None',color:mx?'#0B6B58':'#A52A1E'},
      {k:'Mailbox (SMTP)',v:(status==='Safe'||status==='Role-based')?'Exists':(mx?'Unconfirmed':'No'),color:(status==='Safe'||status==='Role-based')?'#0B6B58':'#A52A1E'},
      Object.assign({k:'Catch-all'},yes(catchAll,false)),
      Object.assign({k:'Disposable'},yes(disp,false)),
      Object.assign({k:'Role account'},yes(role,false)),
      {k:'Free provider',v:free?'Yes':'No',color:'#111827'},
      {k:'Response time',v:(180+hashStr(email)%420)+' ms',color:'#111827'},
    ]};
}

/* ════════════════════════════════════════
   TAB 1 — MTN VERIFY  (client design)
════════════════════════════════════════ */
function TabMtnVerify() {
  const [screen,setScreen] = useState('single'); // single|list|overview
  const [email,setEmail]   = useState('jane.doe@acme.com');
  const [result,setResult] = useState(null);
  const [checking,setChecking] = useState(false);
  const [stepIdx,setStepIdx]   = useState(0);
  const [listState,setListState] = useState('idle'); // idle|running|done
  const [listN,setListN] = useState(0);
  const [history,setHistory] = useState([]);
  const [credits,setCredits] = useState(5);
  const timers = [];

  const listHistory=()=>{ const h=[]; Object.keys(LIST_TOTALS).forEach(k=>{ for(let i=0;i<LIST_TOTALS[k];i++) h.push(k); }); return h; };

  const validate=()=>{
    setChecking(true); setResult(null); setStepIdx(0);
    [1,2,3,4].forEach(i=>{
      const t=setTimeout(()=>setStepIdx(i),i*220); timers.push(t);
    });
    const t=setTimeout(()=>{
      const r=classifyEmail(email);
      setChecking(false); setResult(r);
      setHistory(h=>[...h,r.status]);
    },1100); timers.push(t);
  };

  const runList=()=>{
    setListState('running'); setListN(0);
    const iv=setInterval(()=>{
      setListN(n=>{
        const next=n+1;
        if(next>=25){clearInterval(iv);setListState('done');setHistory(h=>[...h,...listHistory()]);return 25;}
        return next;
      });
    },70); timers.push(iv);
  };

  const press=()=>{
    if(checking||listState==='running'||credits<=0) return;
    setCredits(c=>c-1);
    if(screen==='list') return runList();
    if(screen==='overview') setScreen('single');
    validate();
  };

  const busy=checking||listState==='running';
  const canRun=credits>0&&!busy;

  const navDefs=[['single','Single Validation',ICONS.single],['list','Lists Validation',ICONS.list],['overview','Overview',ICONS.overview]];
  const lockedDefs=[['docs','API Docs',ICONS.docs],['keys','API Keys',ICONS.keys]];

  const stepLabels=['Checking syntax','Looking up domain & MX','Connecting to mail server','Testing catch-all','Scoring result'];
  const steps=stepLabels.map((label,i)=>({label,dot:i<stepIdx?'#0E7C66':(i===stepIdx?'#D4A017':'#D1D5DB'),color:i<=stepIdx?'#111827':'#6B7280'}));

  /* overview */
  const counts={}; history.forEach(h=>{counts[h]=(counts[h]||0)+1;});
  const total=history.length;
  const groups=[['Safe',counts['Safe']||0,'#0E7C66'],['Catch-All',counts['Catch-All']||0,'#D4A017'],['Risky',(counts['Role-based']||0)+(counts['Disposable']||0),'#E07B39'],['Invalid',counts['Invalid']||0,'#C0392B'],['Unknown',counts['Unknown']||0,'#8C9AAE']];
  let acc=0; const stops=[];
  groups.forEach(([,v,c])=>{if(!v)return;const a=acc/total*100;acc+=v;const b=acc/total*100;stops.push(`${c} ${a.toFixed(2)}% ${b.toFixed(2)}%`);});
  const pct=(v)=>total?Math.round(v/total*100)+'%':'0%';
  const donut=stops.length?`conic-gradient(${stops.join(', ')})`:'#EEF2F1';
  const listKeys=[['SAFE','Safe','#0B6B58','#0E7C66'],['CATCH-ALL','Catch-All','#7A5C00','#D4A017'],['INVALID','Invalid','#A52A1E','#C0392B'],['UNKNOWN','Unknown','#4B5563','#8C9AAE']];

  return (
    <div style={{width:'100%',height:'330px',display:'flex',flexDirection:'column',background:'#FFFFFF',color:'#111827',fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif",fontSize:'13px',lineHeight:'1.45',overflow:'hidden',borderRadius:'12px',border:'1px solid #E5E7EB'}}>

      {/* top bar */}
      <div style={{height:'46px',flexShrink:0,display:'flex',alignItems:'center',gap:'10px',padding:'0 12px 0 14px',borderBottom:'1px solid #E5E7EB'}}>
        <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true"><rect x="0" y="0" width="26" height="20" rx="2" fill="#0E7C66"/><path d="M1 2l12 9 12-9" fill="none" stroke="#FFFFFF" strokeWidth="2"/><path d="M2 13h6M2 16h6M5 11v8" stroke="#BFE6DD" strokeWidth="1.2"/></svg>
        <span style={{fontWeight:800,fontSize:'12px',lineHeight:'1.05',letterSpacing:'0.02em',color:'#0B1F1A'}}>MTN<br/>VERIFY</span>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'8px'}}>
          <span style={{display:'flex',alignItems:'center',gap:'6px',background:'#E6F4F1',border:'1px solid #C9E7DF',color:'#0B6B58',borderRadius:'8px',padding:'5px 10px',fontSize:'12px',fontWeight:'500'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
            Free credits <b style={{fontSize:'14px',fontWeight:700}}>{credits}/5</b>
          </span>
          <Link to="/pricing" style={{display:'flex',alignItems:'center',gap:'6px',background:'#0E7C66',color:'#FFFFFF',borderRadius:'8px',padding:'6px 12px',fontSize:'12px',fontWeight:'600',textDecoration:'none'}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8l-9-5-9 5v8l9 5zM3.3 7L12 12l8.7-5M12 22V12"/></svg>
            Upgrade
          </Link>
        </div>
      </div>

      <div style={{flex:1,minHeight:0,display:'flex'}}>
        {/* sidebar */}
        <nav style={{width:'158px',flexShrink:0,background:'#F7F9F8',borderRight:'1px solid #E5E7EB',padding:'10px 8px',display:'flex',flexDirection:'column',gap:'3px'}}>
          {navDefs.map(([id,label,icon])=>{
            const on=screen===id;
            return(
              <button key={id} type="button" onClick={()=>setScreen(id)}
                style={{display:'flex',alignItems:'center',gap:'8px',width:'100%',minHeight:'34px',padding:'6px 9px',borderRadius:'8px',fontFamily:'inherit',fontSize:'12.5px',cursor:'pointer',border:'1px solid '+(on?'#B9DDD3':'transparent'),background:on?'#E1F0EC':'transparent',color:on?'#0B3D33':'#1F2937',fontWeight:on?600:400}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon}/></svg>
                <span style={{flex:1,textAlign:'left'}}>{label}</span>
              </button>
            );
          })}
          {lockedDefs.map(([id,label,icon])=>(
            <button key={id} type="button" disabled
              style={{display:'flex',alignItems:'center',gap:'8px',width:'100%',minHeight:'34px',padding:'6px 9px',borderRadius:'8px',fontFamily:'inherit',fontSize:'12.5px',cursor:'default',border:'1px solid transparent',background:'transparent',color:'#6B7280'}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon}/></svg>
              <span style={{flex:1,textAlign:'left'}}>{label}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round" aria-label="Members only" role="img"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
            </button>
          ))}
          <div style={{marginTop:'auto',fontSize:'11px',color:'#4B5563',padding:'8px',borderTop:'1px solid #E5E7EB'}}>API Docs, Keys and exports unlock with a free account.</div>
        </nav>

        {/* main content */}
        <main style={{flex:1,minWidth:0,padding:'16px 18px',overflow:'hidden',display:'flex',flexDirection:'column',gap:'12px',background:'#FFFFFF',position:'relative'}}>

          {/* SINGLE */}
          {screen==='single'&&(
            <>
              <div>
                <div style={{fontWeight:700,fontSize:'18px',color:'#0B1F1A'}}>Single Validation</div>
                <div style={{color:'#4B5563',fontSize:'12px'}}>Check one address in real time before you send.</div>
              </div>
              <div style={{display:'flex',gap:'8px'}}>
                <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setResult(null);}}
                  placeholder="name@company.com"
                  style={{flex:1,minWidth:0,fontFamily:'inherit',fontSize:'14px',color:'#111827',padding:'10px 12px',border:'1px solid #D1D5DB',borderRadius:'9px',minHeight:'42px',outline:'none'}}/>
                {canRun&&(
                  <button type="button" onClick={press}
                    style={{background:'#0E7C66',color:'#FFFFFF',border:0,borderRadius:'9px',padding:'0 16px',minHeight:'42px',fontFamily:'inherit',fontWeight:600,fontSize:'13px',cursor:'pointer',whiteSpace:'nowrap'}}>
                    Validate · 1 credit
                  </button>
                )}
              </div>
              {result&&result.suggestion&&!checking&&(
                <div style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#374151',background:'#FFFBEB',border:'1px solid #FDE68A',borderRadius:'8px',padding:'6px 10px'}}>
                  Did you mean <b>{result.suggestion}</b>?
                  <button type="button" onClick={()=>{setEmail(result.suggestion);setResult(null);}}
                    style={{marginLeft:'auto',background:'#FFFFFF',border:'1px solid #D1D5DB',borderRadius:'6px',padding:'3px 9px',fontFamily:'inherit',fontSize:'12px',cursor:'pointer'}}>Use it</button>
                </div>
              )}
              <div style={{flex:1,minHeight:0,border:'1px solid #E5E7EB',borderRadius:'12px',padding:'14px',display:'flex',flexDirection:'column'}}>
                {!result&&!checking&&(
                  <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'8px',color:'#4B5563',textAlign:'center'}}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0E7C66" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18v12H3zM3 7l9 6 9-6"/></svg>
                    <div style={{fontWeight:600,color:'#111827'}}>Enter an email and press Try Now</div>
                    <div style={{fontSize:'12px'}}>Syntax, domain, MX, mailbox, catch-all, disposable and role checks.</div>
                  </div>
                )}
                {checking&&(
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'9px',justifyContent:'center'}}>
                    {steps.map((st,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'13px',color:st.color}}>
                        <span style={{width:'8px',height:'8px',borderRadius:'50%',background:st.dot,flexShrink:0,display:'inline-block'}}/>{st.label}
                      </div>
                    ))}
                  </div>
                )}
                {result&&!checking&&(
                  <>
                    <div style={{display:'flex',gap:'16px',alignItems:'center',paddingBottom:'12px',borderBottom:'1px solid #F1F2F4'}}>
                      <div style={{width:'64px',height:'64px',borderRadius:'50%',background:`conic-gradient(${(STAT[result.status]||STAT.Unknown).c} 0 ${result.score}%, #EEF2F1 ${result.score}% 100%)`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'#FFFFFF',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',lineHeight:1}}>
                          <b style={{fontSize:'17px'}}>{result.score}</b>
                          <span style={{fontSize:'9px',color:'#4B5563'}}>score</span>
                        </div>
                      </div>
                      <div style={{minWidth:0,display:'flex',flexDirection:'column',gap:'4px'}}>
                        <div style={{fontWeight:600,fontSize:'14px',color:'#111827',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{result.email}</div>
                        <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
                          <span style={Object.fromEntries(badgeSt(result.status).split(';').filter(Boolean).map(p=>p.split(':').map(x=>x.trim())).map(([k,v])=>[k.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),v]))}>{result.status}</span>
                          <span style={{fontSize:'12px',color:'#4B5563'}}>{result.note}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(2, minmax(0, 1fr))',columnGap:'18px',paddingTop:'6px'}}>
                      {result.checks.map((c,i)=>(
                        <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:'1px solid #F6F7F8',fontSize:'12px'}}>
                          <span style={{color:'#4B5563'}}>{c.k}</span>
                          <span style={{fontWeight:600,color:c.color}}>{c.v}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {/* LIST */}
          {screen==='list'&&(
            <>
              <div>
                <div style={{fontWeight:700,fontSize:'18px',color:'#0B1F1A'}}>Lists Validation</div>
                <div style={{color:'#4B5563',fontSize:'12px'}}>Clean a whole list in one go. Try it on our 25-email sample.</div>
              </div>
              {listState==='idle'&&(
                <div style={{flex:1,border:'1.5px dashed #B7D9D1',background:'#F5FBF9',borderRadius:'12px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px',textAlign:'center',padding:'16px'}}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0E7C66" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M12 18v-6M9 15l3-3 3 3"/></svg>
                  <div style={{fontWeight:600,color:'#111827'}}>sample_leads.csv · 25 emails</div>
                  <div style={{fontSize:'12px',color:'#4B5563'}}>Your own CSV upload unlocks with a free account.</div>
                  {canRun&&(
                    <button type="button" onClick={press}
                      style={{background:'#0E7C66',color:'#FFFFFF',border:0,borderRadius:'9px',padding:'0 16px',minHeight:'40px',fontFamily:'inherit',fontWeight:600,fontSize:'13px',cursor:'pointer'}}>
                      Validate sample list · 1 credit
                    </button>
                  )}
                </div>
              )}
              {listState==='running'&&(
                <div style={{flex:1,border:'1px solid #E5E7EB',borderRadius:'12px',display:'flex',flexDirection:'column',justifyContent:'center',gap:'10px',padding:'24px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px'}}><b>Validating sample_leads.csv</b><span style={{color:'#4B5563'}}>{listN} / 25</span></div>
                  <div style={{height:'8px',background:'#EEF2F1',borderRadius:'4px',overflow:'hidden'}}><div style={{height:'8px',background:'#0E7C66',width:Math.round(listN/25*100)+'%',transition:'width .1s'}}/></div>
                  <div style={{fontSize:'12px',color:'#4B5563'}}>Checking syntax, MX and mailboxes…</div>
                </div>
              )}
              {listState==='done'&&(
                <>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(4, minmax(0, 1fr))',gap:'8px'}}>
                    {listKeys.map(([k,st,color])=>(
                      <div key={k} style={{border:'1px solid #E5E7EB',borderRadius:'10px',padding:'8px 10px'}}>
                        <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'0.04em',color:'#4B5563'}}>{k}</div>
                        <div style={{fontSize:'18px',fontWeight:700,color}}>{LIST_TOTALS[st]}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'flex',height:'8px',borderRadius:'4px',overflow:'hidden'}}>
                    {listKeys.map(([k,,, bar])=>(<div key={k} style={{width:(LIST_TOTALS[k.charAt(0)+k.slice(1).toLowerCase().replace('-all','').replace('-','')==='Catchall'?'Catch-All':k.charAt(0)+k.slice(1).toLowerCase()]/25*100)+'%',background:bar}}/>))}
                  </div>
                  <div style={{flex:1,minHeight:0,border:'1px solid #E5E7EB',borderRadius:'10px',overflow:'hidden'}}>
                    {VFY_SAMPLE.slice(0,5).map(([e,st],i)=>(
                      <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 10px',borderBottom:'1px solid #F1F2F4',fontSize:'12px'}}>
                        <span style={{color:'#111827'}}>{e}</span>
                        <span style={Object.fromEntries(badgeSt(st).split(';').filter(Boolean).map(p=>p.split(':').map(x=>x.trim())).map(([k2,v])=>[k2.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),v]))}>{st}</span>
                      </div>
                    ))}
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 10px',fontSize:'12px',color:'#4B5563'}}>+ 20 more rows<Link to="/pricing" style={{color:'#0B6B58',fontWeight:600,textDecoration:'none'}}>Download CSV · free account</Link></div>
                  </div>
                </>
              )}
            </>
          )}

          {/* OVERVIEW */}
          {screen==='overview'&&(
            <>
              <div>
                <div style={{fontWeight:700,fontSize:'18px',color:'#0B1F1A'}}>Overview</div>
                <div style={{color:'#4B5563',fontSize:'12px'}}>Your validation activity in this session.</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4, minmax(0, 1fr))',gap:'8px'}}>
                {[
                  {k:'TOTAL VALIDATED',v:total,sub:'this session'},
                  {k:'SAFE',v:counts['Safe']||0,sub:pct(counts['Safe']||0)+' of total'},
                  {k:'INVALID',v:counts['Invalid']||0,sub:pct(counts['Invalid']||0)+' of total'},
                  {k:'CREDITS LEFT',v:credits,sub:'resets daily'},
                ].map((cd,i)=>(
                  <div key={i} style={{border:'1px solid #E5E7EB',borderRadius:'10px',padding:'9px 10px'}}>
                    <div style={{fontSize:'9.5px',fontWeight:600,letterSpacing:'0.04em',color:'#4B5563'}}>{cd.k}</div>
                    <div style={{fontSize:'20px',fontWeight:700,color:'#111827'}}>{cd.v}</div>
                    <div style={{fontSize:'10px',color:'#4B5563'}}>{cd.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{flex:1,minHeight:0,border:'1px solid #E5E7EB',borderRadius:'12px',padding:'12px 16px',display:'flex',gap:'22px',alignItems:'center'}}>
                {total>0?(
                  <>
                    <div style={{width:'132px',height:'132px',borderRadius:'50%',background:donut,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}} role="img" aria-label="Results breakdown">
                      <div style={{width:'86px',height:'86px',borderRadius:'50%',background:'#FFFFFF',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',lineHeight:'1.1'}}>
                        <span style={{fontSize:'11px',color:'#4B5563'}}>Total</span>
                        <b style={{fontSize:'20px'}}>{total}</b>
                      </div>
                    </div>
                    <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                      {groups.map(([k,v,c])=>(
                        <div key={k} style={{display:'flex',alignItems:'center',gap:'8px',padding:'5px 0',borderBottom:'1px solid #F6F7F8',fontSize:'12px'}}>
                          <span style={{width:'9px',height:'9px',borderRadius:'2px',background:c,flexShrink:0,display:'inline-block'}}/>
                          <span style={{flex:1,color:'#374151'}}>{k}</span>
                          <b style={{color:'#111827'}}>{v}</b>
                          <span style={{width:'34px',textAlign:'right',color:'#4B5563'}}>{pct(v)}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ):(
                  <div style={{flex:1,textAlign:'center',color:'#4B5563'}}>Run a single or list validation to fill your dashboard.</div>
                )}
              </div>
            </>
          )}

          {/* out of credits */}
          {credits<=0&&!busy&&(
            <div style={{display:'flex',alignItems:'center',gap:'10px',background:'#0B1F1A',color:'#FFFFFF',borderRadius:'10px',padding:'10px 12px',fontSize:'12px',flexShrink:0}}>
              <span style={{flex:1}}>You've used today's 5 free credits. They reset tomorrow.</span>
              <Link to="/pricing" style={{background:'#FFFFFF',color:'#0B6B58',fontWeight:700,borderRadius:'7px',padding:'6px 10px',textDecoration:'none',whiteSpace:'nowrap'}}>Get 250 credits/mo free</Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 2 — MTN DATA  (client design)
════════════════════════════════════════ */
const BASE_URL='https://api.salesdriver.io/v1';
const DATA_EPS=[
  {g:'LinkedIn Person',id:'profile', method:'POST',name:'Get person profile',       path:'/linkedin/person/profile',      params:[{k:'profile_url',desc:'LinkedIn profile URL.',v:'linkedin.com/in/jane-doe'}]},
  {g:'LinkedIn Person',id:'connections',method:'POST',name:'Get person connections', path:'/linkedin/person/connections', params:[{k:'count',desc:'Number of connections.',v:'20'},{k:'start',desc:'Pagination start index.',v:'0'}]},
  {g:'LinkedIn Person',id:'picture',method:'POST',name:'Get person profile picture', path:'/linkedin/person/picture',     params:[{k:'profile_url',desc:'LinkedIn profile URL.',v:'linkedin.com/in/jane-doe'}]},
  {g:'LinkedIn Person',id:'similar',method:'POST',name:'Get similar profiles',       path:'/linkedin/person/similar',     params:[{k:'profile_url',desc:'LinkedIn profile URL.',v:'linkedin.com/in/jane-doe'},{k:'count',desc:'Profiles to return.',v:'5'}]},
  {g:'LinkedIn Person',id:'posts',  method:'POST',name:'Get person posts',           path:'/linkedin/person/posts',       params:[{k:'count',desc:'Number of posts.',v:'20'},{k:'start',desc:'Pagination start.',v:'0'}]},
  {g:'Sales Nav',     id:'employees',method:'POST',name:'Search employee profile',  path:'/salesnav/employee/search',    params:[{k:'company',desc:'Company name or domain.',v:'acme.com'},{k:'title',desc:'Job title keyword.',v:'VP Sales'}]},
  {g:'Sales Nav',     id:'companies',method:'POST',name:'Search companies',          path:'/salesnav/company/search',     params:[{k:'industry',desc:'Industry keyword.',v:'Software'},{k:'location',desc:'HQ location.',v:'United States'}]},
  {g:'Company',       id:'enrich',   method:'GET', name:'Enrich company',            path:'/company/enrich',              params:[{k:'domain',desc:'Company website domain.',v:'acme.com'}]},
];
function getDataResponse(id,vals){
  const n=Math.max(1,Math.min(3,parseInt(vals.count||'3',10)||3));
  const co=String(vals.domain||vals.company||'acme.com').replace(/^https?:\/\//,'').split('/')[0];
  const coName=co.split('.')[0].charAt(0).toUpperCase()+co.split('.')[0].slice(1);
  const R={
    profile:{full_name:'Jane Doe',headline:'VP of Sales at Acme',location:'Austin, Texas',connections:500,current_company:'Acme',skills:['B2B Sales','SaaS','Team Leadership']},
    connections:{total:512,start:Number(vals.start||0),results:[{name:'Alex Rivera',headline:'Account Executive'},{name:'Sam Patel',headline:'Head of RevOps'},{name:'Lee Morgan',headline:'Founder'}].slice(0,n)},
    picture:{profile_url:vals.profile_url,image_url:'https://cdn.example.com/p/jane-doe-400.jpg',width:400,height:400},
    similar:{results:[{name:'Chris Lane',headline:'VP Sales, Northwind'},{name:'Dana Fox',headline:'Sales Director, Brightpath'},{name:'Ravi Shah',headline:'CRO, Cloudline'}].slice(0,n)},
    posts:{total:48,start:Number(vals.start||0),results:[{id:'7251198034',posted_at:'2026-10-02',text:'Three things we changed in our outbound…',likes:214,comments:37},{id:'7249921755',posted_at:'2026-09-25',text:'Hiring two SDRs in Austin. DM me.',likes:96,comments:12}].slice(0,n)},
    employees:{company:co,total:6,results:[{name:'Jane Doe',title:vals.title||'VP Sales',location:'Austin, TX'},{name:'Mark Ellis',title:'Sales Manager',location:'Denver, CO'}]},
    companies:{total:18452,results:[{name:'Northwind',industry:vals.industry||'Software',employees:'51-200'},{name:'Cloudline',industry:vals.industry||'Software',employees:'201-500'}]},
    enrich:{company:coName,domain:co,industry:'Software',employees:'51-200',hq:'Austin, TX',founded:2016,tech:['HubSpot','AWS','Stripe']},
  };
  return JSON.stringify({success:true,data:R[id]||{result:'Sample response'}},null,2);
}

function TabMtData(){
  const [epId,setEpId]   = useState('posts');
  const [tab,setTab]     = useState('params');
  const [filter,setFilter]=useState('');
  const [vals,setVals]   = useState(()=>{
    const v={}; DATA_EPS.forEach(e=>{v[e.id]={}; e.params.forEach(p=>{v[e.id][p.k]=p.v;});});
    return v;
  });
  const [status,setStatus]=useState('idle');
  const [calls,setCalls] = useState(0);
  const [credits,setCredits]=useState(5);
  const [ms,setMs]       = useState('');
  let timer=null;

  const ep=DATA_EPS.find(e=>e.id===epId);
  const v=vals[ep.id];
  const q=filter.trim().toLowerCase();
  const groups=['LinkedIn Person','Sales Nav','Company'].map(g=>{
    const items=DATA_EPS.filter(e=>e.g===g&&(!q||e.name.toLowerCase().includes(q))).map(e=>({...e,on:e.id===epId}));
    return{name:g,items,count:items.length};
  }).filter(g=>g.items.length);

  const press=()=>{
    if(status==='loading'||credits<=0) return;
    setCredits(c=>c-1);
    setStatus('loading');
    clearTimeout(timer);
    timer=setTimeout(()=>{
      setStatus('done');
      setCalls(c=>Math.min(5,c+1));
      setMs((240+Math.floor(Math.random()*360))+' ms');
    },900);
  };

  const tabDefs=[['params','Parameters'],['headers','Headers'],['auth','Authorization'],['body','Body']];
  const body={}; ep.params.forEach(x=>{body[x.k]=/^\d+$/.test(v[x.k])?Number(v[x.k]):v[x.k];});

  return(
    <div style={{width:'100%',height:'330px',display:'flex',flexDirection:'column',background:'#FFFFFF',color:'#111827',fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif",fontSize:'12px',lineHeight:'1.4',overflow:'hidden',borderRadius:'12px',border:'1px solid #E5E7EB'}}>
      {/* top bar */}
      <div style={{height:'44px',flexShrink:0,display:'flex',alignItems:'center',gap:'10px',padding:'0 12px',borderBottom:'1px solid #E5E7EB'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" fill="#2563EB"/><rect x="2" y="8" width="4" height="4" fill="#22C55E"/><rect x="7" y="8" width="4" height="4" fill="#22C55E"/><rect x="2" y="13" width="4" height="4" fill="#22C55E"/><rect x="7" y="13" width="4" height="4" fill="#22C55E"/><rect x="7" y="18" width="4" height="4" fill="#22C55E"/></svg>
        <span style={{fontWeight:800,fontSize:'15px',letterSpacing:'-0.01em',color:'#0B1020'}}>MTN DATA</span>
        <span style={{marginLeft:'8px',display:'flex',alignItems:'center',gap:'5px',background:'#FDECEC',color:'#B42318',borderRadius:'999px',padding:'4px 10px',fontSize:'11.5px',fontWeight:500}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
          Credits: <b>{credits}/5</b>
        </span>
        <span style={{display:'flex',alignItems:'center',gap:'5px',background:'#E8F1FE',color:'#1D4ED8',borderRadius:'999px',padding:'4px 10px',fontSize:'11.5px',fontWeight:500}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          API Calls: <b>{calls}/5</b>
        </span>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'6px',border:'1px solid #D9DEE7',borderRadius:'8px',padding:'5px 10px',color:'#6B7280',width:'150px'}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          Search APIs…
        </div>
      </div>

      <div style={{flex:1,minHeight:0,display:'flex'}}>
        {/* sidebar */}
        <nav aria-label="Endpoints" style={{width:'196px',flexShrink:0,borderRight:'1px solid #E5E7EB',padding:'10px 10px 0',display:'flex',flexDirection:'column',gap:'8px',minHeight:0}}>
          <div style={{background:'#E3F0FD',borderRadius:'7px',padding:'7px 10px',fontWeight:600,color:'#0B1020'}}>API Overview</div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',border:'1px solid #D9DEE7',borderRadius:'7px',padding:'5px 9px',color:'#374151'}}>
            <span><span style={{color:'#6B7280',fontSize:'10px',fontWeight:600,letterSpacing:'0.06em'}}>VERSION</span> 1.0.0</span>
            <span aria-hidden="true">▾</span>
          </div>
          <label style={{display:'flex',alignItems:'center',gap:'6px',background:'#EEF5FD',borderRadius:'7px',padding:'0 8px',color:'#6B7280'}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            <input type="text" aria-label="Filter endpoints" value={filter} onChange={e=>setFilter(e.target.value)}
              placeholder="Filter endpoints…"
              style={{flex:1,minWidth:0,border:0,background:'transparent',fontFamily:'inherit',fontSize:'12px',color:'#111827',padding:'7px 0',outline:'none'}}/>
          </label>
          <div style={{flex:1,minHeight:0,overflowY:'auto',paddingBottom:'8px'}}>
            {groups.map(g=>(
              <div key={g.name}>
                <div style={{fontWeight:600,color:'#0B1020',padding:'8px 2px 4px',display:'flex',justifyContent:'space-between'}}>{g.name}<span style={{color:'#6B7280',fontWeight:500,fontSize:'10.5px'}}>{g.count}</span></div>
                <div style={{borderLeft:'1px solid #E5E7EB',marginLeft:'4px',paddingLeft:'6px',display:'flex',flexDirection:'column',gap:'1px'}}>
                  {g.items.map(e=>(
                    <button key={e.id} type="button" onClick={()=>{setEpId(e.id);setStatus('idle');setTab('params');}}
                      style={{display:'flex',alignItems:'center',gap:'4px',width:'100%',minHeight:'30px',padding:'5px 6px',borderRadius:'6px',border:0,fontFamily:'inherit',fontSize:'11.5px',color:'#374151',cursor:'pointer',background:e.on?'#E6EEFB':'transparent'}}>
                      <span style={{fontWeight:700,fontSize:'10px',color:'#15803D',width:'34px',flexShrink:0}}>{e.method}</span>
                      <span style={{textAlign:'left'}}>{e.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {groups.length===0&&<div style={{color:'#6B7280',padding:'10px 4px'}}>No endpoints match.</div>}
          </div>
        </nav>

        {/* main */}
        <main style={{flex:1,minWidth:0,background:'#F2F7FE',padding:'12px 14px',display:'flex',flexDirection:'column',gap:'9px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{background:'#E7F6EC',border:'1px solid #BFE5CB',color:'#15803D',fontWeight:700,fontSize:'11px',borderRadius:'6px',padding:'3px 8px'}}>{ep.method}</span>
            <span style={{fontWeight:700,fontSize:'16px',color:'#0B1020',flex:1,minWidth:0,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{ep.name}</span>
            {credits>0&&status!=='loading'&&(
              <button type="button" onClick={press}
                style={{background:'#2F7CF6',color:'#FFFFFF',border:0,borderRadius:'8px',padding:'0 14px',minHeight:'34px',fontFamily:'inherit',fontWeight:600,fontSize:'13px',cursor:'pointer'}}>Test Endpoint</button>
            )}
          </div>
          <div style={{background:'#FFFFFF',border:'1px solid #D9E3F0',borderRadius:'7px',padding:'6px 10px',fontFamily:"'JetBrains Mono',monospace",fontSize:'11px',color:'#4B5563',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{BASE_URL}{ep.path}</div>

          <div style={{flex:1,minHeight:0,display:'flex',gap:'10px'}}>
            {/* request */}
            <div style={{flex:1,minWidth:0,background:'#FFFFFF',border:'1px solid #E1E8F2',borderRadius:'9px',display:'flex',flexDirection:'column',overflow:'hidden'}}>
              <div role="tablist" style={{display:'flex',gap:'2px',padding:'0 8px',borderBottom:'1px solid #E5E7EB'}}>
                {tabDefs.map(([id,label])=>(
                  <button key={id} role="tab" aria-selected={tab===id?'true':'false'} type="button" onClick={()=>setTab(id)}
                    style={{background:'transparent',border:0,borderBottom:'2px solid '+(tab===id?'#2F7CF6':'transparent'),color:tab===id?'#1D4ED8':'#4B5563',fontFamily:'inherit',fontSize:'12px',fontWeight:500,padding:'9px 7px 7px',cursor:'pointer',minHeight:'34px'}}>
                    {label}
                  </button>
                ))}
              </div>
              <div style={{flex:1,minHeight:0,overflowY:'auto',padding:'8px 12px'}}>
                {tab==='params'&&ep.params.map(p=>(
                  <div key={p.k} style={{display:'flex',gap:'10px',alignItems:'center',padding:'7px 0',borderBottom:'1px solid #F1F3F6'}}>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'11.5px',color:'#111827'}}>{p.k}</div>
                      <div style={{fontSize:'10.5px',color:'#6B7280'}}>{p.desc}</div>
                    </div>
                    <input type="text" aria-label={p.k} value={v[p.k]} onChange={e=>setVals(prev=>({...prev,[ep.id]:{...prev[ep.id],[p.k]:e.target.value}}))}
                      style={{width:'128px',fontFamily:"'JetBrains Mono',monospace",fontSize:'11.5px',color:'#111827',background:'#F2F7FE',border:'1px solid #C9DAF2',borderRadius:'6px',padding:'7px 8px',minHeight:'32px',outline:'none'}}/>
                  </div>
                ))}
                {tab==='headers'&&[
                  {k:'Content-Type',v:'application/json'},{k:'x-api-key',v:'sd_demo_••••••'},{k:'Accept',v:'application/json'}
                ].map(h=>(
                  <div key={h.k} style={{display:'flex',justifyContent:'space-between',gap:'10px',padding:'7px 0',borderBottom:'1px solid #F1F3F6',fontFamily:"'JetBrains Mono',monospace",fontSize:'11px'}}>
                    <span style={{color:'#111827'}}>{h.k}</span><span style={{color:'#4B5563'}}>{h.v}</span>
                  </div>
                ))}
                {tab==='auth'&&(
                  <div style={{display:'flex',flexDirection:'column',gap:'8px',paddingTop:'4px'}}>
                    <div style={{fontWeight:600,color:'#111827'}}>API key</div>
                    <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'11px',background:'#F3F4F6',borderRadius:'6px',padding:'7px 9px',color:'#4B5563'}}>sd_demo_••••••••••••</div>
                    <div style={{color:'#4B5563',fontSize:'11.5px'}}>Playground calls use a shared demo key. Get your own key, and 250 credits a month, with a free account.</div>
                    <Link to="/pricing" style={{alignSelf:'flex-start',color:'#1D4ED8',fontWeight:600,textDecoration:'none'}}>Create free account →</Link>
                  </div>
                )}
                {tab==='body'&&(
                  <pre style={{margin:0,fontFamily:"'JetBrains Mono',monospace",fontSize:'11px',color:'#111827',whiteSpace:'pre-wrap'}}>{JSON.stringify(body,null,2)}</pre>
                )}
              </div>
            </div>

            {/* response */}
            <div style={{flex:1.05,minWidth:0,background:'#FFFFFF',border:'1px solid #E1E8F2',borderRadius:'9px',display:'flex',flexDirection:'column',overflow:'hidden'}}>
              {status==='idle'&&(
                <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px',textAlign:'center',padding:'14px'}}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2F7CF6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 13l2 2 4-4"/></svg>
                  <div style={{fontWeight:700,fontSize:'13px',color:'#0B1020'}}>Ready to Test</div>
                  <div style={{color:'#4B5563',fontSize:'11.5px'}}>Configure your request and click "Test Endpoint" to see a response.</div>
                </div>
              )}
              {status==='loading'&&(
                <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'8px',padding:'18px'}}>
                  <div style={{height:'9px',width:'60%',borderRadius:'5px',background:'#E6EEF9'}}/>
                  <div style={{height:'9px',width:'82%',borderRadius:'5px',background:'#E6EEF9'}}/>
                  <div style={{height:'9px',width:'46%',borderRadius:'5px',background:'#E6EEF9'}}/>
                  <div style={{color:'#1D4ED8',fontFamily:"'JetBrains Mono',monospace",fontSize:'11px'}}>{ep.method} {ep.path} …</div>
                </div>
              )}
              {status==='done'&&(
                <>
                  <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'7px 10px',borderBottom:'1px solid #E5E7EB'}}>
                    <span style={{background:'#E7F6EC',color:'#15803D',fontWeight:700,fontSize:'11px',borderRadius:'5px',padding:'2px 7px'}}>200 OK</span>
                    <span style={{color:'#4B5563',fontSize:'11px'}}>{ms} · 1 credit</span>
                    <span style={{marginLeft:'auto',color:'#6B7280',fontSize:'10.5px'}}>sample data</span>
                  </div>
                  <pre style={{flex:1,minHeight:0,margin:0,overflow:'auto',padding:'9px 10px',background:'#0B1220',color:'#D6E2F5',fontFamily:"'JetBrains Mono',monospace",fontSize:'10.5px',lineHeight:'1.55',whiteSpace:'pre-wrap'}}>{getDataResponse(ep.id,v)}</pre>
                </>
              )}
            </div>
          </div>

          {credits<=0&&status!=='loading'&&(
            <div style={{display:'flex',alignItems:'center',gap:'10px',background:'#0B1020',color:'#FFFFFF',borderRadius:'9px',padding:'8px 12px',flexShrink:0}}>
              <span style={{flex:1}}>You've used today's 5 free credits. They reset tomorrow.</span>
              <Link to="/pricing" style={{background:'#FFFFFF',color:'#1D4ED8',fontWeight:700,borderRadius:'7px',padding:'5px 10px',textDecoration:'none',whiteSpace:'nowrap'}}>Get 250 credits/mo free</Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 3 — LEADS DRIVER  (client design)
════════════════════════════════════════ */
const LD_PEOPLE=[
  ['Jordan Avery','VP of Sales','Northwind','northwind.io','Austin, TX','#2563EB','Logistics','201-500',2014],
  ['Priya Raman','Chief Revenue Officer','Cloudline','cloudline.dev','Dallas, TX','#0F766E','Software','51-200',2017],
  ['Marcus Hale','Head of Sales','Brightpath','brightpath.co','Houston, TX','#7C3AED','Healthcare','201-500',2012],
  ['Dana Fox','Sales Director','Orbit Labs','orbitlabs.io','Austin, TX','#B45309','Software','11-50',2020],
  ['Sam Patel','VP Revenue','Summit Analytics','summitdata.com','San Antonio, TX','#BE123C','Analytics','51-200',2016],
  ['Lee Morgan','VP of Sales','Vectorworks','vectorworks.ai','Austin, TX','#334155','Software','11-50',2021],
  ['Ana Berg','Director of Sales','Hartwell','hartwell.co','Plano, TX','#9D174D','Insurance','501-1k',2009],
];
const BASE_FILTERS={title:[],seniority:[],location:['United States'],industry:[],size:[],details:[]};
const AI_FILTERS={title:['VP Sales','Head of Sales'],seniority:['VP','Director'],location:['Texas, US'],industry:['Software'],size:['11-500'],details:['Has email']};
const LD_DEFAULT_ASK='VP Sales at software companies in Texas';
const ldPhoneFor=(i)=>'+1 (512) 555-01'+String(20+i*7).slice(-2);
const ldEmailFor=(p)=>p[0].split(' ')[0].toLowerCase()+'.'+p[0].split(' ')[1].toLowerCase()+'@'+p[3];

function TabLeadsDriver(){
  const [tab,setTab]         = useState('people');
  const [ask,setAsk]         = useState('');
  const [ai,setAi]           = useState(false);
  const [searching,setSearching]=useState(false);
  const [revealed,setRevealed]=useState({});
  const [profile,setProfile] = useState(-1);
  const [credits,setCredits] = useState(5);
  let searchTimer=null;

  const runAsk=()=>{
    clearTimeout(searchTimer);
    setSearching(true);
    searchTimer=setTimeout(()=>{setSearching(false);setAi(true);},900);
  };

  const revealContact=(i)=>{
    if(revealed[i]||credits<=0) return;
    setRevealed(r=>({...r,[i]:true}));
    setCredits(c=>c-1);
  };

  const F=ai?AI_FILTERS:BASE_FILTERS;
  const filterLabels=[['title','Job title'],['seniority','Seniority'],['location','Location'],['industry','Industry'],['size','Company size'],['details','Contact details']];
  const activeCount=filterLabels.filter(([k])=>F[k].length).length;
  const count=ai?1284:80793303;

  const pi=profile>=0?profile:0;
  const P=LD_PEOPLE[pi];
  const prRev=!!revealed[pi];

  return(
    <div style={{width:'100%',height:'330px',display:'flex',flexDirection:'column',background:'#FFFFFF',color:'#0F172A',fontFamily:"'Figtree','Segoe UI',system-ui,sans-serif",fontSize:'12px',lineHeight:'1.4',overflow:'hidden',borderRadius:'12px',border:'1px solid #E6E9EF',position:'relative'}}>
      {/* top bar */}
      <div style={{height:'44px',flexShrink:0,display:'flex',alignItems:'center',gap:'10px',padding:'0 12px',borderBottom:'1px solid #E6E9EF'}}>
        <span style={{width:'24px',height:'24px',borderRadius:'7px',background:'#1D4ED8',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19 8v6M22 11h-6"/></svg>
        </span>
        <span style={{fontWeight:800,fontSize:'15px',letterSpacing:'-0.01em'}}>Leads Driver</span>
        <div role="tablist" style={{display:'flex',background:'#F1F4F9',borderRadius:'8px',padding:'2px',marginLeft:'6px'}}>
          {[['people','People'],['companies','Companies']].map(([id,label])=>(
            <button key={id} role="tab" type="button" onClick={()=>{setTab(id);setProfile(-1);}}
              style={{border:0,borderRadius:'6px',padding:'0 10px',minHeight:'26px',fontFamily:'inherit',fontSize:'12px',fontWeight:700,cursor:'pointer',background:tab===id?'#FFFFFF':'transparent',color:tab===id?'#0F172A':'#64748B',boxShadow:tab===id?'0 1px 2px #0F172A1A':'none'}}>
              {label}
            </button>
          ))}
        </div>
        <label style={{flex:1,minWidth:0,display:'flex',alignItems:'center',gap:'6px',border:'1px solid #D5DBE7',borderRadius:'8px',padding:'0 4px 0 9px',background:'#FFFFFF'}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#1D4ED8" aria-hidden="true"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/></svg>
          <input type="text" aria-label="Describe who you want to reach" value={ask} onChange={e=>setAsk(e.target.value)}
            placeholder="Describe who you want to reach…"
            style={{flex:1,minWidth:0,border:0,outline:'none',fontFamily:'inherit',fontSize:'12px',color:'#0F172A',padding:'7px 0',background:'transparent'}}/>
          <button type="button" onClick={runAsk}
            style={{background:'#EEF3FF',color:'#1D4ED8',border:0,borderRadius:'6px',padding:'0 9px',minHeight:'26px',fontFamily:'inherit',fontWeight:700,cursor:'pointer'}}>AI search</button>
        </label>
        <span style={{background:'#EEF3FF',color:'#1D4ED8',borderRadius:'999px',padding:'4px 10px',fontWeight:700,whiteSpace:'nowrap'}}>Credits {credits}/5</span>
      </div>

      <div style={{flex:1,minHeight:0,display:'flex'}}>
        {/* filters sidebar */}
        <aside style={{width:'170px',flexShrink:0,borderRight:'1px solid #E6E9EF',display:'flex',flexDirection:'column',minHeight:0}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 10px',borderBottom:'1px solid #EEF1F5'}}>
            <b>Filters <span style={{color:'#1D4ED8'}}>({activeCount})</span></b>
            <button type="button" onClick={()=>{setAi(false);setAsk('');}}
              style={{background:'transparent',border:0,color:'#1D4ED8',fontFamily:'inherit',fontSize:'11px',cursor:'pointer',padding:'2px 0',minHeight:'24px'}}>Clear all</button>
          </div>
          <div style={{flex:1,minHeight:0,overflowY:'auto',padding:'4px 10px 8px'}}>
            {filterLabels.map(([k,label])=>(
              <div key={k} style={{padding:'7px 0',borderBottom:'1px solid #F1F4F8'}}>
                <div style={{display:'flex',justifyContent:'space-between',color:'#1E293B',fontWeight:600}}>{label}<span style={{color:'#64748B'}}>{F[k].length?'−':'+'}</span></div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginTop:'4px'}}>
                  {F[k].map((c,i)=>(
                    <span key={i} style={{background:'#EEF3FF',color:'#1D4ED8',borderRadius:'5px',padding:'1px 6px',fontSize:'10.5px',fontWeight:600}}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* results */}
        <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'7px 10px',borderBottom:'1px solid #EEF1F5'}}>
            <b style={{fontSize:'13px'}}>{tab==='people'?count.toLocaleString('en-US')+' people':(ai?'312':'18,452,110')+' companies'}</b>
            <span style={{color:'#64748B'}}>{ai?'matched from your AI search':'in the database'}</span>
            <span style={{marginLeft:'auto',display:'flex',gap:'6px'}}>
              <Link to="/pricing" style={{border:'1px solid #D5DBE7',borderRadius:'6px',padding:'4px 8px',color:'#334155',textDecoration:'none',fontWeight:600}}>Save list</Link>
              <Link to="/pricing" style={{border:'1px solid #D5DBE7',borderRadius:'6px',padding:'4px 8px',color:'#334155',textDecoration:'none',fontWeight:600}}>Export CSV</Link>
            </span>
          </div>

          {/* people table */}
          {tab==='people'&&(
            <>
              <div style={{display:'grid',gridTemplateColumns:'1.45fr 1fr 1.35fr 0.95fr',gap:'8px',padding:'6px 10px',background:'#F8FAFC',fontWeight:700,fontSize:'10.5px',color:'#475569',letterSpacing:'0.03em'}}>
                <span>NAME</span><span>COMPANY</span><span>EMAIL</span><span>PHONE</span>
              </div>
              {searching&&(
                <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',color:'#1D4ED8',fontWeight:700}}>Turning your description into filters…</div>
              )}
              {!searching&&(
                <div style={{flex:1,minHeight:0,overflow:'hidden'}}>
                  {LD_PEOPLE.map((p,i)=>{
                    const rev=!!revealed[i];
                    const ini=p[0].split(' ').map(x=>x[0]).join('');
                    return(
                      <div key={i} style={{display:'grid',gridTemplateColumns:'1.45fr 1fr 1.35fr 0.95fr',gap:'8px',padding:'6px 10px',borderTop:'1px solid #F1F4F8',alignItems:'center',background:profile===i?'#F3F6FF':'#FFFFFF'}}>
                        <button type="button" onClick={()=>setProfile(i)}
                          style={{display:'flex',alignItems:'center',gap:'7px',minWidth:0,background:'transparent',border:0,padding:0,fontFamily:'inherit',textAlign:'left',cursor:'pointer',color:'#0F172A'}}>
                          <span style={{width:'24px',height:'24px',borderRadius:'50%',background:p[5],color:'#FFFFFF',fontWeight:700,fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{ini}</span>
                          <span style={{minWidth:0}}>
                            <b style={{display:'block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[0]}</b>
                            <span style={{display:'block',color:'#64748B',fontSize:'10.5px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[1]}</span>
                          </span>
                        </button>
                        <span style={{minWidth:0}}>
                          <span style={{display:'block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[2]}</span>
                          <span style={{color:'#64748B',fontSize:'10.5px'}}>{p[4]}</span>
                        </span>
                        {rev?(
                          <span style={{minWidth:0,display:'flex',alignItems:'center',gap:'4px'}}>
                            <span style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{ldEmailFor(p)}</span>
                            <span style={{color:'#15803D',fontWeight:800}} title="Verified">✓</span>
                          </span>
                        ):(
                          <span style={{display:'flex',alignItems:'center',gap:'5px',minWidth:0}}>
                            <span style={{color:'#94A3B8',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{'••••••@'+p[3]}</span>
                            {credits>0&&(
                              <button type="button" onClick={()=>revealContact(i)}
                                style={{flexShrink:0,background:'#1D4ED8',color:'#FFFFFF',border:0,borderRadius:'5px',padding:'0 7px',minHeight:'22px',fontFamily:'inherit',fontSize:'10.5px',fontWeight:700,cursor:'pointer'}}>Access</button>
                            )}
                          </span>
                        )}
                        <span style={{color:rev?'#0F172A':'#94A3B8',whiteSpace:'nowrap'}}>{rev?ldPhoneFor(i):'+1 (•••) •••-••••'}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              <div style={{padding:'6px 10px',borderTop:'1px solid #EEF1F5',color:'#64748B',display:'flex',justifyContent:'space-between'}}>
                <span>1 – 7 of {count.toLocaleString('en-US')}</span>
                <span>Accessing an email uses 1 credit</span>
              </div>
            </>
          )}

          {/* companies table */}
          {tab==='companies'&&(
            <>
              <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 0.8fr 1fr',gap:'8px',padding:'6px 10px',background:'#F8FAFC',fontWeight:700,fontSize:'10.5px',color:'#475569',letterSpacing:'0.03em'}}>
                <span>COMPANY</span><span>INDUSTRY</span><span>SIZE</span><span>CONTACTS</span>
              </div>
              {LD_PEOPLE.map((p,i)=>(
                <div key={i} style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 0.8fr 1fr',gap:'8px',padding:'7px 10px',borderTop:'1px solid #F1F4F8',alignItems:'center'}}>
                  <span style={{display:'flex',alignItems:'center',gap:'7px'}}>
                    <span style={{width:'22px',height:'22px',borderRadius:'6px',background:p[5],color:'#FFFFFF',fontWeight:700,fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{p[2].slice(0,2).toUpperCase()}</span>
                    <span><b style={{display:'block'}}>{p[2]}</b><span style={{color:'#64748B',fontSize:'10.5px'}}>{p[3]}</span></span>
                  </span>
                  <span>{p[6]}</span><span>{p[7]}</span><span style={{color:'#1D4ED8',fontWeight:700}}>{12+(p[2].length*7)%90} contacts</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* profile drawer */}
      {profile>=0&&tab==='people'&&(
        <div role="dialog" aria-label="Contact profile" style={{position:'absolute',top:'44px',right:0,bottom:0,width:'270px',background:'#FFFFFF',borderLeft:'1px solid #D5DBE7',boxShadow:'-12px 0 30px #0F172A1F',padding:'12px 14px',display:'flex',flexDirection:'column',gap:'8px',zIndex:10}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{width:'38px',height:'38px',borderRadius:'50%',background:P[5],color:'#FFFFFF',fontWeight:800,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{P[0].split(' ').map(x=>x[0]).join('')}</span>
            <div style={{flex:1,minWidth:0}}><b style={{fontSize:'14px'}}>{P[0]}</b><div style={{color:'#64748B'}}>{P[1]} at {P[2]}</div></div>
            <button type="button" onClick={()=>setProfile(-1)} aria-label="Close profile"
              style={{width:'28px',height:'28px',borderRadius:'6px',border:'1px solid #E6E9EF',background:'#FFFFFF',cursor:'pointer',fontSize:'14px',color:'#334155'}}>×</button>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'5px',padding:'8px 0',borderTop:'1px solid #EEF1F5',borderBottom:'1px solid #EEF1F5'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#64748B'}}>Email</span><b style={{color:prRev?'#0F172A':'#94A3B8'}}>{prRev?ldEmailFor(P):'Hidden'}</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#64748B'}}>Phone</span><b style={{color:prRev?'#0F172A':'#94A3B8'}}>{prRev?ldPhoneFor(pi):'Hidden'}</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#64748B'}}>Location</span><span>{P[4]}</span></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'#64748B'}}>LinkedIn</span><span style={{color:'#1D4ED8'}}>/in/{P[0].toLowerCase().replace(' ','-')}</span></div>
          </div>
          <div style={{fontWeight:700}}>{P[2]}</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2, minmax(0, 1fr))',gap:'5px',color:'#334155'}}>
            <span>Industry: {P[6]}</span><span>Size: {P[7]}</span><span>Founded: {P[8]}</span><span>Tech: HubSpot</span>
          </div>
          {!prRev&&credits>0&&(
            <button type="button" onClick={()=>revealContact(pi)}
              style={{background:'#1D4ED8',color:'#FFFFFF',border:0,borderRadius:'7px',minHeight:'34px',fontFamily:'inherit',fontWeight:700,cursor:'pointer'}}>Access email &amp; phone · 1 credit</button>
          )}
          <div style={{marginTop:'auto',display:'flex',gap:'6px'}}>
            <Link to="/pricing" style={{flex:1,textAlign:'center',background:'#0F172A',color:'#FFFFFF',borderRadius:'7px',padding:'7px',fontWeight:700,textDecoration:'none'}}>Send to HyperPitch</Link>
            <Link to="/pricing" style={{flex:1,textAlign:'center',border:'1px solid #D5DBE7',color:'#0F172A',borderRadius:'7px',padding:'6px',fontWeight:700,textDecoration:'none'}}>Add to list</Link>
          </div>
        </div>
      )}

      {credits<=0&&(
        <div style={{position:'absolute',left:'180px',right:'10px',bottom:'34px',display:'flex',alignItems:'center',gap:'10px',background:'#0F172A',color:'#FFFFFF',borderRadius:'9px',padding:'8px 12px',boxShadow:'0 10px 24px #0F172A40'}}>
          <span style={{flex:1}}>You've used today's 5 free credits. They reset tomorrow.</span>
          <Link to="/pricing" style={{background:'#FFFFFF',color:'#1D4ED8',fontWeight:700,borderRadius:'7px',padding:'5px 10px',textDecoration:'none',whiteSpace:'nowrap'}}>Get 250 credits/mo free</Link>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 4 — EXACTMAILS  (client design)
════════════════════════════════════════ */
const EM_ICONS={
  dash:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  finder:'M3 6h18v12H3zM3 7l9 6 9-6',
  bulk:'M12 15V3M7 8l5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4',
  chrome:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  verifier:'M9 12l2 2 4-4M3 6h18v12H3z',
  keys:'M15 7a4 4 0 1 1-3.9 5H3v3h3v3h3v-3h2.1A4 4 0 0 1 15 7z',
};
const EM_BULK=[
  ['Olivia Chen','northwind.io','olivia.chen@northwind.io','Verified'],
  ['Marco Garcia','brightpath.co','marco@brightpath.co','Verified'],
  ['Dayo Okafor','vectorworks.ai','d.okafor@vectorworks.ai','Verified'],
  ['Priya Raman','cloudline.dev','priya.raman@cloudline.dev','Verified'],
  ['Ken Lee','orbitlabs.io','ken.lee@orbitlabs.io','Catch-all'],
  ['Tina Nguyen','summitdata.com','tina@summitdata.com','Verified'],
  ['Ana Berg','hartwell.co','—','Not found'],
];
const emBadge=(s)=>'justify-self: start; font-size: 10.5px; font-weight: 800; border-radius: 999px; padding: 2px 8px; '+(s==='Verified'?'background: #DCFCE7; color: #166534;':s==='Catch-all'?'background: #FEF3C7; color: #92400E;':'background: #F3F4F6; color: #4B5563;');

function TabExactMails(){
  const [screen,setScreen]=useState('dash'); // dash|finder|bulk
  const [first,setFirst]  =useState('Jane');
  const [last,setLast]    =useState('Doe');
  const [domain,setDomain]=useState('acme.com');
  const [fState,setFState]=useState('idle'); // idle|loading|done
  const [stepIdx,setStepIdx]=useState(0);
  const [bState,setBState]=useState('idle'); // idle|running|done
  const [bulkN,setBulkN]  =useState(0);
  const [credits,setCredits]=useState(5);
  const timers=[];

  const press=()=>{
    if(fState==='loading'||bState==='running'||credits<=0) return;
    setCredits(c=>c-1);
    if(screen==='bulk'){
      setBState('running'); setBulkN(0);
      const iv=setInterval(()=>{
        setBulkN(n=>{const next=n+1;if(next>=10){clearInterval(iv);setBState('done');return 10;}return next;});
      },110); timers.push(iv);
      return;
    }
    setScreen('finder'); setFState('loading'); setStepIdx(0);
    [1,2,3].forEach(i=>{const t=setTimeout(()=>setStepIdx(i),i*260);timers.push(t);});
    const t=setTimeout(()=>setFState('done'),1100); timers.push(t);
  };

  const clean=(x)=>String(x||'').trim().toLowerCase().replace(/[^a-z]/g,'');
  const f=clean(first)||'jane', l=clean(last)||'doe';
  const dom=String(domain||'acme.com').trim().toLowerCase().replace(/^https?:\/\//,'').replace(/^www\./,'').split('/')[0]||'acme.com';
  const foundEmail=f+'.'+l+'@'+dom;
  const confidence=(91+(f.length+l.length)%8)+'%';
  const navDefs=[['dash','Dashboard',EM_ICONS.dash,false],['finder','Email Finder',EM_ICONS.finder,false],['bulk','Bulk Finder',EM_ICONS.bulk,false],['chrome','Chrome Extension',EM_ICONS.chrome,true],['verifier','Email Verifier',EM_ICONS.verifier,true],['keys','API Keys',EM_ICONS.keys,true]];
  const stepLabels=['Generating likely patterns','Checking domain mail server','Verifying best match','Scoring confidence'];
  const emSteps=stepLabels.map((label,i)=>({label,dot:i<stepIdx?'#2F5BEA':(i===stepIdx?'#F59E0B':'#D1D5DB'),color:i<=stepIdx?'#111827':'#6B7280'}));
  const bulkCanRun=credits>0&&bState!=='running'&&bState!=='done';

  return(
    <div style={{width:'100%',height:'330px',display:'flex',background:'#FFFFFF',color:'#111827',fontFamily:"'Nunito Sans','Segoe UI',system-ui,sans-serif",fontSize:'12px',lineHeight:'1.4',overflow:'hidden',borderRadius:'12px',border:'1px solid #E5E7EB'}}>

      {/* sidebar */}
      <nav style={{width:'162px',flexShrink:0,background:'linear-gradient(180deg, #1E2F6B 0%, #3554C4 100%)',color:'#FFFFFF',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px',borderBottom:'1px solid rgba(255,255,255,0.13)'}}>
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#FFFFFF"/><circle cx="12" cy="12" r="7" fill="none" stroke="#4C6EF5" strokeWidth="2.4"/><circle cx="12" cy="12" r="3" fill="#4C6EF5"/></svg>
          <span style={{fontWeight:800,fontSize:'15px'}}>Exact Mails</span>
        </div>
        <div style={{padding:'8px',display:'flex',flexDirection:'column',gap:'2px'}}>
          {navDefs.map(([id,label,icon,locked])=>{
            const on=screen===id;
            return(
              <button key={id} type="button" onClick={()=>{if(!locked)setScreen(id);}}
                style={{display:'flex',alignItems:'center',gap:'8px',width:'100%',minHeight:'32px',padding:'6px 9px',border:0,borderRadius:'7px',fontFamily:'inherit',fontSize:'12px',fontWeight:700,color:locked?'#C7D2FE':'#FFFFFF',cursor:locked?'default':'pointer',background:on?'rgba(255,255,255,0.18)':'transparent'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon}/></svg>
                <span style={{flex:1,textAlign:'left'}}>{label}</span>
                {locked&&<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C7D2FE" strokeWidth="2.4" strokeLinecap="round" role="img" aria-label="Members only"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>}
              </button>
            );
          })}
        </div>
        <div style={{margin:'auto 8px 8px',background:'#FFFFFF',color:'#1E2F6B',borderRadius:'9px',padding:'9px',display:'flex',flexDirection:'column',gap:'6px'}}>
          <div style={{display:'flex',justifyContent:'space-around',textAlign:'center'}}>
            <div><b style={{fontSize:'13px'}}>95%+</b><div style={{fontSize:'9.5px',color:'#4B5563'}}>Verified</div></div>
            <div><b style={{fontSize:'13px'}}>Bulk</b><div style={{fontSize:'9.5px',color:'#4B5563'}}>CSV ready</div></div>
          </div>
          <Link to="/pricing" style={{background:'#2F5BEA',color:'#FFFFFF',borderRadius:'6px',padding:'6px',textAlign:'center',fontWeight:700,fontSize:'11px',textDecoration:'none'}}>Get 250 credits/mo free</Link>
        </div>
      </nav>

      <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column'}}>
        {/* top bar */}
        <div style={{height:'44px',flexShrink:0,display:'flex',alignItems:'center',gap:'8px',padding:'0 12px',borderBottom:'1px solid #EEF0F4'}}>
          <span style={{display:'flex',alignItems:'center',gap:'5px',background:'#F4F5F8',borderRadius:'999px',padding:'4px 10px',color:'#374151',fontWeight:600}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
            Free credits: {credits}/5
          </span>
          <Link to="/pricing" style={{marginLeft:'auto',background:'#1E2F6B',color:'#FFFFFF',borderRadius:'6px',padding:'5px 11px',fontWeight:700,textDecoration:'none'}}>Plans</Link>
          <Link to="/login" style={{border:'1px solid #2F5BEA',color:'#2F5BEA',borderRadius:'6px',padding:'4px 10px',fontWeight:700,textDecoration:'none'}}>Login</Link>
        </div>

        <main style={{flex:1,minHeight:0,padding:'14px 16px',display:'flex',flexDirection:'column',gap:'10px',background:'#FAFBFD',overflow:'hidden'}}>

          {/* DASHBOARD */}
          {screen==='dash'&&(
            <>
              <div style={{textAlign:'center'}}>
                <div style={{fontWeight:800,fontSize:'20px',color:'#0B1020'}}>Welcome to <span style={{color:'#2F5BEA'}}>Exact Mails</span></div>
                <div style={{color:'#4B5563'}}>Find accurate work emails and supercharge your outreach.</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3, minmax(0, 1fr))',gap:'8px'}}>
                {[
                  {t:'Fast Search',d:'Emails in seconds',c:'#3B6CF6',icon:'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-3.5-3.5'},
                  {t:'High Accuracy',d:'95%+ verified emails',c:'#10B981',icon:'M3 17l6-6 4 4 8-8M15 7h6v6'},
                  {t:'Bulk Search',d:'Whole lists at once',c:'#F59E0B',icon:'M3 6h18v12H3zM3 7l9 6 9-6'},
                  {t:'API Access',d:'Plug into your stack',c:'#8B5CF6',icon:'M13 2L3 14h9l-1 8 10-12h-9z'},
                  {t:'Data Protection',d:'Enterprise-grade security',c:'#EF4444',icon:'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z'},
                  {t:'Global Coverage',d:'Companies worldwide',c:'#4F46E5',icon:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18'},
                ].map((f,i)=>(
                  <div key={i} style={{background:'#FFFFFF',border:'1px solid #E5E7EB',borderTop:`3px solid ${f.c}`,borderRadius:'8px',padding:'9px 8px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'3px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={f.icon}/></svg>
                    <div style={{fontWeight:800,fontSize:'12.5px',color:'#0B1020'}}>{f.t}</div>
                    <div style={{fontSize:'10.5px',color:'#4B5563'}}>{f.d}</div>
                  </div>
                ))}
              </div>
              <div style={{background:'linear-gradient(90deg, #1E2F6B, #4C7BF0)',color:'#FFFFFF',borderRadius:'10px',padding:'10px 14px',display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{flex:1}}><div style={{fontWeight:800,fontSize:'13.5px'}}>Try it free: find an email now</div><div style={{fontSize:'11px',color:'#DCE4FF'}}>1 credit per search · 5 free credits a day</div></div>
                <button type="button" onClick={()=>setScreen('finder')}
                  style={{background:'#FFFFFF',color:'#2F5BEA',border:0,borderRadius:'7px',padding:'0 14px',minHeight:'34px',fontFamily:'inherit',fontWeight:800,cursor:'pointer'}}>Open Email Finder</button>
              </div>
            </>
          )}

          {/* FINDER */}
          {screen==='finder'&&(
            <>
              <div><div style={{fontWeight:800,fontSize:'17px',color:'#0B1020'}}>Email Finder</div><div style={{color:'#4B5563'}}>Enter a name and company domain to find their work email.</div></div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3, minmax(0, 1fr)) auto',gap:'8px',alignItems:'end'}}>
                {[
                  {label:'First name',ph:'Jane',val:first,set:setFirst},
                  {label:'Last name',ph:'Doe',val:last,set:setLast},
                  {label:'Company domain',ph:'acme.com',val:domain,set:setDomain},
                ].map(({label,ph,val,set})=>(
                  <label key={label} style={{display:'flex',flexDirection:'column',gap:'4px',fontWeight:700,color:'#374151',fontSize:'11px'}}>{label}
                    <input type="text" value={val} onChange={e=>{set(e.target.value);setFState('idle');}}
                      placeholder={ph}
                      style={{fontFamily:'inherit',fontSize:'13px',color:'#111827',background:'#FFFFFF',border:'1px solid #D1D5DB',borderRadius:'7px',padding:'8px 10px',minHeight:'38px',minWidth:0,outline:'none'}}/>
                  </label>
                ))}
                {credits>0&&fState!=='loading'&&(
                  <button type="button" onClick={press}
                    style={{background:'#2F5BEA',color:'#FFFFFF',border:0,borderRadius:'7px',padding:'0 14px',minHeight:'38px',fontFamily:'inherit',fontWeight:800,cursor:'pointer'}}>Find email</button>
                )}
              </div>
              <div style={{flex:1,minHeight:0,background:'#FFFFFF',border:'1px solid #E5E7EB',borderRadius:'10px',padding:'14px',display:'flex',flexDirection:'column',gap:'10px',overflow:'hidden'}}>
                {fState==='idle'&&(
                  <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px',color:'#4B5563',textAlign:'center'}}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F5BEA" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
                    <div style={{fontWeight:800,color:'#111827'}}>Ready to search</div>
                    <div>We check common patterns, then verify the best match.</div>
                  </div>
                )}
                {fState==='loading'&&(
                  <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'8px'}}>
                    {emSteps.map((st,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',color:st.color}}>
                        <span style={{width:'8px',height:'8px',borderRadius:'50%',background:st.dot,flexShrink:0,display:'inline-block'}}/>{st.label}
                      </div>
                    ))}
                  </div>
                )}
                {fState==='done'&&(
                  <>
                    <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 12px',border:'1px solid #C7D7FE',background:'#F3F6FF',borderRadius:'9px'}}>
                      <span style={{width:'36px',height:'36px',borderRadius:'50%',background:'#2F5BEA',color:'#FFFFFF',fontWeight:800,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{(f[0]+l[0]).toUpperCase()}</span>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:800,fontSize:'15px',color:'#0B1020',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{foundEmail}</div>
                        <div style={{color:'#4B5563'}}>{(first||'Jane')+' '+(last||'Doe')} · {dom}</div>
                      </div>
                      <span style={{background:'#DCFCE7',color:'#166534',fontWeight:800,fontSize:'11px',borderRadius:'999px',padding:'3px 9px'}}>Verified</span>
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(3, minmax(0, 1fr))',gap:'8px'}}>
                      <div style={{border:'1px solid #E5E7EB',borderRadius:'8px',padding:'7px 9px'}}><div style={{fontSize:'10px',fontWeight:700,color:'#4B5563'}}>CONFIDENCE</div><div style={{fontWeight:800,fontSize:'15px',color:'#0B1020'}}>{confidence}</div></div>
                      <div style={{border:'1px solid #E5E7EB',borderRadius:'8px',padding:'7px 9px'}}><div style={{fontSize:'10px',fontWeight:700,color:'#4B5563'}}>PATTERN</div><div style={{fontWeight:800,fontSize:'15px',color:'#0B1020'}}>{'{first}.{last}'}</div></div>
                      <div style={{border:'1px solid #E5E7EB',borderRadius:'8px',padding:'7px 9px'}}><div style={{fontSize:'10px',fontWeight:700,color:'#4B5563'}}>MX / SMTP</div><div style={{fontWeight:800,fontSize:'15px',color:'#166534'}}>Valid</div></div>
                    </div>
                    <div style={{fontWeight:700,color:'#374151'}}>Other patterns checked</div>
                    {[{e:f+'@'+dom,s:'No mailbox'},{e:f[0]+l+'@'+dom,s:'No mailbox'}].map((a,i)=>(
                      <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'1px solid #F1F2F4'}}><span>{a.e}</span><span style={{color:'#9A3412',fontWeight:700}}>{a.s}</span></div>
                    ))}
                  </>
                )}
              </div>
            </>
          )}

          {/* BULK */}
          {screen==='bulk'&&(
            <>
              <div style={{display:'flex',alignItems:'flex-end',gap:'10px'}}>
                <div style={{flex:1}}><div style={{fontWeight:800,fontSize:'17px',color:'#0B1020'}}>Bulk Finder</div><div style={{color:'#4B5563'}}>Find emails for a whole list. Try our 10-contact sample.</div></div>
                {bulkCanRun&&(
                  <button type="button" onClick={press}
                    style={{background:'#2F5BEA',color:'#FFFFFF',border:0,borderRadius:'7px',padding:'0 14px',minHeight:'36px',fontFamily:'inherit',fontWeight:800,cursor:'pointer'}}>Run sample · 1 credit</button>
                )}
              </div>
              {bState==='running'&&(
                <div style={{background:'#FFFFFF',border:'1px solid #E5E7EB',borderRadius:'9px',padding:'10px 12px',display:'flex',flexDirection:'column',gap:'6px'}}>
                  <div style={{display:'flex',justifyContent:'space-between'}}><b>Finding emails…</b><span style={{color:'#4B5563'}}>{bulkN} / 10</span></div>
                  <div style={{height:'7px',background:'#E8EDFB',borderRadius:'4px',overflow:'hidden'}}><div style={{height:'7px',background:'#2F5BEA',width:(bulkN*10)+'%',transition:'width .1s'}}/></div>
                </div>
              )}
              {bState==='done'&&(
                <div style={{display:'flex',gap:'8px'}}>
                  <div style={{flex:1,background:'#FFFFFF',border:'1px solid #E5E7EB',borderRadius:'8px',padding:'6px 10px'}}><span style={{fontSize:'10px',fontWeight:700,color:'#4B5563'}}>FOUND</span> <b style={{fontSize:'15px',color:'#166534'}}>8 / 10</b></div>
                  <div style={{flex:1,background:'#FFFFFF',border:'1px solid #E5E7EB',borderRadius:'8px',padding:'6px 10px'}}><span style={{fontSize:'10px',fontWeight:700,color:'#4B5563'}}>VERIFIED</span> <b style={{fontSize:'15px',color:'#0B1020'}}>7</b></div>
                  <Link to="/pricing" style={{flex:1,background:'#1E2F6B',color:'#FFFFFF',borderRadius:'8px',padding:'8px 10px',fontWeight:700,textAlign:'center',textDecoration:'none'}}>Download CSV · free account</Link>
                </div>
              )}
              <div style={{flex:1,minHeight:0,background:'#FFFFFF',border:'1px solid #E5E7EB',borderRadius:'10px',overflow:'hidden'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 0.9fr 1.5fr 0.7fr',gap:'8px',padding:'7px 10px',background:'#F4F6FB',fontWeight:800,fontSize:'11px',color:'#374151'}}>
                  <span>Name</span><span>Domain</span><span>Email</span><span>Status</span>
                </div>
                {EM_BULK.map(([n,d,e,st],i)=>{
                  const shown=bState==='done'||(bState==='running'&&i<Math.floor(bulkN*0.7));
                  return(
                    <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 0.9fr 1.5fr 0.7fr',gap:'8px',padding:'5px 10px',borderTop:'1px solid #F1F2F4',fontSize:'11.5px',alignItems:'center'}}>
                      <span>{n}</span>
                      <span style={{color:'#4B5563'}}>{d}</span>
                      <span style={{color:shown&&e!=='—'?'#111827':'#9CA3AF',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{shown?e:'…'}</span>
                      <span style={Object.fromEntries((emBadge(shown?st:'Queued')).split(';').filter(Boolean).map(p=>p.split(':').map(x=>x.trim())).map(([k,v])=>[k.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),v]))}>{shown?st:'Queued'}</span>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {credits<=0&&(
            <div style={{display:'flex',alignItems:'center',gap:'10px',background:'#1E2F6B',color:'#FFFFFF',borderRadius:'9px',padding:'8px 12px',flexShrink:0}}>
              <span style={{flex:1}}>You've used today's 5 free credits. They reset tomorrow.</span>
              <Link to="/pricing" style={{background:'#FFFFFF',color:'#2F5BEA',fontWeight:800,borderRadius:'7px',padding:'5px 10px',textDecoration:'none',whiteSpace:'nowrap'}}>Get 250 credits/mo free</Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 5 — TRAFERA  (original)
════════════════════════════════════════ */
const TRAFERA_VISITORS = [
  { company: "Northwind Logistics", industry: "Logistics",    pages: ["Pricing", "Platform", "How it works"], intent: 92, seen: "2m ago",  contacts: 3 },
  { company: "BrightPath Media",    industry: "Marketing",    pages: ["Home", "Pricing"],                      intent: 74, seen: "14m ago", contacts: 2 },
  { company: "Skyline SaaS",        industry: "B2B SaaS",     pages: ["Platform", "Compare"],                  intent: 81, seen: "31m ago", contacts: 1 },
  { company: "DataStream AI",       industry: "Data & AI",    pages: ["Pricing"],                              intent: 68, seen: "1h ago",  contacts: 2 },
  { company: "CoreBridge",          industry: "Fintech",      pages: ["Home", "About"],                        intent: 55, seen: "2h ago",  contacts: 1 },
];

function TabTrafera() {
  const [subTab, setSubTab] = useState("feed");
  const [expanded, setExpanded] = useState(null);
  const [credits, setCredits] = useState(5);
  const [pushed, setPushed] = useState({});

  const intentColor = (n) => n >= 80 ? T.green : n >= 60 ? "#d97706" : "#dc2626";

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-0 rounded-xl border overflow-hidden" style={{ borderColor: T.border }}>
        {["feed", "analytics", "setup"].map(t => (
          <button key={t} type="button" onClick={() => setSubTab(t)}
            className="flex-1 py-2 text-[10px] font-bold capitalize border-r last:border-r-0 transition-colors"
            style={{ borderColor: T.border, background: subTab === t ? T.navy : T.bg, color: subTab === t ? "#fff" : T.muted }}>
            {t === "feed" ? "Visitor Feed" : t === "analytics" ? "Analytics" : "Setup"}
          </button>
        ))}
      </div>

      {subTab === "feed" && (
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: T.border }}>
          <div className="grid px-3 py-1.5 text-[9px] font-black uppercase tracking-wider"
            style={{ gridTemplateColumns: "1.5fr 1fr 1fr 0.7fr 0.7fr", background: T.bg, color: T.muted }}>
            <span>Company</span><span>Industry</span><span>Pages</span><span>Intent</span><span>Seen</span>
          </div>
          {TRAFERA_VISITORS.map((v, i) => (
            <div key={i}>
              <div className="grid px-3 py-2.5 border-t items-center cursor-pointer hover:bg-slate-50 transition-colors"
                style={{ gridTemplateColumns: "1.5fr 1fr 1fr 0.7fr 0.7fr", borderColor: T.border }}
                onClick={() => setExpanded(expanded === i ? null : i)}>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    style={{ background: "#0891b2" }}>{v.company[0]}</div>
                  <span className="text-[10px] font-semibold truncate" style={{ color: T.navy }}>{v.company}</span>
                </div>
                <span className="text-[9px] truncate" style={{ color: T.muted }}>{v.industry}</span>
                <span className="text-[9px] truncate" style={{ color: T.muted }}>{v.pages.slice(0, 2).join(", ")}</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: intentColor(v.intent) }} />
                  <span className="text-[10px] font-bold" style={{ color: intentColor(v.intent) }}>{v.intent}</span>
                </div>
                <span className="text-[9px]" style={{ color: "#94a3b8" }}>{v.seen}</span>
              </div>
              {expanded === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                  className="border-t px-3 py-3 bg-slate-50/80" style={{ borderColor: T.border }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold" style={{ color: T.navy }}>Pages visited</span>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => { setPushed(p => ({ ...p, [i]: "slack" })); setCredits(c => Math.max(0, c - 1)); }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white"
                        style={{ background: pushed[i] === "slack" ? "#94a3b8" : "#4A154B" }}>
                        {pushed[i] === "slack" ? "✓ Sent" : "Send to Slack"}
                      </button>
                      <button type="button" onClick={() => { setPushed(p => ({ ...p, [i]: "crm" })); setCredits(c => Math.max(0, c - 1)); }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white"
                        style={{ background: pushed[i] === "crm" ? "#94a3b8" : T.blue }}>
                        {pushed[i] === "crm" ? "✓ Pushed" : "Push to CRM"}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {v.pages.map((p, pi) => (
                      <div key={pi} className="flex items-center gap-2 text-[10px]" style={{ color: T.muted }}>
                        <Globe className="w-3 h-3 shrink-0" style={{ color: "#0891b2" }} />
                        {p} <span style={{ color: "#94a3b8" }}>— {pi === 0 ? "3 times" : "1 time"}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-[9px]" style={{ color: "#94a3b8" }}>
                    Likely buyers: <span style={{ color: "#0891b2", fontWeight: 700 }}>{v.contacts} contact{v.contacts > 1 ? "s" : ""} available</span> · unlock with credits
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}

      {subTab === "analytics" && (
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Companies",  value: "1,284", color: "#0891b2" },
            { label: "High Intent",value: "216",   color: T.orange  },
            { label: "Sent to Slack",value: "94",  color: "#4A154B" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-3 text-center" style={{ borderColor: T.border }}>
              <div className="text-[22px] font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[9px] font-bold uppercase tracking-wider mt-0.5" style={{ color: T.muted }}>{s.label}</div>
            </div>
          ))}
          <div className="col-span-3 rounded-xl border p-3" style={{ borderColor: T.border }}>
            <SectionLabel>Intent distribution (last 30 days)</SectionLabel>
            <div className="flex items-end gap-1 h-14 mt-1">
              {[45, 62, 78, 55, 90, 67, 83].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${(h / 90) * 56}px`, background: "#0891b2", opacity: 0.6 + i * 0.05 }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {subTab === "setup" && (
        <div className="rounded-xl border p-4 space-y-3" style={{ borderColor: T.border }}>
          <div className="text-[12px] font-bold" style={{ color: T.navy }}>Install the Trafera pixel</div>
          <p className="text-[10px]" style={{ color: T.muted }}>
            Add this snippet to the &lt;head&gt; of your website to start identifying visitors.
          </p>
          <div className="rounded-xl p-3 font-mono text-[9px]" style={{ background: T.navy, color: "#7dd3fc" }}>
            {`<script>\n  (function(t,r,a,f,e,r2){\n    t['TraferaObject']=e;\n    t[e]=t[e]||function(){...};\n    // pixel: SD-TRF-DEMO\n  })(window,'https://cdn.trafera.io/t.js');\n</script>`}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: T.green }} />
            <span className="text-[10px] font-bold" style={{ color: T.green }}>Pixel LIVE — demo mode active</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================================
   TAB 6 -- HYPERPITCH  (PDF 6)
   4-step wizard: Leads -> Page -> Personalize -> Send
======================================== */
const LEADS_PEOPLE = [
  { name: 'Jordan Avery',   title: 'VP of Sales',             company: 'Northwind',       city: 'Austin, TX',      email: 'j***@northwind.com',  phone: '+1 (5..) ...-....', li: true },
  { name: 'Maya Chen',      title: 'Director of Revenue Ops', company: 'BrightPath',      city: 'New York, NY',    email: 'm***@brightpath.io',  phone: '+1 (4..) ...-....', li: true },
  { name: 'Ethan Brooks',   title: 'Head of Growth',          company: 'Skyline SaaS',    city: 'San Francisco',   email: 'e***@skylinesaas.com',phone: '+1 (6..) ...-....', li: true },
  { name: 'Sofia Reyes',    title: 'Sales Director',          company: 'CoreBridge',      city: 'Chicago, IL',     email: 's***@corebridge.co',  phone: '+1 (3..) ...-....', li: true },
  { name: 'Liam Torres',    title: 'VP Business Dev',         company: 'Apex Ventures',   city: 'Seattle, WA',     email: 'l***@apexventures.io',phone: '+1 (2..) ...-....', li: true },
  { name: 'Priya Sharma',   title: 'Chief Revenue Officer',   company: 'DataStream',      city: 'Boston, MA',      email: 'p***@datastream.ai',  phone: '+1 (6..) ...-....', li: true },
  { name: 'Marcus Webb',    title: 'Enterprise Sales Lead',   company: 'CloudFront Inc',  city: 'Denver, CO',      email: 'm***@cloudfront.io',  phone: '+1 (7..) ...-....', li: true },
];
function TabHyperPitch() {
  const [step, setStep] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);
  const [tone, setTone] = useState("Friendly");
  const [credits, setCredits] = useState(5);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const lead = selectedLead || LEADS_PEOPLE[0];
  const STEPS = ["Leads", "Landing page", "Personalise", "Send"];

  const next = () => { if (step < 4) setStep(s => s + 1); };
  const back = () => { if (step > 1) setStep(s => s - 1); };

  const doSend = () => {
    setSending(true);
    setCredits(c => Math.max(0, c - 1));
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Step indicator */}
      <div className="flex items-center gap-0">
        {STEPS.map((s, i) => {
          const n = i + 1;
          const done = step > n;
          const active = step === n;
          return (
            <div key={s} className="flex items-center flex-1">
              <button type="button" onClick={() => setStep(n)}
                className="flex items-center gap-1.5 shrink-0">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ background: done ? T.green : active ? "#db2777" : T.border, color: done || active ? "#fff" : T.muted }}>
                  {done ? <Check className="w-3 h-3" /> : n}
                </div>
                <span className="text-[9px] font-bold" style={{ color: active ? "#db2777" : done ? T.green : T.muted }}>{s}</span>
              </button>
              {i < STEPS.length - 1 && <div className="flex-1 h-px mx-2" style={{ background: step > n ? T.green : T.border }} />}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
            className="rounded-xl border overflow-hidden" style={{ borderColor: T.border }}>
            <div className="px-3 py-2 text-[10px] font-bold border-b" style={{ borderColor: T.border, background: T.bg, color: T.muted }}>
              Select a lead from Leads Driver
            </div>
            {LEADS_PEOPLE.slice(0, 4).map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 border-b last:border-0 cursor-pointer hover:bg-slate-50 transition-colors"
                style={{ borderColor: T.border, background: selectedLead?.name === p.name ? "#fdf2f8" : "transparent" }}
                onClick={() => setSelectedLead(p)}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                  style={{ background: "#db2777" }}>{p.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold truncate" style={{ color: T.navy }}>{p.name}</div>
                  <div className="text-[9px] truncate" style={{ color: T.muted }}>{p.title} · {p.company}</div>
                </div>
                {selectedLead?.name === p.name && <Check className="w-4 h-4 shrink-0" style={{ color: "#db2777" }} />}
              </div>
            ))}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
            className="rounded-xl border overflow-hidden" style={{ borderColor: T.border }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: T.border, background: "#fdf2f8" }}>
              <div className="text-[10px] font-black uppercase tracking-wider mb-1" style={{ color: "#db2777" }}>
                AI-Generated Landing Page
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" style={{ color: T.muted }} />
                <span className="text-[11px] font-mono" style={{ color: T.blue }}>
                  hp.link/{lead.company.toLowerCase().replace(/\s/g, "-")}-{lead.name.split(" ")[0].toLowerCase()}
                </span>
                <button type="button"><Copy className="w-3 h-3" style={{ color: T.muted }} /></button>
              </div>
            </div>
            <div className="p-3 space-y-2 text-[11px]">
              <div className="font-bold" style={{ color: T.navy }}>
                Hey {lead.company} — here's how SalesDriver drives your pipeline 🚀
              </div>
              <p style={{ color: T.muted }}>
                We help {lead.title}s like you replace 8+ sales tools with one platform. Free to start.
              </p>
              {["B2B data & contact intelligence", "Email + LinkedIn outreach automation", "CRM & pipeline management"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 shrink-0" style={{ color: T.green }} />
                  <span style={{ color: T.muted }}>{item}</span>
                </div>
              ))}
              <button type="button" className="w-full rounded-lg py-2 text-[11px] font-bold text-white mt-1"
                style={{ background: T.orange }}>Book a call with SalesDriver →</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
            className="space-y-2.5">
            <div className="rounded-xl border p-3" style={{ borderColor: T.border }}>
              <SectionLabel>Email to</SectionLabel>
              <div className="text-[11px] font-bold" style={{ color: T.navy }}>
                {lead.name.split(" ")[0].toLowerCase()}@{lead.company.toLowerCase().replace(/\s/g, "")}.com
              </div>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: T.border }}>
              <SectionLabel>Subject</SectionLabel>
              <div className="text-[11px] font-bold" style={{ color: T.navy }}>Made this for you, {lead.name.split(" ")[0]}</div>
            </div>
            <div className="rounded-xl border p-3 space-y-2" style={{ borderColor: T.border }}>
              <SectionLabel>Tone</SectionLabel>
              <div className="flex gap-2">
                {["Friendly", "Direct", "Formal"].map(t => (
                  <button key={t} type="button" onClick={() => setTone(t)}
                    className="px-3 py-1 rounded-lg text-[10px] font-bold border transition-colors"
                    style={{ background: tone === t ? "#db2777" : "transparent", color: tone === t ? "#fff" : T.muted, borderColor: tone === t ? "#db2777" : T.border }}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-[10px] leading-relaxed p-2.5 rounded-lg" style={{ background: T.bg, color: T.muted }}>
                Hi {lead.name.split(" ")[0]}, I put together a custom page for {lead.company} showing exactly how SalesDriver can help your team.
                Check it out: <span style={{ color: T.blue }}>hp.link/{lead.company.toLowerCase().replace(/\s/g, "-")}-{lead.name.split(" ")[0].toLowerCase()}</span>
              </div>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="s4" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
            className="space-y-2.5">
            {!sent ? (
              <>
                <div className="rounded-xl border p-3 space-y-1.5" style={{ borderColor: T.border }}>
                  <SectionLabel>Delivery checklist</SectionLabel>
                  {["Email drafted", "Personalized page ready", "Tracking pixel active", "CRM record linked", "Follow-up scheduled +3 days"].map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px]" style={{ color: T.muted }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: T.green }} />{c}
                    </div>
                  ))}
                </div>
                <button onClick={doSend} disabled={sending || credits < 1}
                  className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ background: "#db2777" }}>
                  {sending ? <><Loader2 className="w-4 h-4 animate-spin" />Sending…</> : <><Send className="w-4 h-4" />Send now · 1 credit</>}
                </button>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border p-4 text-center space-y-2" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto" style={{ background: T.green }}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-[13px] font-bold" style={{ color: "#065f46" }}>Sent to {lead.name}!</div>
                <div className="space-y-1 text-[9px]" style={{ color: T.muted }}>
                  <div>Now → Email delivered</div>
                  <div>+2h → Follow-up queued</div>
                  <div>+3h → CRM activity logged</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav buttons */}
      <div className="flex items-center justify-between">
        <button type="button" onClick={back} disabled={step === 1}
          className="px-3 py-1.5 rounded-xl border text-[10px] font-bold disabled:opacity-30"
          style={{ borderColor: T.border, color: T.muted }}>← Back</button>
        {step < 4
          ? <button type="button" onClick={next}
              className="px-4 py-1.5 rounded-xl text-[10px] font-bold text-white" style={{ background: "#db2777" }}>
              Next →</button>
          : null
        }
        <CreditBar used={5 - credits} total={5} color="#db2777" />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 8 — SD DEALS  (PDF 8)
   Pixel-perfect replica of JoinSecret marketplace
   No iframe — fully custom React UI
════════════════════════════════════════ */
const DEALS_CATEGORIES = [
  { id: "all",   label: "All deals",           count: 580 },
  { id: "mkt",   label: "Marketing",           count: 96  },
  { id: "sales", label: "Sales",               count: 74  },
  { id: "dev",   label: "Development",         count: 112 },
  { id: "biz",   label: "Business",            count: 88  },
  { id: "it",    label: "IT",                  count: 67  },
  { id: "hr",    label: "Human Resources",     count: 31  },
  { id: "ops",   label: "Operations Mgmt",     count: 45  },
];

/* Vendor logo placeholder colors matching PDF screenshots */
const VENDOR_COLORS = {
  "AWS Activate":        { bg: "#ff9900", abbr: "AW" },
  "Fin (ex. Intercom)": { bg: "#6366f1", abbr: "FI" },
  "lemlist":             { bg: "#e8391d", abbr: "LE" },
  "Airtable":            { bg: "#f82b60", abbr: "AI" },
  "Auth0":               { bg: "#eb5424", abbr: "A0" },
  "ElevenLabs":          { bg: "#1a1a1a", abbr: "EL" },
};

const DEALS_LIST = [
  {
    id: "aws",    name: "AWS Activate",        cat: ["all","dev","it"],
    tagline: "Amazon's cloud services platform",
    deal: "Up to $100,000 in credits or 20-50% off your monthly spend through an AWS partner (must be spending…",
    saving: "$300000", code: "SD-AWS-DEMO",
  },
  {
    id: "fin",    name: "Fin (ex. Intercom)",  cat: ["all","biz","sales"],
    tagline: "Strengthen relationships with your customers with an online messaging…",
    deal: "$6,500 in Fin AI Agent credits + Intercom helpdesk free for 1 year",
    saving: "$6500",   code: "SD-FIN-DEMO",
  },
  {
    id: "lem",    name: "lemlist",             cat: ["all","mkt","sales"],
    tagline: "Send emails that get replies",
    deal: "First month free",
    saving: "$109",    code: "SD-LEM-DEMO",
  },
  {
    id: "air",    name: "Airtable",            cat: ["all","ops","dev"],
    tagline: "Easily store and organize your data",
    deal: "$1,000 in credits on licences for 1 year",
    saving: "$1000",   code: "SD-AIR-DEMO",
  },
  {
    id: "auth",   name: "Auth0",               cat: ["all","dev","it"],
    tagline: "An easy-to-implement, adaptable authentication and authorization…",
    deal: "1 year of the B2B Professional plan free",
    saving: "$20000",  code: "SD-AUTH-DEMO",
  },
  {
    id: "eleven", name: "ElevenLabs",          cat: ["all","mkt","dev"],
    tagline: "Bring words to life with AI-powered voices",
    deal: "12 months free (33 million characters of free access)",
    saving: "$4000",   code: "SD-11L-DEMO",
  },
];

/* Single deal card — matches JoinSecret card layout from PDF */
function DealCard({ deal, unlocked, onUnlock }) {
  const v = VENDOR_COLORS[deal.name] || { bg: T.navy, abbr: deal.name.slice(0,2).toUpperCase() };
  return (
    <div className="rounded-2xl border bg-white p-4 flex flex-col gap-2.5 hover:shadow-md transition-shadow"
      style={{ borderColor: T.border }}>
      {/* Top row: logo + name + unlock btn */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black text-white shrink-0"
          style={{ background: v.bg }}>{v.abbr}</div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] font-bold leading-tight" style={{ color: T.navy }}>{deal.name}</div>
          <div className="text-[10px] mt-0.5 line-clamp-2" style={{ color: T.muted }}>{deal.tagline}</div>
        </div>
      </div>
      {/* Deal text */}
      <p className="text-[11px] font-semibold leading-snug" style={{ color: T.navy }}>{deal.deal}</p>
      {/* Save row */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t" style={{ borderColor: T.border }}>
        <span className="text-[11px] font-bold" style={{ color: T.navy }}>
          Save up to <span style={{ color: T.navy }}>${Number(deal.saving).toLocaleString()}</span>
        </span>
        {unlocked ? (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-lg"
              style={{ background: "#f0fdf4", color: T.green, border: `1px solid #bbf7d0` }}>
              {deal.code}
            </span>
            <button type="button" title="Copy code">
              <Copy className="w-3.5 h-3.5" style={{ color: T.muted }} />
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => onUnlock(deal.id)}
            className="px-3 py-1.5 rounded-xl text-[10px] font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: T.orange }}>
            Get deal
          </button>
        )}
      </div>
    </div>
  );
}

function TabSdDeals() {
  const [activeCat, setActiveCat]   = useState("all");
  const [unlocked, setUnlocked]     = useState({});
  const [credits, setCredits]       = useState(5);
  const [page, setPage]             = useState(1);
  const PER_PAGE = 4;

  const filtered = DEALS_LIST.filter(d => d.cat.includes(activeCat));
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const unlock = (id) => {
    if (credits < 1 || unlocked[id]) return;
    setUnlocked(u => ({ ...u, [id]: true }));
    setCredits(c => c - 1);
  };

  const switchCat = (id) => { setActiveCat(id); setPage(1); };

  return (
    <div className="flex gap-0" style={{ minHeight: 340 }}>

      {/* ── Left category sidebar — matches JoinSecret exactly ── */}
      <div className="w-[130px] shrink-0 border-r flex flex-col"
        style={{ borderColor: T.border }}>
        {DEALS_CATEGORIES.map(c => (
          <button key={c.id} type="button" onClick={() => switchCat(c.id)}
            className="w-full flex items-center justify-between px-3 py-2 text-left transition-colors hover:bg-slate-50 border-b last:border-0"
            style={{ borderColor: T.border, background: activeCat === c.id ? "#fff7ed" : "transparent" }}>
            <span className="text-[10px] font-semibold truncate"
              style={{ color: activeCat === c.id ? T.orange : T.navy }}>{c.label}</span>
            <span className="text-[9px] font-bold ml-1 shrink-0"
              style={{ color: activeCat === c.id ? T.orange : T.muted }}>{c.count}</span>
          </button>
        ))}

        {/* Powered by SD Deals — bottom of sidebar */}
        <div className="mt-auto px-3 py-3 border-t" style={{ borderColor: T.border }}>
          <div className="text-[9px]" style={{ color: T.muted }}>Powered by</div>
          <div className="flex items-center gap-1 mt-0.5">
            <img src={logoSalesDriver} alt="SalesDriver" className="h-4 w-auto object-contain" />
            <span className="text-[9px] font-black uppercase tracking-wide"
              style={{ color: T.orange }}>SD Deals</span>
          </div>
        </div>
      </div>

      {/* ── Right: deals grid + pagination ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Deals grid — 2 columns like JoinSecret */}
        <div className="flex-1 p-3 grid grid-cols-2 gap-3 content-start overflow-y-auto" style={{ maxHeight: 300 }}>
          {visible.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <DealCard deal={d} unlocked={!!unlocked[d.id]} onUnlock={unlock} />
            </motion.div>
          ))}
        </div>

        {/* Pagination row — matches PDF exactly */}
        <div className="flex items-center justify-between px-3 py-2 border-t" style={{ borderColor: T.border }}>
          <span className="text-[10px]" style={{ color: T.muted }}>
            Page {page} / {Math.max(totalPages, 1)}
          </span>
          <div className="flex items-center gap-2">
            <CreditBar used={5 - credits} total={5} color={T.orange} />
            <button type="button" onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              disabled={page >= totalPages}
              className="px-3 py-1 rounded-lg border text-[10px] font-bold disabled:opacity-30 transition-colors hover:bg-slate-50"
              style={{ borderColor: T.border, color: T.navy }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TOOL DEFINITIONS
 ════════════════════════════════════════ */
/* ════════════════════════════════════════
   TAB 8 — SD FLOW  (workflow builder)
════════════════════════════════════════ */
const FLOW_C = "#4f46e5";
const FLOW_NODES = [
  { app:"CRM",        icon:Users,       tag:"Trigger",        title:"New lead in CRM", note:"Jordan Avery · Northwind", color:"#2563eb" },
  { app:"MTN Data",   icon:Database,    tag:"Enrich company", title:"MTN Data",        note:"+40 fields",              color:"#2563eb" },
  { app:"MTN Verify", icon:ShieldCheck, tag:"Check email",    title:"MTN Verify",     note:"Safe · score 96",         color:"#059669" },
  { app:"AI Agent",   icon:Bot,         tag:"Write opener",   title:"AI Agent",        note:"Opener drafted",          color:"#7c3aed" },
  { app:"Outreach",   icon:Send,        tag:"Send email",     title:"Send email",      note:"Queued (demo)",           color:FLOW_C },
];
const FLOW_PICKER_CATS = [
  { name:"AI",                  icon:Bot,        desc:"Agents that summarise, decide and write" },
  { name:"Action in an app",    icon:Zap,        desc:"Slack, Sheets, Gmail and 10K+ more" },
  { name:"Data transformation", icon:Filter,     desc:"Filter, map or merge records" },
  { name:"Flow",                icon:LayoutList, desc:"Branch, wait or loop" },
  { name:"Core",                icon:Code,       desc:"HTTP requests, code, webhooks" },
  { name:"SalesDriver Tools",   icon:Tag,        desc:"MTN Data, Verify, ExactMails, Sender" },
];
const FLOW_TEMPLATES = [
  { name:"New lead → personal email", tags:"Lead · enrich · verify · AI · send" },
  { name:"Hot visitor → Slack alert", tags:"Trafera · enrich · Slack" },
  { name:"Weekly CRM clean-up",       tags:"Schedule · verify · update CRM" },
];

function TabSdFlow() {
  const [credits, setCredits] = useState(5);
  const [view, setView]     = useState("home");   // home | editor
  const [tab, setTab]      = useState("Editor"); // Editor | Executions
  const [picker, setPicker] = useState(false);
  const [running, setRunning] = useState(false);
  const [step, setStep]     = useState(0);
  const [logs, setLogs]     = useState([]);
  const [done, setDone]     = useState(false);
  const [execs, setExecs]   = useState([
    ["4 min ago", "Success", "5 steps", "2.1 s"],
    ["Yesterday 17:02", "Success", "5 steps", "2.9 s"],
    ["Yesterday 09:00", "Retried", "3 steps", "4.4 s"],
  ]);

  const execute = () => {
    if (running || credits < 1) return;
    setCredits(c => c - 1);
    setTab("Editor"); setRunning(true); setStep(0); setDone(false);
    setLogs(["[15:16:09] Execution started"]);
    [0, 1, 2, 3].forEach(i => setTimeout(() => {
      setStep(i + 1);
      setLogs(l => [...l, `[15:16:${10 + i}] Running ${FLOW_NODES[i].title} → ${FLOW_NODES[i + 1].title}`]);
    }, 500 + i * 550));
    setTimeout(() => {
      setRunning(false); setDone(true); setStep(5);
      setLogs(l => [...l, "[15:16:12] Workflow finished"]);
      setExecs(e => [["Just now", "Success", "5 steps", "2.6 s"], ...e]);
    }, 2950);
  };

  const chip = (children) => (
    <span style={{ fontSize:10, fontWeight:700, color:"#3730A3", background:"#EEF2FF", border:"1px solid #DDE3FC", borderRadius:999, padding:"2px 8px" }}>{children}</span>
  );

  return (
    <div style={{ width:"100%", height:330, display:"flex", flexDirection:"column", background:"#FFFFFF", color:"#111827", fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif", fontSize:13, lineHeight:1.45, overflow:"hidden", borderRadius:12, border:"1px solid #E5E7EB", position:"relative" }}>

      {/* top bar */}
      <div style={{ height:44, flexShrink:0, display:"flex", alignItems:"center", gap:10, padding:"0 12px 0 14px", borderBottom:"1px solid #E5E7EB" }}>
        <div style={{ width:24, height:24, borderRadius:6, background:FLOW_C, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}><Workflow size={14} /></div>
        <span style={{ fontWeight:800, fontSize:12, letterSpacing:"0.02em" }}>SD FLOW</span>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ display:"flex", alignItems:"center", gap:6, background:"#EEF2FF", border:"1px solid #DDE3FC", color:"#3730A3", borderRadius:8, padding:"4px 10px", fontSize:12 }}>
            <Clock size={13} /> Free runs <b style={{ fontSize:13 }}>{credits}/5</b>
          </span>
          <Link to="/pricing" style={{ background:FLOW_C, color:"#fff", borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Upgrade</Link>
        </div>
      </div>

      {credits === 0 && (
        <div style={{ flexShrink:0, background:"#111827", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 12px", fontSize:11 }}>
          <span>You've used today's 5 free runs. They reset tomorrow.</span>
          <Link to="/pricing" style={{ color:"#FDE68A", fontWeight:700, textDecoration:"none" }}>Get 250 credits/mo free</Link>
        </div>
      )}

      {/* ── HOME ── */}
      {view === "home" && (
        <div style={{ flex:1, overflowY:"auto", padding:"14px 16px" }}>
          <div style={{ fontSize:16, fontWeight:800 }}>Automate your whole sales stack</div>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap", margin:"8px 0 12px" }}>
            {chip("[590+] templates")}{chip("[10K+] integrations")}{chip("2-way CRM sync")}{chip("API universal keys")}
          </div>
          <button type="button" onClick={() => setView("editor")}
            style={{ display:"flex", alignItems:"center", gap:6, background:FLOW_C, color:"#fff", border:"none", borderRadius:8, padding:"8px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
            <Plus size={13} /> Create workflow
          </button>

          <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", margin:"14px 0 6px" }}>TEMPLATES</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8 }}>
            {FLOW_TEMPLATES.map(t => (
              <button key={t.name} type="button" onClick={() => setView("editor")}
                style={{ textAlign:"left", background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:10, cursor:"pointer" }}>
                <div style={{ fontSize:12, fontWeight:700 }}>{t.name}</div>
                <div style={{ fontSize:10, color:"#64748B", marginTop:4 }}>{t.tags}</div>
              </button>
            ))}
          </div>

          <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", margin:"14px 0 6px" }}>MY WORKFLOWS · 1 WORKFLOW</div>
          <button type="button" onClick={() => setView("editor")}
            style={{ width:"100%", display:"flex", alignItems:"center", gap:10, background:"#fff", border:"1px solid #E2E8F0", borderRadius:10, padding:"9px 12px", cursor:"pointer", textAlign:"left" }}>
            <div style={{ width:26, height:26, borderRadius:6, background:"#EEF2FF", color:FLOW_C, display:"flex", alignItems:"center", justifyContent:"center" }}><Workflow size={14} /></div>
            <span style={{ fontSize:12, fontWeight:700 }}>New lead → personal email</span>
            <span style={{ fontSize:10, color:"#64748B" }}>5 steps</span>
            <span style={{ marginLeft:"auto", fontSize:10, fontWeight:700, color:"#059669", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:999, padding:"2px 8px" }}>Active</span>
          </button>
        </div>
      )}

      {/* ── EDITOR / EXECUTIONS ── */}
      {view === "editor" && (
        <>
          <div style={{ flexShrink:0, display:"flex", alignItems:"center", gap:8, padding:"6px 10px", borderBottom:"1px solid #E5E7EB", background:"#F8FAFC" }}>
            <button type="button" onClick={() => setView("home")} style={{ background:"none", border:"none", cursor:"pointer", color:"#64748B", display:"flex", alignItems:"center", padding:2 }}><ArrowLeft size={15} /></button>
            <span style={{ fontSize:12, fontWeight:800 }}>New lead → personal email</span>
            <div style={{ display:"flex", gap:2, background:"#E2E8F0", borderRadius:8, padding:2 }}>
              {["Editor", "Executions"].map(t => (
                <button key={t} type="button" onClick={() => setTab(t)}
                  style={{ border:"none", borderRadius:6, padding:"3px 10px", fontSize:11, fontWeight:700, cursor:"pointer", background: tab === t ? "#fff" : "transparent", color: tab === t ? "#111827" : "#64748B", boxShadow: tab === t ? "0 1px 2px rgba(15,23,42,0.10)" : "none" }}>
                  {t}
                </button>
              ))}
            </div>
            <Link to="/pricing" style={{ marginLeft:"auto", fontSize:11, fontWeight:700, color:"#fff", background:"#111827", borderRadius:8, padding:"4px 12px", textDecoration:"none" }}>Publish</Link>
          </div>

          {tab === "Editor" && (
            <>
              <div style={{ flex:1, display:"flex", minHeight:0 }}>
                {/* canvas */}
                <div style={{ flex:1, overflowY:"auto", padding:"10px 12px" }}>
                  {FLOW_NODES.map((n, i) => (
                    <div key={i}>
                      <div style={{ display:"flex", alignItems:"center", gap:10, background: running && step === i ? "#EEF2FF" : "#F8FAFC", border:`1px solid ${running && step === i ? FLOW_C : "#E2E8F0"}`, borderRadius:10, padding:"7px 10px", boxShadow: running && step === i ? `0 0 0 2px ${FLOW_C}30` : "none" }}>
                        <div style={{ width:28, height:28, borderRadius:7, background:"#fff", border:"1px solid #E2E8F0", color:n.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><n.icon size={14} /></div>
                        <div style={{ minWidth:0 }}>
                          <div style={{ fontSize:9, fontWeight:700, color:"#64748B", textTransform:"uppercase", letterSpacing:"0.04em" }}>{n.app} · {n.tag}</div>
                          <div style={{ fontSize:12, fontWeight:700 }}>{n.title}</div>
                        </div>
                        <span style={{ marginLeft:"auto", fontSize:10, fontWeight:600, color: step > i || done ? "#059669" : "#64748B", background: step > i || done ? "#ECFDF5" : "#F1F5F9", borderRadius:999, padding:"2px 8px", whiteSpace:"nowrap" }}>{n.note}</span>
                      </div>
                      {i < FLOW_NODES.length - 1 && (
                        <div style={{ display:"flex", justifyContent:"center", padding:"2px 0" }}>
                          <div style={{ position:"relative", width:2, height:14, background:"#CBD5E1" }}>
                            <button type="button" onClick={() => setPicker(true)}
                              style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%, -50%)", width:16, height:16, borderRadius:999, background:"#fff", border:`1px solid ${FLOW_C}`, color:FLOW_C, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", padding:0 }}>
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {running && (
                    <div style={{ marginTop:8, fontSize:11, fontWeight:700, color:FLOW_C, display:"flex", alignItems:"center", gap:6 }}>
                      <Loader2 size={13} className="animate-spin" /> Executing… step {Math.min(step + 1, 4)}/4
                    </div>
                  )}
                  {done && (
                    <div style={{ marginTop:8, fontSize:11, fontWeight:800, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:8, padding:"6px 10px" }}>✓ Workflow executed · 2.6 s</div>
                  )}
                </div>
                {/* logs */}
                <div style={{ width:150, flexShrink:0, borderLeft:"1px solid #E5E7EB", background:"#0F172A", color:"#CBD5E1", padding:"8px 10px", overflowY:"auto" }}>
                  <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#94A3B8", marginBottom:6 }}>LOGS</div>
                  {logs.length === 0 && <div style={{ fontSize:10, color:"#64748B" }}>Run the workflow to see logs.</div>}
                  {logs.map((l, i) => <div key={i} style={{ fontSize:9.5, fontFamily:"ui-monospace, monospace", lineHeight:1.7, whiteSpace:"nowrap" }}>{l}</div>)}
                </div>
              </div>

              {/* bottom bar */}
              <div style={{ flexShrink:0, display:"flex", alignItems:"center", gap:6, padding:"6px 10px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
                <button type="button" style={{ width:22, height:22, borderRadius:6, border:"1px solid #E2E8F0", background:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, color:"#64748B" }}>−</button>
                <span style={{ fontSize:10, fontWeight:700, color:"#64748B" }}>100%</span>
                <button type="button" style={{ width:22, height:22, borderRadius:6, border:"1px solid #E2E8F0", background:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, color:"#64748B" }}>+</button>
                <button type="button" onClick={execute} disabled={running || credits < 1}
                  style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:6, background: running || credits < 1 ? "#C7D2FE" : FLOW_C, color:"#fff", border:"none", borderRadius:8, padding:"6px 12px", fontSize:11.5, fontWeight:700, cursor: running || credits < 1 ? "not-allowed" : "pointer" }}>
                  <Play size={12} /> Execute workflow · 1 run
                </button>
              </div>
            </>
          )}

          {tab === "Executions" && (
            <div style={{ flex:1, overflowY:"auto", padding:"10px 14px" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr style={{ textAlign:"left" }}>
                    {["WHEN", "STATUS", "STEPS", "DURATION"].map(h => <th key={h} style={{ fontSize:9, fontWeight:900, letterSpacing:"0.06em", color:"#64748B", padding:"4px 8px", borderBottom:"1px solid #E2E8F0" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {execs.map((e, i) => (
                    <tr key={i}>
                      <td style={{ padding:"7px 8px", borderBottom:"1px solid #F1F5F9", fontWeight:600 }}>{e[0]}</td>
                      <td style={{ padding:"7px 8px", borderBottom:"1px solid #F1F5F9" }}>
                        <span style={{ fontSize:10, fontWeight:700, borderRadius:999, padding:"2px 8px", background: e[1] === "Success" ? "#ECFDF5" : "#FEF3C7", color: e[1] === "Success" ? "#065F46" : "#92400E", border:`1px solid ${e[1] === "Success" ? "#A7F3D0" : "#FDE68A"}` }}>{e[1]}</span>
                      </td>
                      <td style={{ padding:"7px 8px", borderBottom:"1px solid #F1F5F9", color:"#64748B" }}>{e[2]}</td>
                      <td style={{ padding:"7px 8px", borderBottom:"1px solid #F1F5F9", color:"#64748B" }}>{e[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ fontSize:10, color:"#94A3B8", marginTop:10 }}>Sample runs. Your real executions, retries and alerts appear here with a free account.</div>
            </div>
          )}

          {/* step picker modal */}
          {picker && (
            <div style={{ position:"absolute", inset:0, background:"rgba(15,23,42,0.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:20 }} onClick={() => setPicker(false)}>
              <div style={{ width:300, background:"#fff", borderRadius:12, padding:14, boxShadow:"0 20px 48px -12px rgba(15,23,42,0.35)" }} onClick={e => e.stopPropagation()}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:2 }}>
                  <span style={{ fontSize:13, fontWeight:800 }}>What happens next?</span>
                  <button type="button" onClick={() => setPicker(false)} style={{ background:"none", border:"none", cursor:"pointer", color:"#64748B", padding:2, display:"flex" }}><X size={14} /></button>
                </div>
                <div style={{ fontSize:10, color:"#64748B", marginBottom:10 }}>Choose a step to connect</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  {FLOW_PICKER_CATS.map(c => (
                    <button key={c.name} type="button" onClick={() => setPicker(false)}
                      style={{ textAlign:"left", background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:9, cursor:"pointer" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                        <c.icon size={13} style={{ color:FLOW_C }} />
                        <span style={{ fontSize:11, fontWeight:700 }}>{c.name}</span>
                      </div>
                      <div style={{ fontSize:9.5, color:"#64748B", lineHeight:1.35 }}>{c.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 9 — SD LABS  (100 mini tools)
════════════════════════════════════════ */
const LABS_C = "#0d9488";
const LABS_CATS = [
  { id:"all",      label:"All tools",             count:100 },
  { id:"enrich",   label:"Data Enrichment",       count:15 },
  { id:"clean",    label:"Data Cleaning",         count:10 },
  { id:"email",    label:"Email Tools",           count:13 },
  { id:"li",       label:"LinkedIn Tools",        count:10 },
  { id:"prospect", label:"Prospect Intelligence", count:10 },
  { id:"copy",     label:"Copy & Content AI",     count:10 },
  { id:"track",    label:"Analytics & Tracking",  count:8 },
  { id:"auto",     label:"Automation Helpers",    count:8 },
  { id:"web",      label:"Web & Domain Tools",    count:7 },
  { id:"agency",   label:"Agency Ops Tools",      count:9 },
];
const LABS_TOOLS = [
  { n:1,  cat:"enrich",   name:"Email → Full Profile",     desc:"Turn an email into a full buyer profile" },
  { n:2,  cat:"enrich",   name:"Company Name → Domain",    desc:"Find the official website of any company", free:true },
  { n:3,  cat:"enrich",   name:"Domain → Company Facts",  desc:"Size, industry, HQ and tech stack" },
  { n:11, cat:"enrich",   name:"Technographic Lookup",    desc:"See what tools a company pays for" },
  { n:12, cat:"clean",    name:"List Deduplicator",       desc:"Remove duplicate leads in one click" },
  { n:14, cat:"clean",    name:"Name Capitaliser",        desc:"Fix JORDAN avery → Jordan Avery" },
  { n:22, cat:"email",    name:"Disposable Email Detector", desc:"Catch temp inboxes before you send", free:true },
  { n:26, cat:"email",    name:"Subject Line Scorer",     desc:"Score your subject 1–10 before sending", free:true },
  { n:27, cat:"email",    name:"Email Permutation Maker", desc:"Build every likely address variant" },
  { n:38, cat:"email",    name:"Bounce Reason Decoder",   desc:"Understand why an email bounced" },
  { n:39, cat:"li",       name:"Profile URL Finder",      desc:"Find a buyer's LinkedIn from their email" },
  { n:40, cat:"li",       name:"LinkedIn Company Scraper", desc:"Employees, roles and recent posts" },
  { n:48, cat:"li",       name:"Post Engagement Export",  desc:"Who liked or commented on a post" },
  { n:49, cat:"prospect", name:"Hiring Signal Detector",  desc:"Spot companies scaling their sales team", free:true },
  { n:50, cat:"prospect", name:"Buying Intent Ranker",     desc:"Rank leads by intent signals" },
  { n:58, cat:"prospect", name:"ICP Fit Score",           desc:"Score any company against your ICP" },
  { n:59, cat:"copy",     name:"Cold Email Rewriter",     desc:"Make any email sound human" },
  { n:63, cat:"copy",     name:"Follow-up Generator",    desc:"Nudge without being annoying" },
  { n:66, cat:"copy",     name:"CTA Generator",          desc:"One strong call-to-action per offer", free:true },
  { n:69, cat:"track",    name:"UTM Builder",             desc:"Track every campaign link", free:true },
  { n:70, cat:"track",    name:"Pixel Event Tester",      desc:"Debug your tracking pixels" },
  { n:77, cat:"track",    name:"Link Click Counter",      desc:"Count clicks on any short link" },
  { n:80, cat:"auto",     name:"Sheet → CRM Sync Preview", desc:"Preview how rows map to fields" },
  { n:87, cat:"auto",     name:"Webhook Tester",          desc:"Fire test payloads safely" },
  { n:88, cat:"web",      name:"Site Tech Checker",       desc:"What a website is built with" },
  { n:94, cat:"web",      name:"Domain Age Checker",     desc:"How old — and how trusted — a domain is" },
  { n:95, cat:"agency",   name:"Client Report Snippet",   desc:"Drop-in HTML for monthly reports" },
  { n:99, cat:"agency",   name:"Retainer Calculator",    desc:"Price retainers with confidence" },
];
const LABS_SPECS = {
  2:  { inputLabel:"Company name", ph:"Northwind Logistics",
        steps:["Looking up the company","Checking official domain","Testing the mail server"],
        head:"Domain found", time:"1.1 s",
        rows:[["Company","Northwind Logistics"],["Official domain","northwind.io"],["Confidence","97%"],["Mail server","Google Workspace"]] },
  22: { inputLabel:"Email address", ph:"jordan@tempmail.com",
        steps:["Reading the email","Checking disposable domains","Testing the inbox"],
        head:"Disposable inbox detected", time:"0.9 s",
        rows:[["Domain","tempmail.com"],["Status","Disposable — temporary inbox"],["Recommendation","Remove from your list"],["Safe alternative","Check the company domain instead"]] },
  26: { inputLabel:"Subject line", ph:"Quick question about Northwind's hiring",
        steps:["Reading the subject","Checking length, spam words & tone","Scoring 1–10"],
        head:"8 / 10", time:"1.2 s", verdict:"Strong: short, curious and personal.",
        rows:[["Length","39 characters · good"],["Spam words","None"],["Personal touch","Yes"]] },
  49: { inputLabel:"Company or domain", ph:"northwind.io",
        steps:["Scanning job boards","Counting open sales roles","Rating the signal"],
        head:"Hiring signal found", time:"1.4 s",
        rows:[["Company","Northwind"],["Open sales roles","6 — SDR, AE, Manager"],["Signal strength","High"],["Why it matters","Scaling teams buy tooling fast"]] },
  66: { inputLabel:"What are you promoting?", ph:"Free email verification",
        steps:["Reading your offer","Drafting variants","Picking the strongest"],
        head:"CTA generated", time:"0.8 s", verdict:"Verify 50 emails free — no signup.",
        rows:[["Style","Direct, no-fluff"],["Length","7 words"],["Best for","Cold email sign-off"]] },
  69: { inputLabel:"Website URL", ph:"https://northwind.io",
        steps:["Reading the URL","Adding UTM parameters","Shortening the link"],
        head:"UTM link ready", time:"0.6 s",
        verdict:"https://northwind.io/?utm_source=linkedin&utm_medium=post&utm_campaign=q4",
        rows:[["Source","linkedin"],["Medium","post"],["Campaign","q4"]] },
};

function TabSdLabs() {
  const [credits, setCredits] = useState(5);
  const [cat, setCat]       = useState("all");
  const [q, setQ]           = useState("");
  const [sel, setSel]       = useState(null);
  const [val, setVal]       = useState("");
  const [phase, setPhase]   = useState("idle"); // idle | running | done
  const [stepIdx, setStepIdx] = useState(0);

  const list = LABS_TOOLS.filter(t => (cat === "all" || t.cat === cat) && (!q.trim() || t.name.toLowerCase().includes(q.trim().toLowerCase())));
  const catLabel = (id) => (LABS_CATS.find(c => c.id === id) || {}).label || id;

  const open = (t) => { setSel(t); setPhase("idle"); setStepIdx(0); setVal(LABS_SPECS[t.n] ? LABS_SPECS[t.n].ph : ""); };

  const run = () => {
    if (credits < 1 || phase === "running") return;
    setCredits(c => c - 1);
    setPhase("running"); setStepIdx(0);
    [1, 2].forEach(i => setTimeout(() => setStepIdx(i), 350 * i));
    setTimeout(() => setPhase("done"), 1250);
  };

  const spec = sel && LABS_SPECS[sel.n];

  return (
    <div style={{ width:"100%", height:330, display:"flex", flexDirection:"column", background:"#FFFFFF", color:"#111827", fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif", fontSize:13, lineHeight:1.45, overflow:"hidden", borderRadius:12, border:"1px solid #E5E7EB" }}>

      {/* top bar */}
      <div style={{ height:44, flexShrink:0, display:"flex", alignItems:"center", gap:10, padding:"0 12px 0 14px", borderBottom:"1px solid #E5E7EB" }}>
        <div style={{ width:24, height:24, borderRadius:6, background:LABS_C, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}><FlaskConical size={14} /></div>
        <span style={{ fontWeight:800, fontSize:12, letterSpacing:"0.02em" }}>SD LABS</span>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ display:"flex", alignItems:"center", gap:6, background:"#F0FDFA", border:"1px solid #99F6E4", color:"#0F766E", borderRadius:8, padding:"4px 10px", fontSize:12 }}>
            <Clock size={13} /> Free credits <b style={{ fontSize:13 }}>{credits}/5</b>
          </span>
          <Link to="/pricing" style={{ background:LABS_C, color:"#fff", borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Upgrade</Link>
        </div>
      </div>

      {credits === 0 && (
        <div style={{ flexShrink:0, background:"#111827", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 12px", fontSize:11 }}>
          <span>You've used today's 5 free credits. They reset tomorrow.</span>
          <Link to="/pricing" style={{ color:"#FDE68A", fontWeight:700, textDecoration:"none" }}>Get all 100 tools · $99/mo</Link>
        </div>
      )}

      <div style={{ flex:1, display:"flex", minHeight:0 }}>

        {/* sidebar */}
        <div style={{ width:132, flexShrink:0, borderRight:"1px solid #E5E7EB", display:"flex", flexDirection:"column", overflowY:"auto" }}>
          {LABS_CATS.map(c => (
            <button key={c.id} type="button" onClick={() => { setCat(c.id); setQ(""); setSel(null); }}
              style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:4, padding:"6px 10px", background: cat === c.id ? "#F0FDFA" : "transparent", border:"none", borderBottom:"1px solid #F1F5F9", cursor:"pointer", textAlign:"left" }}>
              <span style={{ fontSize:10, fontWeight:700, color: cat === c.id ? LABS_C : "#334155", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{c.label}</span>
              <span style={{ fontSize:9, fontWeight:800, color: cat === c.id ? LABS_C : "#94A3B8", flexShrink:0 }}>{c.count}</span>
            </button>
          ))}
          <div style={{ marginTop:"auto", padding:"8px 10px", borderTop:"1px solid #E5E7EB", fontSize:9, color:"#94A3B8" }}>Try free = runs on 1 credit</div>
        </div>

        {/* main */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0 }}>

          {!sel && (
            <>
              <div style={{ padding:"8px 12px 4px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:7, border:"1px solid #E2E8F0", borderRadius:8, padding:"5px 9px", background:"#fff" }}>
                  <Search size={13} style={{ color:"#94A3B8", flexShrink:0 }} />
                  <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search 100 tools…"
                    style={{ border:"none", outline:"none", fontSize:12, width:"100%", background:"transparent", color:"#111827" }} />
                </div>
                <div style={{ fontSize:10, color:"#64748B", margin:"6px 0 8px" }}>
                  {q.trim() ? `Results for "${q.trim()}" · ${list.length} tools` : `${(LABS_CATS.find(c => c.id === cat) || LABS_CATS[0]).count} tools · six run free in the playground`}
                </div>
              </div>
              <div style={{ flex:1, overflowY:"auto", padding:"0 12px 12px" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  {list.map(t => (
                    <button key={t.n} type="button" onClick={() => open(t)}
                      style={{ textAlign:"left", background:"#fff", border:"1px solid #E2E8F0", borderRadius:10, padding:"8px 10px", cursor:"pointer", display:"flex", flexDirection:"column", gap:3 }}>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:4 }}>
                        <span style={{ fontSize:9.5, fontWeight:800, color:"#94A3B8", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>#{t.n} · {catLabel(t.cat)}</span>
                        {t.free
                          ? <span style={{ fontSize:9, fontWeight:800, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:999, padding:"1px 7px", flexShrink:0 }}>Try free</span>
                          : <span style={{ fontSize:9, fontWeight:800, color:"#64748B", background:"#F1F5F9", border:"1px solid #E2E8F0", borderRadius:999, padding:"1px 7px", display:"flex", alignItems:"center", gap:3, flexShrink:0 }}><Lock size={8} /> $99 plan</span>}
                      </div>
                      <span style={{ fontSize:12, fontWeight:700 }}>{t.name}</span>
                      <span style={{ fontSize:10, color:"#64748B", lineHeight:1.35 }}>{t.desc}</span>
                    </button>
                  ))}
                </div>
                {list.length === 0 && <div style={{ fontSize:11, color:"#94A3B8", textAlign:"center", padding:24 }}>No tools match your search.</div>}
              </div>
            </>
          )}

          {sel && sel.free && spec && (
            <div style={{ flex:1, overflowY:"auto", padding:"10px 14px" }}>
              <button type="button" onClick={() => setSel(null)} style={{ display:"flex", alignItems:"center", gap:5, background:"none", border:"none", cursor:"pointer", color:"#64748B", fontSize:11, fontWeight:700, padding:0 }}>
                <ArrowLeft size={13} /> All tools
              </button>
              <div style={{ fontSize:9.5, fontWeight:800, color:LABS_C, margin:"10px 0 2px" }}>#{sel.n} · {catLabel(sel.cat)}</div>
              <div style={{ fontSize:15, fontWeight:800 }}>{sel.name}</div>
              <div style={{ fontSize:11, color:"#64748B", margin:"2px 0 10px" }}>{sel.desc}</div>

              <label style={{ fontSize:10, fontWeight:800, color:"#334155", display:"block", marginBottom:4 }}>{spec.inputLabel}</label>
              <input value={val} onChange={e => { setVal(e.target.value); setPhase("idle"); }}
                style={{ width:"100%", boxSizing:"border-box", border:"1px solid #CBD5E1", borderRadius:8, padding:"7px 10px", fontSize:12.5, outline:"none" }} />
              <button type="button" onClick={run} disabled={credits < 1 || phase === "running"}
                style={{ marginTop:8, display:"flex", alignItems:"center", gap:6, background: credits < 1 || phase === "running" ? "#99F6E4" : LABS_C, color:"#fff", border:"none", borderRadius:8, padding:"7px 12px", fontSize:12, fontWeight:700, cursor: credits < 1 || phase === "running" ? "not-allowed" : "pointer" }}>
                <Play size={12} /> Run · 1 credit
              </button>

              {phase === "running" && (
                <div style={{ marginTop:12 }}>
                  {spec.steps.map((s, i) => (
                    <div key={s} style={{ display:"flex", alignItems:"center", gap:8, padding:"4px 0", fontSize:11.5, color: i < stepIdx ? "#111827" : "#94A3B8" }}>
                      {i < stepIdx ? <CheckCircle2 size={13} style={{ color:LABS_C }} /> : <Loader2 size={13} className="animate-spin" style={{ color:LABS_C }} />}
                      {s}
                    </div>
                  ))}
                </div>
              )}

              {phase === "done" && (
                <div style={{ marginTop:12, border:"1px solid #CCFBF1", background:"#F0FDFA", borderRadius:10, padding:10 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                    <CheckCircle2 size={15} style={{ color:LABS_C }} />
                    <span style={{ fontSize:13, fontWeight:800 }}>{spec.head}</span>
                    <span style={{ marginLeft:"auto", fontSize:10, fontWeight:700, color:"#64748B" }}>Done · {spec.time}</span>
                  </div>
                  {spec.verdict && <div style={{ fontSize:12, fontWeight:700, color:"#134E4A", background:"#fff", border:"1px solid #CCFBF1", borderRadius:8, padding:"7px 9px", marginBottom:8, wordBreak:"break-all" }}>{spec.verdict}</div>}
                  {spec.rows.map(([k, v]) => (
                    <div key={k} style={{ display:"flex", justifyContent:"space-between", gap:10, fontSize:11.5, padding:"3px 0", borderBottom:"1px dashed #E2E8F0" }}>
                      <span style={{ color:"#64748B" }}>{k}</span>
                      <span style={{ fontWeight:700, textAlign:"right" }}>{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {sel && !sel.free && (
            <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24 }}>
              <div style={{ width:44, height:44, borderRadius:999, background:"#F0FDFA", border:"1px solid #99F6E4", color:LABS_C, display:"flex", alignItems:"center", justifyContent:"center" }}><Lock size={20} /></div>
              <div style={{ fontSize:15, fontWeight:800, marginTop:10 }}>#{sel.n} · {sel.name}</div>
              <div style={{ fontSize:11.5, fontWeight:700, color:LABS_C, marginTop:2 }}>Included in every plan from $99/mo</div>
              <div style={{ fontSize:11.5, color:"#64748B", maxWidth:320, marginTop:10, lineHeight:1.5 }}>
                All 100 mini tools unlock with a plan. In this playground you can run the six tools marked "Try free".
              </div>
              <div style={{ display:"flex", gap:8, marginTop:14 }}>
                <button type="button" onClick={() => setSel(null)}
                  style={{ background:"#fff", border:`1.5px solid ${LABS_C}`, color:LABS_C, borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
                  Try a free tool
                </button>
                <Link to="/pricing" style={{ background:"#111827", color:"#fff", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, textDecoration:"none" }}>See plans</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 10 — SD HOSTING  (5-step launch wizard)
════════════════════════════════════════ */
const HOST_C = "#15803d";
const HOST_STEPS  = ["Site name", "Website", "Domain", "DNS & SSL", "Live"];
const HOST_REGIONS = ["US East · Virginia", "Europe · Frankfurt", "Asia · Singapore"];
const HOST_DEPLOY  = [
  "Uploading files to the server",
  "Deploying to the edge network (CDN)",
  "Checking DNS records",
  "Issuing SSL certificate",
  "DNS verified",
  "SSL issued",
  "Site live",
];

function TabSdHosting() {
  const [credits, setCredits] = useState(5);
  const [step, setStep]       = useState(1);
  const [siteName, setSiteName] = useState("northwind-launch");
  const [region, setRegion]   = useState(0);
  const [source, setSource]   = useState("template"); // template | upload
  const [domMode, setDomMode] = useState("own");       // free | own
  const [domain, setDomain]   = useState("northwind.io");
  const [dnsA, setDnsA]       = useState("waiting");   // waiting | verified
  const [dep, setDep]         = useState(-1);

  const freeAddr = `${siteName || "your-site"}.sdhost.site`;
  const liveUrl  = domMode === "own" && domain ? `https://${domain}` : `https://${freeAddr}`;

  const launch = () => {
    if (credits < 1 || dep >= 0) return;
    setCredits(c => c - 1);
    setDep(0);
    setTimeout(() => setDnsA("verified"), 900);
    [1, 2, 3, 4, 5, 6].forEach(i => setTimeout(() => setDep(i), 500 + i * 520));
    setTimeout(() => { setDep(7); setStep(5); }, 500 + 7 * 520);
  };

  const reset = () => {
    setStep(1); setSiteName("northwind-launch"); setRegion(0);
    setSource("template"); setDomMode("own"); setDomain("northwind.io");
    setDnsA("waiting"); setDep(-1);
  };

  return (
    <div style={{ width:"100%", height:330, display:"flex", flexDirection:"column", background:"#FFFFFF", color:"#111827", fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif", fontSize:13, lineHeight:1.45, overflow:"hidden", borderRadius:12, border:"1px solid #E5E7EB" }}>

      {/* top bar */}
      <div style={{ height:44, flexShrink:0, display:"flex", alignItems:"center", gap:10, padding:"0 12px 0 14px", borderBottom:"1px solid #E5E7EB" }}>
        <div style={{ width:24, height:24, borderRadius:6, background:HOST_C, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}><Server size={14} /></div>
        <span style={{ fontWeight:800, fontSize:12, letterSpacing:"0.02em" }}>SD HOSTING</span>
        <span style={{ fontSize:10, fontWeight:600, color:"#64748B" }}>Free hosting + SSL included</span>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ display:"flex", alignItems:"center", gap:6, background:"#F0FDF4", border:"1px solid #BBF7D0", color:"#166534", borderRadius:8, padding:"4px 10px", fontSize:12 }}>
            <Clock size={13} /> Free credits <b style={{ fontSize:13 }}>{credits}/5</b>
          </span>
          <Link to="/pricing" style={{ background:HOST_C, color:"#fff", borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Upgrade</Link>
        </div>
      </div>

      {credits === 0 && dep < 0 && step < 5 && (
        <div style={{ flexShrink:0, background:"#111827", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 12px", fontSize:11 }}>
          <span>You've used today's 5 free credits. They reset tomorrow.</span>
          <Link to="/pricing" style={{ color:"#FDE68A", fontWeight:700, textDecoration:"none" }}>Get 250 credits/mo free</Link>
        </div>
      )}

      {/* step indicator */}
      {step < 5 && (
        <div style={{ flexShrink:0, display:"flex", alignItems:"flex-start", padding:"12px 16px 8px" }}>
          {HOST_STEPS.map((s, i) => (
            <div key={s} style={{ display:"flex", alignItems:"center", flex: i < 4 ? 1 : "none" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
                <div style={{ width:22, height:22, borderRadius:999, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:800, background: step > i + 1 ? HOST_C : step === i + 1 ? "#fff" : "#F1F5F9", color: step === i + 1 ? HOST_C : step > i + 1 ? "#fff" : "#94A3B8", border:`1.5px solid ${step >= i + 1 ? HOST_C : "#E2E8F0"}` }}>{step > i + 1 ? "✓" : i + 1}</div>
                <span style={{ fontSize:8.5, fontWeight:700, color: step === i + 1 ? "#111827" : "#94A3B8", whiteSpace:"nowrap" }}>{s}</span>
              </div>
              {i < 4 && <div style={{ flex:1, height:2, background: step > i + 1 ? HOST_C : "#E2E8F0", margin:"0 5px 13px" }} />}
            </div>
          ))}
        </div>
      )}

      {/* body */}
      <div style={{ flex:1, overflowY:"auto", padding: step === 5 ? "14px 18px" : "4px 18px 12px", display:"flex", flexDirection:"column" }}>

        {step === 1 && (
          <>
            <label style={{ fontSize:10, fontWeight:800, color:"#334155", display:"block", marginBottom:4 }}>Site name</label>
            <input value={siteName} onChange={e => setSiteName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
              style={{ width:"100%", boxSizing:"border-box", border:"1px solid #CBD5E1", borderRadius:8, padding:"8px 10px", fontSize:13, outline:"none" }} />
            <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:8, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"7px 10px" }}>
              <Globe size={13} style={{ color:"#64748B", flexShrink:0 }} />
              <span style={{ fontSize:12 }}>Free address: <b>{freeAddr}</b></span>
              <span style={{ marginLeft:"auto", fontSize:10, fontWeight:800, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:999, padding:"2px 8px" }}>Available ✓</span>
            </div>
            <label style={{ fontSize:10, fontWeight:800, color:"#334155", display:"block", margin:"14px 0 4px" }}>Region</label>
            <div style={{ display:"flex", gap:8 }}>
              {HOST_REGIONS.map((r, i) => (
                <button key={r} type="button" onClick={() => setRegion(i)}
                  style={{ flex:1, background: region === i ? "#F0FDF4" : "#fff", border:`1.5px solid ${region === i ? HOST_C : "#E2E8F0"}`, borderRadius:8, padding:"7px 6px", fontSize:10.5, fontWeight:700, color: region === i ? HOST_C : "#475569", cursor:"pointer" }}>
                  {r}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {[
              { id:"template", icon:Rocket,  name:"Start from a template", desc:"HyperPitch page · B2B demo" },
              { id:"upload",   icon:Download, name:"Upload files",           desc:"Drag & drop your own site" },
            ].map(o => (
              <button key={o.id} type="button" onClick={() => setSource(o.id)}
                style={{ display:"flex", alignItems:"center", gap:10, textAlign:"left", background: source === o.id ? "#F0FDF4" : "#fff", border:`1.5px solid ${source === o.id ? HOST_C : "#E2E8F0"}`, borderRadius:10, padding:"9px 11px", cursor:"pointer", width:"100%", marginBottom:8 }}>
                <o.icon size={15} style={{ color: source === o.id ? HOST_C : "#64748B", flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:12, fontWeight:700 }}>{o.name}</div>
                  <div style={{ fontSize:10, color:"#64748B" }}>{o.desc}</div>
                </div>
                <span style={{ marginLeft:"auto", width:14, height:14, borderRadius:999, border:`1.5px solid ${source === o.id ? HOST_C : "#CBD5E1"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {source === o.id && <span style={{ width:7, height:7, borderRadius:999, background:HOST_C }} />}
                </span>
              </button>
            ))}
            {source === "template" ? (
              <div style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:10, fontSize:11.5, color:"#334155", lineHeight:1.5 }}>
                <b>Template: B2B demo page</b> — Hero, features and booking form. Edit text later in SD Builder.
                <div style={{ fontSize:10, color:"#64748B", marginTop:4 }}>6 files · 412 KB</div>
              </div>
            ) : (
              <div style={{ border:"1.5px dashed #CBD5E1", borderRadius:10, padding:22, textAlign:"center", fontSize:11.5, color:"#64748B", background:"#FAFAFA" }}>
                Drop your site files here
                <div style={{ fontSize:10, color:"#94A3B8", marginTop:2 }}>6 files · 412 KB</div>
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <>
            {[
              { id:"free", name:"Use the free address", desc:freeAddr },
              { id:"own",  name:"Connect my own domain", desc:"Free SSL works on your domain too" },
            ].map(o => (
              <button key={o.id} type="button" onClick={() => setDomMode(o.id)}
                style={{ display:"flex", alignItems:"center", gap:10, textAlign:"left", background: domMode === o.id ? "#F0FDF4" : "#fff", border:`1.5px solid ${domMode === o.id ? HOST_C : "#E2E8F0"}`, borderRadius:10, padding:"9px 11px", cursor:"pointer", width:"100%", marginBottom:8 }}>
                <Globe size={15} style={{ color: domMode === o.id ? HOST_C : "#64748B", flexShrink:0 }} />
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:12, fontWeight:700 }}>{o.name}</div>
                  <div style={{ fontSize:10, color:"#64748B", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{o.desc}</div>
                </div>
                <span style={{ marginLeft:"auto", width:14, height:14, borderRadius:999, border:`1.5px solid ${domMode === o.id ? HOST_C : "#CBD5E1"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {domMode === o.id && <span style={{ width:7, height:7, borderRadius:999, background:HOST_C }} />}
                </span>
              </button>
            ))}
            {domMode === "own" && (
              <>
                <input value={domain} onChange={e => setDomain(e.target.value.trim().toLowerCase())}
                  style={{ width:"100%", boxSizing:"border-box", border:"1px solid #CBD5E1", borderRadius:8, padding:"8px 10px", fontSize:13, outline:"none" }} />
                <div style={{ fontSize:10.5, color:"#64748B", marginTop:8, lineHeight:1.5 }}>
                  Point your DNS at GoDaddy, Namecheap or Cloudflare — we auto-detect the records and keep SSL renewed.
                </div>
              </>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", margin:"4px 0 6px" }}>DNS RECORDS</div>
            {[
              { k:"A · @", v:"76.76.21.21", st: dnsA },
              { k:"CNAME · www", v:"edge.sdhost.site", st:"verified" },
              { k:"SSL", v:"Not issued", st:"pending" },
            ].map(r => (
              <div key={r.k} style={{ display:"flex", alignItems:"center", gap:10, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"7px 10px", marginBottom:6, fontSize:11.5 }}>
                <span style={{ fontWeight:800, width:92, flexShrink:0 }}>{r.k}</span>
                <span style={{ color:"#64748B", fontFamily:"ui-monospace, monospace", fontSize:11 }}>{r.v}</span>
                <span style={{ marginLeft:"auto", fontSize:9.5, fontWeight:800, borderRadius:999, padding:"2px 8px", flexShrink:0, ...(
                  r.st === "verified" ? { color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0" }
                  : r.st === "waiting" ? { color:"#92400E", background:"#FEF3C7", border:"1px solid #FDE68A" }
                  : { color:"#64748B", background:"#F1F5F9", border:"1px solid #E2E8F0" }
                ) }}>{r.st === "verified" ? "Verified" : r.st === "waiting" ? "Waiting…" : "Not issued"}</span>
              </div>
            ))}

            {dep < 0 ? (
              <div style={{ marginTop:8 }}>
                <div style={{ fontSize:10, color:"#64748B", marginBottom:6 }}>Uses 1 free credit</div>
                <button type="button" onClick={launch} disabled={credits < 1}
                  style={{ display:"flex", alignItems:"center", gap:6, background: credits < 1 ? "#86EFAC" : HOST_C, color:"#fff", border:"none", borderRadius:8, padding:"8px 14px", fontSize:12, fontWeight:700, cursor: credits < 1 ? "not-allowed" : "pointer" }}>
                  <Rocket size={13} /> Launch site & issue SSL · 1 credit
                </button>
              </div>
            ) : (
              <div style={{ marginTop:8 }}>
                {HOST_DEPLOY.map((d, i) => (
                  <div key={d} style={{ display:"flex", alignItems:"center", gap:8, padding:"3px 0", fontSize:11.5, color: i <= dep ? "#111827" : "#94A3B8" }}>
                    {i < dep ? <CheckCircle2 size={13} style={{ color:HOST_C }} /> : i === dep ? <Loader2 size={13} className="animate-spin" style={{ color:HOST_C }} /> : <span style={{ width:13, height:13, borderRadius:999, border:"1.5px solid #E2E8F0", flexShrink:0 }} />}
                    {d}
                  </div>
                ))}
                <div style={{ fontSize:10.5, fontWeight:700, color:HOST_C, marginTop:6 }}>Deploying… step {Math.min(dep + 1, 7)} of 7</div>
              </div>
            )}
          </>
        )}

        {step === 5 && (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
            <CheckCircle2 size={34} style={{ color:HOST_C }} />
            <div style={{ fontSize:16, fontWeight:800, marginTop:6 }}>Your site is live</div>
            <div style={{ fontSize:11, color:"#64748B" }}>Deployed in 2.5 s</div>

            <div style={{ display:"flex", alignItems:"center", gap:6, background:"#F1F5F9", borderRadius:999, padding:"4px 12px", marginTop:8, fontSize:11, fontWeight:600, color:"#334155" }}>
              <Lock size={10} /> {liveUrl}
            </div>

            <div style={{ width:"100%", background:"#fff", border:"1px solid #E2E8F0", borderRadius:12, padding:14, marginTop:10, boxShadow:"0 4px 12px -4px rgba(15,23,42,0.10)" }}>
              <div style={{ fontSize:13, fontWeight:800 }}>Northwind Launch — Book a 15-minute demo</div>
              <div style={{ fontSize:11, color:"#64748B", margin:"4px 0 8px" }}>See how VP Sales teams book first meetings in week one.</div>
              <span style={{ display:"inline-block", background:HOST_C, color:"#fff", borderRadius:8, padding:"6px 12px", fontSize:11.5, fontWeight:700 }}>Book a demo</span>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:6, width:"100%", marginTop:10 }}>
              {[
                ["HTTPS", "On ✓"], ["SSL", "Jan 13, 2027"], ["Auto-renew", "Every 90 days"], ["CDN", "Global edge"], ["Region", "US East"],
              ].map(([k, v]) => (
                <div key={k} style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:8, padding:"6px 4px" }}>
                  <div style={{ fontSize:8.5, fontWeight:900, color:"#166534", letterSpacing:"0.04em" }}>{k.toUpperCase()}</div>
                  <div style={{ fontSize:10, fontWeight:700, marginTop:1 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize:9.5, color:"#94A3B8", marginTop:8 }}>Demo only: no real site was created</div>

            <div style={{ display:"flex", gap:8, marginTop:8 }}>
              <button type="button" onClick={reset}
                style={{ background:"#fff", border:"1.5px solid #CBD5E1", color:"#334155", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
                Add another site
              </button>
              <Link to="/pricing" style={{ background:"#111827", color:"#fff", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Host it free with a plan</Link>
            </div>
          </div>
        )}
      </div>

      {/* footer nav */}
      {step < 4 && (
        <div style={{ flexShrink:0, display:"flex", alignItems:"center", gap:8, padding:"8px 18px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
          {step > 1 && (
            <button type="button" onClick={() => setStep(s => s - 1)}
              style={{ background:"#fff", border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:700, color:"#334155", cursor:"pointer", display:"flex", alignItems:"center", gap:5 }}>
              <ArrowLeft size={13} /> Back
            </button>
          )}
          <span style={{ fontSize:10, color:"#94A3B8", marginLeft:"auto" }}>Included free: hosting, SSL certificate, CDN and auto-renew on every plan.</span>
          <button type="button" onClick={() => setStep(s => s + 1)}
            style={{ background:HOST_C, color:"#fff", border:"none", borderRadius:8, padding:"6px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
            Continue
          </button>
        </div>
      )}
      {step === 4 && (
        <div style={{ flexShrink:0, display:"flex", alignItems:"center", padding:"8px 18px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
          <button type="button" onClick={() => setStep(s => s - 1)}
            style={{ background:"#fff", border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:700, color:"#334155", cursor:"pointer", display:"flex", alignItems:"center", gap:5 }}>
            <ArrowLeft size={13} /> Back
          </button>
          <span style={{ fontSize:10, color:"#94A3B8", marginLeft:"auto" }}>Included free: hosting, SSL certificate, CDN and auto-renew on every plan.</span>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 11 — SD SENDER  (campaign · warm-up · inbox)
════════════════════════════════════════ */
const SEND_C = "#c026d3";
const SENDER_CAMPAIGN_STEPS = [
  { icon:Users,         name:"Connection request", day:"Day 0",                stat:"41 sent" },
  { icon:Mail,          name:"Intro email",        day:"Day 2",                stat:"46 sent" },
  { icon:MessageSquare, name:"LinkedIn message",   day:"Day 4 · if connected", stat:"17 sent" },
  { icon:Mail,          name:"Follow-up email",    day:"Day 7 · if no reply",  stat:"31 sent" },
];
const SENDER_ACTIVITY = [
  ["Reply from Marco Ruiz on LinkedIn", "12s"],
  ["Reply from Priya Shah: “Thursday works”", "10s"],
  ["Message sent to Marco Ruiz", "8s"],
  ["Hannah Lee opened", "6s"],
  ["Marco Ruiz accepted your invite", "4s"],
  ["Email delivered to priya@cloudline.dev · inbox 2", "2s"],
  ["Invite sent to Jordan Avery · Northwind", "now"],
];
const WARM_BOXES = [
  { email:"alex@northwind-mail.com",      day:"Day 14", state:"ready",   score:96 },
  { email:"alex@northwind-outreach.com",  day:"Day 9",  state:"warming", score:88 },
  { email:"sales@northwind-hq.com",       day:"Day 2",  state:"new",     score:71 },
];
const WARM_SENT   = [22, 26, 28, 31, 34, 36, 38, 40, 40, 40, 40, 40, 40, 40];
const WARM_LANDED = [19, 23, 25, 28, 31, 33, 36, 39, 39, 39, 38, 40, 39, 40];
const SENDER_THREADS = [
  { name:"Priya Shah",  role:"CTO · Cloudline",        chan:"Email",    icon:Mail,  time:"2m", msg:"Thursday works. Send an invite?", intent:true,
    thread:[["me","Would Tuesday or Thursday work for 15 minutes?"],["them","Thursday works for me. Send an invite for 2pm ET?"]] },
  { name:"Marco Ruiz",  role:"VP Sales · Vertex",      chan:"LinkedIn", icon:Users, time:"5m", msg:"Happy to connect — what's the pricing?",
    thread:[["me","Thanks for connecting — quick question."],["them","Happy to connect — what's the pricing?"]] },
  { name:"Hannah Lee",  role:"Head of Growth · Loopwise", chan:"Email",  icon:Mail,  time:"1h", msg:"Interesting. Can you send a deck?",
    thread:[["me","Here's how Loopwise teams ramp SDRs."],["them","Interesting. Can you send a deck?"]] },
  { name:"Dana Fox",    role:"Founder · Hartwell",     chan:"LinkedIn", icon:Users, time:"3h", msg:"Let's talk next quarter.",
    thread:[["me","Congrats on the launch!"],["them","Let's talk next quarter."]] },
];

function TabSdSender() {
  const [credits, setCredits] = useState(5);
  const [sub, setSub]         = useState("campaign");   // campaign | warmup | inbox
  const [cState, setCState]  = useState("draft");      // draft | sending | live
  const [stats, setStats]     = useState({ s:0, i:0, o:0, r:0 });
  const [act, setAct]         = useState(0);
  const [selTh, setSelTh]     = useState(0);

  const launch = () => {
    if (credits < 1 || cState !== "draft") return;
    setCredits(c => c - 1);
    setCState("sending");
    let t = 0;
    const iv = setInterval(() => {
      t += 1;
      setStats({
        s: Math.min(Math.round(53 * t / 10), 53),
        i: Math.min(Math.round(10 * t / 10), 10),
        o: Math.min(Math.round(33 * t / 10), 33),
        r: Math.min(Math.round(3 * t / 10), 3),
      });
      if (t >= 10) {
        clearInterval(iv);
        setCState("live");
        let u = 0;
        const iv2 = setInterval(() => {
          u += 1;
          setStats({
            s: Math.min(53 + Math.round(40 * u / 10), 93),
            i: Math.min(10 + Math.round(7 * u / 10), 17),
            o: Math.min(33 + Math.round(25 * u / 10), 58),
            r: Math.min(3 + Math.round(3 * u / 10), 6),
          });
          setAct(a => Math.min(a + 1, SENDER_ACTIVITY.length));
          if (u >= 10) clearInterval(iv2);
        }, 420);
      }
    }, 260);
  };

  const statusChip = () =>
    cState === "draft"   ? { t:"Draft",   bg:"#F1F5F9", fg:"#475569", bd:"#E2E8F0" } :
    cState === "sending" ? { t:"Sending", bg:"#FEF3C7", fg:"#92400E", bd:"#FDE68A" } :
                          { t:"Live",    bg:"#ECFDF5", fg:"#065F46", bd:"#A7F3D0" };
  const sc = statusChip();

  return (
    <div style={{ width:"100%", height:330, display:"flex", flexDirection:"column", background:"#FFFFFF", color:"#111827", fontFamily:"'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif", fontSize:13, lineHeight:1.45, overflow:"hidden", borderRadius:12, border:"1px solid #E5E7EB" }}>

      {/* top bar */}
      <div style={{ height:44, flexShrink:0, display:"flex", alignItems:"center", gap:10, padding:"0 12px 0 14px", borderBottom:"1px solid #E5E7EB" }}>
        <div style={{ width:24, height:24, borderRadius:6, background:SEND_C, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}><Send size={13} /></div>
        <span style={{ fontWeight:800, fontSize:12, letterSpacing:"0.02em" }}>SD SENDER</span>
        <div style={{ display:"flex", gap:2, background:"#F1F5F9", borderRadius:8, padding:2, marginLeft:6 }}>
          {["campaign","warmup","inbox"].map(m => (
            <button key={m} type="button" onClick={() => setSub(m)}
              style={{ border:"none", borderRadius:6, padding:"3px 9px", fontSize:10.5, fontWeight:700, cursor:"pointer", background: sub === m ? "#fff" : "transparent", color: sub === m ? "#111827" : "#64748B", boxShadow: sub === m ? "0 1px 2px rgba(15,23,42,0.10)" : "none" }}>
              {m === "campaign" ? "Campaign" : m === "warmup" ? "Warm-up" : "Inbox"}
            </button>
          ))}
        </div>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ display:"flex", alignItems:"center", gap:6, background:"#FDF4FF", border:"1px solid #F5D0FE", color:"#86198F", borderRadius:8, padding:"4px 10px", fontSize:12 }}>
            <Clock size={13} /> Free credits <b style={{ fontSize:13 }}>{credits}/5</b>
          </span>
          <Link to="/pricing" style={{ background:SEND_C, color:"#fff", borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Upgrade</Link>
        </div>
      </div>

      {credits === 0 && sub === "campaign" && cState === "draft" && (
        <div style={{ flexShrink:0, background:"#111827", color:"#fff", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 12px", fontSize:11 }}>
          <span>You've used today's 5 free credits. They reset tomorrow.</span>
          <Link to="/pricing" style={{ color:"#FDE68A", fontWeight:700, textDecoration:"none" }}>Get 250 credits/mo free</Link>
        </div>
      )}

      {/* ── CAMPAIGN ── */}
      {sub === "campaign" && (
        cState === "draft" ? (
          <>
            <div style={{ flex:1, overflowY:"auto", padding:"10px 14px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:14, fontWeight:800 }}>Q4 VP Sales outreach</span>
                <span style={{ fontSize:9.5, fontWeight:800, background:sc.bg, color:sc.fg, border:`1px solid ${sc.bd}`, borderRadius:999, padding:"2px 8px" }}>{sc.t}</span>
              </div>
              <div style={{ fontSize:10.5, color:"#64748B", marginTop:2 }}>48 leads from Leads Driver · 4 steps · 2 channels</div>

              <div style={{ marginTop:10, display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {/* steps */}
                <div>
                  <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", marginBottom:5 }}>SEQUENCE</div>
                  {SENDER_CAMPAIGN_STEPS.map(s => (
                    <div key={s.name} style={{ display:"flex", alignItems:"center", gap:8, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 9px", marginBottom:5 }}>
                      <s.icon size={13} style={{ color:SEND_C, flexShrink:0 }} />
                      <div style={{ minWidth:0 }}>
                        <div style={{ fontSize:11, fontWeight:700 }}>{s.name}</div>
                        <div style={{ fontSize:9.5, color:"#64748B" }}>{s.day}</div>
                      </div>
                      <span style={{ marginLeft:"auto", fontSize:9.5, fontWeight:700, color:"#334155", flexShrink:0 }}>{s.stat}</span>
                    </div>
                  ))}
                </div>
                {/* sending from */}
                <div>
                  <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", marginBottom:5 }}>SENDING FROM</div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 9px", marginBottom:5 }}>
                    <Users size={13} style={{ color:"#2563eb", flexShrink:0 }} />
                    <div>
                      <div style={{ fontSize:11, fontWeight:700 }}>LinkedIn · Alex Morgan</div>
                      <div style={{ fontSize:9.5, color:"#64748B" }}>Connected</div>
                    </div>
                    <span style={{ marginLeft:"auto", fontSize:9, fontWeight:800, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:999, padding:"1px 7px", flexShrink:0 }}>Connected</span>
                  </div>
                  {WARM_BOXES.slice(0, 2).map(b => (
                    <div key={b.email} style={{ display:"flex", alignItems:"center", gap:8, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 9px", marginBottom:5 }}>
                      <Mail size={13} style={{ color:SEND_C, flexShrink:0 }} />
                      <div style={{ minWidth:0 }}>
                        <div style={{ fontSize:11, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{b.email}</div>
                        <div style={{ fontSize:9.5, color:"#64748B" }}>Warmed inbox</div>
                      </div>
                      <span style={{ marginLeft:"auto", fontSize:10, fontWeight:800, color: b.score >= 90 ? "#065F46" : "#92400E", flexShrink:0 }}>{b.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* channel previews */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:4 }}>
                <div style={{ border:"1px solid #E2E8F0", borderRadius:10, padding:9, background:"#fff" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                    <Users size={12} style={{ color:"#2563eb" }} />
                    <span style={{ fontSize:10.5, fontWeight:800 }}>LinkedIn message</span>
                  </div>
                  <div style={{ fontSize:10.5, lineHeight:1.5, color:"#334155", background:"#F8FAFC", borderRadius:8, padding:8 }}>Hi Jordan, saw Northwind is hiring 6 sales reps. I work with VP Sales teams scaling outbound. Happy to connect!</div>
                  <div style={{ fontSize:9, color:"#94A3B8", marginTop:5 }}>Max 25 invites/day</div>
                </div>
                <div style={{ border:"1px solid #E2E8F0", borderRadius:10, padding:9, background:"#fff" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                    <Mail size={12} style={{ color:SEND_C }} />
                    <span style={{ fontSize:10.5, fontWeight:800 }}>Subject: Northwind's new SDR team</span>
                  </div>
                  <div style={{ fontSize:10.5, lineHeight:1.5, color:"#334155", background:"#F8FAFC", borderRadius:8, padding:8 }}>Hi Jordan, Congrats on the Series B. With 6 sales roles open, ramp time probably matters right now. We help teams like yours book first meetings in week one. Worth a quick look? — Alex</div>
                  <div style={{ fontSize:9, color:"#94A3B8", marginTop:5 }}>Sent from warmed inbox</div>
                </div>
              </div>
              <div style={{ fontSize:9.5, color:"#94A3B8", textAlign:"center", marginTop:6 }}>Preview for Jordan Avery · Northwind · Personalised</div>
            </div>

            <div style={{ flexShrink:0, display:"flex", alignItems:"center", gap:10, padding:"8px 14px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
              <span style={{ fontSize:10, color:"#94A3B8" }}>Demo campaign · nothing is really sent</span>
              <button type="button" onClick={launch} disabled={credits < 1}
                style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:6, background: credits < 1 ? "#F5D0FE" : SEND_C, color:"#fff", border:"none", borderRadius:8, padding:"7px 13px", fontSize:12, fontWeight:700, cursor: credits < 1 ? "not-allowed" : "pointer" }}>
                <Play size={12} /> Launch campaign · 1 credit
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ flex:1, overflowY:"auto", padding:"12px 14px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:14, fontWeight:800 }}>Q4 VP Sales outreach</span>
                <span style={{ fontSize:9.5, fontWeight:800, background:sc.bg, color:sc.fg, border:`1px solid ${sc.bd}`, borderRadius:999, padding:"2px 8px", display:"flex", alignItems:"center", gap:4 }}>
                  {cState === "sending" && <Loader2 size={9} className="animate-spin" />}{sc.t}
                </span>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:8, marginTop:10 }}>
                {[["SENT", stats.s], ["INVITES ACCEPTED", stats.i], ["OPENED", stats.o], ["REPLIED", stats.r]].map(([k, v]) => (
                  <div key={k} style={{ background:"#FDF4FF", border:"1px solid #F5D0FE", borderRadius:10, padding:"8px 10px" }}>
                    <div style={{ fontSize:18, fontWeight:900, color:"#86198F" }}>{v}</div>
                    <div style={{ fontSize:8, fontWeight:900, letterSpacing:"0.06em", color:"#A21CAF", marginTop:1 }}>{k}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:9.5, color:"#94A3B8", textAlign:"center", marginTop:6 }}>
                {cState === "sending" ? "Demo speed: days shown as seconds" : "Live · demo data"}
              </div>

              {cState === "live" && (
                <>
                  <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", margin:"12px 0 5px" }}>LIVE ACTIVITY</div>
                  {SENDER_ACTIVITY.slice(0, act).map(([txt, tm], i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"4px 0", borderBottom:"1px dashed #F1F5F9" }}>
                      <span style={{ width:6, height:6, borderRadius:999, background:SEND_C, flexShrink:0 }} />
                      <span style={{ fontSize:11, fontWeight:600 }}>{txt}</span>
                      <span style={{ marginLeft:"auto", fontSize:9.5, color:"#94A3B8", flexShrink:0 }}>{tm}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
            {cState === "live" && (
              <div style={{ flexShrink:0, display:"flex", alignItems:"center", padding:"8px 14px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
                <button type="button" onClick={() => setSub("inbox")}
                  style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:6, background:SEND_C, color:"#fff", border:"none", borderRadius:8, padding:"7px 13px", fontSize:12, fontWeight:700, cursor:"pointer" }}>
                  Open replies in Inbox <ArrowRight size={12} />
                </button>
              </div>
            )}
          </>
        )
      )}

      {/* ── WARM-UP ── */}
      {sub === "warmup" && (
        <div style={{ flex:1, overflowY:"auto", padding:"10px 14px" }}>
          <div style={{ fontSize:10.5, color:"#64748B", lineHeight:1.5, marginBottom:8 }}>
            Built-in warm-up sends and replies to real inboxes every day, so your emails land in the primary tab.
          </div>

          {WARM_BOXES.map(b => {
            const col = b.score >= 90 ? "#065F46" : b.score >= 80 ? "#92400E" : "#64748B";
            return (
              <div key={b.email} style={{ display:"flex", alignItems:"center", gap:9, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:8, padding:"7px 10px", marginBottom:6 }}>
                <Mail size={13} style={{ color:SEND_C, flexShrink:0 }} />
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:11.5, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{b.email}</div>
                  <div style={{ fontSize:9.5, color:"#64748B" }}>{b.day} · {b.state}</div>
                </div>
                <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                  <div style={{ width:64, height:5, borderRadius:999, background:"#F1F5F9", overflow:"hidden" }}>
                    <div style={{ width:`${b.score}%`, height:"100%", background: b.score >= 90 ? "#059669" : b.score >= 80 ? "#D4A017" : "#94A3B8" }} />
                  </div>
                  <span style={{ fontSize:10.5, fontWeight:800, color:col, width:22, textAlign:"right" }}>{b.score}</span>
                </div>
              </div>
            );
          })}

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8, margin:"6px 0 10px" }}>
            {[["HEALTH SCORE", "96/100", "#065F46"], ["INBOX PLACEMENT", "98%", "#065F46"], ["SPAM", "1%", "#92400E"]].map(([k, v, c]) => (
              <div key={k} style={{ background:"#fff", border:"1px solid #E2E8F0", borderRadius:10, padding:"7px 9px" }}>
                <div style={{ fontSize:8, fontWeight:900, letterSpacing:"0.06em", color:"#64748B" }}>{k}</div>
                <div style={{ fontSize:15, fontWeight:900, color:c, marginTop:1 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", marginBottom:6 }}>DAILY WARM-UP EMAILS · LAST 14 DAYS</div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:56, background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:"8px 10px" }}>
            {WARM_SENT.map((v, i) => (
              <div key={i} style={{ flex:1, display:"flex", alignItems:"flex-end", gap:1.5, height:"100%" }}>
                <div style={{ flex:1, height:`${(v / 40) * 100}%`, background:"#CBD5E1", borderRadius:2 }} />
                <div style={{ flex:1, height:`${(WARM_LANDED[i] / 40) * 100}%`, background:"#059669", borderRadius:2 }} />
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:12, fontSize:9, color:"#64748B", marginTop:5 }}>
            <span style={{ display:"flex", alignItems:"center", gap:4 }}><span style={{ width:7, height:7, borderRadius:2, background:"#CBD5E1" }} /> sent</span>
            <span style={{ display:"flex", alignItems:"center", gap:4 }}><span style={{ width:7, height:7, borderRadius:2, background:"#059669" }} /> landed in inbox</span>
          </div>

          <div style={{ fontSize:10.5, fontWeight:700, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:8, padding:"7px 10px", marginTop:10 }}>
            Ready for campaigns. Warm-up keeps running in the background at 40/day.
          </div>
        </div>
      )}

      {/* ── INBOX ── */}
      {sub === "inbox" && (
        <div style={{ flex:1, display:"flex", minHeight:0 }}>
          <div style={{ width:138, flexShrink:0, borderRight:"1px solid #E5E7EB", overflowY:"auto" }}>
            <div style={{ fontSize:9, fontWeight:900, letterSpacing:"0.08em", color:"#64748B", padding:"8px 10px 4px" }}>UNIFIED INBOX · 4 REPLIES</div>
            {SENDER_THREADS.map((t, i) => (
              <button key={t.name} type="button" onClick={() => setSelTh(i)}
                style={{ width:"100%", display:"flex", flexDirection:"column", gap:2, textAlign:"left", padding:"7px 10px", background: selTh === i ? "#FDF4FF" : "transparent", border:"none", borderBottom:"1px solid #F1F5F9", cursor:"pointer" }}>
                <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                  <t.icon size={10} style={{ color: selTh === i ? SEND_C : "#94A3B8", flexShrink:0 }} />
                  <span style={{ fontSize:11, fontWeight:700, color: selTh === i ? SEND_C : "#111827" }}>{t.name}</span>
                  <span style={{ marginLeft:"auto", fontSize:8.5, color:"#94A3B8", flexShrink:0 }}>{t.chan} · {t.time}</span>
                </div>
                <span style={{ fontSize:9.5, color:"#64748B", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{t.msg}</span>
              </button>
            ))}
          </div>

          <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 12px", borderBottom:"1px solid #E5E7EB" }}>
              <div>
                <div style={{ fontSize:12, fontWeight:800 }}>{SENDER_THREADS[selTh].name}</div>
                <div style={{ fontSize:9.5, color:"#64748B" }}>{SENDER_THREADS[selTh].role}</div>
              </div>
              {SENDER_THREADS[selTh].intent && (
                <span style={{ fontSize:9, fontWeight:800, color:"#065F46", background:"#ECFDF5", border:"1px solid #A7F3D0", borderRadius:999, padding:"2px 8px", display:"flex", alignItems:"center", gap:4 }}>
                  <CalendarCheck size={9} /> Meeting intent
                </span>
              )}
              <span style={{ marginLeft:"auto", fontSize:9.5, color:"#94A3B8" }}>{SENDER_THREADS[selTh].chan} · {SENDER_THREADS[selTh].time}</span>
            </div>

            <div style={{ flex:1, overflowY:"auto", padding:"10px 12px", display:"flex", flexDirection:"column", gap:8 }}>
              {SENDER_THREADS[selTh].thread.map(([who, txt], i) => (
                <div key={i} style={{ display:"flex", justifyContent: who === "me" ? "flex-end" : "flex-start" }}>
                  <div style={{ maxWidth:"80%", fontSize:11.5, lineHeight:1.5, borderRadius:10, padding:"7px 10px", background: who === "me" ? SEND_C : "#F1F5F9", color: who === "me" ? "#fff" : "#111827" }}>
                    {txt}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ flexShrink:0, display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderTop:"1px solid #E5E7EB", background:"#F8FAFC" }}>
              <Inbox size={13} style={{ color:"#94A3B8", flexShrink:0 }} />
              <input placeholder="Reply on Email…" style={{ flex:1, minWidth:0, border:"1px solid #E2E8F0", borderRadius:8, padding:"6px 10px", fontSize:11.5, outline:"none", background:"#fff" }} />
              <Link to={BOOKING_PATH} style={{ display:"flex", alignItems:"center", gap:5, background:SEND_C, color:"#fff", borderRadius:8, padding:"6px 11px", fontSize:11, fontWeight:700, textDecoration:"none", flexShrink:0 }}>
                <CalendarCheck size={11} /> Book meeting
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 12 — SALESDRIVER CORA  (AI agent · runs every tool)
════════════════════════════════════════ */
const CORA_TARGET = "Find the CEOs of the top 100 US companies, write each one a personal message and send it.";
const CORA_PROMPTS = [
  CORA_TARGET,
  "Find 50 VPs of Sales at SaaS companies in Texas and verify their emails.",
  "Which companies visited my website this week? Draft follow-ups for the top 10.",
];
const CORA_STEPS = [
  { tool: "CORA",        text: "Understand the goal and build a plan",       result: "6 steps" },
  { tool: "LeadsDriver", text: "Find CEOs at the top 100 US companies",      result: "100 found" },
  { tool: "MTN Data",    text: "Enrich company data for personalization",    result: "100 enriched" },
  { tool: "ExactMails",  text: "Find work emails",                           result: "97 emails" },
  { tool: "MTN Verify",  text: "Verify emails before sending",               result: "94 safe" },
  { tool: "HyperPitch",  text: "Write a personal message for each",          result: "94 drafts" },
];
const CORA_CONTACTS = [
  ["Avery Collins", "Northwind Corp", "avery.collins@northwind.io"],
  ["Maya Brennan", "Cloudline Inc", "maya.brennan@cloudline.dev"],
  ["Jordan Avery", "Northwind Logistics", "jordan.avery@northwindlog.com"],
];

function TabSalesDriverCora() {
  const [credits, setCredits]   = useState(5);
  const [prompt, setPrompt]     = useState(null);
  const [step, setStep]         = useState(0);      // 0 = start screen · 6 = plan done
  const [previewTab, setPreview] = useState("contacts");
  const [sent, setSent]         = useState(false);

  const run = (text) => {
    if (credits < 1 || prompt) return;
    setPrompt(text);
    setCredits(c => c - 1);
    let n = 0;
    const iv = setInterval(() => {
      n += 1;
      setStep(n);
      if (n >= CORA_STEPS.length) clearInterval(iv);
    }, 650);
  };

  const sendDemo = () => { if (prompt && !sent) setSent(true); };

  return (
    <div style={{ display: "flex", gap: 12, minHeight: 340 }}>
      {/* ── Left: chat with CORA ── */}
      <div style={{ width: "42%", minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 22, height: 22, borderRadius: 999, background: T.orange, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}><Star size={11} /></span>
          <span style={{ fontSize: 14, fontWeight: 900, color: T.navy, letterSpacing: "0.04em" }}>CORA</span>
          <span style={{ fontSize: 9.5, color: T.muted }}>AI agent · runs every SalesDriver tool</span>
        </div>

        {prompt && (
          <div style={{ background: T.navy, color: "#fff", borderRadius: 10, padding: "8px 10px", fontSize: 11.5, fontWeight: 600, lineHeight: 1.45 }}>
            {prompt}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
          <span style={{ width: 22, height: 22, borderRadius: 999, background: sent ? T.green : T.orange, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>
            {sent ? <Check size={12} /> : <Star size={11} />}
          </span>
          <div style={{ flex: 1, border: `1px solid ${sent ? "#A7F3D0" : T.border}`, background: sent ? "#F0FDF4" : "#fff", borderRadius: 10, padding: "8px 10px", fontSize: 11.5, lineHeight: 1.5, color: "#334155" }}>
            {!prompt && "Hi, I'm CORA. Tell me the outcome you want. I'll find the leads, get and verify emails, write personal messages and line them up to send."}
            {prompt && step < CORA_STEPS.length && "On it. Here is my plan. I will run each tool in order and stop before sending anything."}
            {prompt && step >= CORA_STEPS.length && !sent && "Done. I found 100 CEOs, verified 94 emails and wrote 94 personal messages. Review them on the right, then approve to send."}
            {prompt && sent && "Demo complete. Nothing was actually sent. With an account, I'd send through your warmed-up inbox and track replies."}
          </div>
        </div>

        {!prompt && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 2 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: T.muted }}>Try one of these</span>
            {CORA_PROMPTS.map(p => (
              <button key={p} type="button" onClick={() => run(p)} disabled={credits < 1}
                style={{ textAlign: "left", fontSize: 11, lineHeight: 1.45, color: "#334155", background: "#fff", border: `1px solid #FDBA74`, borderRadius: 10, padding: "7px 10px", cursor: credits < 1 ? "not-allowed" : "pointer", opacity: credits < 1 ? 0.5 : 1 }}>
                {p}
              </button>
            ))}
          </div>
        )}

        <div style={{ marginTop: "auto", display: "flex", gap: 6 }}>
          <input
            readOnly
            value={prompt || ""}
            placeholder="Ask CORA to do something…"
            style={{ flex: 1, minWidth: 0, border: `1px solid ${T.border}`, borderRadius: 10, padding: "7px 10px", fontSize: 11, outline: "none", color: "#334155" }}
          />
          <button type="button" onClick={() => run(CORA_PROMPTS[0])} disabled={!!prompt || credits < 1}
            style={{ background: T.orange, border: "none", borderRadius: 10, padding: "7px 10px", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
            <Send size={13} />
          </button>
        </div>
      </div>

      {/* ── Right: agent plan ── */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {!prompt ? (
          <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 10, padding: 14 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 300 }}>
              {["Leads Driver", "MTN Data", "ExactMails", "MTN Verify", "HyperPitch", "Sender", "Flow", "Trafera"].map(n => (
                <span key={n} style={{ border: `1px solid ${T.border}`, borderRadius: 999, padding: "4px 11px", fontSize: 11, fontWeight: 700, color: "#334155", background: "#fff" }}>{n}</span>
              ))}
            </div>
            <div style={{ fontSize: 16, fontWeight: 900, color: T.navy }}>One prompt. Every tool.</div>
            <div style={{ fontSize: 11, color: T.muted, maxWidth: 280, lineHeight: 1.5 }}>
              CORA plans the job, runs each SalesDriver tool in order, and stops for your approval before anything is sent.
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 900, color: T.navy }}>Agent plan</span>
              <span style={{ fontSize: 9.5, fontWeight: 800, borderRadius: 999, padding: "2px 9px", background: sent ? "#ECFDF5" : "#FFF7ED", color: sent ? "#065F46" : "#C2410C", border: `1px solid ${sent ? "#A7F3D0" : "#FDBA74"}` }}>
                {sent ? "Sent (demo)" : step >= CORA_STEPS.length ? "Waiting for your approval" : "Running"}
              </span>
              <span style={{ marginLeft: "auto", fontSize: 10.5, color: T.muted }}>{step}/{CORA_STEPS.length} steps</span>
            </div>
            <div style={{ height: 4, borderRadius: 999, background: "#F1F5F9", margin: "6px 0 8px", overflow: "hidden" }}>
              <div style={{ width: `${(step / CORA_STEPS.length) * 100}%`, height: "100%", background: T.orange, transition: "width 0.5s ease" }} />
            </div>

            {CORA_STEPS.map((s, i) => {
              const done = i < step;
              const running = i === step && step < CORA_STEPS.length;
              return (
                <div key={s.text} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 7px", borderRadius: 8, marginBottom: 2, background: running ? "#FFF7ED" : "transparent" }}>
                  {done ? (
                    <CheckCircle2 size={15} style={{ color: T.green, flexShrink: 0 }} />
                  ) : running ? (
                    <span style={{ width: 15, height: 15, borderRadius: 999, background: T.orange, color: "#fff", fontSize: 9, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  ) : (
                    <span style={{ width: 15, height: 15, borderRadius: 999, background: "#E2E8F0", color: "#64748B", fontSize: 9, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  )}
                  <span style={{ fontSize: 11, fontWeight: 600, color: done ? "#334155" : running ? "#334155" : "#94A3B8", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.text}</span>
                  <span style={{ marginLeft: "auto", fontSize: 8.5, fontWeight: 800, color: "#475569", background: "#F1F5F9", borderRadius: 999, padding: "2px 7px", flexShrink: 0 }}>{s.tool}</span>
                  {done && <span style={{ fontSize: 10, fontWeight: 800, color: T.green, flexShrink: 0 }}>{s.result}</span>}
                  {running && <span style={{ fontSize: 10, fontWeight: 800, color: "#C2410C", flexShrink: 0 }}>running…</span>}
                </div>
              );
            })}

            {step >= CORA_STEPS.length && (
              <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, marginTop: 8, overflow: "hidden" }}>
                <div style={{ display: "flex", borderBottom: `1px solid ${T.border}`, fontSize: 10.5 }}>
                  <button type="button" onClick={() => setPreview("contacts")} style={{ padding: "6px 10px", fontWeight: 800, color: previewTab === "contacts" ? T.navy : T.muted, background: "none", border: "none", borderBottom: previewTab === "contacts" ? `2px solid ${T.orange}` : "2px solid transparent", cursor: "pointer" }}>Contacts (94)</button>
                  <button type="button" onClick={() => setPreview("messages")} style={{ padding: "6px 10px", fontWeight: 800, color: previewTab === "messages" ? T.navy : T.muted, background: "none", border: "none", borderBottom: previewTab === "messages" ? `2px solid ${T.orange}` : "2px solid transparent", cursor: "pointer" }}>Message preview</button>
                  <span style={{ marginLeft: "auto", alignSelf: "center", paddingRight: 10, fontSize: 9.5, color: "#94A3B8" }}>Sample data</span>
                </div>
                {previewTab === "contacts" ? (
                  <div>
                    {CORA_CONTACTS.map(([n, c, e]) => (
                      <div key={n} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 10px", borderBottom: `1px solid #F1F5F9`, fontSize: 10.5 }}>
                        <span style={{ fontWeight: 800, color: T.navy }}>{n}</span>
                        <span style={{ color: T.muted }}>{c}</span>
                        <span style={{ marginLeft: "auto", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 110 }}>{e}</span>
                        <span style={{ fontWeight: 800, color: T.green, flexShrink: 0 }}>Safe</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: 8, fontSize: 10.5, color: "#334155", background: "#F8FAFC" }}>
                    <div style={{ fontWeight: 800, marginBottom: 3 }}>Subject: Northwind's new SDR team</div>
                    Hi Jordan, congrats on the Series B. With six sales roles open, ramp time probably matters right now…
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", background: sent ? "#F0FDF4" : "#FFF7ED", borderTop: `1px solid ${T.border}` }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#C2410C" }}>
                    {sent ? "Demo send complete. Nothing was actually sent." : "94 messages ready. CORA never sends without your approval."}
                  </span>
                  {!sent ? (
                    <button type="button" onClick={sendDemo} style={{ marginLeft: "auto", background: T.navy, color: "#fff", border: "none", borderRadius: 8, padding: "6px 11px", fontSize: 10.5, fontWeight: 800, cursor: "pointer", flexShrink: 0 }}>Approve & send (demo)</button>
                  ) : (
                    <Link to="/signup" style={{ marginLeft: "auto", background: T.orange, color: "#fff", borderRadius: 8, padding: "6px 11px", fontSize: 10.5, fontWeight: 800, textDecoration: "none", flexShrink: 0 }}>Send for real · free account</Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   TAB 13 — SD CRM  (pipeline · contacts · automation)
════════════════════════════════════════ */
const CRM_C = "#2563eb";
const CRM_STAGES = [
  { name: "New",       dot: "#94A3B8" },
  { name: "Qualified", dot: "#2563eb" },
  { name: "Meeting",   dot: "#7c3aed" },
  { name: "Proposal",  dot: "#D97706" },
  { name: "Won",       dot: "#059669" },
];
const CRM_DEALS = [
  { stage: "New",       company: "Helix Health",     person: "Sam Patel",  role: "Ops",           value: 12000, score: 46 },
  { stage: "Qualified", company: "Atlas Freight",    person: "Mia Chen",   role: "VP Sales",      value: 27500, score: 69 },
  { stage: "Qualified", company: "Cloudline",        person: "Priya Shah", role: "CTO",           value: 24000, score: 88 },
  { stage: "Meeting",   company: "Brightpath",       person: "Marco Ruiz", role: "Growth",        value: 18500, score: 74 },
  { stage: "Proposal",  company: "Summit Analytics", person: "Hannah Lee", role: "Marketing",     value: 32000, score: 81 },
  { stage: "Won",       company: "Orbit Labs",       person: "Dana Fox",   role: "Sales",         value: 9800,  score: 92 },
];
const CRM_IMPORTS = [
  { company: "Pinecone Bank",     person: "Tom Weller", role: "CIO",      value: 45000, score: 49 },
  { company: "Vantage Retail",    person: "Ana Silva",  role: "COO",      value: 30000, score: 52 },
  { company: "Kestrel AI",        person: "Leo Brandt", role: "CEO",      value: 15000, score: 58 },
  { company: "Northwind Logistics", person: "Jordan Avery", role: "VP Sales", value: 21000, score: 64 },
];
const scoreChip = (v) =>
  v >= 80 ? { bg: "#ECFDF5", fg: "#065F46" }
  : v >= 60 ? { bg: "#EAF0FB", fg: "#2F4F8F" }
  : { bg: "#FEF9C3", fg: "#92400E" };
const CRM_CONTACTS = [
  { initials: "PS", color: "#0F766E", name: "Priya Shah",  company: "Cloudline",       role: "CTO",            score: 88, stage: "Meeting",  loc: "Austin, TX",   deal: 24000, owner: "Sarah K.", tags: ["demo-request", "enterprise", "hot"],
    timeline: [["Meeting booked · Thu 2:00 PM", "+25", T.green, "2m"], ["Replied to “Northwind's new SDR team”", "+20", "#2563eb", "1h"], ["Visited /pricing for 6 min", "+15", "#E07B39", "1d"], ["Submitted demo request form", "+20", "#7c3aed", "2d"], ["Opened intro email", "+8", "#94A3B8", "3d"]] },
  { initials: "MR", color: "#2563eb", name: "Marco Ruiz",  company: "Brightpath",      role: "Head of Growth", score: 74, stage: "Meeting",  loc: "Denver, CO",   deal: 18500, owner: "Alex M.",  tags: ["inbound", "warm"],
    timeline: [["Accepted LinkedIn invite", "+15", "#2563eb", "4m"], ["Replied on LinkedIn", "+20", "#059669", "20m"], ["Opened follow-up email", "+8", "#94A3B8", "1d"]] },
  { initials: "HL", color: "#BE123C", name: "Hannah Lee",  company: "Summit Analytics", role: "Marketing",     score: 81, stage: "Proposal", loc: "Boston, MA",   deal: 32000, owner: "Sarah K.", tags: ["enterprise"],
    timeline: [["Viewed proposal link 3×", "+18", "#E07B39", "12m"], ["Forwarded to CFO", "+20", "#059669", "2h"], ["Opened intro email", "+8", "#94A3B8", "4d"]] },
  { initials: "DF", color: "#B45309", name: "Dana Fox",    company: "Orbit Labs",      role: "Sales Director", score: 92, stage: "Won",      loc: "Austin, TX",   deal: 9800,  owner: "Alex M.",  tags: ["closed-won"],
    timeline: [["Deal marked Won", "+25", "#059669", "1d"], ["Signed contract", "+20", "#2563eb", "1d"], ["Replied: let's do it", "+20", "#059669", "3d"]] },
  { initials: "SP", color: "#64748B", name: "Sam Patel",   company: "Helix Health",    role: "Ops",            score: 46, stage: "New",      loc: "Chicago, IL",  deal: 12000, owner: "Sarah K.", tags: ["new-lead"],
    timeline: [["Imported from LeadsDriver", "+10", "#94A3B8", "2h"], ["Opened intro email", "+8", "#94A3B8", "1h"]] },
];
const CRM_NODES = [
  { kind: "TRIGGER",  title: "Form submitted",          sub: "Demo request page",    stat: "142 contacts",         border: "#7c3aed", kindColor: "#7c3aed" },
  { kind: "ACTION",   title: "Tag + welcome email",     sub: "Tag demo-request",     stat: "142 sent · 61% open",  border: "#2563eb", kindColor: "#2563eb" },
  { kind: "ACTION",   title: "Update lead score",       sub: "Form +20 · pricing +15", stat: "Avg score 64",       border: "#2563eb", kindColor: "#2563eb" },
  { kind: "CONDITION", title: "Score ≥ 70?",            sub: "Split contacts",       stat: "38 yes · 104 no",      border: "#D97706", kindColor: "#D97706" },
];
const CRM_RUNS = [
  ["Priya Shah", "Form → tag → score 88", "Deal created", true,  "2m"],
  ["Leo Brandt", "Form → tag → score 58", "Nurture",      false, "14m"],
  ["Mia Chen",   "Form → tag → score 69", "Nurture",      false, "1h"],
  ["Tom Weller", "Form → tag → score 74", "Deal created", true,  "3h"],
];

function TabSdCrm() {
  const [credits, setCredits] = useState(5);
  const [view, setView]       = useState("pipeline");   // pipeline | contacts | automation
  const [imported, setImported] = useState(false);
  const [sel, setSel]         = useState(0);

  const columns = CRM_STAGES.map(st => ({
    ...st,
    deals: [
      ...CRM_DEALS.filter(d => d.stage === st.name),
      ...(imported ? CRM_IMPORTS.filter(d => d.stage === st.name) : []),
    ],
  }));
  const totalDeals = columns.reduce((n, c) => n + c.deals.length, 0);
  const pipelineValue = columns.reduce((n, c) => n + c.deals.reduce((m, d) => m + d.value, 0), 0);
  const c = CRM_CONTACTS[sel];

  const importLeads = () => {
    if (credits < 1 || imported) return;
    setImported(true);
    setCredits(n => n - 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 340 }}>
      {/* header: view switch + credits */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 0 10px" }}>
        <div style={{ display: "flex", gap: 4, background: "#F1F5F9", borderRadius: 10, padding: 3 }}>
          {[["pipeline", "Pipeline"], ["contacts", "Contacts"], ["automation", "Automation"]].map(([id, lbl]) => (
            <button key={id} type="button" onClick={() => setView(id)}
              style={{ border: "none", borderRadius: 8, padding: "4px 11px", fontSize: 11, fontWeight: 700, cursor: "pointer", background: view === id ? "#fff" : "transparent", color: view === id ? T.navy : T.muted, boxShadow: view === id ? "0 1px 3px rgba(15,23,42,0.12)" : "none" }}>
              {lbl}
            </button>
          ))}
        </div>
        <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, color: CRM_C, background: "#EAF0FB", borderRadius: 999, padding: "4px 11px" }}>Free credits {credits}/5</span>
      </div>

      {view === "pipeline" && (
        <>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: T.navy }}>Sales pipeline</span>
            <span style={{ fontSize: 10.5, color: T.muted }}>{imported ? "4 new leads scored and routed" : `${totalDeals} open deals`}</span>
            <span style={{ marginLeft: "auto", fontSize: 10, color: T.muted }}>Pipeline value</span>
            <span style={{ fontSize: 15, fontWeight: 900, color: CRM_C }}>${pipelineValue.toLocaleString()}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, flex: 1, alignItems: "start" }}>
            {columns.map(col => (
              <div key={col.name} style={{ background: "#F8FAFC", border: `1px solid ${T.border}`, borderRadius: 10, padding: 6, minHeight: 190 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: col.dot }} />
                  <span style={{ fontSize: 10, fontWeight: 800, color: T.navy }}>{col.name}</span>
                  <span style={{ marginLeft: "auto", fontSize: 9.5, color: T.muted }}>{col.deals.length}</span>
                </div>
                {col.deals.map(d => {
                  const sc = scoreChip(d.score);
                  return (
                    <motion.div key={d.company} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 8, padding: "6px 7px", marginBottom: 5 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: T.navy, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.company}</div>
                      <div style={{ fontSize: 9, color: T.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.person} · {d.role}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 3 }}>
                        <span style={{ fontSize: 10.5, fontWeight: 900, color: T.navy }}>${d.value.toLocaleString()}</span>
                        <span style={{ fontSize: 9, fontWeight: 800, background: sc.bg, color: sc.fg, borderRadius: 999, padding: "1px 6px" }}>{d.score}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
            <span style={{ fontSize: 10, color: T.muted }}>{imported ? "Leads scoring 60+ moved to Qualified automatically." : "Demo data · leads are scored and routed when they arrive"}</span>
            <button type="button" onClick={importLeads} disabled={credits < 1 || imported}
              style={{ marginLeft: "auto", background: imported ? "#94A3B8" : CRM_C, color: "#fff", border: "none", borderRadius: 8, padding: "7px 13px", fontSize: 11.5, fontWeight: 800, cursor: imported ? "default" : "pointer", flexShrink: 0 }}>
              {imported ? "4 leads imported" : "Import 4 leads · 1 credit"}
            </button>
          </div>
        </>
      )}

      {view === "contacts" && (
        <div style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}>
          <div style={{ width: 158, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, border: `1px solid ${T.border}`, borderRadius: 8, padding: "5px 8px", fontSize: 10.5, color: "#94A3B8" }}>
              <Search size={11} /> Search 1,284 contacts
            </div>
            {CRM_CONTACTS.map((ct, i) => (
              <button key={ct.name} type="button" onClick={() => setSel(i)}
                style={{ display: "flex", alignItems: "center", gap: 6, textAlign: "left", padding: "6px 7px", borderRadius: 8, cursor: "pointer", background: sel === i ? "#EAF0FB" : "#fff", border: `1.5px solid ${sel === i ? CRM_C : T.border}` }}>
                <span style={{ width: 20, height: 20, borderRadius: 999, background: ct.color, color: "#fff", fontSize: 8, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{ct.initials}</span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 10.5, fontWeight: 800, color: T.navy, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ct.name}</span>
                  <span style={{ display: "block", fontSize: 9, color: T.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ct.company} · {ct.role}</span>
                </span>
                <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 900, color: scoreChip(ct.score).fg }}>{ct.score}</span>
              </button>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 30, height: 30, borderRadius: 999, background: c.color, color: "#fff", fontSize: 11, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.initials}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: T.navy }}>{c.name}</div>
                <div style={{ fontSize: 10, color: T.muted }}>{c.role} · {c.company} · {c.loc}</div>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 9.5, fontWeight: 800, color: "#7c3aed", background: "#F5F3FF", borderRadius: 999, padding: "3px 9px", flexShrink: 0 }}>{c.stage}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, margin: "8px 0 6px" }}>
              {[["LEAD SCORE", String(c.score)], ["DEAL", `$${c.deal.toLocaleString()}`], ["OWNER", c.owner]].map(([k, v]) => (
                <div key={k} style={{ border: `1px solid ${T.border}`, borderRadius: 8, padding: "6px 8px" }}>
                  <div style={{ fontSize: 8, fontWeight: 900, letterSpacing: "0.06em", color: T.muted }}>{k}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: k === "LEAD SCORE" ? T.green : T.navy }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
              {c.tags.map(t => <span key={t} style={{ fontSize: 9, fontWeight: 700, fontFamily: "monospace", color: CRM_C, background: "#EAF0FB", borderRadius: 999, padding: "2px 8px" }}>{t}</span>)}
            </div>
            <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, padding: "8px 10px" }}>
              <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.08em", color: T.muted, marginBottom: 5 }}>ACTIVITY TIMELINE</div>
              {c.timeline.map(([txt, delta, col, tm], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0" }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: col, flexShrink: 0 }} />
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{txt}</span>
                  <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 800, color: col, flexShrink: 0 }}>{delta}</span>
                  <span style={{ fontSize: 9.5, color: "#94A3B8", width: 24, textAlign: "right", flexShrink: 0 }}>{tm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === "automation" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12.5, fontWeight: 900, color: T.navy }}>Workflow · Demo request follow-up</span>
            <span style={{ marginLeft: "auto", fontSize: 9.5, fontWeight: 800, color: "#065F46", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 999, padding: "3px 9px" }}>Active · 142 contacts this month</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {CRM_NODES.map(n => (
              <div key={n.title} style={{ border: `1.5px solid ${n.border}`, borderRadius: 10, padding: "7px 9px", background: "#fff" }}>
                <div style={{ fontSize: 8.5, fontWeight: 900, letterSpacing: "0.06em", color: n.kindColor }}>{n.kind}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: T.navy, marginTop: 2 }}>{n.title}</div>
                <div style={{ fontSize: 9.5, color: T.muted, marginTop: 1 }}>{n.sub}</div>
                <div style={{ fontSize: 10, fontWeight: 800, color: T.navy, marginTop: 4 }}>{n.stat}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <div style={{ border: "1.5px solid #059669", borderRadius: 10, padding: "7px 9px" }}>
              <div style={{ fontSize: 8.5, fontWeight: 900, letterSpacing: "0.06em", color: T.green }}>IF SCORE ≥ 70</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: T.navy, marginTop: 2 }}>Create deal in Qualified · notify owner</div>
              <div style={{ fontSize: 9.5, color: T.muted, marginTop: 1 }}>38 contacts · 12 deals this month</div>
            </div>
            <div style={{ border: "1.5px solid #D97706", borderRadius: 10, padding: "7px 9px" }}>
              <div style={{ fontSize: 8.5, fontWeight: 900, letterSpacing: "0.06em", color: "#92400E" }}>ELSE</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: T.navy, marginTop: 2 }}>Add to nurture email series · 3 emails</div>
              <div style={{ fontSize: 9.5, color: T.muted, marginTop: 1 }}>104 contacts · 31% open rate</div>
            </div>
          </div>
          <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, padding: "8px 10px", flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.08em", color: T.muted, marginBottom: 5 }}>RECENT RUNS</div>
            {CRM_RUNS.map(([name, path, outcome, won, tm], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3.5px 0", borderBottom: i < CRM_RUNS.length - 1 ? "1px dashed #F1F5F9" : "none" }}>
                <span style={{ fontSize: 10.5, fontWeight: 800, color: T.navy, width: 78, flexShrink: 0 }}>{name}</span>
                <span style={{ fontSize: 10, color: T.muted }}>{path}</span>
                <span style={{ marginLeft: "auto", fontSize: 9.5, fontWeight: 800, color: won ? "#065F46" : "#92400E", background: won ? "#ECFDF5" : "#FEF9C3", borderRadius: 999, padding: "2px 8px", flexShrink: 0 }}>{outcome}</span>
                <span style={{ fontSize: 9.5, color: "#94A3B8", width: 26, textAlign: "right", flexShrink: 0 }}>{tm}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const TOOLS = [
  { id: "cora",        label: "SalesDriver Cora", short: "Cora",      icon: Star,         color: "#f97316", bg: "#fff7ed", logo: logoSalesDriver, page: "/tools/sd-cora" },
  { id: "mtnverify",   label: "MTN Verify",    short: "MTN\nVerify",   icon: ShieldCheck, color: T.green,   bg: "#f0fdf4", logo: logoMtnVerify,   page: "/tools/mtn-verify" },
  { id: "mtndata",     label: "MTN Data",      short: "MTN\nData",     icon: Database,    color: T.blue,    bg: "#eff6ff", logo: logoMtnData,     page: "/tools/mtn-data" },
  { id: "leadsdriver", label: "Leads Driver",  short: "Leads\nDriver", icon: Users,       color: "#7c3aed", bg: "#f5f3ff", logo: logoSalesDriver, page: "/tools/leads-driver" },
  { id: "exactmails",  label: "ExactMails",    short: "Exact\nMails",  icon: Mail,        color: T.orange,  bg: "#fff7ed", logo: logoExactMails,  page: "/tools/exact-mails" },
  { id: "trafera",     label: "Trafera",       short: "Trafera",       icon: Globe,       color: "#0891b2", bg: "#ecfeff", logo: logoTrafera,     page: "/tools/trafera" },
  { id: "hyperpitch",  label: "HyperPitch",    short: "Hyper\nPitch",  icon: Zap,         color: "#db2777", bg: "#fdf2f8", logo: logoHyperPitch,  page: "/tools/hyperpitch" },
  { id: "sdflow",    label: "SD Flow",      short: "SD\nFlow",      icon: Workflow,     color: "#4f46e5", bg: "#eef2ff", logo: logoSalesDriver, page: "/tools/sdflow" },
  { id: "sdlabs",    label: "SD Labs",      short: "SD\nLabs",      icon: FlaskConical, color: "#0d9488", bg: "#f0fdfa", logo: logoSalesDriver, page: "/tools/sd-labs" },
  { id: "sdhosting", label: "SD Hosting",   short: "SD\nHosting",   icon: Server,       color: "#15803d", bg: "#f0fdf4", logo: logoSalesDriver, page: "/tools/sd-hosting" },
  { id: "sdsender",  label: "SD Sender",    short: "SD\nSender",    icon: Send,         color: "#c026d3", bg: "#fdf4ff", logo: logoSalesDriver, page: "/tools/sd-sender" },
  { id: "sddeals",   label: "SD Deals",    short: "SD\nDeals",     icon: Tag,         color: T.orange,  bg: "#fff7ed", logo: logoSalesDriver, page: "/tools/sd-deals" },
  { id: "sdcrm",     label: "SD CRM",      short: "SD\nCRM",       icon: LayoutList,   color: "#2563eb", bg: "#eff6ff", logo: logoSalesDriver, page: "/tools/sd-crm" },
];

const TAB_COMPONENTS = {
  cora:       <TabSalesDriverCora />,
  mtnverify:   <TabMtnVerify />,
  mtndata:     <TabMtData />,
  leadsdriver: <TabLeadsDriver />,
  exactmails:  <TabExactMails />,
  trafera:     <TabTrafera />,
  hyperpitch:  <TabHyperPitch />,
  sdflow:     <TabSdFlow />,
  sdlabs:     <TabSdLabs />,
  sdhosting:  <TabSdHosting />,
  sdsender:   <TabSdSender />,
  sddeals:    <TabSdDeals />,
  sdcrm:      <TabSdCrm />,
};

/* ════════════════════════════════════════
   PLAYGROUND PANEL
 ════════════════════════════════════════ */
function PlaygroundPanel() {
  const [activeId, setActiveId] = useState("mtnverify");
  const tool = TOOLS.find(t => t.id === activeId) || TOOLS[0];

  return (
    <div
      id="hero-playground-panel"
      className="rounded-2xl border bg-white overflow-hidden w-full"
      style={{
        borderColor: T.border,
        boxShadow: "0 0 0 1px rgba(15,23,42,0.06), 0 4px 6px -1px rgba(15,23,42,0.07), 0 20px 48px -12px rgba(15,23,42,0.14)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: T.border, background: T.bg }}>
        <span className="w-3 h-3 rounded-full bg-[#fc5c57]" />
        <span className="w-3 h-3 rounded-full bg-[#fdbc40]" />
        <span className="w-3 h-3 rounded-full bg-[#34c84a]" />
        <span className="mx-auto text-[12px] font-bold" style={{ color: T.muted }}>
          SalesDriver Free Playground
        </span>
      </div>

      {/* Tool tabs — horizontal scroll on small screens */}
      <div
        className="hero-playground-tabs flex items-center gap-1.5 px-3 py-2 border-b overflow-x-auto overscroll-x-contain touch-pan-x"
        style={{ borderColor: T.border, background: "#f8fafc", WebkitOverflowScrolling: "touch" }}
      >
        {TOOLS.map((t) => {
          const active = activeId === t.id;
          const abbr =
            t.id === "cora" ? "CO"
            : t.id === "mtnverify" ? "MV"
            : t.id === "mtndata" ? "MD"
            : t.id === "leadsdriver" ? "LD"
            : t.id === "exactmails" ? "EM"
            : t.id === "trafera" ? "TR"
            : t.id === "hyperpitch" ? "HP"
            : t.id === "sdflow" ? "SF"
            : t.id === "sdlabs" ? "SL"
            : t.id === "sdhosting" ? "SH"
            : t.id === "sdsender" ? "SN"
            : t.id === "sdcrm" ? "CR"
            : "SD";
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                triggerPlaygroundVisitorTracking();
                setActiveId(t.id);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg shrink-0 transition-all cursor-pointer"
              style={{
                background: active ? "#fff" : "transparent",
                border: `1.5px solid ${active ? t.color : "transparent"}`,
                boxShadow: active ? `0 1px 4px ${t.color}30` : "none",
              }}
            >
              <div
                className="flex items-center justify-center rounded-md shrink-0"
                style={{
                  width: 20,
                  height: 20,
                  background: active ? t.color : t.color + "20",
                  fontSize: 8,
                  fontWeight: 900,
                  letterSpacing: "0.02em",
                  color: active ? "#fff" : t.color,
                }}
              >
                {abbr}
              </div>
              <span
                className="text-[10px] font-bold whitespace-nowrap"
                style={{ color: active ? t.color : T.muted }}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active tab content — scrollable on small screens */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="p-3"
        >
          {/* Tool logo header */}
          <div className="flex items-center gap-2.5 mb-2.5 pb-2.5 border-b flex-wrap" style={{ borderColor: T.border }}>
            <img
              src={tool.logo}
              alt={tool.label}
              className="object-contain shrink-0"
              style={{ width: 80, height: 40 }}
            />
            <div className="ml-auto flex items-center gap-3 flex-wrap justify-end">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: T.green }} />
                <span className="text-[9px] font-bold" style={{ color: T.green }}>
                  LIVE DEMO
                </span>
              </div>
              {tool.page && (
                <Link
                  to={tool.page}
                  className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors hover:bg-slate-100"
                  style={{ color: tool.color, border: `1.5px solid ${tool.color}40` }}
                >
                  View page <ArrowRight size={11} />
                </Link>
              )}
            </div>
          </div>
          <div
            className="hero-playground-content overflow-x-auto overscroll-x-contain touch-pan-x -mx-1 px-1"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="min-w-[560px] md:min-w-0 w-full">
              {TAB_COMPONENTS[activeId]}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <div
        className="text-center text-[10px] py-2 px-3 border-t flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1"
        style={{ color: "#94a3b8", borderColor: T.border, background: T.bg }}
      >
        <span>5 free credits per visitor every day</span>
        <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline-block" />
        <span>Credits reset daily</span>
        <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline-block" />
        <span>Sample data shown</span>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
export default function SalesDriverHeroNew() {
  return (
    <section className="bg-white w-full overflow-x-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] mb-3" style={{ color: T.orange }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#fff7ed" }}>
                <Star className="w-3 h-3" style={{ color: T.orange }} />
              </span>
              ONE B2B SALES PLATFORM
            </div>

            <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold leading-[1.06] tracking-tight" style={{ color: T.navy }}>
              We drive sales for B2B businesses.
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: T.muted, maxWidth: 380 }}>
              Not leads. Not lists. Find the companies that need what you sell, reach them by email and LinkedIn, and run the pipeline from one platform that replaces eight or more sales tools.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-stretch gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("hero-playground-input");
                  if (el) {
                    el.focus();
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-extrabold px-6 py-3.5 text-sm transition-all hover:opacity-90 cursor-pointer"
                style={{ background: T.orange, boxShadow: "0 6px 20px rgba(249,115,22,0.30)" }}
              >
                Try it now: 5 free credits <ArrowRight size={16} />
              </button>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white font-bold px-5 py-3 text-sm hover:bg-slate-50 transition-colors"
                style={{ borderColor: T.border, color: T.navy }}
              >
                Plans from $99
              </Link>
            </div>
            <p className="mt-2 text-[11px] font-medium" style={{ color: T.muted }}>
              No signup. Credits reset every day.
            </p>

            {/* Proof stack (public/md/home.md) — fills left column to align with playground panel */}
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4" style={{ maxWidth: 380 }}>
              {[
                { n: "$100M+", l: "in sales generated" },
                { n: "10,000+", l: "meetings booked" },
                { n: "20+ years", l: "experience" },
                { n: "2,000+", l: "operators on the platform" },
              ].map((s) => (
                <div key={s.l} className="pl-3" style={{ borderLeft: `2px solid ${T.border}` }}>
                  <div className="text-[20px] font-extrabold leading-none" style={{ color: T.navy }}>{s.n}</div>
                  <div className="text-[11.5px] mt-1 leading-snug" style={{ color: T.muted }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 w-full">
            <PlaygroundPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

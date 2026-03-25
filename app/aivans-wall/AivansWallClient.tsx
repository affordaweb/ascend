'use client'
import { useState } from 'react'

type CardType = 'all' | 'insight' | 'quote' | 'event' | 'esg'

interface Post {
  id: number
  type: Exclude<CardType, 'all'>
  text: string
  date: string
  reactions: number
  comments?: number
  emoji: string
  bgFrom: string
  bgTo: string
  featured?: boolean
  tag: string
  tagBg?: string
  tagColor?: string
}

const POSTS: Post[] = [
  {
    id: 1,
    type: 'insight',
    featured: true,
    emoji: '🌿',
    bgFrom: '#3a7050',
    bgTo: '#2D5A3D',
    tag: '💡 Featured Insight',
    text: '"Organizational development is not about fixing what is broken. It is about growing what is already alive. When we approach our clients, we don\'t arrive as repairmen — we arrive as partners in a shared journey. The Filipino concept of <em>bayanihan</em> has always been our north star: the understanding that no one rises alone, and that the strength of any institution is ultimately the strength of its people\'s <em>loob</em>."',
    date: 'March 18, 2026',
    reactions: 148,
    comments: 32,
  },
  {
    id: 2,
    type: 'quote',
    emoji: '',
    bgFrom: '',
    bgTo: '',
    tag: '✦ Quote',
    text: 'Integrity is not what you do when people are watching. It is what you do when only your <em>loob</em> can see.',
    date: 'March 12, 2026',
    reactions: 210,
  },
  {
    id: 3,
    type: 'insight',
    emoji: '🧭',
    bgFrom: '#eef4f0',
    bgTo: '#d4ead9',
    tag: '💡 Insight',
    text: 'Just wrapped up a two-day strategic planning workshop with a regional NGO in Mindanao. What struck me most was not the strategy itself — it was the moment the team realized they already had the answers. Our job as consultants is often not to bring new ideas, but to create the space where existing wisdom can surface.',
    date: 'March 8, 2026',
    reactions: 94,
    comments: 18,
  },
  {
    id: 4,
    type: 'esg',
    emoji: '🌱',
    bgFrom: '#e8f4e8',
    bgTo: '#c8e6c9',
    tag: '🌱 ESG/SDG',
    tagBg: 'rgba(45,90,61,0.08)',
    tagColor: '#2D5A3D',
    text: 'A lot of organizations think ESG is just a reporting requirement. It is not. It is a lens. When you embed Environmental, Social, and Governance thinking into how you make everyday decisions — not just annual reports — that is when real transformation happens. SDG alignment is not a destination. It is a way of walking.',
    date: 'Feb 28, 2026',
    reactions: 76,
    comments: 14,
  },
  {
    id: 5,
    type: 'quote',
    emoji: '',
    bgFrom: '',
    bgTo: '',
    tag: '✦ Quote',
    text: '<em>Kapwa</em> is not a soft idea. It is the most powerful organizational principle I know — the radical understanding that your success and mine are the same success.',
    date: 'Feb 22, 2026',
    reactions: 185,
  },
  {
    id: 6,
    type: 'event',
    emoji: '📅',
    bgFrom: '#fdf4ea',
    bgTo: '#fce8cc',
    tag: '📅 Event Recap',
    tagBg: '#fdf4ea',
    tagColor: '#C8883A',
    text: 'Thank you to everyone who joined our ESG Seminar last Saturday! Over 80 participants from government, NGO, and private sector gathered to explore how ESG principles can be localized for Filipino organizations. The energy in that room was exactly what <em>kapwa</em> feels like in action. Recordings available — message us for access.',
    date: 'Feb 15, 2026',
    reactions: 112,
    comments: 41,
  },
  {
    id: 7,
    type: 'insight',
    emoji: '🤝',
    bgFrom: '#f0f4ff',
    bgTo: '#dce8ff',
    tag: '💡 Insight',
    text: 'Leadership is not a position. It is a practice. The most effective leaders I have worked with over 15 years all share one thing — they are more curious than they are certain. They ask better questions than they give answers. That posture of humility is what creates the trust that makes teams actually move.',
    date: 'Feb 10, 2026',
    reactions: 67,
    comments: 9,
  },
  {
    id: 8,
    type: 'quote',
    emoji: '',
    bgFrom: '',
    bgTo: '',
    tag: '✦ Quote',
    text: 'The best organizational report is not the one with the most data. It is the one that makes the right people ask the right questions at the right time.',
    date: 'Jan 30, 2026',
    reactions: 230,
  },
  {
    id: 9,
    type: 'event',
    emoji: '🎓',
    bgFrom: '#fff8e1',
    bgTo: '#ffecb3',
    tag: '📅 Upcoming',
    tagBg: '#fdf4ea',
    tagColor: '#C8883A',
    text: 'Excited to announce our next open Capacity Building Workshop — April 2026 in Quezon City. Designed for HR leads, team managers, and organizational development practitioners. Limited slots. Registration opens soon — drop a comment or send us a message to be notified.',
    date: 'Jan 22, 2026',
    reactions: 88,
    comments: 55,
  },
]

const COUNTS = {
  all: POSTS.length,
  insight: POSTS.filter(p => p.type === 'insight').length,
  quote: POSTS.filter(p => p.type === 'quote').length,
  event: POSTS.filter(p => p.type === 'event').length,
  esg: POSTS.filter(p => p.type === 'esg').length,
}

const FILTERS: { key: CardType; label: string }[] = [
  { key: 'all', label: 'All Posts' },
  { key: 'insight', label: '💡 Insights' },
  { key: 'quote', label: '✦ Quotes' },
  { key: 'event', label: '📅 Events' },
  { key: 'esg', label: '🌱 ESG/SDG' },
]

export default function AivansWallClient() {
  const [filter, setFilter] = useState<CardType>('all')
  const [sort, setSort] = useState<'newest' | 'popular'>('newest')

  const visible = POSTS
    .filter(p => filter === 'all' || p.type === filter)
    .sort((a, b) => sort === 'popular' ? b.reactions - a.reactions : 0)

  return (
    <main style={{ background: '#f0f4f8', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes wall-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes wall-cardIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .wall-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(15,39,68,0.15) !important; }
        .wall-filter-btn:hover { color: #1e3a5f !important; }
        .wall-load-btn:hover { background: linear-gradient(to right,#f59e0b,#fbbf24) !important; color: white !important; border-color: #f59e0b !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,158,11,0.35); }
        .wall-read-more:hover { gap: 7px !important; }
        .wall-fb-btn:hover { background: #1565d8 !important; transform: translateY(-1px); }
        .wall-masonry { columns: 3; column-gap: 24px; }
        @media(max-width:1024px){ .wall-masonry{columns:2} }
        @media(max-width:640px){ .wall-masonry{columns:1} .wall-header-inner{flex-direction:column!important;align-items:flex-start!important} .wall-header-right{align-items:flex-start!important} .wall-filter-inner{padding:0 24px!important} .wall-main-pad{padding:32px 24px 60px!important} .wall-featured{flex-direction:column!important} .wall-featured-img{width:100%!important;min-height:160px!important} }
      `}</style>

      {/* Header */}
      <header style={{ background: '#1A2744', padding: '72px 48px 56px', position: 'relative', overflow: 'hidden', paddingTop: '96px' }}>
        <div style={{ position:'absolute', top:-80, left:-80, width:400, height:400, background:'radial-gradient(circle, rgba(200,136,58,0.15) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-60, right:'10%', width:300, height:300, background:'radial-gradient(circle, rgba(45,90,61,0.25) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="wall-header-inner" style={{ maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:32, position:'relative', zIndex:1 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(200,136,58,0.15)', border:'1px solid rgba(200,136,58,0.3)', color:'#e09f52', fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 14px', borderRadius:20, marginBottom:20 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#e09f52', display:'inline-block', animation:'wall-blink 2s infinite' }} />
              Live from Facebook
            </div>
            <h1 style={{ fontFamily:'var(--font-fraunces), serif', fontSize:'clamp(2.8rem, 6vw, 5rem)', fontWeight:500, color:'white', lineHeight:1, letterSpacing:'-0.03em', marginBottom:16 }}>
              Aivan&apos;s <em style={{ fontStyle:'italic', color:'#D4A853' }}>Wall</em>
            </h1>
            <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.5)', fontWeight:300, maxWidth:420, lineHeight:1.7 }}>
              Thoughts, insights, and reflections from Aivan Alvarez — curated directly from his Facebook page and brought to life here.
            </p>
          </div>
          <div className="wall-header-right" style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:16, flexShrink:0 }}>
            <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:20, padding:'20px 24px', display:'flex', alignItems:'center', gap:16, backdropFilter:'blur(10px)' }}>
              <div style={{ width:56, height:56, borderRadius:'50%', background:'linear-gradient(135deg, #C8883A, #D4A853)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fraunces), serif', fontSize:'1.5rem', fontWeight:600, color:'white', flexShrink:0, border:'2px solid rgba(255,255,255,0.2)' }}>A</div>
              <div>
                <div style={{ fontFamily:'var(--font-fraunces), serif', fontSize:'1.1rem', fontWeight:600, color:'white', lineHeight:1.2 }}>Aivan Alvarez</div>
                <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.5)', fontWeight:300, letterSpacing:'0.04em', marginTop:3 }}>Founder · Ascend Development Solutions</div>
              </div>
            </div>
            <a href="https://www.facebook.com/100080045962662/?locale=tl_PH" target="_blank" rel="noopener noreferrer" className="wall-fb-btn" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#1877F2', color:'white', fontSize:'0.8rem', fontWeight:500, padding:'10px 20px', borderRadius:10, textDecoration:'none', transition:'background 0.2s, transform 0.2s', border:'none', cursor:'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <nav style={{ background:'white', borderBottom:'1px solid rgba(45,90,61,0.1)', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 20px rgba(26,39,68,0.06)' }}>
        <div className="wall-filter-inner" style={{ maxWidth:1200, margin:'0 auto', padding:'0 48px', display:'flex', alignItems:'center', overflowX:'auto' }}>
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className="wall-filter-btn" style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'inherit', fontSize:'0.8rem', fontWeight: filter === f.key ? 500 : 400, color: filter === f.key ? '#2D5A3D' : '#7a8499', padding:'18px 20px', whiteSpace:'nowrap', borderBottom: filter === f.key ? '2px solid #2D5A3D' : '2px solid transparent', transition:'all 0.2s', display:'flex', alignItems:'center', gap:6 }}>
              {f.label}
              <span style={{ background: filter === f.key ? '#2D5A3D' : '#eef4f0', color: filter === f.key ? 'white' : '#2D5A3D', fontSize:'0.65rem', fontWeight:600, padding:'2px 7px', borderRadius:10 }}>{COUNTS[f.key]}</span>
            </button>
          ))}
          <div style={{ flex:1 }} />
          <select value={sort} onChange={e => setSort(e.target.value as 'newest' | 'popular')} style={{ background:'none', border:'1px solid rgba(45,90,61,0.1)', fontFamily:'inherit', fontSize:'0.78rem', color:'#7a8499', padding:'7px 12px', borderRadius:8, cursor:'pointer', outline:'none', margin:'auto 0' }}>
            <option value="newest">Newest first</option>
            <option value="popular">Most reactions</option>
          </select>
        </div>
      </nav>

      {/* Main */}
      <div className="wall-main-pad" style={{ maxWidth:1200, margin:'0 auto', padding:'48px 48px 80px', position:'relative', zIndex:1 }}>

        {/* Masonry grid */}
        <div className="wall-masonry">
          {visible.map((post, i) => {
            if (post.featured) return (
              <div key={post.id} className="wall-card-hover wall-featured" style={{ breakInside:'avoid', display:'flex', flexDirection:'row', marginBottom:32, background:'#0f2744', borderRadius:20, border:'1px solid transparent', overflow:'hidden', transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s', cursor:'pointer', animation:`wall-cardIn 0.5s ease ${i * 0.05}s both` }}>
                <div className="wall-featured-img" style={{ width:'45%', flexShrink:0, minHeight:220, background:'linear-gradient(135deg, #1e3a5f, #0f2744)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem' }}>
                  {post.emoji}
                </div>
                <div style={{ padding:32, flex:1 }}>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:5, background:'rgba(245,158,11,0.15)', color:'#fbbf24', fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 10px', borderRadius:6, marginBottom:12 }}>{post.tag}</span>
                  <p style={{ fontFamily:'var(--font-fraunces), serif', fontSize:'1.15rem', lineHeight:1.7, color:'white', fontWeight:400, display:'-webkit-box', WebkitLineClamp:6, WebkitBoxOrient:'vertical', overflow:'hidden' }} dangerouslySetInnerHTML={{ __html: post.text }} />
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:14, borderTop:'1px solid rgba(255,255,255,0.1)', marginTop:14 }}>
                    <span style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:300 }}>{post.date}</span>
                    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:300 }}>❤️ {post.reactions}</span>
                      {post.comments && <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:300 }}>💬 {post.comments}</span>}
                    </div>
                    <a href="https://www.facebook.com/ascenddevelopmentsolutions" target="_blank" rel="noopener noreferrer" className="wall-read-more" style={{ fontSize:'0.75rem', color:'#fbbf24', fontWeight:500, textDecoration:'none', display:'flex', alignItems:'center', gap:4, transition:'gap 0.2s' }}>Read on Facebook →</a>
                  </div>
                </div>
              </div>
            )

            if (post.type === 'quote') return (
              <div key={post.id} className="wall-card-hover" style={{ breakInside:'avoid', background:'linear-gradient(135deg, #0f2744 0%, #1e3a5f 100%)', borderRadius:20, marginBottom:24, border:'1px solid rgba(245,158,11,0.15)', overflow:'hidden', transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s', cursor:'pointer', animation:`wall-cardIn 0.5s ease ${i * 0.05}s both` }}>
                <div style={{ padding:28 }}>
                  <span style={{ fontFamily:'var(--font-fraunces), serif', fontSize:'5rem', lineHeight:0.5, color:'#f59e0b', opacity:0.35, display:'block', marginBottom:12 }}>&ldquo;</span>
                  <p style={{ fontFamily:'var(--font-fraunces), serif', fontSize:'1.25rem', fontStyle:'italic', color:'white', lineHeight:1.6, fontWeight:400 }} dangerouslySetInnerHTML={{ __html: post.text }} />
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 22px 18px', borderTop:'1px solid rgba(255,255,255,0.08)', marginTop:14 }}>
                  <span style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:300 }}>{post.date}</span>
                  <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:300 }}>❤️ {post.reactions}</span>
                  <a href="https://www.facebook.com/ascenddevelopmentsolutions" target="_blank" rel="noopener noreferrer" className="wall-read-more" style={{ fontSize:'0.75rem', color:'#fbbf24', fontWeight:500, textDecoration:'none', display:'flex', alignItems:'center', gap:4, transition:'gap 0.2s' }}>View →</a>
                </div>
              </div>
            )

            return (
              <div key={post.id} className="wall-card-hover" style={{ breakInside:'avoid', background:'white', borderRadius:20, marginBottom:24, border:'1px solid rgba(30,58,95,0.1)', overflow:'hidden', transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s', cursor:'pointer', animation:`wall-cardIn 0.5s ease ${i * 0.05}s both` }}>
                <div style={{ width:'100%', aspectRatio:'16/9', background:`linear-gradient(135deg, ${post.bgFrom}, ${post.bgTo})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem' }}>
                  {post.emoji}
                </div>
                <div style={{ padding:'22px 22px 16px' }}>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:5, background: post.tagBg ?? 'rgba(30,58,95,0.07)', color: post.tagColor ?? '#1e3a5f', fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 10px', borderRadius:6, marginBottom:12 }}>{post.tag}</span>
                  <p style={{ fontSize:'0.9rem', lineHeight:1.7, color:'#1a1a2e', fontWeight:300, display:'-webkit-box', WebkitLineClamp:5, WebkitBoxOrient:'vertical', overflow:'hidden' }} dangerouslySetInnerHTML={{ __html: post.text }} />
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 22px 18px', borderTop:'1px solid rgba(30,58,95,0.08)', marginTop:14 }}>
                  <span style={{ fontSize:'0.72rem', color:'#7a8499', fontWeight:300 }}>{post.date}</span>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.72rem', color:'#7a8499', fontWeight:300 }}>❤️ {post.reactions}</span>
                    {post.comments && <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.72rem', color:'#7a8499', fontWeight:300 }}>💬 {post.comments}</span>}
                  </div>
                  <a href="https://www.facebook.com/ascenddevelopmentsolutions" target="_blank" rel="noopener noreferrer" className="wall-read-more" style={{ fontSize:'0.75rem', color:'#f59e0b', fontWeight:500, textDecoration:'none', display:'flex', alignItems:'center', gap:4, transition:'gap 0.2s' }}>Read more →</a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Load more */}
        <div style={{ textAlign:'center', marginTop:16 }}>
          <a href="https://www.facebook.com/ascenddevelopmentsolutions" target="_blank" rel="noopener noreferrer" className="wall-load-btn" style={{ background:'white', border:'1.5px solid rgba(30,58,95,0.15)', color:'#1e3a5f', fontFamily:'inherit', fontSize:'0.85rem', fontWeight:500, padding:'14px 36px', borderRadius:50, cursor:'pointer', transition:'all 0.25s', display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            See more on Facebook
          </a>
        </div>
      </div>
    </main>
  )
}

'use client'
import { useState, useRef, useEffect } from 'react'

interface Msg { role: 'user' | 'assistant'; content: string }

const GREEN       = '#2D5A3D'
const GREEN_LIGHT = '#3a7050'
const OCHRE       = '#C8883A'
const GOLD        = '#D4A853'
const NAVY        = '#1A2744'
const OFFWHITE    = '#F5F0E8'
const MUTED       = '#7a8499'

export default function AskAivanWidget() {
  const [open, setOpen]               = useState(false)
  const [msgs, setMsgs]               = useState<Msg[]>([])
  const [input, setInput]             = useState('')
  const [typing, setTyping]           = useState(false)
  const [showQuick, setShowQuick]     = useState(true)
  const [hoverSend, setHoverSend]     = useState(false)
  const [hoverTrigger, setHoverTrigger] = useState(false)
  const bottomRef  = useRef<HTMLDivElement>(null)
  const areaRef    = useRef<HTMLDivElement>(null)
  const taRef      = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  async function send(text: string) {
    if (!text.trim() || typing) return
    setShowQuick(false)
    const next: Msg[] = [...msgs, { role: 'user', content: text }]
    setMsgs(next)
    setInput('')
    if (taRef.current) taRef.current.style.height = 'auto'
    setTyping(true)

    try {
      const res  = await fetch('/api/ask-aivan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text
        ?? (data.error ? `Pasensya na — ${data.error}` : 'Pasensya na — something went wrong. Please try again.')
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Pasensya na, I had trouble connecting. Please try again.' }])
    }
    setTyping(false)
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  function resize(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px'
    setInput(e.target.value)
  }

  const QUICK = ['What services do you offer?', 'What is ESG?', 'Tell me about Kapwa & Loob', 'How can ADS help my org?']

  return (
    <>
      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes aivan-slideUp {
          from { opacity:0; transform:translateY(24px) scale(0.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes aivan-fadeIn {
          from { opacity:0; transform:translateY(6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes aivan-pulse {
          0%,100% { transform:scale(1); opacity:1; }
          50%      { transform:scale(1.35); opacity:0.6; }
        }
        @keyframes aivan-typing {
          0%,60%,100% { opacity:0.35; transform:translateY(0); }
          30%          { opacity:1;    transform:translateY(-4px); }
        }
        .aivan-dot:nth-child(2){ animation-delay:0.2s!important; }
        .aivan-dot:nth-child(3){ animation-delay:0.4s!important; }
        .aivan-qr:hover { background:${GREEN}!important; color:#fff!important; border-color:${GREEN}!important; transform:translateY(-1px); }
        .aivan-msg-area::-webkit-scrollbar { width:4px; }
        .aivan-msg-area::-webkit-scrollbar-thumb { background:rgba(45,90,61,0.2); border-radius:2px; }
        .aivan-close:hover { background:rgba(255,255,255,0.25)!important; }
        .aivan-input-wrap:focus-within { border-color:${GREEN}!important; }
      `}</style>

      {/* ── Floating trigger ── */}
      <button
        onClick={() => setOpen(v => !v)}
        onMouseEnter={() => setHoverTrigger(true)}
        onMouseLeave={() => setHoverTrigger(false)}
        aria-label="Ask Aivan"
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          width: 64, height: 64, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: `linear-gradient(135deg, ${GREEN}, ${GREEN_LIGHT})`,
          boxShadow: hoverTrigger
            ? '0 12px 40px rgba(45,90,61,0.55)'
            : '0 8px 32px rgba(45,90,61,0.40)',
          transform: hoverTrigger ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: OCHRE,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: '1.1rem', fontWeight: 600, color: 'white',
            }}>A</div>
            <span style={{
              position: 'absolute', top: 4, right: 4,
              width: 14, height: 14, borderRadius: '50%',
              background: OCHRE, border: '2px solid white',
              animation: 'aivan-pulse 2s infinite',
            }} />
          </>
        )}
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 104, right: 28, zIndex: 9998,
          width: 420, maxWidth: 'calc(100vw - 40px)',
          height: 620, maxHeight: 'calc(100vh - 120px)',
          background: 'white', borderRadius: 24,
          boxShadow: '0 20px 60px rgba(26,39,68,0.18)',
          border: '1px solid rgba(45,90,61,0.1)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'aivan-slideUp 0.45s cubic-bezier(0.34,1.56,0.64,1)',
        }}>

          {/* Header */}
          <div style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${GREEN} 100%)`,
            padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 14,
            position: 'relative', overflow: 'hidden', flexShrink: 0,
          }}>
            <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, background:'rgba(200,136,58,0.15)', borderRadius:'50%' }} />
            <div style={{ position:'absolute', bottom:-20, left:'30%', width:80, height:80, background:'rgba(255,255,255,0.05)', borderRadius:'50%' }} />
            <div style={{
              width: 48, height: 48, borderRadius: '50%', flexShrink: 0, zIndex: 1,
              background: `linear-gradient(135deg, ${OCHRE}, ${GOLD})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: '1.3rem', fontWeight: 600, color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
            }}>A</div>
            <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '1.15rem', fontWeight: 600, color: 'white', lineHeight: 1.2 }}>
                Aivan Alvarez
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300, letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: 2 }}>
                Founder · Ascend Development Solutions
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'aivan-pulse 2s infinite' }} />
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>Available now</span>
              </div>
            </div>
            <button
              className="aivan-close"
              onClick={() => setOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white',
                width: 32, height: 32, borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', transition: 'background 0.2s', zIndex: 1, position: 'relative',
              }}
            >✕</button>
          </div>

          {/* Messages */}
          <div
            ref={areaRef}
            className="aivan-msg-area"
            style={{
              flex: 1, overflowY: 'auto', padding: '20px 18px',
              display: 'flex', flexDirection: 'column', gap: 14,
              scrollBehavior: 'smooth',
            }}
          >
            {/* Welcome card */}
            <div style={{
              background: `linear-gradient(135deg, rgba(45,90,61,0.06), rgba(200,136,58,0.06))`,
              border: '1px solid rgba(45,90,61,0.1)', borderRadius: 16,
              padding: 16, textAlign: 'center', marginBottom: 4,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%', margin: '0 auto 10px',
                background: `linear-gradient(135deg, ${OCHRE}, ${GOLD})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: '1.5rem', fontWeight: 600, color: 'white',
                border: '3px solid white', boxShadow: '0 4px 14px rgba(200,136,58,0.3)',
              }}>A</div>
              <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '1.05rem', color: NAVY, fontWeight: 600, marginBottom: 4 }}>
                Mabuhay! I&apos;m Aivan.
              </div>
              <p style={{ fontSize: '0.78rem', color: MUTED, fontWeight: 300, lineHeight: 1.5 }}>
                Founder of Ascend Development Solutions. Ask me anything about our work, ESG/SDG, or how we can help your organization ascend.
              </p>
            </div>

            {/* Opening message */}
            <AiMsg text="Kamusta! I'm glad you're here. Whether you're exploring our services, curious about ESG and SDG, or simply want to understand how Filipino values like <em>kapwa</em> and <em>loob</em> shape the way we work — I'm here to help. What's on your mind?" />

            {/* Conversation */}
            {msgs.map((m, i) =>
              m.role === 'user'
                ? <UserMsg key={i} text={m.content} />
                : <AiMsg   key={i} text={m.content} />
            )}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', animation: 'aivan-fadeIn 0.3s ease' }}>
                <MsgAvatar ai />
                <div style={{
                  background: OFFWHITE, border: '1px solid rgba(45,90,61,0.08)',
                  padding: '14px 18px', borderRadius: 18, borderBottomLeftRadius: 4,
                  display: 'flex', gap: 5, alignItems: 'center',
                }}>
                  {[0,1,2].map(i => (
                    <span key={i} className="aivan-dot" style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: GREEN, opacity: 0.4,
                      display: 'inline-block',
                      animation: 'aivan-typing 1.2s infinite',
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {showQuick && (
            <div style={{ padding: '0 18px 12px', display: 'flex', flexWrap: 'wrap', gap: 8, flexShrink: 0 }}>
              {QUICK.map(q => (
                <button key={q} className="aivan-qr" onClick={() => send(q)} style={{
                  background: 'white', border: `1.5px solid rgba(45,90,61,0.25)`,
                  color: GREEN, fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 500,
                  padding: '7px 14px', borderRadius: 20, cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '14px 16px 16px', borderTop: '1px solid rgba(45,90,61,0.08)',
            display: 'flex', gap: 10, alignItems: 'flex-end', background: 'white', flexShrink: 0,
          }}>
            <div className="aivan-input-wrap" style={{
              flex: 1, background: OFFWHITE, borderRadius: 20,
              border: '1.5px solid rgba(45,90,61,0.12)',
              display: 'flex', alignItems: 'center', padding: '10px 16px',
              transition: 'border-color 0.2s',
            }}>
              <textarea
                ref={taRef}
                rows={1}
                value={input}
                onChange={resize}
                onKeyDown={handleKey}
                placeholder="Ask Aivan anything…"
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  fontFamily: 'inherit', fontSize: '0.875rem', color: NAVY,
                  resize: 'none', maxHeight: 80, lineHeight: 1.5,
                }}
              />
            </div>
            <button
              onClick={() => send(input)}
              onMouseEnter={() => setHoverSend(true)}
              onMouseLeave={() => setHoverSend(false)}
              style={{
                width: 42, height: 42, borderRadius: '50%',
                background: `linear-gradient(135deg, ${GREEN}, ${GREEN_LIGHT})`,
                border: 'none', cursor: 'pointer', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: hoverSend ? 'scale(1.08)' : 'scale(1)',
                boxShadow: hoverSend ? '0 6px 20px rgba(45,90,61,0.4)' : '0 4px 14px rgba(45,90,61,0.3)',
                transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: '0.63rem', color: MUTED, padding: '0 18px 12px', fontWeight: 300 }}>
            Ask Aivan is an AI assistant. For formal inquiries, contact info@ascenddevelopmentsolutions.org
          </div>
        </div>
      )}
    </>
  )
}

/* ── Sub-components ── */

function MsgAvatar({ ai }: { ai?: boolean }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: '50%', flexShrink: 0, marginTop: 2,
      background: ai
        ? `linear-gradient(135deg, ${OCHRE}, ${GOLD})`
        : `linear-gradient(135deg, ${NAVY}, #2a3d6e)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: ai ? 'var(--font-fraunces), serif' : 'inherit',
      fontSize: ai ? '0.85rem' : '0.72rem', fontWeight: ai ? 600 : 500,
      color: 'white',
    }}>
      {ai ? 'A' : 'You'}
    </div>
  )
}

function AiMsg({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, animation: 'aivan-fadeIn 0.3s ease' }}>
      <MsgAvatar ai />
      <div
        style={{
          maxWidth: '78%', padding: '12px 16px',
          borderRadius: 18, borderBottomLeftRadius: 4,
          fontSize: '0.875rem', lineHeight: 1.6,
          background: '#F5F0E8', border: '1px solid rgba(45,90,61,0.08)', color: NAVY,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}

function UserMsg({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, flexDirection: 'row-reverse', animation: 'aivan-fadeIn 0.3s ease' }}>
      <MsgAvatar />
      <div style={{
        maxWidth: '78%', padding: '12px 16px',
        borderRadius: 18, borderBottomRightRadius: 4,
        fontSize: '0.875rem', lineHeight: 1.6,
        background: `linear-gradient(135deg, ${GREEN}, ${GREEN_LIGHT})`,
        color: 'white',
      }}>
        {text}
      </div>
    </div>
  )
}

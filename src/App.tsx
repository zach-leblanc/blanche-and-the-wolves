import { Instagram } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-fuchsia-500/40 selection:text-white">
      {/* HERO */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop"
          alt="Electric guitar on stage with colorful lights"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Title as SVG overlay (replace with your band SVG) */}
        <div className="relative z-10 px-6">
          <BandTitleSVG className="w-[min(92vw,900px)] drop-shadow-[0_6px_16px_rgba(255,0,128,0.5)] mx-auto" />
          <p className="mt-6 text-center uppercase tracking-[0.3em] text-sm md:text-base text-fuchsia-200/80">
            Vintage vibes • Modern thunder
          </p>
        </div>

        {/* subtle animated glow */}
        <div className="pointer-events-none absolute -inset-32 opacity-30 blur-3xl mix-blend-screen bg-[conic-gradient(at_top_left,_#f0f_0%,_#0ff_20%,_#ff0_40%,_#f0f_60%,_#0ff_80%,_#ff0_100%)] animate-[spin_30s_linear_infinite]" />
      </section>

      {/* ABOUT / BLURB */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
        <p className="text-lg md:text-xl leading-relaxed text-zinc-200">
          Born in the echo of the British Invasion and raised on garage fuzz, <span className="font-semibold text-fuchsia-300">The Reverberators</span> bring
          a kaleidoscope of 60s rock — jangly guitars, swirling organs, and three‑part harmonies — to stages near you.
        </p>
      </section>

      {/* VIDEOS */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-20">
        <h2 className="sr-only">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResponsiveYouTube id="ScMzIvxBSi4" title="Live at The Cavern – Full Performance" />
          <ResponsiveYouTube id="ysz5S6PUM-U" title="Studio Session – Behind the Scenes" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-zinc-800/60 bg-zinc-900/40">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h3 className="text-xl md:text-2xl font-semibold tracking-wide uppercase text-fuchsia-300/90">
            Contact
          </h3>
          <ul className="mt-6 space-y-3 text-zinc-200">
            <li>
              Booking: <a className="underline decoration-fuchsia-400/60 underline-offset-4 hover:text-white" href="mailto:booking@reverberators.band">booking@reverberators.band</a>
            </li>
            <li>
              Press: <a className="underline decoration-fuchsia-400/60 underline-offset-4 hover:text-white" href="mailto:press@reverberators.band">press@reverberators.band</a>
            </li>
            <li>
              Management: <a className="underline decoration-fuchsia-400/60 underline-offset-4 hover:text-white" href="mailto:mgmt@reverberators.band">mgmt@reverberators.band</a>
            </li>
            <li className="pt-2">
              <a
                href="https://instagram.com/your_band_handle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <span className="p-2 rounded-full bg-zinc-800/80 group-hover:bg-zinc-700 transition">
                  <Instagram className="w-5 h-5" />
                </span>
                <span className="underline decoration-fuchsia-400/60 underline-offset-4">
                  Follow on Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-zinc-400 py-8">
        © {new Date().getFullYear()} The Reverberators. All rights reserved.
      </footer>
    </div>
  )
}

function ResponsiveYouTube({ id, title }: { id: string; title: string }) {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

function BandTitleSVG({ className = '' }: { className?: string }) {
  // Replace this SVG with your own logo SVG.
  return (
    <svg
      viewBox="0 0 1200 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Band name logo"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="50%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#ffff00" />
        </linearGradient>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.04" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="240" fill="url(#grad)" opacity="0.15" filter="url(#grain)" />

      <g filter="url(#goo)">
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="120"
          fontWeight="800"
          letterSpacing="6"
          fill="url(#grad)"
          stroke="#111"
          strokeWidth="8"
          style={{ fontFamily: 'ui-serif, Georgia, serif' }}
        >
          THE REVERBERATORS
        </text>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="120"
          fontWeight="800"
          letterSpacing="6"
          fill="none"
          stroke="#f0abfc"
          strokeWidth="2"
          style={{ fontFamily: 'ui-serif, Georgia, serif' }}
        >
          THE REVERBERATORS
        </text>
      </g>

      <g opacity="0.35">
        <circle cx="140" cy="60" r="6" fill="#ff00ff" />
        <circle cx="180" cy="70" r="10" fill="#00ffff" />
        <circle cx="1020" cy="70" r="8" fill="#ffff00" />
      </g>
    </svg>
  )
}

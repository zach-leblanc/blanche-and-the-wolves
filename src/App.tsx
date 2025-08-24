import { Instagram } from "lucide-react";
import Logo from '../images/logo-white.png';
import Band from '../images/band.png';
import Hero from '../images/desert.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0a] text-zinc-100 selection:bg-amber-300/40 selection:text-black">
      <SiteNoise />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Biography />
        <News />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ——— Header ——— */
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl md:text-2xl tracking-wide">Blanche & The Wolves</a>
        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-zinc-300">
          <a className="hover:text-amber-300" href="#intro">Intro</a>
          <a className="hover:text-amber-300" href="#biographie">Biographie</a>
          <a className="hover:text-amber-300" href="#actus">Actualités</a>
          <a className="hover:text-amber-300" href="#music">Musique</a>
          <a className="hover:text-amber-300" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ——— Hero ——— */
function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[72vh] md:min-h-[82vh] flex items-end">
      <img
        src={Hero} 
        alt="Ambiance du désert"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-16 md:pb-24">
       <img src={Logo}/>
        <p className="mt-6 max-w-2xl text-zinc-300">
          Musique alternative — psyché garage — ballades seventies.
        </p>
      </div>
    </section>
  );
}

/* ——— Intro ——— */
function Intro() {
  return (
    <section id="intro" className="relative py-16 md:py-24 border-y border-white/10 bg-[#0d0d0c]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-8">Introduction</h2>
        <div className="space-y-4 text-lg leading-relaxed text-zinc-200">
          <p>Ce récit pourrait commencer par une légende ancienne qui nous parlerait d’un voyage…</p>
          <p>Bienvenue dans un monde mêlant rêveries, et songes oniriques</p>
          <p>La rencontre d’une contrée lointaine au temps suspendu, hors du passé et du futur, vous guidant sur les chemins d’une histoire commune à tous, laissons place à l’imaginaire</p>
          <p className="font-serif text-xl md:text-2xl text-amber-300 mt-6">Il était une fois Blanche &amp; The wolves</p>
          <p>Un groupe français de musique alternative composé de 5 musiciens issus de divers horizons musicaux, aux allures en constante évolution.</p>
        </div>
      </div>
    </section>
  );
}

/* ——— Biographie ——— */
function Biography() {
  return (
    <section id="biographie" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">Biographie</h2>
          <div className="space-y-4 text-zinc-200 leading-relaxed">
            <p>Après avoir parcouru les rues de Paris à pied ou à roulettes, s’est rassemblée une nouvelle meute. Psyché garage, aux allures de magie blanche pour soigner, la médecine du loup permets de guider, le symbolisme de la solidarité et de la protection des uns et des autres.</p>
            <p>Ces petits loups parisiens qui ont plus d’une corde à leur arc, chacun fort de leurs expériences diverses et références anglaises, vont vous faire voyager dans des contrées imaginaires en remettant à l’ordre du jour un goût certain pour les ballades seventies.</p>
            <p>Résonnance magnétique des doubles guitares et envolées aériennes, se succèdent, alternant, ballades, et riffs saccadés. Les mélodies suspendues nous paraissent douces et légères lorsque que l’on entend ces accords berçants en premier lieu. Mais ne vous fiez pas aux apparences, trop facile, ils vont vous sortir de votre rêverie à coups de riffs garage rock. Dans un esprit de voyage teinté d’humour et d’expériences rigolotes. Les Wolves broient parfois du noir, mais leur énergie folle nous fait vite oublier les mauvais jours pour reprendre la route.</p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <img
            src={Band}
            alt="Les loups"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ——— Actualités ——— */
function News() {
  const events = [
    {
      title: "Résidence — La Boule d’Or",
      date: "Août 2023",
      city: "Clamecy, FR",
      blurb: "Session de résidence — nouveaux arrangements et set immersif.",
    },
    {
      title: "Montmartre Festival",
      date: "25 septembre 2025",
      city: "Paris, FR",
      blurb: "Balades psychés et riffs garage dans l'iconique Montmartre",
    },
  ];

  return (
    <section id="actus" className="relative py-16 md:py-24 bg-[#0d0d0c] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-end md:justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Actualités</h2>
          <p className="text-zinc-400 mt-2 md:mt-0">Prochaines dates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((e, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black">
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide group-hover:text-amber-300 transition-colors">{e.title}</h3>
                <p className="mt-2 text-zinc-400 uppercase text-xs tracking-[0.25em]">{e.date} • {e.city}</p>
                <p className="mt-4 text-zinc-200 leading-relaxed">{e.blurb}</p>
              </div>
              <div className="absolute -inset-16 bg-[radial-gradient(closest-side,rgba(251,191,36,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Music ——— */
function Music() {
  return (
    <section id="music" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-8">Musique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vhWSzjzWe2A?si=It1syOXKrrwXhWHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
}

/* ——— Contact ——— */
function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#0d0d0c] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">Contact</h2>
        <ul className="space-y-3 text-lg">
          <li>
            Inquiries: {" "}
            <a className="underline decoration-amber-300/60 underline-offset-4 hover:text-amber-300" href="mailto:inquiries@thewolvesband.com">inquiries@thewolvesband.com</a>
          </li>
          <li className="flex items-center gap-3">
            <span className="sr-only">Instagram</span>
            <a href="https://instagram.com/thewolvesband" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group">
              <span className="p-2 rounded-full bg-zinc-800/80 group-hover:bg-zinc-700 transition">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="underline decoration-amber-300/60 underline-offset-4">@thewolvesband</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ——— Footer ——— */
function Footer() {
  return (
    <footer className="text-center text-xs text-zinc-500 py-12">
      © {new Date().getFullYear()} Blanche and The Wolves — Tous droits réservés.
    </footer>
  );
}

/* ——— Shared blocks ——— */
function YouTube({ id, title }: { id: string; title: string }) {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function SiteNoise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'160\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'1\\'/><feColorMatrix type=\\'saturate\\' values=\\'0\\'/><feComponentTransfer><feFuncA type=\\'linear\\' slope=\\'0.06\\'/></feComponentTransfer></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' /></svg>')",
      }}
    />
  );
}

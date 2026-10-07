import Seo from "../estructura/Seo";

export default function PaginaLegal({ title, description, canonical, children }) {
  return (
    <>
      <Seo title={`${title} | Volt Energía`} description={description} canonical={canonical} />
      <main id="main-content" className="min-h-[60vh] bg-slate-50 pb-16">
        <header className="bg-gradient-to-br from-slate-950 via-violet-950 to-primary px-6 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100">
              Volt Energía <span className="mx-2 text-white/50">·</span> Información legal
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{description}</p>
          </div>
        </header>
        <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-4 sm:px-6">
          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-xl shadow-slate-900/5 sm:px-10 sm:py-10">
            <div className="legal-copy">{children}</div>
            <div className="mt-10 flex flex-col gap-3 rounded-xl border border-violet-100 bg-violet-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">¿Tienes alguna consulta?</p>
                <p className="mt-1 text-sm text-slate-600">Escríbenos y te ayudaremos.</p>
              </div>
              <a className="font-semibold text-violet-800 underline decoration-violet-300 underline-offset-4 hover:text-violet-950" href="mailto:administracion@voltenergia.es">
                administracion@voltenergia.es
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

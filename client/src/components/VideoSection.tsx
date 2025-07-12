export default function VideoSection() {
  return (
    <section className="py-16 max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Demo INVENOR</h2>
      <div className="w-full h-64 bg-zinc-700 rounded-lg shadow-lg flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
          </svg>
          <p className="text-zinc-400">Demo video de INVENOR</p>
          <p className="text-zinc-500 text-sm mt-2">Video disponible próximamente</p>
        </div>
      </div>
    </section>
  )
}
// app/astrophotography/page.tsx
export default function Astrophotography() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-purple-500 bg-opacity-20 rounded-2xl mx-auto mb-8 flex items-center justify-center">
          <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-slate-100 mb-6">
          Astrophotography Gallery
        </h1>
        
        {/* Coming Soon */}
        <div className="inline-block px-6 py-3 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-lg font-semibold mb-8">
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          I'm currently processing and curating my deep sky images to showcase here. 
          This gallery will feature captures of nebulae, galaxies, and other celestial objects.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-2">🌌</div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Deep Sky Objects</h3>
            <p className="text-slate-400 text-sm">
              Nebulae, galaxies, and star clusters captured through long exposures
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-2">📸</div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Technical Details</h3>
            <p className="text-slate-400 text-sm">
              Equipment specs, exposure times, and processing techniques
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Image Processing</h3>
            <p className="text-slate-400 text-sm">
              Stacking, calibration, and enhancement workflows
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">EXIF Data</h3>
            <p className="text-slate-400 text-sm">
              Complete capture details for each image
            </p>
          </div>
        </div>

        {/* CTA */}
        <p className="text-slate-400 mb-6">
          Explore my technical work while the gallery is being prepared.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="/about"
            className="px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            About Me
          </a>
          <a 
            href="/blog"
            className="px-8 py-4 bg-slate-800 text-slate-100 border-2 border-slate-700 rounded-lg font-semibold hover:border-slate-600 transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </main>
  );
}
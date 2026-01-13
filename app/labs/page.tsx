// app/labs/page.tsx
export default function Labs() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-cyan-500 bg-opacity-20 rounded-2xl mx-auto mb-8 flex items-center justify-center">
          <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-slate-100 mb-6">
          Labs & Projects
        </h1>
        
        {/* Coming Soon */}
        <div className="inline-block px-6 py-3 bg-cyan-500 bg-opacity-20 text-cyan-400 rounded-full text-lg font-semibold mb-8">
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
          I'm currently documenting my infrastructure labs, including:
        </p>

        {/* Feature List */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-left mb-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span className="text-slate-300">
                <strong className="text-slate-100">AWS Transit Gateway Architecture</strong> - Multi-region networking with CloudFormation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span className="text-slate-300">
                <strong className="text-slate-100">Modern M&O Stack</strong> - Monitoring and observability infrastructure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span className="text-slate-300">
                <strong className="text-slate-100">Tailscale Mesh VPN</strong> - Scalable VPN deployment with IaC
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span className="text-slate-300">
                <strong className="text-slate-100">And more...</strong> - CloudFormation templates, network designs, and infrastructure patterns
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <p className="text-slate-400 mb-6">
          In the meantime, check out my professional experience and technical skills.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="/about"
            className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            View Experience
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
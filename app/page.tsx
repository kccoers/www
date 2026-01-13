export default function Home() {
  // Featured projects
  const featuredProjects = [
    {
      title: 'AWS Transit Gateway Architecture',
      description: 'Multi-region networking architecture using AWS Transit Gateway for centralized connectivity',
      technologies: ['AWS', 'Transit Gateway', 'CloudFormation'],
      link: '/labs'
    },
    {
      title: 'Modern M&O Stack',
      description: 'Complete monitoring and observability infrastructure with automated deployment',
      technologies: ['CloudWatch', 'Datadog', 'Terraform'],
      link: '/labs'
    },
    {
      title: 'Tailscale Mesh VPN',
      description: 'Scalable VPN solution deployment with infrastructure as code',
      technologies: ['Tailscale', 'CloudFormation', 'Networking'],
      link: '/labs'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-12 items-center">
          {/* Left side - Bold minimal text (3 columns) */}
          <div className="md:col-span-3">
            <p className="text-slate-500 text-lg mb-6">Hi, I'm</p>
            
            <h1 className="text-6xl font-bold text-slate-100 mb-4 leading-tight">
              Kevin Coers
            </h1>
            
            <h2 className="text-4xl font-bold text-slate-400 mb-8 leading-tight">
              I build scalable infrastructure
              <br />
              and photograph the universe.
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Infrastructure architect specializing in cloud solutions, modern networking, 
              and infrastructure as code. Currently managing infrastructure and cybersecurity 
              at Birchstone Residential.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="/labs"
                className="text-cyan-400 border-2 border-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all inline-block"
              >
                View My Work →
              </a>
            </div>
          </div>

          {/* Right side - Visual highlights (2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Cloud</h3>
                  <p className="text-slate-400 text-sm">AWS • Azure</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Multi-region architecture and Transit Gateway implementations
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Networking</h3>
                  <p className="text-slate-400 text-sm">SD-WAN • VPN</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                750+ managed devices across global infrastructure
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">IaC</h3>
                  <p className="text-slate-400 text-sm">CloudFormation</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Automated infrastructure deployment and management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Featured Projects</h2>
              <p className="text-slate-400">Infrastructure labs and experiments</p>
            </div>
            <a 
              href="/labs" 
              className="text-cyan-400 font-semibold hover:underline"
            >
              View all projects →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Astrophotography Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Astrophotography</h2>
              <p className="text-slate-400">Capturing deep sky objects</p>
            </div>
            <a 
              href="/astrophotography" 
              className="text-purple-400 font-semibold hover:underline"
            >
              View full gallery →
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Andromeda Galaxy', exposure: '180min' },
              { name: 'Orion Nebula', exposure: '120min' },
              { name: 'Horsehead Nebula', exposure: '240min' },
              { name: 'Pleiades', exposure: '90min' }
            ].map((image, index) => (
              <a
                key={index}
                href="/astrophotography"
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group-hover:border-purple-500 transition-all relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900 bg-opacity-95 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform border-t border-slate-700">
                    <p className="font-semibold text-slate-100 text-sm">{image.name}</p>
                    <p className="text-slate-400 text-xs">{image.exposure} exposure</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Interested in discussing infrastructure architecture, cloud solutions, or astrophotography?
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/about"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Learn More About Me
            </a>
            <a 
              href="https://github.com/kccoers" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-slate-100 border-2 border-slate-700 rounded-lg font-semibold hover:border-slate-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
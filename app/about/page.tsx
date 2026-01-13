'use client';

import { useState } from 'react';

export default function About() {
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0, 1]); // First two expanded by default

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Job history data
  const jobs = [
    {
      title: 'Manager, Infrastructure & Cybersecurity',
      company: 'Birchstone Residential',
      period: 'March 2025 - Current',
      sections: [
        {
          category: 'IT Strategy & Governance',
          description: 'Operates as a key strategic partner to leadership, responsible for budgeting, forecasting, and vendor management across the Infrastructure and Cybersecurity verticals. Developing the future organizational structure, including defining role hierarchies, salary bands, and job descriptions for upcoming team expansion.',
          responsibilities: [],
          technologies: ['Budgeting & Forcasting', 'IT Governance', 'Vendor Management', 'Organizational Strategy', 'Policy Development']
        },
        {
          category: 'Cybersecurity Operations',
          description: 'Established a modern security posture by implementing a Zero Trust architecture and deploying a managed EDR/MDR solution in coordination with a 3rd-party SOC. Acts as the primary Incident Responder, managing security events and compiling comprehensive Incident Reports.',
          responsibilities: [],
          technologies: ['Zero Trust Architecture', 'EDR/MDR', 'SIEM', 'Incident Response', 'SOC Coordination', 'Least Privilege']
        },
        {
          category: 'Cloud Infrastructure & Automation',
          description: 'Architected a scalable AWS environment using Control Tower and Service Control Policies (SCPs) to enforce governance. Championed a "CloudFormation First" culture, prioritizing serverless architectures (Lambda, Docker) to reduce operational overhead.',
          responsibilities: [],
          technologies: ['AWS', 'AWS Control Tower', 'Service Control Policies', 'CloudFormation', 'Serverless', 'Docker', 'AWS Lambda', 'Azure DevOps', 'CI/CD']
        },
        {
          category: 'Data & Observability Architecture',
          description: 'Currently architecting a Serverless Data Warehouse utilizing AWS Glue, Athena, and Power BI. Designing a centralized Monitoring & Observability stack to provide real-time visibility into system health and performance.',
          responsibilities: [],
          technologies: ['AWS Glue', 'Athena', 'Athena CTAS', 'Power BI', 'SharePoint', '']
        },
        {
          category: 'Networking & Voice Engineering',
          description: 'Led the migration of the entire organization to Cisco Webex, reducing voice spend by ~20% over 3 years. Designed a centralized DNS solution integrating threat feeds and a WireGuard-based VPN for secure access to shared services.',
          responsibilities: [],
          technologies: ['Cisco Webex', 'Network Automation', 'Cisco Meraki', 'WireGuard', 'DNS', 'DNS Security']
        }
      ]
    },
    {
      title: 'Infrastructure Architect',
      company: 'Omni Logistics, LLC',
      period: 'February 2018 - March 2025',
      sections: [
        {
          category: 'Cloud Architecture - AWS',
          description: 'Designed and maintained a multi-region AWS environment, utilizing AWS Transit Gateways for scalable inter-region and hybrid cloud connectivity. Worked with development teams to implement standardized infrastructure patterns for use across a variety of teams.',
          responsibilities: [],
          technologies: ['AWS', 'Transit Gateway', 'CloudFormation', 'AWS CLI', 'Cisco Meraki vMX']
        },
        {
          category: 'Global Networking Strategy',
          description: 'Architected LAN/WAN solutions for all facilities, managing a global Cisco Meraki fleet including 200+ firewalls, 750+ wireless APs, and 240+ switches across core and distribution layers.',
          responsibilities: [],
          technologies: ['Network Architecture', 'Cisco Meraki', 'Layer 3 Switching']
        },
        {
          category: "Security & Remote Access",
          description: "Deployed Cisco AnyConnect globally with Entra ID (SAML) authentication and Route53 traffic policies. Hardened network security via IDS/IPS and Advanced Malware Protection (AMP).",
          responsibilities: [],
          technologies: ['Cisco AnyConnect', 'Route53', 'Cisco Meraki vMX', 'IDS/IPS', 'AMP']
        },
        {
          category: "Wireless Engineering",
          description: "Led predictive designs and capacity planning using Ekahau AI Pro. Optimized performance through strategic AP placement, channel planning, and 802.1x authentication.",
          responsibilities: [],
          technologies: ['Cisco Meraki Wireless', 'Windows Network Policy Server', 'Ekahau AI Pro']
        },
        {
          category: "Network Automation",
          description: "Established a GitHub-based workflow for network engineering. Built scripts using PowerShell, Meraki Action Batches, and AWS Lambda to automate reporting, audits, and routing tasks.",
          responsibilities: [],
          technologies: ['GitHub', 'PowerShell', 'Cisco Meraki Action Batches']
        },
        {
          category: "Voice",
          description: "Led migration to and implementation of Cisco Webex from multiple source systems. Standardized call flows based on facility type and input from Business Operations and Sales Teams.",
          responsibilities: [],
          technologies: ['Cisco Webex']
        }
      ]
    },
    {
      title: 'Founder',
      company: 'C&R Information Technology Services',
      period: 'August 2014 - February 2017',
      sections: [
        {
          category: "MSP Operations",
          description: "Founded and operated a Managed Service Provider (MSP) delivering cost-effective IT solutions to small and medium-sized businesses, handling everything from client acquisition to technical delivery.",
          responsibilities: [],
          technologies: ['Business Strategy', 'MSP', 'Client Relations', 'Vendor Management']
        },
        {
          category: "Infrastructure Management",
          description: "Managed diverse client environments including Windows and Linux servers, Active Directory, and Office 365/Azure AD migrations.",
          responsibilities: [],
          technologies: ['Windows Server', 'Linux', 'Active Directory', 'Office 365', 'Azure AD', 'Exchange Online']
        },
        {
          category: "Security & Maintenance",
          description: "Oversaw patch management, secure remote access implementations (VPN), and proactive infrastructure maintenance to ensure business continuity for clients.",
          responsibilities: [],
          technologies: ['VPN', 'Patch Management', 'System Hardening']
        }
      ]
    },
    {
      title: 'PHP Developer',
      company: 'SOURCE Web Solutions',
      period: 'October 2013 - May 2014',
      sections: [
        {
          category: "Web Application Development",
          description: "Collaborated within a development team to build and deliver data-driven web applications for clients, ensuring scalable and maintainable codebases.",
          responsibilities: [],
          technologies: ['LAMP Stack', 'JavaScript', 'jQuery', 'CSS']
        },
        {
          category: "Version Control &  Server Administration",
          description: "Managed the LAMP stack environment including Linux server administration, Apache configuration, and version control workflows.",
          responsibilities: [],
          technologies: ['Linux', 'SVN', 'Git']
        }
      ]
    },
    {
      title: 'PCI Compliance, PHP Developer',
      company: 'Club Systems',
      period: 'June 2013 - October 2013',
      sections: [
        {
          category: "Security Compliance",
          description: "Architected secure network and hosting infrastructures for web applications. Implemented and conducted vulnerability scans against production servers to ensure Level 1 PCI Compliance.",
          responsibilities: [],
          technologies: ['PCI Compliance', 'Vulnerability Scanning', 'Networking', 'Security Auditing']
        },
        {
          category: "Full Stack Maintenance",
          description: "Maintained and enhanced features for the hosted LAMP stack environment to support member portal functionality.",
          responsibilities: [],
          technologies: ['LAMP Stack', 'SVN']
        }
      ]
    },
    {
      title: 'IT Manager',
      company: 'Southern Global Safety Services (SGSS)',
      period: 'July 2012 - May 2013',
      sections: [
        {
          category: "IT Operations",
          description: "Managed day-to-day IT operations, including Active Directory implementation, email administration, and Windows/Linux server oversight.",
          responsibilities: [],
          technologies: ['Active Directory', 'Windows Server', 'Linux', 'Networking', 'Email Administration']
        },
        {
          category: "Internal Tools Development",
          description: "Architected and built a custom sales portal to track business engagements, streamlining reporting and data management for the sales team.",
          responsibilities: [],
          technologies: ['LAMP Stack', 'JavaScript', 'jQuery', 'CSS']
        }
      ]
    },
    {
      title: 'Technical Support Representative',
      company: 'Club Systems',
      period: 'June 2011 - July 2012',
      sections: [
        {
          category: 'Technical Support',
          description: 'Provided end-user support for proprietary portal software and associated hardware, including receipt printers and signature pads',
          responsibilities: [],
          technologies: ['Hardware Support', 'Troubleshooting', 'Customer Service']
        },
        {
          category: 'Internal Tools Development',
          description: 'Developed an internal call-tracking system to enhance service efficiency for customer service representatives.',
          responsibilities: [],
          technologies: ['Linux', 'Networking', 'LAMP Stack', 'JavaScript', 'jQuery', 'CSS']
        }
      ]
    }
  ];

  // Certifications
  const certifications = [
    { name: 'Cisco CCNA', issuer: 'Cisco', year: '2023' },
    { name: 'Azure Fundamentals (AZ900)', issuer: 'Microsoft', year: '2023' },
    { name: 'Operationalizing Enterprise Architecture', issuer: 'Feld Group', year: '2023' }
  ];

  // Education
  const education = [
    {
      degree: 'BS Information Systems & Cybersecurity',
      school: 'ITT Technical Institute',
      graduated: '2012'
    },
    {
      degree: 'AS Computer Networking Systems',
      school: 'ITT Technical Institute',
      graduated: '2010'
    }
  ];

  // Technical Skills
  const skills = {
    Cloud: {
      color: 'cyan',
      items: [
        'Cloud: AWS',
        'Cloud: AWS Transit Gateway',
        'Cloud: AWS VPC',
        'Cloud: AWS EC2',
        'Cloud: AWS ECS',
        'Cloud: AWS Lambda',
        'Cloud: AWS S3'
      ]
    },
    Networking: {
      color: 'purple',
      items: [
        'Networking: Cisco Meraki Firewalls', 
        'Networking: Cisco Meraki Switches', 
        'Networking: Cisco Meraki Wireless', 
        'Networking: Cisco AnyConnect', 
        'Networking: VPN', 
        'Networking: SD-WAN'
      ]
    },
    Scripting: {
      color: 'green',
      items: [
        'Scripting: PowerShell', 
        'Scripting: NodeJS'
      ]
    },
    IaC: {
      color: 'orange',
      items: [
        'IaC: AWS CDK',
        'IaC: CloudFormation',
        'IAC: AWS CLI'
      ]
    },
    Monitoring: {
      color: 'blue',
      items: ['Monitoring: CloudWatch', 'Monitoring: Datadog', 'Monitoring: Grafana']
    }
  };

  const colorClasses = {
    cyan: 'bg-cyan-500 text-white',
    purple: 'bg-purple-500 text-white',
    green: 'bg-green-500 text-white',
    orange: 'bg-orange-500 text-white',
    blue: 'bg-blue-500 text-white'
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* About Me Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-slate-100 mb-6">About Me</h1>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed">
              Results-driven Infrastructure & Cybersecurity Manager focused on modernizing enterprise environments and hardening security postures. Specializes in translating business needs into high-performance, cost-effective technical solutions. Deeply experienced in AWS, global networking, and automation, with a leadership philosophy centered on scalability, zero-trust security, and the strategic reduction of operational friction.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Professional Experience</h2>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            
            <div className="space-y-8">
              {jobs.map((job, index) => {
                const isExpanded = expandedJobs.includes(index);
                const hasDetailedSections = job.sections && job.sections.length > 0;
                
                return (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 z-10"></div>
                    
                    {/* Job card */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
                      {/* Header - always visible */}
                      <button
                        onClick={() => toggleJob(index)}
                        className="w-full p-6 text-left flex justify-between items-start"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                          <p className="text-cyan-400 text-lg">{job.company}</p>
                          <p className="text-slate-400 text-sm mt-1">{job.period}</p>
                        </div>
                        
                        {/* Expand/collapse icon */}
                        <svg 
                          className={`w-6 h-6 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Expandable content */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6 border-t border-slate-700 pt-6">
                          {hasDetailedSections ? (
                            <div className="space-y-6">
                              {job.sections.map((section, sIndex) => (
                                <div key={sIndex}>
                                  {/* Category heading with accent */}
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
                                    <h4 className="text-lg font-bold text-slate-100">{section.category}</h4>
                                  </div>
                                  
                                  {/* Description */}
                                  <p className="text-slate-300 mb-3 ml-4">{section.description}</p>
                                  
                                  {/* Responsibilities */}
                                  <ul className="space-y-2 ml-4 mb-3">
                                    {section.responsibilities.map((resp, rIndex) => (
                                      <li key={rIndex} className="text-slate-400 text-sm flex items-start">
                                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  
                                  {/* Technologies Used */}
                                  {section.technologies && section.technologies.length > 0 && (
                                    <div className="ml-4">
                                      <p className="text-xs font-semibold text-slate-400 mb-2">Technologies Used:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {section.technologies.map((tech, tIndex) => (
                                          <span 
                                            key={tIndex} 
                                            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold border border-slate-600"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-slate-400">{job.summary}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Certifications & Professional Courses</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{cert.name}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Education</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-cyan-400 text-lg">{edu.school}</p>
                    <p className="text-slate-400 text-sm mt-1">Graduated {edu.graduated}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Technical Skills</h2>
          
          <div className="space-y-6">
            {Object.entries(skills).map(([category, { color, items }]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-slate-300 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => {
                    const classes = colorClasses[color as keyof typeof colorClasses];
                    return (
                      <span 
                        key={index} 
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${classes}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
const experience = [
  {
    role: 'Software Engineer',
    company: 'Paronsoft Solutions Ltd',
    period: 'Mar 2024 – Mar 2026',
    bullets: [
      'Built a custom template generation system for a B2B platform used by 800+ client companies, with drag-and-drop form controls',
      'Implemented QR-code-based PDF sharing for document distribution across 800+ client companies',
      'Applied pagination across high-traffic modules to prevent performance degradation on production datasets',
      'Developed stored procedures for data manipulation and reporting',
    ],
  },
  {
    role: 'Junior Programmer',
    company: 'Genuine Technology & Research Ltd',
    period: 'Jul 2023 – Feb 2024',
    bullets: [
      'Built 30+ ASP.NET APIs to fetch fundamental company data from third-party vendors, part of a fintech platform processing NYSE market data',
      'Pioneered Hangfire background job scheduling to automate daily data imports, eliminating manual data entry',
      'Built a Dockerized Python scraper for daily Fear & Greed Index data, integrated with Hangfire',
      'Developed Python + Flask internal analytics/reporting tools',
    ],
  },
  {
    role: 'Intern',
    company: 'Genuine Technology & Research Ltd',
    period: 'Apr 2023 – Jun 2023',
    bullets: [
      'Automated 2–3 repetitive manual workflows using Python',
      'Learned ASP.NET backend development and SQL stored procedures on the job',
    ],
  },
]

const projects = [
  {
    name: 'POS System',
    status: 'Ongoing',
    description:
      'Inventory and sales management system for small businesses, streamlining day-to-day operations while tracking sales and expenses, and making it easier for partners to run the business together.',
  },
  {
    name: 'Inquestvet',
    status: 'Live',
    description:
      'E-commerce and knowledge center for pet and veterinary products.',
  },
  {
    name: 'Certificate Generator',
    status: 'Live',
    description:
      'Built for Inquest: organizers input a training topic and date to generate a shareable link, valid for 3 days. Participants visit the link, enter their name, and download a personalized certificate. Used by real training participants.',
  },
]

function WorkTab() {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {experience.map((job) => (
          <div key={job.role} className="mb-6">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-sm text-gray-400">
              {job.company} — {job.period}
            </p>
            <ul className="list-disc list-inside mt-2">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className="mb-4">
            <h3 className="text-lg font-semibold">
              {project.name}{' '}
              <span className="text-sm text-gray-400">({project.status})</span>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default WorkTab
const openSourceProjects = [
  {
    name: 'pet-health-nlp',
    description:
      "A lightweight NLP tool that reads pet health text — an owner's description or a vet's clinical note — and extracts a likely condition category plus key symptom keywords, turning unstructured text into structured, searchable data. Works across species (cats, dogs, rabbits, and more), validated at ~86% accuracy on a 2,000-row dataset. Actively developed in public, working toward a JOSS submission — issues and PRs welcome.",
    link: 'https://github.com/mazfahim/pet-health-nlp',
  },
]

function ShowcaseTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Open Source</h2>
      {openSourceProjects.map((project) => (
        <div key={project.name} className="mb-6">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" className="text-blue-400 underline">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  )
}

export default ShowcaseTab
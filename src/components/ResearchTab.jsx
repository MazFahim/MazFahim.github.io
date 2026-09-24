const research = [
  {
    title: 'Syndromic Disease Classification from Free-Text Veterinary Clinical Records',
    status: 'Ongoing',
    description:
      'Building and evaluating an NLP pipeline on PetEVAL, a benchmark of 17,600 annotated veterinary clinical records, reproducing published baseline results (BERT-base, PetBERT) and extending them with a cross-clinic generalization analysis not addressed in the original benchmark paper.',
  },
  {
    title: 'Bangla Word Sense Disambiguation',
    status: '2022',
    description:
      'Senior BSc project. Built a novel dataset from scratch and applied and tuned multiple classifiers (SVM, Logistic Regression, Decision Tree) for disambiguating word sense in Bangla text.',
  },
]

const teaching = [
  { course: 'Python for Bioinformatics Beginners', period: 'Mar 2026' },
  { course: 'Linux Commands & Shell Scripting', period: 'Feb 2026' },
]

function ResearchTab({ onNavigateToContact }) {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold mb-4">Research</h2>
        {research.map((item) => (
          <div key={item.title} className="mb-6">
            <h3 className="text-lg font-semibold">
              {item.title}{' '}
              <span className="text-sm text-gray-400">({item.status})</span>
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Teaching</h2>
        <p className="text-sm text-gray-400 mb-2">Instructor, Inquest</p>
        <ul className="list-disc list-inside">
          {teaching.map((item) => (
            <li key={item.course}>
              {item.course} — {item.period}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8">
        Interested in research collaboration?{' '}
        <button
          onClick={onNavigateToContact}
          className="text-blue-400 underline"
        >
          Contact
        </button>
      </p>
    </div>
  )
}

export default ResearchTab
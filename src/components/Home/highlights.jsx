export default function Highlights() {
  return (
    <div className="font-[Times_New_Roman] px-6 md:px-16 py-12 max-w-4xl mx-auto leading-relaxed text-gray-800">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
        Career Highlights
      </h1>

      {/* Summary */}
      <p className="italic text-lg mb-10 text-center">
        A futurist civil servant blending Artificial Intelligence, Fintech, and
        data-driven governance to architect India’s tomorrow—today.
      </p>

      {/* Highlights List */}
      <ul className="space-y-6 text-[18px]">
        <li>
          <span className="font-semibold">
            7 years across 5 Union Ministries (Government of India):
          </span>{" "}
          Shaped National Education Policy 2020, Civil Aviation Policy, and National
          Tourism Policy; served as Private Secretary to three Union Ministers,
          steering strategic policy and communications.
        </li>

        <li>
          <span className="font-semibold">10 years in Government of Uttarakhand:</span>{" "}
          As District Magistrate for 5 years (populations up to 2 million), drove
          rural development, NGO-CSR partnerships, and grassroots project
          execution.
        </li>

        <li>
          <span className="font-semibold">2013 Kedarnath Disaster:</span>{" "}
          Led as Relief Commissioner, orchestrating high-stakes crisis response.
        </li>

        <li>
          <span className="font-semibold">
            Master’s in Public Affairs, UC Berkeley:
          </span>{" "}
          honed global policy acumen and advanced governance expertise.
        </li>
      </ul>

      {/* Technology & Futurism */}
      <h2 className="text-2xl font-bold mt-12 mb-4 tracking-wide">
        Technology & Futurism
      </h2>

      <p className="mb-4">
        Obsessed with data’s untold stories, I wield AI and Fintech to reimagine
        public systems:
      </p>

      <ul className="list-disc ml-8 space-y-3 text-[18px]">
        <li>Predictive analytics for disaster resilience</li>
        <li>Personalized healthcare via AI</li>
        <li>Agricultural innovation for farmer prosperity</li>
        <li>Smart governance that anticipates citizen needs</li>
      </ul>

      {/* Spirituality */}
      <h2 className="text-2xl font-bold mt-12 mb-4 tracking-wide">
        Spirituality as Anchor
      </h2>

      <p className="text-[18px]">
        Grounded in the Bhagavad Gita and Patanjali Yog Sutras, I harmonize
        ancient wisdom with exponential tech—because true progress serves both
        dharma and data.
      </p>
    </div>
  );
}

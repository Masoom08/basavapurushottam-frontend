const SectionDivider = () => (
  <div className="my-12 flex justify-center">
    <div className="h-px w-3/4 bg-gray-400/70" />
  </div>
);

export default function Highlights() {
  return (
    <div className="font-[Times_New_Roman] px-6 md:px-16 py-12 max-w-7xl mx-auto leading-relaxed text-gray-800">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
        Overview
      </h1>

      {/* Summary */}
      <p className="italic text-lg mb-10 text-left">
        A futurist civil servant blending Artificial Intelligence, Fintech, and
        data-driven governance to architect India’s tomorrow—today.
      </p>

      <SectionDivider />

      {/* Career */}
      <h2 className="text-2xl font-bold mb-4 tracking-wide">
        Career Highlights
      </h2>

      <ul className="list-disc ml-8 space-y-3 text-[18px]">
        <li>
          <span className="font-semibold">
            7 years across 5 Union Ministries (Government of India):
          </span>{" "}
          Shaped National Education Policy 2020, Civil Aviation Policy, and National
          Tourism Policy; served as Private Secretary to three Union Ministers.
        </li>

        <li>
          <span className="font-semibold">10 years in Government of Uttarakhand:</span>{" "}
          District Magistrate for 5 years, driving rural development and CSR projects.
        </li>

        <li>
          <span className="font-semibold">2013 Kedarnath Disaster:</span>{" "}
          Led crisis response as Relief Commissioner.
        </li>

        <li>
          <span className="font-semibold">UC Berkeley (Public Affairs):</span>{" "}
          Advanced global governance perspective.
        </li>
      </ul>

      <SectionDivider />

      {/* Technology */}
      <h2 className="text-2xl font-bold mb-4 tracking-wide">
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
        <li>Anticipatory, citizen-centric governance</li>
      </ul>

      <SectionDivider />

      {/* Spirituality */}
      <h2 className="text-2xl font-bold mb-4 tracking-wide">
        Spirituality as Anchor
      </h2>

      <p className="text-[18px]">
        Grounded in the Bhagavad Gita and Patanjali Yog Sutras, I harmonize
        ancient wisdom with exponential technology—because true progress must
        serve both dharma and data.
      </p>
    </div>
  );
}

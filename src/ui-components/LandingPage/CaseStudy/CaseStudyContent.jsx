import HeadImg from "../../../assets/69c37d04d3feadc39b5681a70e9d7638.png"; // Ensure path is correct

export default function CaseStudyContent() {
  return (
    <div className="">
      {/* Client Overview and Challenge */}
      <div className="py-16 px-6 text-center sm:text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-2">
            <div>
              <h2 className="text-3xl sm:text-4xl hover:scale-[1.03] transition-all duration-300 font-bold text-[#005895] mb-6">The Client Overview</h2>
              <p className="text-gray-700 sm:text-base leading-relaxed">
                A mid-market SaaS platform needed a predictable outbound pipeline but kept hitting cold prospects. They wanted real conversations with buyers already researching solutions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl hover:scale-[1.03] transition-all duration-300 font-bold text-[#005895] mb-6">The Challenge</h2>
              <p className="text-gray-700 sm:text-base leading-relaxed">
                Their outbound lists were outdated, deliverability dropped, and nothing signaled which accounts were actually in-market. Their founder was involved in outbound but wasted time on buyers who weren't evaluating.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution - Full Width */}
      <div className="w-full bg-[#ECF7FD] py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl hover:scale-[1.03] transition-all duration-300 font-bold text-[#005895] mb-6">The Solution</h2>
        <p className="text-gray-700 sm:text-base leading-relaxed max-w-4xl mx-auto">
          SalesDriver activated identity-matched outbound using intent signals, anonymous identity resolution, enriched targeting, and coordinated email + LinkedIn + DSP touchpoints focused only on active evaluators.
        </p>
      </div>

      {/* Execution Breakdown */}
      <div className="relative text-center sm:text-left py-16 px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={HeadImg}
            alt="Header Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-75"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl hover:scale-[1.03] transition-all duration-300 font-bold text-[#005895] text-center mb-12">Execution Breakdown</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10">
              <div className="bg-white hover:border hover:border-[#fbad18] transition-transform duration-200 hover:scale-105 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-yellowclr hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#005895] mb-4">
                  Intent-First Buyer Identification
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Prioritized accounts showing category-level research activity instead of
                  cold lists.
                </p>
              </div>

              <div className="bg-white hover:border hover:border-[#fbad18] transition-transform duration-200 hover:scale-105 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-yellowclr hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#005895] mb-4">
                  Identity Resolution & Anonymous Visitor Matching
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Converted hidden website traffic into identifiable
                  targets.
                </p>
              </div>

              <div className="bg-white hover:border hover:border-[#fbad18] transition-transform duration-200 hover:scale-105 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-yellowclr hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#005895] mb-4">
                  Multichannel Buyer Activation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Coordinated email, LinkedIn, and DSP touchpoints for verified
                  workflow.
                </p>
              </div>

              <div className="bg-white hover:border hover:border-[#fbad18] transition-transform duration-200 hover:scale-105 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-yellowclr hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#005895] mb-4">
                  SDR-Style Qualification & Filtering
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Handled replies, objections, and scheduling
                  internally without client SDRs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results and Why It Worked */}
      <div className="py-16 px-6 text-center sm:text-left sm:px-16 bg-[#ECF7FD]">
        <div className="max-w-7xl mx-auto">

          {/* Results and Why It Worked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Results</h2>
              <div className="space-y-4">
                <div className="text-[#00A7E2] font-semibold text-lg sm:text-2xl sm:font-extrabold">
                  18 Qualified SaaS Buyer Meetings
                </div>
                <div className="text-[#00A7E2] font-semibold text-lg sm:text-2xl sm:font-extrabold">
                  Consistent Pipeline Creation Without SDRs
                </div>
                <div className="text-[#00A7E2] font-semibold text-lg sm:text-2xl sm:font-extrabold">
                  Clear View Of Which Accounts Were In-Market
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Why It Worked</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                They stopped hitting cold buyers and shifted to identity-matched timing.
              </p>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Work With Us!</h3>
                <a
                  className="bg-[#FBAD18] hover:bg-[#DA9613] hover:scale-[1.04] transition-transform duration-200 uppercase text-white px-8 sm:px-16 py-3 rounded font-semibold"
                  href="https://link.salesdriver.io/widget/booking/YLwxGlwqKM9noAp4HNIx"
                >
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function CaseStudyHeader() {
  return (
    <div className="bg-white">
      <div className="py-16 px-6">
        <div className="max-w-6xl sm:px-12 mx-auto text-center">
          <h1 className="sm:text-4xl text-2xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
            How A B2B SaaS Company Reached Active Buyers And Stabilized Outbound
          </h1>
        </div>
      </div>
      
      {/* Full Width Metrics Banner with Gradient */}
      <div className="w-full bg-gradient-to-r from-[#005895] to-[#00A7E2] text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 md:gap-0">
            <div>
              <h3 className="text-lg font-semibold">18 Qualified Meetings</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Active-Buyer Targeting</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Zero SDR Payroll</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
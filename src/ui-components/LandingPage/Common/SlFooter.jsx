import img1 from "../../../assets/Website_Media/Website_Media/designs/cta_banner_bg.png";

export default function SalesInsightsSection() {
  return (
    <footer className="w-full text-white">
      <div className="mx-auto text-center">
        <div className="relative bg-cover bg-center bg-[#00263A] flex flex-col lg:grid lg:grid-cols-2">
          <div className="relative w-full h-60">
            <img
              src={img1}
              alt="Sales Insights"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col lg:items-start sm:pl-14 justify-center text-center lg:text-left px-4">
              <h2 className="md:text-[50px] text-4xl mb-4 font-black">Let’s Talk Sales</h2>
              <p className="sm:text-2xl text-xl font-medium">
                Get a plan that’s built for you.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col text-white justify-center lg:px-16 px-8 py-16 text-center lg:text-left">
            <p className="md:text-base mt-4">
              More leads, better conversions, or an efficient unified sales
              system, we can help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellowclr text-white px-7 py-2.5 rounded-lg font-semibold text-base">
                Book a Call
              </button>
              <button className="border border-white text-white px-7 py-2.5 rounded-lg font-semibold text-base">
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

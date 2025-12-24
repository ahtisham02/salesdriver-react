import React, { useState } from "react";
import { Plus, X, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "Do I pay extra for any tools?",
    answer: "No. Every tool built by SalesDriver is included in your plan."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes. Upgrade or downgrade instantly. Your access adjusts right away."
  },
  {
    question: "Do credits roll over each month?",
    answer: "No. Credits reset monthly to keep usage predictable and straightforward."
  },
  {
    question: "Is support included in all plans?",
    answer: "Yes. Starter includes email support. Growth and Enterprise get priority access and faster response times."
  },
  {
    question: "Are bonus tools limited?",
    answer: "Some have fair-use limits to keep the system stable, but all are included without extra cost."
  },
  {
    question: "Can my whole team use it?",
    answer: "Yes. Growth and Enterprise support multi-user access."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div 
      className={`mb-4 overflow-hidden rounded-3xl border transition-all duration-500 animate-fade-in-up ${
        isOpen 
          ? 'bg-[#002633] border-[#00A1E0]/50 shadow-[0_0_30px_rgba(0,161,224,0.1)]' 
          : 'bg-[#001F2B]/50 border-white/5 hover:border-white/10'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button 
        onClick={onClick}
        className="flex w-full items-center justify-between p-7 text-left group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#00A1E0]' : 'text-white'}`}>
          {question}
        </span>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
          isOpen ? 'bg-[#00A1E0] rotate-0' : 'bg-white/5 group-hover:bg-white/10'
        }`}>
          {isOpen 
            ? <X size={18} className="text-white" strokeWidth={3} /> 
            : <Plus size={18} className="text-gray-400 group-hover:text-white" strokeWidth={3} />
          }
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-7 pb-8 text-gray-400 text-base leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative bg-[#001F2B] py-20 md:py-32 px-4 md:px-8 lg:px-16 font-plus-jakarta overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#003049_0%,_transparent_70%)] opacity-50"></div>
      
      {/* Decorative floating bits */}
      <div className="absolute top-20 right-[15%] w-64 h-64 bg-[#00A1E0]/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#F59E0B]/5 rounded-full blur-[80px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#00A1E0]/10 border border-[#00A1E0]/20 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#00A1E0] text-[10px] font-black uppercase tracking-widest">Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Commonly <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] via-white to-[#00A1E0] animate-gradient">Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium opacity-80 max-w-xl mx-auto">
            Everything you need to know about plans, credits, and how the SalesDriver system works for you.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mb-24 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              index={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Footer Call to Action */}
        <div className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md rounded-[40px] border border-white/5 p-12 md:p-16 text-center shadow-2xl animate-fade-in-up"> 
            <div className="w-16 h-16 bg-[#00A1E0]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#00A1E0]/20">
              <MessageSquare className="text-[#00A1E0]" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Still have questions?</h3>
            <p className="text-gray-400 text-lg mb-10 font-medium opacity-80">Our specialized support team is here to help you scaling your outbound sales.</p>
            <button className="px-12 py-4 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-[#00A1E0] transition-all duration-500 shadow-xl shadow-[#00A1E0]/20 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 active:scale-95">
              Contact Sales Support
            </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; opacity: 0; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

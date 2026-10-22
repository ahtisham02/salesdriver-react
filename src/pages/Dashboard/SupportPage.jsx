import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MessageCircle,
  Mail,
  Book,
  Calendar,
  ChevronRight,
  AlertCircle,
  ChevronDown,
  X,
  Upload,
  FileText,
  Eye,
  CheckCircle2,
  Key,
  CreditCard,
  Plug,
  BarChart3,
  Rocket,
  Wrench,
  Clock,
  Loader2
} from "lucide-react";
import { systemStatus, isSystemHealthy } from "../../data/systemStatusData";
import chatService from "../../services/chatService";
import DashPageHero from "../../ui-components/Dashboard/DashShell/DashPageHero";
import { DashCard } from "../../ui-components/Dashboard/DashShell/DashUi";
import { DASH_C } from "../../constants/dashTokens";

// Custom Dropdown Component with Search
const CustomDropdown = ({ value, onChange, options, placeholder, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-num-4 border-sd-aliceblue-200 border-solid border-[1px] flex items-center justify-between p-3 gap-2.5 text-num-14 text-sd-gray-400 font-roboto bg-white shadow-sm hover:border-sd-gray-300 transition-colors"
      >
        <span className={value ? "text-sd-gray-400" : "text-sd-gray-200 opacity-50"}>
          {value || placeholder}
        </span>
        <ChevronDown size={18} className={`text-sd-gray-200 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-sd-aliceblue-200 rounded-num-8 shadow-lg max-h-[300px] overflow-hidden">
          <div className="p-2 border-b border-sd-aliceblue-200">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sd-gray-200" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}...`}
                className="w-full pl-9 pr-3 py-2 text-num-13 border border-sd-aliceblue-200 rounded-md outline-none focus:border-sd-gray-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-[240px] overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-num-14 hover:bg-sd-aliceblue-100 transition-colors ${
                    value === option ? "bg-sd-aliceblue-100 text-sd-gray-400 font-semibold" : "text-sd-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-num-13 text-sd-gray-200 text-center">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const categoryOptions = [
    "Leads & Prospecting",
    "Billing & Credits",
    "Account Sync",
    "Email Configuration",
    "CRM Integration",
    "API & Webhooks",
    "Campaign Management",
    "Technical Issue",
    "Feature Request",
    "Other"
  ];

  const priorityOptions = [
    "Low - General inquiry",
    "Medium - Issue affecting work",
    "High - Blocking critical workflow",
    "Urgent - System down or data loss"
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setUploadedImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  // Fetch real tickets from API
  useEffect(() => {
    const loadTickets = async () => {
      setTicketsLoading(true);
      try {
        const data = await chatService.getSupportTickets({ limit: 100, sort: "created_at_desc" });
        const list = data?.data || data?.tickets || (Array.isArray(data) ? data : []);
        setTickets(list);
      } catch (err) {
        console.warn("Failed to load tickets:", err?.message);
        setTickets([]);
      } finally {
        setTicketsLoading(false);
      }
    };
    loadTickets();
  }, []);

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;
    setSubmitting(true);
    try {
      const priorityMap = {
        "Low - General inquiry": "Low",
        "Medium - Issue affecting work": "Medium",
        "High - Blocking critical workflow": "High",
        "Urgent - System down or data loss": "Urgent",
      };
      const created = await chatService.createSupportTicket({
        subject: subject.trim(),
        description: description.trim(),
        category: category || "General",
        priority: priorityMap[priority] || "Medium",
        service: "SalesDriver",
        communication_preference: "Web",
      });
      // Refresh tickets list
      const data = await chatService.getSupportTickets({ limit: 100, sort: "created_at_desc" });
      const list = data?.data || data?.tickets || (Array.isArray(data) ? data : []);
      setTickets(list);
      // Reset form
      setSubject("");
      setDescription("");
      setCategory("");
      setPriority("");
      setUploadedImages([]);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (err) {
      console.warn("Failed to create ticket:", err?.message);
    } finally {
      setSubmitting(false);
    }
  };

  const supportCards = [
    {
      title: "Live Chat",
      icon: MessageCircle,
      desc: "Get real-time help from our support team.",
      actionText: "Start chat",
      footerText: "Average response time: 2–5 minutes",
      status: "Online",
      color: "bg-sd-gray-400",
      isPrimary: true
    },
    {
      title: "Email Support",
      icon: Mail,
      desc: "Send us a message and we’ll get back to you.",
      actionText: "Submit request",
      footerText: "Response time: Within 24 hours (Mon–Fri)",
      isPrimary: false
    },
    {
      title: "Schedule a Call",
      icon: Calendar,
      desc: "Book time with our team for technical setup or account assistance.",
      actionText: "Book a call",
      isPrimary: false
    },
    {
      title: "Documentation",
      icon: Book,
      desc: "Browse setup guides and detailed product documentation.",
      actionText: "View documentation",
      isPrimary: false
    }
  ];

  const helpTopics = [
    { title: "How do I reset my API key?", desc: "Setup guides and onboarding resources.", icon: Key },
    { title: "I have a billing question", desc: "Help tutorials for each app and tool.", icon: CreditCard },
    { title: "Help me connect a tool", desc: "Managing and exporting leads.", icon: Plug },
    { title: "Why are my credits not updating?", desc: "Launching and managing outbound campaigns.", icon: BarChart3 },
    { title: "How do I get started with outreach?", desc: "Understanding usage and subscription details.", icon: Rocket },
    { title: "Something isn't working as expected", desc: "Connecting CRMs and external tools.", icon: Wrench }
  ];

  return (
    <div className="flex w-full flex-col gap-6 text-sm" style={{ color: DASH_C.ink }}>
      <DashPageHero
        title="Support"
        subtitle="Get help with your SalesDriver account and tools."
      />

      <div className="flex flex-col gap-8">
        <DashCard className="flex flex-col gap-3 p-6">
          <div className="self-stretch flex items-start justify-between gap-5">
            <div className="relative font-medium leading-num-12 tracking-num-0_5">System Status</div>
            <AlertCircle className={`self-stretch w-6 h-6 ${isSystemHealthy ? "text-sd-seagreen" : "text-sd-brown"}`} />
          </div>
          <div className={`self-stretch flex items-start text-num-14 ${isSystemHealthy ? "text-sd-seagreen" : "text-sd-brown"}`}>
            <div className={`w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] rounded-num-14 bg-white border-solid border-l-[4px] box-border flex flex-col items-start p-num-20 min-w-num-260 ${
              isSystemHealthy ? "border-sd-seagreen" : "border-sd-red"
            }`}>
              <div className="self-stretch flex items-start gap-4">
                <div className={`h-[14px] w-[14px] rounded-full shrink-0 mt-1 ${isSystemHealthy ? "bg-sd-seagreen" : "bg-sd-red"}`} />
                <div className="flex-1 flex flex-col items-start gap-4">
                  <div className="self-stretch flex flex-col items-start gap-2">
                    <div className="flex items-start">
                      <div className="relative font-medium">{isSystemHealthy ? "All systems are operating normally." : systemStatus.message}</div>
                    </div>
                    <div className="self-stretch relative font-roboto text-sd-darkslategray-100 opacity-80 leading-normal">
                      {isSystemHealthy
                        ? "No known incidents at this time."
                        : systemStatus.detail}
                    </div>
                  </div>
                  <div className="rounded-num-4 flex items-start text-num-12 text-sd-gray-400 font-roboto">
                    <Link
                      to="/status"
                      className="flex items-center gap-2 cursor-pointer hover:underline no-underline text-inherit"
                    >
                      <div className="relative tracking-num-0_5 leading-num-13 font-medium">View status page for updates.</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DashCard>

        {/* Search Input Section */}
        <div className="self-stretch flex flex-col items-start min-w-num-260 text-num-12 text-sd-darkslategray-200">
          <div className="self-stretch flex flex-col items-start gap-3 w-full">
            <div className="self-stretch flex items-start w-full">
              <div className="flex-1 flex flex-col items-start w-full relative">
                <div className="self-stretch h-10 rounded-[8px] bg-white border-sd-aliceblue-200 border-solid border-[0.5px] box-border flex items-center py-[9px] px-[15px] gap-2 shadow-sm">
                  <Search size={16} className="opacity-50 text-sd-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search help articles, guides, or troubleshooting topics…"
                    className="flex-1 bg-transparent border-none outline-none text-num-12 font-poppins text-sd-darkslategray-200 placeholder:opacity-30 placeholder:text-sd-darkslategray-200"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-num-14 font-roboto text-sd-gray-200">
              Try "connect email", "buy credits", or "export leads".
            </div>
          </div>
        </div>

        {/* Support Cards Grid */}
        <div className="self-stretch flex items-start gap-6 font-roboto overflow-x-auto no-scrollbar pb-2">
          {supportCards.map((card, idx) => (
            <div key={idx} className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] rounded-num-14 bg-white flex flex-col items-start py-num-16 px-num-20 box-border gap-4 min-w-[300px] max-w-num-1080 shrink-0 border border-transparent hover:border-sd-aliceblue-200 transition-all">
              <div className="self-stretch flex flex-col items-start gap-4 font-poppins">
                <div className={`p-2 rounded-md ${card.isPrimary ? 'bg-sd-aliceblue-100' : 'bg-sd-ghostwhite'}`}>
                  <card.icon size={24} className={card.isPrimary ? 'text-sd-gray-400' : 'text-sd-gray-300'} />
                </div>
                <div className="self-stretch flex items-center gap-1.5">
                  <div className="relative font-semibold text-sd-gray-400">{card.title}</div>
                  {card.status && (
                    <div className="rounded-[6.75px] bg-sd-honeydew flex items-center justify-center py-[2px] px-[6px] text-center text-[8px] text-sd-seagreen font-roboto">
                      <div className="relative tracking-[0.42px] leading-[10px] font-medium">{card.status}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="self-stretch relative text-num-11 text-sd-gray-100 h-8 line-clamp-2">{card.desc}</div>
              <div className="self-stretch flex flex-col items-start gap-2 text-num-12">
                <button className={`self-stretch rounded-num-4 flex items-center justify-center p-num-10 border-none cursor-pointer transition-all ${card.isPrimary ? 'bg-sd-gray-400 text-white hover:bg-opacity-90 shadow-sm' : 'bg-white border-sd-lightgray-100 border-solid border-[1px] text-sd-gray-400 hover:bg-sd-gray-50'}`}>
                  <div className="relative leading-num-13 font-bold uppercase text-[10px] tracking-widest">{card.actionText}</div>
                </button>
                {card.footerText && <i className="self-stretch relative text-num-11 text-sd-gray-100 text-center">{card.footerText}</i>}
              </div>
            </div>
          ))}
        </div>

        <div className="self-stretch relative text-[20px] font-semibold text-sd-gray-400 mt-4">Quick Help</div>

        {/* Help Topics Grid - Now showing 4 items in a row */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {helpTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSearchQuery(topic.title)}
                aria-label={`Open help topic: ${topic.title}`}
                className="text-left shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] rounded-num-14 bg-white flex flex-col items-start py-num-20 px-num-20 box-border gap-4 min-w-[200px] cursor-pointer hover:border-sd-aliceblue-200 border border-transparent transition-all group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2.5 bg-sd-aliceblue-100 rounded-num-10 group-hover:bg-sd-gray-400 transition-colors">
                    <Icon size={20} className="text-sd-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <ChevronRight size={16} className="text-sd-gray-200 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="self-stretch relative font-semibold text-sd-gray-400 group-hover:text-sd-gray-500 transition-colors leading-snug">
                  {topic.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Support Request Form and Cases - Side by Side Layout */}
        <div className="self-stretch flex flex-col lg:flex-row gap-6 mt-4">
          {/* Left: Support Request Form */}
          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] rounded-num-14 bg-white flex flex-col items-start py-num-24 px-num-20 box-border gap-6 min-w-num-260 text-[20px] text-sd-gray-400">
            <div className="self-stretch relative font-semibold">Submit a support request</div>
            <div className="self-stretch flex flex-col items-start gap-6 text-num-16">
              <div className="self-stretch flex flex-col items-start gap-3">
                <div className="self-stretch relative font-medium text-num-14">Subject</div>
                <div className="self-stretch rounded-num-4 border-sd-aliceblue-200 border-solid border-[1px] flex items-center justify-center p-3 gap-2.5 text-num-14 text-sd-gray-200 font-roboto bg-transparent shadow-sm">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Briefly describe your issue."
                    className="flex-1 bg-transparent border-none outline-none font-roboto text-num-14 text-sd-gray-400 placeholder:opacity-50"
                  />
                </div>
              </div>

              <div className="self-stretch flex flex-col items-start gap-3">
                <div className="self-stretch relative font-medium text-num-14">Category</div>
                <CustomDropdown
                  value={category}
                  onChange={setCategory}
                  options={categoryOptions}
                  placeholder="Select a category"
                  label="Category"
                />
              </div>

              <div className="self-stretch flex flex-col items-start gap-3">
                <div className="self-stretch relative font-medium text-num-14">Priority</div>
                <CustomDropdown
                  value={priority}
                  onChange={setPriority}
                  options={priorityOptions}
                  placeholder="Select priority level"
                  label="Priority"
                />
              </div>

              <div className="self-stretch flex flex-col items-start gap-3">
                <div className="self-stretch relative font-medium text-num-14">Description</div>
                <div className="self-stretch rounded-num-4 border-sd-aliceblue-200 border-solid border-[1px] flex items-start justify-center p-3 gap-2.5 text-num-14 text-sd-gray-400 font-roboto bg-transparent shadow-sm">
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide details about the issue, including what happened and what you expected."
                    className="flex-1 bg-transparent border-none outline-none font-roboto text-num-14 text-sd-gray-400 placeholder:opacity-50 resize-none"
                  />
                </div>
              </div>

              <div className="self-stretch flex flex-col items-start gap-3">
                <div className="self-stretch flex items-center justify-between">
                  <div className="relative font-medium text-num-14">Images (Optional)</div>
                  <span className="text-num-12 text-sd-gray-200">Up to 5 images</span>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadedImages.length >= 5}
                  className="self-stretch rounded-num-4 border-sd-aliceblue-200 border-dashed border-2 flex items-center justify-center p-6 gap-3 text-num-14 text-sd-gray-300 font-roboto bg-transparent cursor-pointer hover:bg-sd-aliceblue-100 hover:border-sd-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Upload size={20} className="text-sd-gray-300" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-medium">Click to upload images</span>
                    <span className="text-num-12 text-sd-gray-200">PNG, JPG, GIF up to 10MB each</span>
                  </div>
                </button>

                {uploadedImages.length > 0 && (
                  <div className="self-stretch grid grid-cols-2 md:grid-cols-3 gap-3">
                    {uploadedImages.map((img, idx) => (
                      <div key={idx} className="relative group rounded-num-8 border border-sd-aliceblue-200 overflow-hidden bg-sd-ghostwhite aspect-square">
                        <img
                          src={img.preview}
                          alt={img.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="p-2 bg-sd-brown text-white rounded-full hover:bg-opacity-90 transition-all"
                            aria-label="Remove image"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                          <p className="text-white text-[10px] truncate font-medium">{img.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Success banner */}
            {submitSuccess && (
              <div className="self-stretch flex items-center gap-3 p-4 bg-sd-honeydew rounded-num-8 border border-sd-seagreen/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <CheckCircle2 size={20} className="text-sd-seagreen shrink-0" />
                <div>
                  <p className="text-num-14 font-semibold text-sd-seagreen">Ticket submitted successfully!</p>
                  <p className="text-num-12 text-sd-seagreen opacity-80">We'll get back to you shortly. Check your cases on the right.</p>
                </div>
              </div>
            )}

            <button
              onClick={handleSubmitRequest}
              disabled={submitting || !subject.trim() || !description.trim()}
              className="rounded-num-4 bg-sd-gray-400 flex items-center gap-2 p-num-10 text-num-14 text-white font-roboto border-none cursor-pointer hover:bg-opacity-90 shadow-lg transition-all px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span className="relative tracking-wider leading-num-13 font-bold uppercase text-xs">Submitting…</span>
                </>
              ) : (
                <span className="relative tracking-wider leading-num-13 font-bold uppercase text-xs">Submit Request</span>
              )}
            </button>
          </div>

          {/* Right: Your Cases Sidebar */}
          <div className="w-full lg:w-[400px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.05)] rounded-num-14 bg-white flex flex-col items-start py-num-24 px-num-20 box-border gap-6 min-w-num-260 text-sd-gray-400 shrink-0">
            <div className="self-stretch flex items-center justify-between">
              <div className="relative font-semibold text-[20px]">Your Cases</div>
              <div className="text-num-12 text-sd-gray-200 font-medium">Recent support cases</div>
            </div>

            {ticketsLoading ? (
              <div className="self-stretch flex flex-col items-center justify-center py-12 gap-3">
                <Loader2 size={28} className="text-sd-gray-300 animate-spin" />
                <p className="text-num-13 text-sd-gray-200">Loading your cases…</p>
              </div>
            ) : tickets.length === 0 ? (
              <div className="self-stretch flex flex-col items-center justify-center py-12 gap-3">
                <div className="p-4 bg-sd-aliceblue-100 rounded-full">
                  <FileText size={32} className="text-sd-gray-300" />
                </div>
                <p className="text-num-14 text-sd-gray-200 text-center">No support cases yet</p>
                <p className="text-num-12 text-sd-gray-200 text-center opacity-70">Submit a request to get started</p>
              </div>
            ) : (
              <div className="self-stretch flex flex-col gap-4">
                {tickets.map((ticket, idx) => {
                  const status = ticket.status || "OPEN";
                  const isResolved = status === "RESOLVED" || status === "Resolved" || status === "CLOSED";
                  const priority = ticket.priority || "Medium";
                  const isHighPriority = priority === "High" || priority === "Urgent" || priority === "HIGH" || priority === "URGENT";
                  const createdDate = ticket.createdAt
                    ? new Date(ticket.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
                    : "—";
                  const displayId = ticket.ticketNumber || ticket.ticket_number || `#${ticket.id}`;
                  return (
                    <button
                      key={ticket.id || idx}
                      onClick={() => setSelectedTicket(ticket)}
                      className="w-full text-left p-4 rounded-num-12 border border-sd-aliceblue-200 hover:border-sd-gray-300 hover:shadow-md transition-all cursor-pointer bg-white group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-sd-gray-300 group-hover:text-sd-gray-400 transition-colors" />
                          <span className="font-bold text-num-14 text-sd-gray-400 group-hover:text-sd-steelblue transition-colors font-mono text-[12px]">{displayId}</span>
                        </div>
                        <div className={`rounded-xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          isResolved
                            ? 'bg-sd-honeydew text-sd-seagreen border border-sd-seagreen/20'
                            : 'bg-dodgerblue/10 text-sd-dodgerblue border border-sd-dodgerblue/20'
                        }`}>
                          {status}
                        </div>
                      </div>

                      <h4 className="font-semibold text-num-15 text-sd-gray-400 mb-2 line-clamp-1 group-hover:text-sd-steelblue transition-colors">
                        {ticket.subject || "Untitled"}
                      </h4>

                      <div className="flex items-center gap-3 text-num-12 text-sd-gray-200 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {createdDate}
                        </span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isHighPriority
                            ? 'bg-sd-mistyrose text-sd-brown'
                            : 'bg-sd-aliceblue-100 text-sd-gray-400'
                        }`}>
                          {priority}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-num-11 text-sd-gray-200 font-medium">{ticket.category || ticket.service || "General"}</span>
                        <div className="flex items-center gap-1 text-sd-gray-300 group-hover:text-sd-steelblue transition-colors">
                          <Eye size={14} />
                          <span className="text-num-11 font-bold">View</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-num-20 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-sd-aliceblue-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sd-aliceblue-100 rounded-num-12">
                  <FileText size={24} className="text-sd-gray-400" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-sd-gray-400">{selectedTicket.subject || "Untitled"}</h3>
                  <p className="text-num-13 text-sd-gray-200 mt-1 font-mono">
                    {selectedTicket.ticketNumber || selectedTicket.ticket_number || `#${selectedTicket.id}`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTicket(null)}
                className="p-2 hover:bg-sd-aliceblue-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="text-sd-gray-300" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-6">
                {/* Status and Priority */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Status:</span>
                    <div className={`rounded-xl px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      (selectedTicket.status === 'RESOLVED' || selectedTicket.status === 'Resolved' || selectedTicket.status === 'CLOSED')
                        ? 'bg-sd-honeydew text-sd-seagreen border border-sd-seagreen/20'
                        : 'bg-dodgerblue/10 text-sd-dodgerblue border border-sd-dodgerblue/20'
                    }`}>
                      {(selectedTicket.status === 'RESOLVED' || selectedTicket.status === 'Resolved' || selectedTicket.status === 'CLOSED') && <CheckCircle2 size={14} />}
                      {selectedTicket.status || "OPEN"}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Priority:</span>
                    <div className={`rounded-xl px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                      (selectedTicket.priority === 'High' || selectedTicket.priority === 'Urgent')
                        ? 'bg-sd-mistyrose text-sd-brown border border-sd-brown/20'
                        : 'bg-sd-aliceblue-100 text-sd-gray-400 border border-sd-aliceblue-200'
                    }`}>
                      {selectedTicket.priority || "Medium"}
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Category</span>
                    <span className="text-num-14 text-sd-gray-400 font-medium">{selectedTicket.category || "General"}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Date Created</span>
                    <span className="text-num-14 text-sd-gray-400 font-medium">
                      {selectedTicket.createdAt
                        ? new Date(selectedTicket.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
                        : selectedTicket.date || "—"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Service</span>
                    <span className="text-num-14 text-sd-gray-400 font-medium">{selectedTicket.service || "SalesDriver"}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-num-12 font-bold text-sd-gray-200 uppercase tracking-wider">Severity</span>
                    <span className="text-num-14 text-sd-gray-400 font-medium">{selectedTicket.severity || "—"}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-3">
                  <span className="text-num-14 font-bold text-sd-gray-400">Description</span>
                  <div className="p-4 bg-sd-ghostwhite rounded-num-12 border border-sd-aliceblue-200">
                    <p className="text-num-14 text-sd-gray-400 leading-relaxed font-roboto">
                      {selectedTicket.description || "No description provided."}
                    </p>
                  </div>
                </div>

                {/* Resolution (if resolved) */}
                {selectedTicket.resolution && (
                  <div className="flex flex-col gap-3">
                    <span className="text-num-14 font-bold text-sd-gray-400 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-sd-seagreen" />
                      Resolution
                    </span>
                    <div className="p-4 bg-sd-honeydew/30 rounded-num-12 border border-sd-seagreen/20">
                      <p className="text-num-14 text-sd-gray-400 leading-relaxed font-roboto">
                        {selectedTicket.resolution}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-sd-aliceblue-200">
              <button
                onClick={() => setSelectedTicket(null)}
                className="px-6 py-2.5 rounded-num-8 bg-white border border-sd-aliceblue-200 text-sd-gray-400 font-bold text-num-13 hover:bg-sd-aliceblue-100 transition-colors"
              >
                Close
              </button>
              {selectedTicket.status !== 'RESOLVED' && selectedTicket.status !== 'Resolved' && selectedTicket.status !== 'CLOSED' && (
                <button className="px-6 py-2.5 rounded-num-8 bg-sd-gray-400 text-white font-bold text-num-13 hover:bg-opacity-90 transition-colors shadow-sm">
                  Add Reply
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;


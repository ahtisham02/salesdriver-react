import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/LandingPages/HomeUpdated/Home";
import SolutionsPage from "../pages/LandingPages/Solutions/Solutions";
import IndustriesPage from "../pages/LandingPages/Industries/Industries";
import CompanyPage from "../pages/LandingPages/Company/Company";
import ContactUsPage from "../pages/LandingPages/ContactUs/ContactUs";
import BookPage from "../pages/LandingPages/Book/BookPage";
import BookDemoPage from "../pages/LandingPages/BookDemo/BookDemoPage";
import HardwarePage from "../pages/LandingPages/Hardware/HardwarePage";
import CasestudyPage from "../pages/LandingPages/CaseStudy/CaseStudy";
import HowitworksPage from "../pages/LandingPages/Howitworks/Howitworks";
import DictionaryPage from "../pages/LandingPages/Dictionary/Dictionary";
import WebinarPage from "../pages/LandingPages/Webinar/Webinar";
import BlogPage from "../pages/LandingPages/Blog/Blog";
import DataSheetsPage from "../pages/LandingPages/DataSheets/DataSheets";
import WhitePapersPage from "../pages/LandingPages/WhitePapers/WhitePapers";
import DownloadablesPage from "../pages/LandingPages/Downloadables/Downloadables";
import PostDetails from "../pages/LandingPages/PostDetails/PostDetails";
import Privacy from "../pages/LandingPages/Privacy/Privacy";
import Terms from "../pages/LandingPages/Terms/Terms";
import AboutUsPage from "../pages/LandingPages/AboutUs/AboutUs"; // Import About Us
import GoSDPage from "../pages/LandingPages/GoSD/GoSDPage";
import PricingPage from "../pages/LandingPages/Pricing/Pricing"; // Import Pricing
import PlatformPage from "../pages/LandingPages/Platform/Platform"; // Import Platform
import SDDealsPage from "../pages/LandingPages/SDDeals/SDDealsPage"; // Import SD Deals
import SDLabsPage from "../pages/LandingPages/SDLabs/SDLabsPage";
import IntegrationFlowPage from "../pages/LandingPages/IntegrationFlow/IntegrationFlowPage";
import PromptVaultPage from "../pages/LandingPages/PromptVault/PromptVaultPage"; // Import Prompt Vault
import DocumentationPage from "../pages/LandingPages/Documentation/Documentation";
import SystemStatusPage from "../pages/LandingPages/Status/SystemStatusPage";
import UniversalApiKeysPage from "../pages/LandingPages/UniversalApiKeys/UniversalApiKeys";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import Profile from "../pages/LandingPages/Profile/Profile";
import ToolDetailPageV2 from "../pages/Tools/ToolDetailPageV2";
import JoinSecretPage from "../pages/LandingPages/Integrations/JoinSecret";
import Layout from "./LandingPageLayout";
import NotFoundLayout from "./NotFoundLayout";
import CaseStudyDetailPage from "../pages/LandingPages/CaseStudy/CaseStudyDetailPage";
import AuthLayout from "./AuthLayout";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AppsPage from "../pages/Dashboard/AppsPage";
import SettingsPage from "../pages/Dashboard/SettingsPage";
import ToolSettingsPage from "../pages/Dashboard/ToolSettingsPage";
import CommunityPage from "../pages/Dashboard/CommunityPage";
import LeadsPage from "../pages/Dashboard/LeadsPage";
import ReportsPage from "../pages/Dashboard/ReportsPage";
import RevenueNexusPage from "../pages/Dashboard/RevenueNexusPage";
import BlogsPage from "../pages/Dashboard/BlogsPage";
import SupportAI from "../pages/Dashboard/SupportAI";
import Academy from "../pages/Dashboard/Academy";
import AdminSubscriptions from "../pages/Dashboard/AdminSubscriptions";
import DashboardPricingPage from "../pages/Dashboard/PricingPage";
import AppDetailPage from "../pages/Dashboard/AppDetailPage";
import MarketplacePage from "../pages/Dashboard/MarketplacePage";
import JoinSecretIframePage from "../pages/Dashboard/JoinSecretIframePage";
import ScrollToTop from "../utils/ScrollToTop";
import PageTitle from "../utils/PageTitle";
import SubscriptionSuccess from "../pages/SubscriptionSuccess";
import SubscriptionCancel from "../pages/SubscriptionCancel";
import AdminLayout from "./AdminLayout";
import AdminOverview from "../pages/Admin/AdminOverview";
import AdminSupportStats from "../pages/Admin/AdminSupportStats";
import SupportAIUser from "../pages/Dashboard/SupportAIUser";
import SupportPage from "../pages/Dashboard/SupportPage";
import DashboardSDLabs from "../pages/Dashboard/DashboardSDLabs";
import SDLabsToolPage from "../pages/Dashboard/SDLabs/SDLabsToolPage";
import DashboardIntegrations from "../pages/Dashboard/DashboardIntegrations";
import WorkflowEditorPage from "../pages/Dashboard/WorkflowEditorPage";
import UsageBillingDashboard from "../pages/Dashboard/UsageBillingDashboard";
import ClientDashboardPreview from "../pages/LandingPages/ClientDashboardPreview/ClientDashboardPreview";
import AgenciesPage from "../pages/LandingPages/Agencies/Agencies";
import CareersPage from "../pages/LandingPages/Careers/CareersPage";
import NotFound from "../pages/LandingPages/NotFound/NotFound";
import ToolsIndexPage from "../pages/LandingPages/Growth/Tools/ToolsIndexPage";
import EmailListGraderPage from "../pages/LandingPages/Growth/Tools/EmailListGraderPage";
import OutboundRoiCalculatorPage from "../pages/LandingPages/Growth/Tools/OutboundRoiCalculatorPage";
import CompareIndexPage from "../pages/LandingPages/Growth/Compare/CompareIndexPage";
import CompareDetailPage from "../pages/LandingPages/Growth/Compare/CompareDetailPage";
import GlossaryTermPage from "../pages/LandingPages/Growth/Glossary/GlossaryTermPage";
import PromptDetailPage from "../pages/LandingPages/Growth/Prompt/PromptDetailPage";
import SignalsPage from "../pages/LandingPages/Growth/Signals/SignalsPage";
import TemplatesIndexPage from "../pages/LandingPages/Growth/Templates/TemplatesIndexPage";
import TemplateDetailPage from "../pages/LandingPages/Growth/Templates/TemplateDetailPage";
import BenchmarksIndexPage from "../pages/LandingPages/Growth/Benchmarks/BenchmarksIndexPage";
import BenchmarkDetailPage from "../pages/LandingPages/Growth/Benchmarks/BenchmarkDetailPage";
import MarketsIndexPage from "../pages/LandingPages/Growth/Markets/MarketsIndexPage";
import MarketDetailPage from "../pages/LandingPages/Growth/Markets/MarketDetailPage";
import {
  AffiliatesPage,
  WhiteLabelPage,
  NewsletterPage,
  EventsPage,
  ReportPage,
} from "../pages/LandingPages/Growth/GrowthLandings";
import BookHubPage from "../pages/LandingPages/Growth/Book/BookHubPage";
import BookChapterPage from "../pages/LandingPages/Growth/Book/BookChapterPage";
import JobsAdminPage from "../pages/Admin/JobsAdminPage";
import JobApplicationsAdminPage from "../pages/Admin/JobApplicationsAdminPage";
import DomainsListPage from "../pages/Dashboard/Domains/DomainsListPage";
import HostingProductLayout, { HostingSectionRedirect } from "../pages/Dashboard/Hosting/HostingProductLayout";
import HostingSectionPage from "../pages/Dashboard/Hosting/HostingSectionPage";
import AddDomainPage from "../pages/Dashboard/Domains/AddDomainPage";
import DomainDetailPage from "../pages/Dashboard/Domains/DomainDetailPage";
import { SEO } from "../data/seoConfig";
import FactsPage from "../pages/LandingPages/Facts/FactsPage";
import SeoRoutePack from "../seo/SeoRoutePack";
import ServiceDesignPage from "../pages/LandingPages/Services/ServiceDesignPage";


const MainRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Landing Page Routes — canonical paths from Site Review E-1 / D-2 */}
        <Route element={<Layout />}>
          <Route path="/" element={<><PageTitle title={SEO.home.title} description={SEO.home.description} /><HomePage /></>} />
          <Route path="/services" element={<ServiceDesignPage slug="managed-growth" />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/industries" element={<Navigate to="/services" replace />} />
          <Route path="/company" element={<Navigate to="/about-us" replace />} />
          <Route path="/contact" element={<><PageTitle title={SEO.contact.title} description={SEO.contact.description} /><ContactUsPage /></>} />
          <Route path="/book" element={<><PageTitle title={SEO.book.title} description={SEO.book.description} /><BookPage /></>} />
          <Route path="/book-demo" element={<Navigate to="/book" replace />} />
          <Route path="/demo" element={<Navigate to="/book" replace />} />
          <Route path="/hardware" element={<><PageTitle title={SEO.hardware.title} description={SEO.hardware.description} noindex /><HardwarePage /></>} />
          <Route path="/case-studies" element={<><PageTitle title={SEO.casestudy.title} description={SEO.casestudy.description} /><CasestudyPage /></>} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/casestudy" element={<Navigate to="/case-studies" replace />} />
          <Route path="/casestudy/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/how-it-works" element={<><PageTitle title={SEO.howitworks.title} description={SEO.howitworks.description} /><HowitworksPage /></>} />
          <Route path="/howitworks" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/dictionary" element={<><PageTitle title={SEO.dictionary.title} description={SEO.dictionary.description} /><DictionaryPage /></>} />
          <Route path="/webinar" element={<><PageTitle title={SEO.webinar.title} description={SEO.webinar.description} noindex /><WebinarPage /></>} />
          <Route path="/blog" element={<><PageTitle title={SEO.blog.title} description={SEO.blog.description} /><BlogPage /></>} />
          <Route path="/data-sheets" element={<><PageTitle title={SEO.dataSheets.title} description={SEO.dataSheets.description} noindex /><DataSheetsPage /></>} />
          <Route path="/white-papers" element={<><PageTitle title={SEO.whitePapers.title} description={SEO.whitePapers.description} noindex /><WhitePapersPage /></>} />
          <Route path="/downloadables" element={<><PageTitle title={SEO.downloadables.title} description={SEO.downloadables.description} noindex /><DownloadablesPage /></>} />
          <Route path="/resources" element={<Navigate to="/documentation" replace />} />
          <Route path="/careers" element={<><PageTitle title={SEO.careers.title} description={SEO.careers.description} noindex /><CareersPage /></>} />
          <Route path="/about-us" element={<><PageTitle title={SEO.about.title} description={SEO.about.description} /><AboutUsPage /></>} />
          <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/go-sd" element={<GoSDPage />} />
          <Route path="/gosd" element={<Navigate to="/go-sd" replace />} />
          <Route path="/pricing" element={<><PageTitle title={SEO.pricing.title} description={SEO.pricing.description} /><PricingPage /></>} />
          <Route path="/platform" element={<><PageTitle title={SEO.platform.title} description={SEO.platform.description} /><PlatformPage /></>} />
          <Route path="/agencies" element={<><PageTitle title={SEO.agencies.title} description={SEO.agencies.description} /><AgenciesPage /></>} />
          <Route path="/sd-labs" element={<><PageTitle title={SEO.sdLabs.title} description={SEO.sdLabs.description} /><SDLabsPage /></>} />
          <Route path="/sd-flow" element={<Navigate to="/tools/sdflow" replace />} />
          <Route path="/integration-flow" element={<><PageTitle title="Connect Your Stack with SD Flow" description="Connect your CRM, email, chat and support tools to SalesDriver through SD Flow." /><IntegrationFlowPage /></>} />
          <Route path="/sd-deals" element={<><PageTitle title={SEO.sdDeals.title} description={SEO.sdDeals.description} /><SDDealsPage /></>} />
          <Route path="/prompt-vault" element={<><PageTitle title={SEO.promptVault.title} description={SEO.promptVault.description} /><PromptVaultPage /></>} />
          <Route path="/prompt-vault/:slug" element={<PromptDetailPage />} />
          <Route path="/tools" element={<><PageTitle title={SEO.tools.title} description={SEO.tools.description} /><ToolsIndexPage /></>} />
          <Route path="/tools/email-list-grader" element={<><PageTitle title="Free Email List Grader" description="Check the quality of a B2B email list before you send." /><EmailListGraderPage /></>} />
          <Route path="/tools/outbound-roi-calculator" element={<><PageTitle title="Outbound ROI Calculator" description="Model meetings, deal value and payback from an outbound program." /><OutboundRoiCalculatorPage /></>} />
          <Route path="/email-list-grader" element={<Navigate to="/tools/email-list-grader" replace />} />
          <Route path="/compare" element={<><PageTitle title={SEO.compare.title} description={SEO.compare.description} /><CompareIndexPage /></>} />
          <Route path="/compare/:slug" element={<CompareDetailPage />} />
          <Route path="/dictionary/:slug" element={<GlossaryTermPage />} />
          <Route path="/signals" element={<><PageTitle title={SEO.signals.title} description={SEO.signals.description} noindex /><SignalsPage /></>} />
          <Route path="/templates" element={<><PageTitle title={SEO.templates.title} description={SEO.templates.description} /><TemplatesIndexPage /></>} />
          <Route path="/templates/:slug" element={<TemplateDetailPage />} />
          <Route path="/benchmarks" element={<><PageTitle title={SEO.benchmarks.title} description={SEO.benchmarks.description} /><BenchmarksIndexPage /></>} />
          <Route path="/benchmarks/:slug" element={<BenchmarkDetailPage />} />
          <Route path="/markets" element={<><PageTitle title={SEO.markets.title} description={SEO.markets.description} noindex /><MarketsIndexPage /></>} />
          <Route path="/markets/:slug" element={<><PageTitle title={SEO.markets.title} description={SEO.markets.description} noindex /><MarketDetailPage /></>} />
          <Route path="/affiliates" element={<><PageTitle title={SEO.affiliates.title} description={SEO.affiliates.description} /><AffiliatesPage /></>} />
          <Route path="/white-label" element={<><PageTitle title={SEO.whiteLabel.title} description={SEO.whiteLabel.description} noindex /><WhiteLabelPage /></>} />
          <Route path="/newsletter" element={<><PageTitle title={SEO.newsletter.title} description={SEO.newsletter.description} noindex /><NewsletterPage /></>} />
          <Route path="/events" element={<><PageTitle title={SEO.events.title} description={SEO.events.description} noindex /><EventsPage /></>} />
          <Route path="/report" element={<><PageTitle title={SEO.report.title} description={SEO.report.description} noindex /><ReportPage /></>} />
          <Route path="/drivers" element={<><PageTitle title={SEO.drivers.title} description={SEO.drivers.description} noindex /><BookHubPage /></>} />
          <Route path="/drivers/:slug" element={<><PageTitle title={SEO.drivers.title} description={SEO.drivers.description} noindex /><BookChapterPage /></>} />
          <Route path="/documentation" element={<><PageTitle title={SEO.documentation.title} description={SEO.documentation.description} /><DocumentationPage /></>} />
          <Route path="/status" element={<><PageTitle title={SEO.status.title} description={SEO.status.description} /><SystemStatusPage /></>} />
          <Route path="/system-status" element={<Navigate to="/status" replace />} />
          <Route path="/universal-api-keys" element={<><PageTitle
            title="Universal API Keys (Preview)"
            description="One key for every SalesDriver API. Developer preview."
          /><UniversalApiKeysPage /></>} />
          <Route path="/tools/:slug" element={<ToolDetailPageV2 />} />
          <Route path="/Privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy-policy" element={<><PageTitle title={SEO.privacy.title} description={SEO.privacy.description} /><Privacy /></>} />
          <Route path="/Terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/terms-of-service" element={<><PageTitle title={SEO.terms.title} description={SEO.terms.description} /><Terms /></>} />
          <Route path="/services/design" element={<Navigate to="/services" replace />} />
          <Route path="/services/development" element={<Navigate to="/services" replace />} />
          <Route path="/services/ai" element={<Navigate to="/services" replace />} />
          <Route path="/post/:slug" element={<PostDetails />} />
          <Route path="/integrations/joinsecret" element={<><PageTitle title={SEO.joinsecret.title} description={SEO.joinsecret.description} /><JoinSecretPage /></>} />
          {/* Fix 15 — broken /integrations chain → live HTTPS page */}
          <Route path="/integrations" element={<Navigate to="/integration-flow" replace />} />
          <Route path="/integrations/" element={<Navigate to="/integration-flow" replace />} />

          {/* SEO/AEO Route Pack — 33 pages for platform, data, outreach, services, solutions, compare */}
          <Route path="/platform/*" element={<SeoRoutePack />} />
          <Route path="/data/*" element={<SeoRoutePack />} />
          <Route path="/outreach/*" element={<SeoRoutePack />} />
          <Route path="/services/managed-outbound" element={<ServiceDesignPage slug="managed-outbound" />} />
          <Route path="/services/managed-outbound/" element={<ServiceDesignPage slug="managed-outbound" />} />
          <Route path="/services/appointment-setting" element={<ServiceDesignPage slug="appointment-setting" />} />
          <Route path="/services/appointment-setting/" element={<ServiceDesignPage slug="appointment-setting" />} />
          <Route path="/services/outsourced-business-development" element={<ServiceDesignPage slug="outsourced-business-development" />} />
          <Route path="/services/outsourced-business-development/" element={<ServiceDesignPage slug="outsourced-business-development" />} />
          <Route path="/services/agency-business-development" element={<ServiceDesignPage slug="agency-business-development" />} />
          <Route path="/services/agency-business-development/" element={<ServiceDesignPage slug="agency-business-development" />} />
          <Route path="/services/us-market-entry" element={<ServiceDesignPage slug="us-market-entry" />} />
          <Route path="/services/us-market-entry/" element={<ServiceDesignPage slug="us-market-entry" />} />
          <Route path="/solutions/*" element={<SeoRoutePack />} />
          <Route path="/developers" element={<SeoRoutePack />} />
          <Route path="/developers/" element={<SeoRoutePack />} />
          <Route path="/alternatives" element={<SeoRoutePack />} />
          <Route path="/alternatives/" element={<SeoRoutePack />} />
          {/* /compare/hubspot now served by the revamp CompareDetailPage (data-driven) */}
          <Route path="/compare/outreach" element={<SeoRoutePack />} />
          <Route path="/compare/outreach/" element={<SeoRoutePack />} />
          <Route path="/compare/salesloft" element={<SeoRoutePack />} />
          <Route path="/compare/salesloft/" element={<SeoRoutePack />} />
        </Route>

        {/* Client UI preview — full screen, no landing chrome */}
        <Route
          path="/preview/client-dashboard"
          element={
            <>
              <PageTitle title="Client Dashboard Preview" />
              <ClientDashboardPreview />
            </>
          }
        />

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<><PageTitle title={SEO.signin.title} description={SEO.signin.description} noindex /><Signin /></>} />
          <Route path="/signup" element={<><PageTitle title={SEO.signup.title} description={SEO.signup.description} noindex /><Signup /></>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/api/auth/verify-email" element={<VerifyEmail />} />
        </Route>

        <Route
          path="/payment/success"
          element={
            <>
              <PageTitle title="Payment Successful" />
              <SubscriptionSuccess />
            </>
          }
        />
        <Route
          path="/payment/cancel"
          element={
            <>
              <PageTitle title="Payment Cancelled" />
              <SubscriptionCancel />
            </>
          }
        />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<><PageTitle title="Dashboard" /><DashboardHome /></>} />
          <Route path="/apps" element={<><PageTitle title="Tools" /><AppsPage /></>} />
          <Route path="/dashboard/apps" element={<><PageTitle title="Tools" /><AppsPage /></>} />
          <Route path="/apps/:appName" element={<><PageTitle title="Tool Details" /><AppDetailPage /></>} />
          <Route path="/dashboard/leads" element={<><PageTitle title="Leads" /><LeadsPage /></>} />
          <Route path="/dashboard/academy" element={<><PageTitle title="Academy" /><Academy /></>} />
          <Route path="/dashboard/revenue" element={<><PageTitle title="Revenue Nexus" /><RevenueNexusPage /></>} />
          <Route path="/dashboard/community" element={<><PageTitle title="Community" /><CommunityPage /></>} />
          <Route path="/dashboard/marketplace" element={<><PageTitle title="Marketplace" /><MarketplacePage /></>} />
          <Route path="/settings" element={<><PageTitle title="Settings" /><SettingsPage /></>} />
          <Route path="/settings/profile" element={<><PageTitle title="Settings - My Profile" /><SettingsPage /></>} />
          <Route path="/settings/general" element={<><PageTitle title="Settings - General" /><SettingsPage /></>} />
          <Route path="/settings/security" element={<><PageTitle title="Settings - Security" /><SettingsPage /></>} />
          <Route path="/settings/notifications" element={<><PageTitle title="Settings - Notifications" /><SettingsPage /></>} />
          <Route path="/settings/billing" element={<Navigate to="/dashboard/usage-billing" replace />} />
          <Route path="/settings/:appName" element={<><PageTitle title="Tool Settings" /><ToolSettingsPage /></>} />
          <Route path="/dashboard/profile" element={<><PageTitle title="Profile" /><SettingsPage /></>} />
          <Route path="/profile" element={<><PageTitle title="Profile" /><SettingsPage /></>} />
          <Route path="/dashboard/reports" element={<><PageTitle title="Reports" /><ReportsPage /></>} />
          <Route path="/dashboard/support-ai" element={<><PageTitle title="Support AI" description="Get instant help from Gennie, SalesDriver's AI support assistant." /><SupportAIUser /></>} />
          <Route path="/dashboard/usage-billing" element={<><PageTitle title="Usage & Billing" /><UsageBillingDashboard /></>} />
          <Route path="/dashboard/sd-labs" element={<Outlet />}>
            <Route
              index
              element={
                <>
                  <PageTitle
                    title="SD Labs"
                    description="Browse 100 mini tools for GTM and ops inside your SalesDriver dashboard."
                  />
                  <DashboardSDLabs />
                </>
              }
            />
            <Route
              path=":categoryId/:toolSlug"
              element={
                <>
                  <PageTitle
                    title="SD Labs Tool"
                    description="Run an SD Labs mini tool inside your SalesDriver dashboard."
                  />
                  <SDLabsToolPage />
                </>
              }
            />
          </Route>
          <Route path="/dashboard/integrations" element={<><PageTitle title="SD Integrations" description="Connect apps and deploy n8n flows from your SalesDriver dashboard." /><DashboardIntegrations /></>} />
          <Route path="/dashboard/workflow/:id" element={<><PageTitle title="Workflow Editor" /><WorkflowEditorPage /></>} />
          <Route path="/dashboard/domains" element={<><PageTitle title="Domains & Hosting" description="Manage your domains, DNS records, and hosting control panel." /><DomainsListPage /></>} />
          <Route path="/dashboard/domains/add" element={<><PageTitle title="Add Domain" /><AddDomainPage /></>} />
          <Route path="/dashboard/domains/:domainId" element={<><PageTitle title="Domain Control Panel" /><DomainDetailPage /></>} />
          <Route path="/dashboard/hosting/:inclusionId" element={<><PageTitle title="Included Hosting" description="Manage included hosting products from your SalesDriver dashboard." /><HostingProductLayout /></>}>
            <Route index element={<HostingSectionRedirect />} />
            <Route path=":sectionId" element={<HostingSectionPage />} />
          </Route>
          <Route path="/support" element={<><PageTitle title="Support" description="Get help with your SalesDriver account and tools." /><SupportPage /></>} />
          <Route path="/dashboard/admin/subscriptions" element={<><PageTitle title="Subscriptions" /><AdminSubscriptions /></>} />
          <Route path="/dashboard/pricing" element={<><PageTitle title="Plans & Products" /><DashboardPricingPage /></>} />
          <Route path="/dashboard/offers" element={<><PageTitle title="Special Offers" /><JoinSecretIframePage /></>} />
        </Route>

        {/* Legacy URL → admin blogs */}
        <Route path="/dashboard/blogs" element={<Navigate to="/admin/blogs" replace />} />

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/support-ai" element={<><PageTitle title="Admin — Support AI" /><SupportAI /></>} />
          <Route path="/admin/support-stats" element={<><PageTitle title="Admin — Support Stats" /><AdminSupportStats /></>} />
          <Route path="/admin/blogs" element={<><PageTitle title="Admin — Blogs" /><BlogsPage /></>} />
          <Route path="/admin/jobs" element={<><PageTitle title="Admin — Jobs" /><JobsAdminPage /></>} />
          <Route path="/admin/job-applications" element={<><PageTitle title="Admin — Job Applications" /><JobApplicationsAdminPage /></>} />
          <Route path="/admin/integrations" element={<><PageTitle title="Admin — SD Integrations" /><DashboardIntegrations /></>} />
          <Route path="/admin/sd-labs" element={<Outlet />}>
            <Route
              index
              element={
                <>
                  <PageTitle title="Admin — SD Labs" />
                  <DashboardSDLabs />
                </>
              }
            />
            <Route
              path=":categoryId/:toolSlug"
              element={
                <>
                  <PageTitle title="Admin — SD Labs Tool" />
                  <SDLabsToolPage />
                </>
              }
            />
          </Route>
        </Route>

        {/* 404 — navbar + content + footer only (no newsletter CTA) */}
        <Route element={<NotFoundLayout />}>
          <Route
            path="*"
            element={<><PageTitle title="Page Not Found" description="The page you requested could not be found." noindex /><NotFound /></>}
          />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;


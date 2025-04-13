import React from "react";
import {
  Info,
  Shield,
  Handshake,
  Users,
  Link,
  AlertTriangle,
  Edit,
  Megaphone,
  User,
  UserCheck2Icon,
  Mail,
  FileText,
  Lock,
  Bell,
  CreditCard,
  Globe,
} from "lucide-react";

const terms = [
  {
    title: "Introduction",
    icon: Info,
    content: (
      <>
        <p className="text-[#333] mb-4">
          SalesDriver.io is committed to protecting the privacy of the data relating to our users, and their clients. We will collect, store, use and protect any personal information that you share with us. We will not share your information with anyone, except as described in this Privacy Policy.
        </p>
        <p className="text-[#333] mb-4">
          Throughout this Privacy Policy, we will refer to our website, applications delivered via the web, and other related services collectively as the "Service."
        </p>
        <p className="text-[#333] mb-4">
          This Privacy Policy does not apply to information we collect by other means than your use of the Service (including offline) or from other sources. When you sign up for SalesDriver.io and use the Service you agree to accept this Privacy Policy.
        </p>
        <p className="text-[#333] mb-4">
          We reserve the right to change this policy at any time, and if we do so, we will post changes and updates to this page. Please refer to this policy periodically to inform yourself if changes have been made.
        </p>
      </>
    ),
  },
  {
    title: "Information We May Collect",
    icon: FileText,
    content: (
      <>
        <p className="text-[#333] mb-4">
          We collect the following Personally Identifiable Information from users who buy our products and services: name, email address, telephone number, address, and credit card number.
        </p>
        <p className="text-[#333] mb-4">
          In addition, upon using the Service, individual transaction data obtained from your third-party invoicing or accounting application, ("Quickbooks," "Xero," "Clio" etc.) information collected via the browser, user generated content and other information uploaded to the website by the user, in conjunction with your use of the Service may be collected. Information obtained through these means that relates to the user's client or customer to be invoiced through SalesDriver may at times be referred to as "Third-Party Client Information" throughout this Privacy Policy.
        </p>
        <p className="text-[#333] mb-4">
          Additional information from or about you may also be collected in other ways, including responses to customer surveys and any communications with our customer service team.
        </p>
        <p className="text-[#333] mb-4">
          We use "cookies" so that our Website can remember you and provide you with the information you're most likely to need. For instance, when you return to the Website, cookies identify you and prompt the site to provide your username (not your password), so you can sign in more quickly. Cookies also allow our Website to remind you of your past usage and to suggest similar products and services. Finally, we use information gained through cookies to compile statistical information about use of our Website, such as the time users spend at the site and the pages they visit most often. Those statistics do not include PII.
        </p>
      </>
    ),
  },
  {
    title: "Our Use of Personally Identifiable Information",
    icon: Users,
    content: (
      <>
        <p className="text-[#333] mb-4">
          We use your Personally Identifiable Information to create your account, to communicate with you about products and services you've purchased, to offer additional products and services, and to bill you. We also use this information to the extent necessary to enforce our Website terms of service and to prevent imminent harm to persons or property.
        </p>
        <p className="text-[#333] mb-4">
          When you use the Service, including accepting a payment, contacting customer service or requesting technical support, in addition to many other interactions with SalesDriver, we will apply the information that we have collected. Knowing this information allows us to verify your identity, communicate with you and enforce our agreements with you, as well as secure the best possible experience for all SalesDriver customers by ensuring compliance with applicable US state and federal laws and our own policies. We may also use this information to improve and enhance our offerings to you.
        </p>
        <p className="text-[#333] mb-4">
          SalesDriver may use certain information about you without identifying you as an individual to third parties. We do this for purposes such as analyzing how the Service is used, diagnosing service or technical problems, maintaining security, and personalizing content.
        </p>
      </>
    ),
  },
  {
    title: "Protecting Personal Information",
    icon: Shield,
    content: (
      <>
        <p className="text-[#333] mb-4">
          Information that can be used to identify a person is "Personally Identifiable Information". This does not include information that has been aggregated or made anonymous. All information is securely stored on our servers in the United States. We employ the highest in industry standards to protect Personally Identifiable Information, as well as any information provided relating to your invoiced customers.
        </p>
        <p className="text-[#333] mb-4">
          Third-party client and customer information, provided to SalesDriver by users, shall be considered confidential and shall not be disclosed to any third party, unless required to do so by law or subpoena or if we believe that such action is necessary to conform to the law, or comply with legal process served on us. Such information shall be utilized only for the purpose for which SalesDriver was created, which is to facilitate the billing and collection process for electronic billing of customers and clients.
        </p>
        <p className="text-[#333] mb-4">
          Although SalesDriver utilizes the highest reasonable levels of data security in the industry, we cannot guarantee the security of PII or other information provided to us. By using our Website, you acknowledge and agree that we make no such guarantee, and that you use our Website at your own risk.
        </p>
      </>
    ),
  },
  {
    title: "Sharing Personal Information",
    icon: Handshake,
    content: (
      <>
        <p className="text-[#333] mb-4">
          SalesDriver will not rent or sell your Personal Information to others. We may store personal information in locations outside the direct control of SalesDriver (for instance, on servers or databases co-located with hosting providers). SalesDriver will share your Personal Information with a limited number of SalesDriver partners for the explicit purpose of providing services to you. If we do this, such third parties' use of your Personal Information will be bound by terms at least as restrictive as this Privacy Policy.
        </p>
        <p className="text-[#333] mb-4">
          As we develop our business, we may buy or sell assets or business offerings. Customer, transaction, email, and visitor information is generally one of the transferred business assets in these types of transactions. We may also transfer such information in the course of corporate divestitures, bankruptcy, mergers, or dissolution.
        </p>
        <p className="text-[#333] mb-4">
          Except as otherwise described in this Privacy Policy, SalesDriver will not disclose Personal Information to any third party unless required to do so by law or subpoena or if we believe that such action is necessary to (a) conform to the law, comply with legal process served on us or our affiliates, or investigate, prevent, or take action regarding suspected or actual illegal activities; (b) to enforce our User Agreement, take precautions against liability, to investigate and defend ourselves against any third-party claims or allegations, to assist government enforcement agencies, or to protect the security or integrity of our site; and (c) to exercise or protect the rights, property, or personal safety of SalesDriver, our customers or others.
        </p>
      </>
    ),
  },
  {
    title: "Compromise of Personal Information",
    icon: AlertTriangle,
    content: (
      <>
        <p className="text-[#333] mb-4">
          In the event that personal information is compromised as a result of a breach of security, SalesDriver will promptly notify those persons whose personal information has been compromised, in accordance with the notification procedures set forth in this Privacy Policy, by email, or as otherwise required by applicable law.
        </p>
        <p className="text-[#333] mb-4">
          SalesDriver shall not be liable for the transfer of any personal identification information resulting from loss or distribution of data, the delineation or corruption of storage media, power failures, natural phenomena, riots, acts of vandalism, sabotage, terrorism or any other event beyond SalesDriver's control.
        </p>
      </>
    ),
  },
  {
    title: "Your Choices About Your Information",
    icon: Edit,
    content: (
      <>
        <p className="text-[#333] mb-4">
          You may, of course, decline to submit personally identifiable information through the Service, in which case SalesDriver may not be able to provide certain services to you. You may update or correct your account information at any time by logging in to your account. You can review and correct the information about you that SalesDriver keeps on file by contacting us as described below.
        </p>
      </>
    ),
  },
  {
    title: "Information Relating to Minors",
    icon: UserCheck2Icon,
    content: (
      <>
        <p className="text-[#333] mb-4">
          SalesDriver does not knowingly collect or solicit personal information from anyone under the age of 18 or knowingly allow such persons to register with our Service. If you are under 18, please do not send any information about yourself to us, including your name, address, telephone number, or email address. No one under age 18 is allowed to provide any personal information to or on SalesDriver. In the event that we learn that we have collected personal information from a minor under age 18 without verification of parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 18, please contact us as described below.
        </p>
      </>
    ),
  },
  {
    title: "Links to Other Websites",
    icon: Link,
    content: (
      <>
        <p className="text-[#333] mb-4">
          SalesDriver is not responsible for the practices employed by websites linked to or from our website, nor the information or content contained therein. Please remember that when you use a link to go from our website to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our website, is subject to that website's own rules and policies. Please read over those rules and policies before proceeding.
        </p>
      </>
    ),
  },
  {
    title: "Notification Procedures",
    icon: Bell,
    content: (
      <>
        <p className="text-[#333] mb-4">
          It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through conspicuous posting of such notice on our website, as determined by SalesDriver in its sole discretion. We reserve the right to determine the form and means of providing notifications to you.
        </p>
      </>
    ),
  },
  {
    title: "Changes to Our Privacy Policy",
    icon: Megaphone,
    content: (
      <>
        <p className="text-[#333] mb-4">
          If we change our privacy policies and procedures, we will post those changes on our website to keep you aware of what information we collect, how we use it and under what circumstances we may disclose it. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    icon: Mail,
    content: (
      <>
        <p className="text-[#333] mb-4">
          Please contact us with any questions or concerns regarding our policy.
        </p>
        <p className="text-[#333] font-semibold">
          Customer Support Team: info@salesdriver.io
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-sm">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-black text-[#00A7E2] mt-2">
          Privacy Policy
        </h1>
        <p className="text-[#666] font-medium text-sm mt-6">
          Last Updated: August 19, 2022
        </p>
      </div>
      <div className="space-y-8 mb-16">
        {terms.map((term, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#00A7E2] flex items-center justify-center flex-shrink-0">
              <term.icon className="text-white w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#121212] font-bold mb-3 text-lg sm:text-xl">
                {term.title}
              </h2>
              <div className="text-[#333] text-[15px] sm:text-[16px] leading-relaxed">
                {term.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
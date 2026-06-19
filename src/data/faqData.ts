export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: { [key: string]: FAQItem[] } = {
  process: [
    {
      question: "How long does a typical interior design project take from start to finish?",
      answer: "The timeline depends highly on the project's overall architectural scope. A single customized room generally takes 4–6 weeks. A complete premium apartment requires 10–16 weeks. A comprehensive luxury villa or high-end commercial fit-out takes 12–24 weeks. We establish a highly optimized, rigid Gantt timeline prior to physical site deployment."
    },
    {
      question: "Can I be actively involved in the design and material decisions?",
      answer: "Absolutely. Our design process is deeply collaborative. You are actively consulted at every milestone — from initial concept mood board selections, stone slab pickups, and custom furniture mockups, to photorealistic 3D rendering approvals."
    },
    {
      question: "Do I need to be present on-site during active carpentry and masonry?",
      answer: "Not necessarily. Our Technical Project Managers oversee and coordinate all builders daily. We submit detailed digital progress photos and video walkthrough summaries to your dashboard weekly. We recommend being present for the milestone check-ins and the final physical walkthrough reveal!"
    },
    {
      question: "What happens if I change my mind after formal design sign-off?",
      answer: "Minor visual adjustments mid-execution can be managed seamlessly. Major alterations (such as structural wall layouts or replacing pre-purchased stone slabs) after active fabrication has commenced may incur additional material fees. We always elaborate transparent, cost-analysis estimates for your approval before enacting any shifts."
    },
    {
      question: "How do you control budget overruns during execution?",
      answer: "We protect our clients by building a strict 5-10% contingency buffer directly into our material estimates. We verify supplier prices in real-time and secure binding contractor quotes, so we flag potential overruns before they materialize — never after!"
    },
    {
      question: "Can your team design around my existing valued furniture items?",
      answer: "Yes, we love writing unique stories. We assess your sentimental or high-value pieces and design custom wall textures, lighting layers, and fabrics that frame and celebrate those items beautifully inside your newly polished theme."
    }
  ],
  contact: [
    {
      question: "Do you offer a free initial consultation?",
      answer: "Yes. We offer a complimentary, highly valuable 45-minute architectural interior consultation. This can be scheduled in-person at our premium Karachi showroom or virtually via Zoom video conference for our international clients."
    },
    {
      question: "What geographical areas of Pakistan do you serve?",
      answer: "We are proudly based in Karachi (executing premium projects in DHA Phases 1–8, Clifton, KDA, and PECHS). We regularly deploy engineering teams to Lahore (DHA, Cantt, Gulberg) and Islamabad (Sectors F-6 to F-8, E-7, Bahria Town). We also accept select international commercial projects across Dubai, UAE, and Riyadh, Saudi Arabia."
    },
    {
      question: "How quickly can a new project start after our first meeting?",
      answer: "Usually, our concept designers can commence your site survey and mood board development within 1–2 weeks of the initial brief discussion and down-payment registration."
    },
    {
      question: "Do you require a deposit before starting, and what are the payment terms?",
      answer: "Yes. We require a 25% design fee deposit to initiate site measurement drafting and concept renderings. The remaining balance is broken into structured, milestone-based installments (e.g., 35% on final 3D/technical layout approval, 30% during on-site fabrication progress, and 10% on key handover)."
    },
    {
      question: "Can I visit your Karachi studio to physically touch material samples?",
      answer: "Absolutely! We encourage you to schedule an appointment to visit our DHA Phase 6 studio. We will guide you through our physical library where you can touch Italian marbles, Smoked German Oak veneers, Turkish textiles, and brushed brass hardware finishes."
    }
  ],
  general: [
    {
      question: "What makes AR Interior different from other design firms?",
      answer: "We reject generic, repetitive builder packages. We operate as land-craft artisans, custom-designing every table, light profile, and frame strictly around our client's unique psychological needs. We own our absolute supply chain, ensuring unparalleled micro-finishing precision."
    },
    {
      question: "Do you provide turnkey contracting services, or only design drawings?",
      answer: "We are a full-scale, full-stack interior architecture group. We provide complete turnkey execution (design, technical drafts, masonry, plumbing, electrical layout, custom carpentry, and final artistic staging) so you only deal with a single, highly responsible manager."
    },
    {
      question: "How do we select materials? Do we have to travel with your team?",
      answer: "We make material shopping effortless. We present hand-picked material trays containing actual marble bits, timber wood swatches, and fabric samples at our studio. For main flooring slabs, you are welcome to visit our specialized marble yards, or we can video-stream high-definition vein selections in real-time!"
    }
  ]
};

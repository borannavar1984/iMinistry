/*
 * iMinistry ministry registry.
 *
 * `code` is a short file-reference tag (styled after how government
 * circulars abbreviate ministries), used in the UI instead of icons/photos.
 *
 * Rules for editing this file (see METHODOLOGY.md for the full version):
 *   1. Never add a person's name here. Ministries only.
 *   2. Every non-null score MUST have at least one entry in `citations`
 *      pointing to a public, checkable source (CAG report, RTI reply,
 *      Lok Sabha / Rajya Sabha Q&A, PIB release, court order, or a named
 *      news report with a URL and date).
 *   3. `watchAreas` are neutral, forward-looking themes to monitor —
 *      not accusations. Phrase them as topics, not verdicts.
 *   4. Leave a score `null` ("Unrated") rather than guessing.
 */

const MINISTRIES = [
  {
    id: "home-affairs",
    name: "Ministry of Home Affairs",
    code: "HOM",
    mandate: "Internal security, police coordination, border management, disaster response, citizenship.",
    watchAreas: [
      "Communal/law-and-order incident response time",
      "Disaster relief deployment speed",
      "Police reforms & vacancy rates",
      "Border infrastructure progress",
    ],
  },
  {
    id: "education",
    name: "Ministry of Education",
    code: "EDU",
    mandate: "School and higher education policy, entrance/board exam bodies (CBSE, NTA), literacy programs.",
    watchAreas: [
      "Exam paper leak incidents & NTA reforms",
      "Learning outcome surveys (ASER, NAS)",
      "Teacher vacancy rates",
      "Higher-ed access & scholarship disbursal delays",
    ],
  },
  {
    id: "health",
    name: "Ministry of Health & Family Welfare",
    code: "HLT",
    mandate: "Public health systems, disease control, drug regulation, Ayushman Bharat.",
    watchAreas: [
      "Rural primary health centre staffing",
      "Drug quality/regulation enforcement (CDSCO)",
      "Ayushman Bharat claim rejection rates",
      "Public health emergency response",
    ],
  },
  {
    id: "finance",
    name: "Ministry of Finance",
    code: "FIN",
    mandate: "Budget, taxation, banking regulation, public expenditure, financial inclusion.",
    watchAreas: [
      "Fiscal deficit vs budget targets",
      "PSU bank NPA trends",
      "GST compliance simplification",
      "CAG-flagged expenditure irregularities",
    ],
  },
  {
    id: "defence",
    name: "Ministry of Defence",
    code: "DEF",
    mandate: "Armed forces, defence production, procurement, veteran welfare.",
    watchAreas: [
      "Procurement delays (CAG reports)",
      "Indigenous defence production targets",
      "OROP/veteran pension disbursal",
      "Border infrastructure readiness",
    ],
  },
  {
    id: "external-affairs",
    name: "Ministry of External Affairs",
    code: "MEA",
    mandate: "Foreign policy, diplomacy, overseas Indian affairs, passport services.",
    watchAreas: [
      "Evacuation/crisis response for Indians abroad",
      "Passport/visa service delivery times",
      "Bilateral trade & border agreements",
    ],
  },
  {
    id: "railways",
    name: "Ministry of Railways",
    code: "RLY",
    mandate: "Indian Railways operations, safety, infrastructure expansion.",
    watchAreas: [
      "Accident/derailment frequency (CRS reports)",
      "Signal & safety upgrade (Kavach) rollout",
      "Punctuality statistics",
      "Vacancy rates in safety-critical roles",
    ],
  },
  {
    id: "road-transport",
    name: "Ministry of Road Transport & Highways",
    code: "RTH",
    mandate: "National highways, road safety, motor vehicle regulation.",
    watchAreas: [
      "Road accident fatality trends",
      "Highway project delays/cost overruns (CAG)",
      "Toll collection transparency",
    ],
  },
  {
    id: "agriculture",
    name: "Ministry of Agriculture & Farmers Welfare",
    code: "AGR",
    mandate: "Farm policy, MSP, crop insurance, agricultural credit.",
    watchAreas: [
      "MSP payment delays",
      "Crop insurance (PMFBY) claim settlement rates",
      "Farmer distress / debt relief scheme uptake",
    ],
  },
  {
    id: "women-child",
    name: "Ministry of Women & Child Development",
    code: "WCD",
    mandate: "Child protection, anganwadi nutrition programs, women's safety schemes.",
    watchAreas: [
      "Anganwadi nutrition delivery & vacancy rates",
      "POCSO case pendency in fast-track courts",
      "One-Stop-Centre (women's helpline) functioning",
    ],
  },
  {
    id: "environment",
    name: "Ministry of Environment, Forest & Climate Change",
    code: "ENV",
    mandate: "Environmental clearances, pollution control, forest & wildlife protection.",
    watchAreas: [
      "Air quality (NCAP) target progress",
      "Environmental clearance approval scrutiny",
      "Forest cover change data",
    ],
  },
  {
    id: "law-justice",
    name: "Ministry of Law & Justice",
    code: "LAW",
    mandate: "Judicial appointments coordination, legislative drafting, legal aid.",
    watchAreas: [
      "Court/judge vacancy rates",
      "Case pendency statistics",
      "Legal aid scheme reach",
    ],
  },
  {
    id: "labour-employment",
    name: "Ministry of Labour & Employment",
    code: "LAB",
    mandate: "Labour codes, employment schemes, social security for workers.",
    watchAreas: [
      "Unemployment rate (PLFS data)",
      "MGNREGA wage payment delays",
      "Labour code implementation status",
    ],
  },
  {
    id: "rural-development",
    name: "Ministry of Rural Development",
    code: "RUR",
    mandate: "MGNREGA, rural housing (PMAY-G), rural roads (PMGSY).",
    watchAreas: [
      "MGNREGA fund release delays",
      "PMAY-G house completion rates",
      "PMGSY road connectivity targets",
    ],
  },
  {
    id: "urban-affairs",
    name: "Ministry of Housing & Urban Affairs",
    code: "URB",
    mandate: "Urban housing, Smart Cities Mission, urban transport & sanitation.",
    watchAreas: [
      "PMAY-U completion vs target",
      "Smart Cities fund utilisation",
      "Urban solid waste management (Swachh survey)",
    ],
  },
  {
    id: "power",
    name: "Ministry of Power",
    code: "PWR",
    mandate: "Electricity generation, transmission policy, discom health, rural electrification.",
    watchAreas: [
      "Discom financial losses",
      "Power outage / supply reliability data",
      "Renewable capacity addition targets",
    ],
  },
  {
    id: "petroleum",
    name: "Ministry of Petroleum & Natural Gas",
    code: "PET",
    mandate: "Fuel pricing policy, LPG distribution (Ujjwala), oil/gas exploration.",
    watchAreas: [
      "Fuel price transparency",
      "Ujjwala refill uptake rates",
      "Strategic reserve management",
    ],
  },
  {
    id: "electronics-it",
    name: "Ministry of Electronics & Information Technology",
    code: "IT",
    mandate: "Digital infrastructure, data protection, IT/electronics manufacturing.",
    watchAreas: [
      "Data breach incidents & response",
      "Digital India scheme delivery",
      "Content takedown / platform regulation transparency",
    ],
  },
  {
    id: "commerce-industry",
    name: "Ministry of Commerce & Industry",
    code: "COM",
    mandate: "Trade policy, export promotion, industrial corridors, startup ecosystem.",
    watchAreas: [
      "Export target attainment",
      "Ease-of-doing-business rankings",
      "Industrial corridor project delays",
    ],
  },
  {
    id: "skill-development",
    name: "Ministry of Skill Development & Entrepreneurship",
    code: "SKL",
    mandate: "Vocational training, skilling missions, entrepreneurship support.",
    watchAreas: [
      "Skill India placement/certification rates",
      "Training centre quality audits",
    ],
  },
  {
    id: "tribal-affairs",
    name: "Ministry of Tribal Affairs",
    code: "TRB",
    mandate: "Tribal welfare schemes, forest rights, tribal education (Eklavya schools).",
    watchAreas: [
      "Forest Rights Act claim settlement rates",
      "Eklavya Model School completion status",
    ],
  },
  {
    id: "social-justice",
    name: "Ministry of Social Justice & Empowerment",
    code: "SJE",
    mandate: "SC/ST/OBC welfare, disability affairs, elderly welfare, anti-drug programs.",
    watchAreas: [
      "Scholarship disbursal delays for SC/ST/OBC students",
      "Atrocity case conviction rates",
      "Disability pension scheme reach",
    ],
  },
  {
    id: "jal-shakti",
    name: "Ministry of Jal Shakti (Water Resources)",
    code: "JAL",
    mandate: "Water resources, Ganga rejuvenation, drinking water & sanitation (Jal Jeevan Mission).",
    watchAreas: [
      "Jal Jeevan Mission tap connection targets",
      "River pollution / Ganga cleanup progress",
      "Groundwater depletion data",
    ],
  },
  {
    id: "consumer-affairs",
    name: "Ministry of Consumer Affairs, Food & Public Distribution",
    code: "CAF",
    mandate: "Consumer protection, food security (PDS), price monitoring.",
    watchAreas: [
      "PDS leakage / diversion rates",
      "Essential commodity price volatility",
      "Consumer grievance redressal times",
    ],
  },
  {
    id: "youth-sports",
    name: "Ministry of Youth Affairs & Sports",
    code: "YAS",
    mandate: "Sports development, youth programs, national sports federations.",
    watchAreas: [
      "Athlete grievance/harassment case handling",
      "Sports infrastructure fund utilisation",
      "Federation governance disputes",
    ],
  },
];

// Every ministry starts fully unrated — see METHODOLOGY.md before filling these in.
const PILLARS = ["transparency", "delivery", "responsiveness", "fiscalDiscipline"];

MINISTRIES.forEach((m) => {
  m.scores = m.scores || { transparency: null, delivery: null, responsiveness: null, fiscalDiscipline: null };
  m.citations = m.citations || [];
});

if (typeof module !== "undefined") {
  module.exports = { MINISTRIES, PILLARS };
}

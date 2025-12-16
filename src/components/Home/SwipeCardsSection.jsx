import SwipeCard from "./swipeCards.jsx";

const data = [
  {
    title: "Work and Office",
    slides: [
      {
        heading: "Computerization of MPACS",
        sub: "by Basava | 1 August 2022 | Cooperative, The Office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "Dr. Dhan Singh Rawat, the cabinet minister of the cooperative department of Uttarakhand, had first dreamed of digitization of multipurpose cooperative societies at the village and Nyaya Panchayat level on the land of Uttarakhand, that dream is being fulfilled today.To..."
      },
      {
        heading:
          "Pushpa Harela Festival Celebration & Collection centre inaugration at Shyampur, Laldhang MPACS.",
        sub: "by Basava | 17 July 2022 | Cooperative, The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "Pushpa Harela Festival was celebrated at Shyampur, by Laldhang MPACS under CCF model. Also Collection Centre for flowers & other agro produce was inauguration. Active participation of women in CCF activities like turmeric, mint, marigold cultivation through MPACS..."
      },
      {
        heading:
          "Meeting with Secretary, Rural Development, Government of India on “Mission Amrit Sarovar”",
        sub: "by Basava | 14 July 2022 | Cooperative, The office | 0 Comments",
        desc:
          "Mission Amrit Sarovar review meeting was held under Chairpersonship of Secretary, Rural Development- GoI. Key emphasis was laid on meeting the timeline for the set objectives. Expectation from State govt on Mission Amrit Sarovar was laid down with following points:..."
      },
      {
        heading:
          "First Meeting of “National Level Monitoring & Implementation Committee” (NLMIC) for Computerization of PACS: 8-07-2022",
        sub: "by Basava | 9 July 2022 | Cooperative, The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "First meeting of “National Level Monitoring & Implementation Committee” (NLMIC) for “Computerization of PACS” was held on 8-07-2022. District level and state level Implementation & Monitoring Committee to be formed by State Government and provide feedback to..."
      },
      {
        heading: "Apple Federation Board Meeting (5-07-2022)",
        sub: "by Basava | 6 July 2022 | Cooperative, The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "Apple Federation is the apex body for apple crop development, leading 21 cooperatives across 11 districts of Uttarakhand with over 12,700 farmers as members. Discussion was to initiate apple business with..."
      },
      {
        heading:
          "First Meeting of NEDAC Committee on Livestock Cooperatives (29-06-2022)",
        sub: "by Basava | 30 June 2022 | Animal Husbandry, The office | 0 Comments",
        desc:
          "Network for the Development of Agricultural Cooperatives in Asia and the Pacific (NEDAC) committee is formed with an objective of knowledge sharing about Agricultural cooperatives among Asia-Pacific members. First meeting of the NEDAC committee on “Livestock..."
      },
      {
        heading:
          "Software demonstration for field level monitoring – UKCDP (23 June 2022)",
        sub: "by Basava | 27 June 2022 | The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "The departments have been monitoring the implementation of Fisheries and Sheep & Goat activities through physical verification, reports and MPRs. The need of the hour is to use real time monitoring systems such as software / apps / MIS etc. Currently the..."
      },
      {
        heading: "Review Meeting – UKCDP (22 June’2022)",
        sub: "by Basava | 27 June 2022 | The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "The four sectors of UKCDP project namely Cooperative, Sheep & Goat, Dairy and Fishery sectors have been playing a vital role in planning, strategizing and implementing the key activities through farmer groups/cooperatives. The concerned teams presented the weekly..."
      },
      {
        heading:
          "Meeting regarding Fodder Policy & Convergence – Animal Husbandry & Dairy (13 June’2022)",
        sub: "by Basava | 16 June 2022 | Animal Husbandry, Dairy, The office | 0 Comments",
        desc:
          "The Animal Husbandry department in consultation with the field officers are preparing revised fodder policy for the state. A joint meeting of animal husbandry and dairy department was held for reviewing the draft policy and the convergence plan between both the..."
      },
      {
        heading:
          "Homestay Development through cooperative societies – VC (13 June’2022)",
        sub: "by Basava | 16 June 2022 | The office, Uttarakhand Cooperative Development Project | 0 Comments",
        desc:
          "Homestay Development is one of the key activities under Uttarakhand Cooperative Development Project (UKCDP). The UKCDP team is preparing a comprehensive plan for the development of sustainable homestays in Kumaon & Garhwal regions through Multipurpose Primary..."
      }
    ]
  },

  {
    title: "Personal",
    slides: [
      {
        heading:
          "White Gold and Hard Choices: Policy Analysis for Uttarakhand’s Dairy Future",
        sub: "by BVRC Purushottam | 14 December 2025 | Personal Blog | 0 Comments",
        desc:
          "Stories Through Data week 7. Characters: Dr. Meera Rawat, Joint Director (Planning), and Vikram Singh Negi, Deputy Director (Field Operations), Uttarakhand Dairy Development Department Morning sunlight streamed through the conference room as Dr. Meera Rawat,..."
      },
      {
        heading: "Visualizing Correlation: A Practical Guide",
        sub: "by BVRC Purushottam | 6 December 2025 | Dairy, Stories through Data| 0 Comments",
        desc:
          "How Two Dairy Officers Discovered the Power of Good Graphs The Morning Discovery The morning sun filtered through the windows of the Department of Dairy Development in Dehradun. Rajesh Kumar, a senior dairy officer with fifteen years of experience, sat hunched over..."
      },
      {
        heading:
          "The Banyan Tree Conversation: Economics of a Better Herd",
        sub: "by BVRC Purushottam | 30 November 2025 | Personal Blog| 0 Comments",
        desc:
          "Introduction In the heart of rural India, traditional wisdom meets modern science. This story illustrates the transformative potential of advanced cattle breeding technologies—Genomics, Embryo Transfer (ET), and Sexed Semen—compared to traditional Artificial..."
      },
      {
        heading:
          "Strengthening India’s Livestock Sector Through Feed Optimization-A Data-Driven Perspective on Opportunities in Animal Husbandry",
        sub: "by BVRC Purushottam | 27 November 2025 | Personal Blog| 0 Comments",
        desc:
          "Disclaimer: This article presents a data-driven analysis based on publicly available government reports (NSSO, ICAR, Ministry publications). The views expressed are personal and do not represent official policy positions. They should not be construed as criticism of..."
      },
      {
        heading:
          "Building Bridges: Rural India’s ₹5 Lakh Crore Financial Inclusion Opportunity",
        sub: "by BVRC Purushottam | 23 November 2025 | Personal Blog| 0 Comments",
        desc:
          "In rural India, where 70% of the nation resides, a remarkable foundation is already in place: 73% of households demonstrate sound financial behaviour, regularly saving and managing their money wisely. This strong foundation presents an unprecedented opportunity..."
      },
      {
        heading:
          "The Tale of Two Loans:",
        sub: "by BVRC Purushottam | 15 November 2025 | Personal Blog | 0 Comments",
        desc:
          "Understanding Real vs. Nominal Interest Rates in India's Evolving Economy Part 1: The Celebration (April 2021) Rajesh Mehta was beaming as he stirred his chai in the office cafeteria. His colleague Priya Sharma noticed his unusually cheerful mood. 'You look happy,..."
      },
      {
        heading:
          "Stories through Data : Week 1 , A Families Financial Awakening.",
        sub: "by BVRC Purushottam | 9 November 2025 | Personal Blog | 0 Comments",
        desc:
          "In rural India, where 70% of the nation resides, a remarkable foundation is already in place: 73% of households demonstrate sound financial behaviour, regularly saving and managing their money wisely. This strong foundation presents an unprecedented opportunity..."
      },
      {
        heading:"Stories_through_data_week1.Download Stories through Data : Week 2 , Credit card loans vs Housing Loans",
        sub:"by BVRC Purushottam | 9 November 2025 | Personal Blog | 0 Comments",
        desc:"Welcome to Stories with Data, Week 2 Today we will examine the problem of Rising Credit Card Defaults and Personal Loan Portfolio Management in Scheduled Commercial Banks The Banker's Dilemma A story of credit, risk, and the numbers that keep bankers awake at night...",
      }
    ]
  },

  {
    title: "News and Media",
    slides: [
      {
        heading: "Statement on Increase in Trout Fish Farming",
        sub: "News Update",
        desc:
          "Official statement highlighting the rise in trout fish farming initiatives."
      },
      {
        heading: "Increase in Target for Trout Fish Farming",
        sub: "News Update",
        desc:
          "Government increases targets to promote trout fish farming across suitable regions."
      }
    ]
  }
];

export default function SwipeCardsSection() {
  return (
    <section className="bg-[#232427] py-6 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {data.map((item, i) => (
          <SwipeCard
            key={i}
            title={item.title}
            slides={item.slides}
          />
        ))}
      </div>
    </section>
  );
}

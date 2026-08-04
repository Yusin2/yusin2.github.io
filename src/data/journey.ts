export type JourneyDetailLink = {
  text: string;
  url: string;
};

export type JourneyDetail = string | readonly (string | JourneyDetailLink)[];

export type JourneyItem = {
  period: string;
  organization: string;
  organizationUrl?: string;
  role?: string;
  roleUrl?: string;
  details?: readonly [JourneyDetail] | readonly [JourneyDetail, JourneyDetail] | readonly [JourneyDetail, JourneyDetail, JourneyDetail];
};

export type JourneyGroup = {
  title: "Experience" | "Education" | "Honors & Awards" | "Volunteering";
  items: JourneyItem[];
};

const groups: JourneyGroup[] = [
  {
    title: "Experience",
    items: [
      {
        period: "2026.7 - Present",
        organization: "SNU Machine Perception and Reasoning Lab",
        organizationUrl: "https://snumprlab.github.io/",
        role: "Undergraduate Researcher",
        details: [
          "Researching human interaction and intervention mechanisms for VLA models"
        ]
      },
      {
        period: "2026.6 - Present",
        organization: "Feasix AI",
        organizationUrl: "https://www.feasix.com/",
        role: "Robotics Engineer (Internship)",
        details: [
          "Developing localization algorithms for AMRs operating without GPS or LiDAR"
        ]
      },
      {
        period: "2025.12 - 2026.2",
        organization: "SAZZE Partners",
        organizationUrl: "https://www.sazze.vc/",
        role: "Intern",
        details: [
          "Researched startups across the GEO, AdTech, SpatialTech, Video GenAI, and RWA sectors"
        ]
      },
      {
        period: "2025.2 - 2025.12",
        organization: "SNAAC",
        organizationUrl: "https://www.snaac.co.kr/",
        role: "Partner",
        details: [
          [
            "Organized two ",
            {
              text: "NAACst STEP",
              url: "https://www.snaac.co.kr/naacststep"
            },
            " accelerator programs, awarding $30,000 in total prizes"
          ],
          [
            "Served as a growth partner for ",
            {
              text: "Viscure",
              url: "https://viscure.co.kr/"
            },
            " (CEO: Seokju Lee) and ",
            {
              text: "Pineco",
              url: "https://www.pineco.co.kr/"
            },
            " (CEO: Joonwoo Park)"
          ],
          [
            "Led an engineering-focused startup lecture series and ",
            {
              text: "career fair",
              url: "https://www.linkedin.com/posts/snusnaac_startup-pop-up-day-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EC%B1%84%EC%9A%A9-%EB%B0%95%EB%9E%8C%ED%9A%8C-%ED%96%89%EC%82%AC%EB%A5%BC-%EC%A7%80%EB%82%9C-activity-7410507234289582080-QwO-/"
            },
            " (300+ SNU participants)"
          ]
        ]
      },
      {
        period: "2025.3 - 2025.11",
        organization: "Alphanonce",
        organizationUrl: "https://www.linkedin.com/company/alpha273/",
        role: "Software Engineer (Internship)",
        details: [
          [
            "Researched blockchain infrastructure with a focus on ",
            {
              text: "vault management",
              url: "https://app.affluent.org/earn"
            },
            " and liquidation mechanisms"
          ],
          "Developed drivers that interface with both CEX and DEX platforms"
        ]
      },
      {
        period: "2024.9 - 2025.8",
        organization: "STEM (SNU College of Engineering Honor Society)",
        organizationUrl: "https://www.gongwoo.snu.ac.kr/",
        role: "President",
        details: [
          [
            "Coordinated Vision Mentoring (100+ high school students) and two ",
            {
              text: "Vision Fairs",
              url: "https://en.snu.ac.kr/snunow/snu_media/news?md=v&bbsidx=173018"
            },
            " (70+ undergraduates each)"
          ],
          "Launched department-level mentoring programs and expanded academic and career networking initiatives"
        ]
      },
      {
        period: "2022.5 - 2023.11",
        organization: "Presidential Security Service",
        role: "Honorably discharged, Republic of Korea Army"
      }
    ]
  },
  {
    title: "Education",
    items: [
      {
        period: "2020.3 - Present",
        organization: "Seoul National University",
        organizationUrl: "https://www.snu.ac.kr/",
        role: "B.S. in Electrical and Computer Engineering",
        roleUrl: "https://ece.snu.ac.kr/"
      },
      {
        period: "2018.3 - 2020.2",
        organization: "Busan Science High School",
        organizationUrl: "https://school.busanedu.net/bss-h/main.do"
      }
    ]
  },
  {
    title: "Honors & Awards",
    items: [
      {
        period: "2020.3 - 2026.2",
        organization: "Presidential Science Scholarship",
        organizationUrl: "https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_05_01",
      },
      {
        period: "2024.9",
        organization: "Deep Learning-Based Product Recognition Competition for Unmanned Stores",
        organizationUrl: "https://www.disu.ac.kr/LOCnLOS/AIX/notice?md=v&bbsidx=7747",
        role: "Grand Prize (1st Place)",
        roleUrl: "https://www.disu.ac.kr/LOCnLOS/AIX/notice?md=v&bbsidx=7849"
      },
      {
        period: "2021.10",
        organization: "International Student Creative Car Competition (Autonomous Driving Division)",
        organizationUrl: "https://www.youtube.com/watch?v=x3IgZfrpe7c&t=2s",
        role: "Gold Prize (2nd Place)"
      }
    ]
  },
  {
    title: "Volunteering",
    items: [
      {
        period: "2024.4 - 2025.11\n2021.4 - 2021.11",
        organization: "SNU Mentoring Program",
        organizationUrl: "https://snusr.snu.ac.kr/activities/SNU-mentoring",
        details: [
          "Provided online career mentoring to middle and high school students"
        ]
      }
    ]
  }
];

export const journeyData = {
  title: "Journey",
  ariaLabel: "Journey timeline",
  groups
} as const;

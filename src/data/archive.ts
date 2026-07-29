export type ExternalPost = {
  title: string;
  date: string;
  source: string;
  url: string;
};

const externalPosts: ExternalPost[] = [
  {
    title: "우리 스타트업에서 일할 사람 구해요!",
    date: "2025-10-12",
    source: "SNAAC",
    url: "https://blog.snaac.co.kr/73642"
  },
  {
    title: "Y의 스타트업 노트",
    date: "2025-08-29",
    source: "SNAAC",
    url: "https://blog.snaac.co.kr/y%EC%9D%98-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%85%B8%ED%8A%B8-68748"
  },
  {
    title: "스타트업의 뿌리 : 특허",
    date: "2025-08-07",
    source: "SNAAC",
    url: "https://blog.snaac.co.kr/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%EC%9D%98-%EB%BF%8C%EB%A6%AC-%ED%8A%B9%ED%97%88-64785"
  },
  {
    title: "전기정보공학부: 알고리즘의 기초",
    date: "2024-06-29",
    source: "STEM",
    url: "https://stementor.tistory.com/entry/%EC%A0%84%EA%B8%B0%EC%A0%95%EB%B3%B4%EA%B3%B5%ED%95%99%EB%B6%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%98-%EA%B8%B0%EC%B4%88"
  }
];

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DXbCXfokQpz/",
    image: "/instagram/DXbCXfokQpz.jpg",
  },
  {
    url: "https://www.instagram.com/p/DHC3zoYxLJC/",
    image: "/instagram/DHC3zoYxLJC.jpg",
  },
  {
    url: "https://www.instagram.com/p/C-heaizRKBA/",
    image: "/instagram/C-heaizRKBA.jpg"
  }
] as const;

export const archiveData = {
  label: "Writing & Notes",
  title: "Ideas worth keeping.",
  emptyMessage: "Writing soon.",
  externalPosts,
  instagramPosts
} as const;

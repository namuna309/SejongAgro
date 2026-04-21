const SITE_CONFIG = {
  siteName: "세종농자재농약마트",
  shortSiteName: "세종농약농자재마트",
  phone: "044-864-2533",
  fax: "123-456-7894",
  email: "sejongagro@hanmail.net",
  bankName: "농협",
  bankAccount: "111-2222-3333-44",
  bankHolder: "세종농자재농약마트",
  address: "세종특별자치시 연동면 청연로 380, 세종농자재농약마트",
  addressShort: "30067 세종특별자치시 연동면 청연로 380 세종농자재농약마트",
  mapLink: "https://naver.me/59URM72D",
  businessNumber: "111-22-33333",
  salesNumber: "제1111-세종연동-00015호",
  privacyManager: "김책임",
  ceoName: "김대표",
};

const CATEGORY_MENU = [
  {
    key: "house",
    label: "하우스 시설자재",
    href: "products.html?category=house",
    children: [
      { key: "pipe", label: "파이프 / 연결자재", href: "products.html?category=house&subcategory=pipe" },
      { key: "clip", label: "고정클립 / 부속", href: "products.html?category=house&subcategory=clip" },
      { key: "film", label: "하우스 필름자재", href: "products.html?category=house&subcategory=film" },
    ],
  },
  {
    key: "water",
    label: "관수 / 배관 자재",
    href: "products.html?category=water",
    children: [
      { key: "valve", label: "밸브 / 코크", href: "products.html?category=water&subcategory=valve" },
      { key: "fitting", label: "엘보 / 티 / 연결구", href: "products.html?category=water&subcategory=fitting" },
      { key: "hose", label: "호스 / 튜브", href: "products.html?category=water&subcategory=hose" },
    ],
  },
  {
    key: "tank",
    label: "물탱크 / 고레통",
    href: "products.html?category=tank",
    children: [
      { key: "smalltank", label: "소형 물탱크", href: "products.html?category=tank&subcategory=smalltank" },
      { key: "bigtank", label: "대형 물탱크", href: "products.html?category=tank&subcategory=bigtank" },
      { key: "container", label: "고레통 / 저장용기", href: "products.html?category=tank&subcategory=container" },
    ],
  },
  {
    key: "vinyl",
    label: "하우스 / 멀칭비닐",
    href: "products.html?category=vinyl",
    children: [
      { key: "housevinyl", label: "하우스 비닐", href: "products.html?category=vinyl&subcategory=housevinyl" },
      { key: "mulching", label: "멀칭 비닐", href: "products.html?category=vinyl&subcategory=mulching" },
    ],
  },
  {
    key: "weed",
    label: "전초방지",
    href: "products.html?category=weed",
    children: [
      { key: "sheet", label: "잡초방지 시트", href: "products.html?category=weed&subcategory=sheet" },
      { key: "mat", label: "잡초방지 매트", href: "products.html?category=weed&subcategory=mat" },
    ],
  },
  {
    key: "garden",
    label: "원예자재",
    href: "products.html?category=garden",
    children: [
      { key: "support", label: "지지대 / 유인끈", href: "products.html?category=garden&subcategory=support" },
      { key: "pot", label: "화분 / 모종자재", href: "products.html?category=garden&subcategory=pot" },
    ],
  },
  {
    key: "shade",
    label: "차광망 / 기타망 / 보온덮개",
    href: "products.html?category=shade",
    children: [
      { key: "shadecloth", label: "차광망", href: "products.html?category=shade&subcategory=shadecloth" },
      { key: "cover", label: "보온덮개", href: "products.html?category=shade&subcategory=cover" },
    ],
  },
  {
    key: "tools",
    label: "철물 / 공구 / 기타자재",
    href: "products.html?category=tools",
    children: [
      { key: "hardware", label: "철물 자재", href: "products.html?category=tools&subcategory=hardware" },
      { key: "tool", label: "작업 공구", href: "products.html?category=tools&subcategory=tool" },
    ],
  },
  {
    key: "ladder",
    label: "사다리",
    href: "products.html?category=ladder",
    children: [
      { key: "folding", label: "접이식 사다리", href: "products.html?category=ladder&subcategory=folding" },
      { key: "work", label: "작업용 사다리", href: "products.html?category=ladder&subcategory=work" },
    ],
  },
  {
    key: "pest",
    label: "해충 / 유해조수퇴치기",
    href: "products.html?category=pest",
    children: [
      { key: "insect", label: "해충 퇴치기", href: "products.html?category=pest&subcategory=insect" },
      { key: "animal", label: "유해조수 퇴치기", href: "products.html?category=pest&subcategory=animal" },
    ],
  },
  {
    key: "inquiry",
    label: "1:1문의",
    href: "inquiry.html",
    children: [],
  },
];

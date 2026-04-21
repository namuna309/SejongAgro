const categoryData = {
  house: {
    label: "하우스 시설자재",
    subcategories: {
      pipe: {
        label: "하우스 농업용 파이프",
        products: [{ img: "best1.jpg", name: "뾰족이 파이프(인발)", desc: "농업용 길이 연장용 비닐하우스자재", price: "1,290원" }],
      },
      clip: {
        label: "고정클립 / 부속",
        products: [{ img: "p6.jpg", name: "고정 클립", desc: "하우스 필름 고정용", price: "800원" }],
      },
      film: {
        label: "하우스 필름자재",
        products: [{ img: "banner1.jpg", name: "하우스 비닐", desc: "투명 하우스 비닐", price: "45,000원" }],
      },
    },
  },
  water: {
    label: "관수 / 배관 자재",
    subcategories: {
      valve: {
        label: "밸브 / 코크",
        products: [{ img: "p2.jpg", name: "물호스 밸브", desc: "16mm 수도호스 연결부속", price: "650원" }],
      },
      fitting: {
        label: "엘보 / 티 / 연결구",
        products: [
          { img: "p3.jpg", name: "물호스 엘보", desc: "16mm 수도호스 연결부속", price: "680원" },
          { img: "p4.jpg", name: "물호스 정티", desc: "16mm 수도호스 연결부속", price: "950원" },
        ],
      },
      hose: {
        label: "호스 / 튜브",
        products: [{ img: "p8.jpg", name: "점적호스", desc: "네타핌 관수자재", price: "365,000원" }],
      },
    },
  },
  tank: {
    label: "물탱크 / 고레통",
    subcategories: {
      smalltank: {
        label: "소형 물탱크",
        products: [{ img: "p7.jpg", name: "소형 물탱크", desc: "농업용 소형 저장탱크", price: "48,000원" }],
      },
      bigtank: {
        label: "대형 물탱크",
        products: [{ img: "p8.jpg", name: "대형 물탱크", desc: "대용량 저장용", price: "120,000원" }],
      },
      container: {
        label: "고레통 / 저장용기",
        products: [{ img: "p9.jpg", name: "고레통", desc: "액체 저장용 용기", price: "18,000원" }],
      },
    },
  },
  vinyl: {
    label: "하우스 / 멀칭비닐",
    subcategories: {
      housevinyl: {
        label: "하우스 비닐",
        products: [{ img: "banner1.jpg", name: "하우스 비닐", desc: "투명 하우스 비닐", price: "45,000원" }],
      },
      mulching: {
        label: "멀칭 비닐",
        products: [{ img: "banner2.jpg", name: "멀칭 비닐", desc: "잡초 방지용 비닐", price: "28,000원" }],
      },
    },
  },
  weed: {
    label: "전초방지",
    subcategories: {
      sheet: {
        label: "잡초방지 시트",
        products: [{ img: "banner3.jpg", name: "잡초방지 시트", desc: "밭고랑 시공용", price: "32,000원" }],
      },
      mat: {
        label: "잡초방지 매트",
        products: [{ img: "banner4.jpg", name: "잡초방지 매트", desc: "넓은 면적 시공 가능", price: "41,000원" }],
      },
    },
  },
  garden: {
    label: "원예자재",
    subcategories: {
      support: {
        label: "지지대 / 유인끈",
        products: [{ img: "p5.jpg", name: "유인끈", desc: "작물 유인용", price: "3,500원" }],
      },
      pot: {
        label: "화분 / 모종자재",
        products: [{ img: "p10.jpg", name: "모종 트레이", desc: "원예용 육묘 자재", price: "2,100원" }],
      },
    },
  },
  shade: {
    label: "차광망 / 기타망 / 보온덮개",
    subcategories: {
      shadecloth: {
        label: "차광망",
        products: [{ img: "banner3.jpg", name: "차광망", desc: "여름철 차광용", price: "39,000원" }],
      },
      cover: {
        label: "보온덮개",
        products: [{ img: "banner4.jpg", name: "보온덮개", desc: "저온 보호용", price: "25,000원" }],
      },
    },
  },
  tools: {
    label: "철물 / 공구 / 기타자재",
    subcategories: {
      hardware: {
        label: "철물 자재",
        products: [{ img: "p1.jpg", name: "철물 자재", desc: "기본 철물 부속", price: "4,900원" }],
      },
      tool: {
        label: "작업 공구",
        products: [{ img: "p2.jpg", name: "작업 공구", desc: "현장용 수공구", price: "8,000원" }],
      },
    },
  },
  ladder: {
    label: "사다리",
    subcategories: {
      folding: {
        label: "접이식 사다리",
        products: [{ img: "p3.jpg", name: "접이식 사다리", desc: "보관이 편한 사다리", price: "59,000원" }],
      },
      work: {
        label: "작업용 사다리",
        products: [{ img: "p4.jpg", name: "작업용 사다리", desc: "현장 작업용", price: "85,000원" }],
      },
    },
  },
  pest: {
    label: "해충 / 유해조수퇴치기",
    subcategories: {
      insect: {
        label: "해충 퇴치기",
        products: [{ img: "p7.jpg", name: "해충 퇴치기", desc: "농가 해충 방지", price: "19,000원" }],
      },
      animal: {
        label: "유해조수 퇴치기",
        products: [{ img: "p8.jpg", name: "유해조수 퇴치기", desc: "야생동물 접근 방지", price: "34,000원" }],
      },
    },
  },
};

function getAllProducts() {
  return Object.values(categoryData).flatMap((category) =>
    Object.values(category.subcategories).flatMap((subcategory) => subcategory.products),
  );
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <p class="product-name">${product.name}</p>
      <p class="product-desc">${product.desc}</p>
      <p class="product-price">${product.price}</p>
    </article>
  `;
}

function setActiveSidebar(categoryKey, subcategoryKey) {
  document.querySelectorAll("[data-category-root]").forEach((link) => {
    link.classList.toggle("active-category", link.dataset.categoryRoot === categoryKey);
  });

  document.querySelectorAll("[data-subcategory-link]").forEach((link) => {
    const isActive = link.dataset.categoryLink === categoryKey && link.dataset.subcategoryLink === subcategoryKey;
    link.classList.toggle("active-subcategory", isActive);
  });
}

function renderProductsPage() {
  const productsGrid = document.getElementById("productsGrid");
  const categoryTitle = document.getElementById("categoryTitle");
  const productsCount = document.getElementById("productsCount");
  const productsBreadcrumb = document.getElementById("productsBreadcrumb");
  const subcategoryParentTitle = document.getElementById("subcategoryParentTitle");
  const subcategoryTabList = document.getElementById("subcategoryTabList");

  if (!productsGrid || !categoryTitle || !productsCount || !productsBreadcrumb || !subcategoryParentTitle || !subcategoryTabList) return;

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "all";
  const subcategory = params.get("subcategory") || "all";

  let pageTitle = "전체상품";
  let breadcrumbText = "홈 > 전체상품";
  let parentTitle = "전체상품";
  let products = getAllProducts();
  let subcategoryLinksHtml = `<a href="products.html?category=all&subcategory=all" class="active">전체상품</a>`;

  if (category !== "all" && categoryData[category]) {
    const currentCategory = categoryData[category];
    const categoryLabel = currentCategory.label;
    const subEntries = Object.entries(currentCategory.subcategories);

    parentTitle = categoryLabel;
    subcategoryLinksHtml = subEntries.map(([key, sub]) => {
      const activeClass = key === subcategory ? "active" : "";
      return `<a href="products.html?category=${category}&subcategory=${key}" class="${activeClass}">${sub.label}</a>`;
    }).join("");

    if (subcategory !== "all" && currentCategory.subcategories[subcategory]) {
      const currentSub = currentCategory.subcategories[subcategory];
      pageTitle = currentSub.label;
      breadcrumbText = `홈 > ${categoryLabel} > ${currentSub.label}`;
      products = currentSub.products;
    } else {
      pageTitle = categoryLabel;
      breadcrumbText = `홈 > ${categoryLabel}`;
      products = subEntries.flatMap(([, sub]) => sub.products);
    }
  }

  document.title = `${pageTitle} | ${SITE_CONFIG.siteName}`;
  categoryTitle.textContent = pageTitle;
  productsBreadcrumb.textContent = breadcrumbText;
  subcategoryParentTitle.textContent = parentTitle;
  subcategoryTabList.innerHTML = subcategoryLinksHtml;
  productsCount.textContent = `총 ${products.length}개 상품`;
  productsGrid.innerHTML = products.map(renderProductCard).join("");
  setActiveSidebar(category, subcategory);
}

document.addEventListener("DOMContentLoaded", renderProductsPage);

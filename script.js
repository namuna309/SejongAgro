const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const keyword = searchInput.value.trim();

    if (!keyword) {
      alert("검색어를 입력해주세요.");
      searchInput.focus();
      return;
    }

    alert(`검색어: ${keyword}`);
  });
}

const bannerSlides = document.querySelectorAll(".banner-slide");
const bannerDots = document.querySelectorAll(".banner-dot");
const prevBanner = document.getElementById("prevBanner");
const nextBanner = document.getElementById("nextBanner");

let currentBannerIndex = 0;
let bannerInterval;

function showBanner(index) {
  bannerSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  bannerDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentBannerIndex = index;
}

function nextBannerSlide() {
  const nextIndex = (currentBannerIndex + 1) % bannerSlides.length;
  showBanner(nextIndex);
}

function prevBannerSlide() {
  const prevIndex =
    (currentBannerIndex - 1 + bannerSlides.length) % bannerSlides.length;
  showBanner(prevIndex);
}

function startBannerAutoSlide() {
  bannerInterval = setInterval(() => {
    nextBannerSlide();
  }, 5000);
}

function resetBannerAutoSlide() {
  clearInterval(bannerInterval);
  startBannerAutoSlide();
}

if (bannerSlides.length > 0 && prevBanner && nextBanner) {
  prevBanner.addEventListener("click", () => {
    prevBannerSlide();
    resetBannerAutoSlide();
  });

  nextBanner.addEventListener("click", () => {
    nextBannerSlide();
    resetBannerAutoSlide();
  });

  bannerDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);
      showBanner(index);
      resetBannerAutoSlide();
    });
  });

  showBanner(0);
  startBannerAutoSlide();
}

const bestTabs = document.querySelectorAll(".best-tab");

bestTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    bestTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

/* products.html 전용 */
const categoryData = {
  house: {
    label: "하우스 시설자재",
    subcategories: {
      pipe: {
        label: "하우스 농업용 파이프",
        products: [
          {
            img: "best1.jpg",
            name: "뾰족이 파이프(인발)",
            desc: "농업용 길이 연장용 비닐하우스자재",
            price: "1,290원",
          },
        ],
      },
      fitting: {
        label: "파이프 연결부속",
        products: [
          {
            img: "p6.jpg",
            name: "고정 클립",
            desc: "하우스 필름 고정용",
            price: "800원",
          },
        ],
      },
    },
  },

  water: {
    label: "관수 / 배관 자재",
    subcategories: {
      valve: {
        label: "밸브 / 코크",
        products: [
          {
            img: "p2.jpg",
            name: "물호스 밸브",
            desc: "16mm 수도호스 연결부속",
            price: "650원",
          },
        ],
      },
      fitting: {
        label: "엘보 / 티 / 연결구",
        products: [
          {
            img: "p3.jpg",
            name: "물호스 엘보",
            desc: "16mm 수도호스 연결부속",
            price: "680원",
          },
          {
            img: "p4.jpg",
            name: "물호스 정티",
            desc: "16mm 수도호스 연결부속",
            price: "950원",
          },
        ],
      },
      hose: {
        label: "호스 / 튜브",
        products: [
          {
            img: "p8.jpg",
            name: "점적호스",
            desc: "네타핌 관수자재",
            price: "365,000원",
          },
        ],
      },
    },
  },

  tank: {
    label: "물탱크 / 고레통",
    subcategories: {
      smalltank: {
        label: "소형 물탱크",
        products: [
          {
            img: "p7.jpg",
            name: "소형 물탱크",
            desc: "농업용 소형 저장탱크",
            price: "48,000원",
          },
        ],
      },
      bigtank: {
        label: "대형 물탱크",
        products: [
          {
            img: "p8.jpg",
            name: "대형 물탱크",
            desc: "대용량 저장용",
            price: "120,000원",
          },
        ],
      },
      container: {
        label: "고레통 / 저장용기",
        products: [
          {
            img: "p9.jpg",
            name: "고레통",
            desc: "액체 저장용 용기",
            price: "18,000원",
          },
        ],
      },
    },
  },

  vinyl: {
    label: "하우스 / 멀칭비닐",
    subcategories: {
      housevinyl: {
        label: "하우스 비닐",
        products: [
          {
            img: "banner1.jpg",
            name: "하우스 비닐",
            desc: "투명 하우스 비닐",
            price: "45,000원",
          },
        ],
      },
      mulching: {
        label: "멀칭 비닐",
        products: [
          {
            img: "banner2.jpg",
            name: "멀칭 비닐",
            desc: "잡초 방지용 비닐",
            price: "28,000원",
          },
        ],
      },
    },
  },

  weed: {
    label: "전초방지",
    subcategories: {
      sheet: {
        label: "잡초방지 시트",
        products: [
          {
            img: "banner3.jpg",
            name: "잡초방지 시트",
            desc: "밭고랑 시공용",
            price: "32,000원",
          },
        ],
      },
      mat: {
        label: "잡초방지 매트",
        products: [
          {
            img: "banner4.jpg",
            name: "잡초방지 매트",
            desc: "넓은 면적 시공 가능",
            price: "41,000원",
          },
        ],
      },
    },
  },
};

function getAllProducts() {
  const allProducts = [];

  Object.values(categoryData).forEach((category) => {
    Object.values(category.subcategories).forEach((subcategory) => {
      subcategory.products.forEach((product) => {
        allProducts.push(product);
      });
    });
  });

  return allProducts;
}

function renderProductsPage() {
  const productsGrid = document.getElementById("productsGrid");
  const categoryTitle = document.getElementById("categoryTitle");
  const productsCount = document.getElementById("productsCount");
  const productsBreadcrumb = document.getElementById("productsBreadcrumb");
  const subcategoryParentTitle = document.getElementById(
    "subcategoryParentTitle",
  );
  const subcategoryTabList = document.getElementById("subcategoryTabList");

  if (
    !productsGrid ||
    !categoryTitle ||
    !productsCount ||
    !productsBreadcrumb ||
    !subcategoryParentTitle ||
    !subcategoryTabList
  ) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "all";
  const subcategory = params.get("subcategory") || "all";

  let pageTitle = "전체상품";
  let breadcrumbText = "홈 > 전체상품";
  let parentTitle = "전체상품";
  let products = getAllProducts();
  let subcategoryLinksHtml = "";

  if (category !== "all" && categoryData[category]) {
    const currentCategory = categoryData[category];
    const categoryLabel = currentCategory.label || currentCategory.title;

    parentTitle = categoryLabel;

    const subEntries = Object.entries(currentCategory.subcategories);

    subcategoryLinksHtml = subEntries
      .map(([key, sub]) => {
        const subLabel = sub.label || sub.title;
        const activeClass = key === subcategory ? "active" : "";

        return `
          <a href="products.html?category=${category}&subcategory=${key}" class="${activeClass}">
            ${subLabel}
          </a>
        `;
      })
      .join("");

    if (subcategory !== "all" && currentCategory.subcategories[subcategory]) {
      const currentSub = currentCategory.subcategories[subcategory];
      const subLabel = currentSub.label || currentSub.title;

      pageTitle = subLabel;
      breadcrumbText = `홈 > ${categoryLabel} > ${subLabel}`;
      products = currentSub.products;
    } else {
      pageTitle = categoryLabel;
      breadcrumbText = `홈 > ${categoryLabel}`;
      products = subEntries.flatMap(([, sub]) => sub.products);
    }
  } else {
    subcategoryLinksHtml = `<a href="products.html?category=all&subcategory=all" class="active">전체상품</a>`;
  }

  document.title = `${pageTitle} | 세종농자재농약마트`;
  categoryTitle.textContent = pageTitle;
  productsBreadcrumb.textContent = breadcrumbText;
  subcategoryParentTitle.textContent = parentTitle;
  subcategoryTabList.innerHTML = subcategoryLinksHtml;
  productsCount.textContent = `총 ${products.length}개 상품`;

  productsGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <p class="product-name">${product.name}</p>
          <p class="product-desc">${product.desc}</p>
          <p class="product-price">${product.price}</p>
        </article>
      `,
    )
    .join("");

  const categoryLinks = document.querySelectorAll("[data-category-link]");
  const subcategoryLinks = document.querySelectorAll("[data-subcategory-link]");

  categoryLinks.forEach((link) => {
    if (link.dataset.categoryLink === category) {
      link.classList.add("active-category");
    } else {
      link.classList.remove("active-category");
    }
  });

  subcategoryLinks.forEach((link) => {
    if (
      link.dataset.categoryLink === category &&
      link.dataset.subcategoryLink === subcategory
    ) {
      link.classList.add("active-subcategory");
    } else {
      link.classList.remove("active-subcategory");
    }
  });
}

renderProductsPage();

document.addEventListener("DOMContentLoaded", function () {
  const optionSelect = document.getElementById("detailOptionSelect");
  const selectedList = document.getElementById("detailSelectedList");
  const totalAmount = document.getElementById("detailTotalAmount");
  const totalCount = document.getElementById("detailTotalCount");

  if (!optionSelect || !selectedList || !totalAmount || !totalCount) return;

  const selectedItems = [];

  function formatPrice(price) {
    return `${price.toLocaleString()}원`;
  }

  function renderSelectedItems() {
    selectedList.innerHTML = "";

    let totalPrice = 0;
    let totalQty = 0;

    selectedItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
      totalQty += item.quantity;

      const itemEl = document.createElement("div");
      itemEl.className = "detail-selected-item";

      itemEl.innerHTML = `
  <div class="detail-selected-left">
    <span class="detail-selected-name">${item.productName}</span>
    <span class="detail-selected-sub">- ${item.name}</span>
  </div>
  <div class="detail-selected-right">
    <div class="detail-qty-box">
      <input
        type="text"
        value="${item.quantity}"
        class="detail-qty-display"
        data-index="${index}"
        readonly
      />
      <div class="detail-qty-buttons">
        <button type="button" class="detail-qty-btn qty-up" data-index="${index}">▲</button>
        <button type="button" class="detail-qty-btn qty-down" data-index="${index}">▼</button>
      </div>
    </div>
    <span class="detail-selected-price">${formatPrice(itemTotal)}</span>
    <button type="button" class="detail-remove-btn" data-index="${index}">×</button>
  </div>
`;

      selectedList.appendChild(itemEl);
    });

    totalAmount.textContent = formatPrice(totalPrice);
    totalCount.textContent = `(${totalQty}개)`;
  }

  optionSelect.addEventListener("change", function () {
    const selectedOption = optionSelect.options[optionSelect.selectedIndex];
    const name = selectedOption.value;
    const price = Number(selectedOption.dataset.price || 0);

    if (!name) return;

    const existingItem = selectedItems.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedItems.push({
        productName:
          "드롭스파이크 앵글 에로우드립퍼 국산 네타핌 점적단추 관수자재 한솔농자재철강",
        name,
        price,
        quantity: 1,
      });
    }

    renderSelectedItems();
    optionSelect.value = "";
  });

  selectedList.addEventListener("input", function (e) {
    if (!e.target.classList.contains("detail-qty-input")) return;

    const index = Number(e.target.dataset.index);
    let value = Number(e.target.value);

    if (!value || value < 1) value = 1;

    selectedItems[index].quantity = value;
    renderSelectedItems();
  });

  selectedList.addEventListener("click", function (e) {
    const removeBtn = e.target.closest(".detail-remove-btn");
    if (removeBtn) {
      const index = Number(removeBtn.dataset.index);
      selectedItems.splice(index, 1);
      renderSelectedItems();
      return;
    }

    const upBtn = e.target.closest(".qty-up");
    if (upBtn) {
      const index = Number(upBtn.dataset.index);
      selectedItems[index].quantity += 1;
      renderSelectedItems();
      return;
    }

    const downBtn = e.target.closest(".qty-down");
    if (downBtn) {
      const index = Number(downBtn.dataset.index);
      if (selectedItems[index].quantity > 1) {
        selectedItems[index].quantity -= 1;
        renderSelectedItems();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(
    ".detail-tab-btn, .detail-local-tab-btn",
  );

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".review-like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const countEl = this.querySelector(".review-like-count");
      if (!countEl) return;

      let count = Number(countEl.textContent) || 0;
      const isLiked = this.dataset.liked === "true";

      if (isLiked) {
        count = Math.max(0, count - 1);
        this.dataset.liked = "false";
        this.classList.remove("active");
      } else {
        count += 1;
        this.dataset.liked = "true";
        this.classList.add("active");
      }

      countEl.textContent = count;
    });
  });

  const reviewCards = document.querySelectorAll(".review-card");

  reviewCards.forEach((card) => {
    const thumb = card.querySelector(".review-photo-trigger");
    const viewerImg = card.querySelector(".review-photo-viewer-img");

    if (!thumb || !viewerImg) return;

    thumb.addEventListener("click", function () {
      const isActive = card.classList.contains("review-active");

      document
        .querySelectorAll(".review-card.review-active")
        .forEach((activeCard) => {
          activeCard.classList.remove("review-active");
        });

      if (!isActive) {
        card.classList.add("review-active");
      }
    });

    viewerImg.addEventListener("click", function () {
      card.classList.remove("review-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const qnaRows = Array.from(document.querySelectorAll(".qna-row"));
  const qnaPrivateExclude = document.getElementById("qnaPrivateExclude");
  const qnaStatusFilter = document.getElementById("qnaStatusFilter");
  const qnaPagination = document.getElementById("qnaPagination");

  if (!qnaRows.length || !qnaPagination) return;

  const ITEMS_PER_PAGE = 10;
  let currentQnaPage = 1;

  function getFilteredRows() {
    const excludePrivate = qnaPrivateExclude
      ? qnaPrivateExclude.checked
      : false;
    const selectedStatus = qnaStatusFilter ? qnaStatusFilter.value : "all";

    return qnaRows.filter((row) => {
      const isPrivate = row.dataset.private === "true";
      const rowStatus = row.dataset.status || "done";

      if (excludePrivate && isPrivate) return false;
      if (selectedStatus !== "all" && rowStatus !== selectedStatus)
        return false;

      return true;
    });
  }

  function renderQnaPagination(totalPages) {
    qnaPagination.innerHTML = "";

    if (totalPages <= 1) {
      if (totalPages === 1) {
        const onlyBtn = document.createElement("button");
        onlyBtn.type = "button";
        onlyBtn.className = "qna-page-btn active";
        onlyBtn.textContent = "1";
        qnaPagination.appendChild(onlyBtn);
      }
      return;
    }

    for (let i = 1; i <= totalPages; i += 1) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "qna-page-btn";
      if (i === currentQnaPage) btn.classList.add("active");
      btn.textContent = String(i);
      btn.dataset.page = String(i);

      btn.addEventListener("click", function () {
        currentQnaPage = i;
        renderQnaList();
      });

      qnaPagination.appendChild(btn);
    }
  }

  function renderQnaList() {
    const filteredRows = getFilteredRows();
    const totalPages = Math.max(
      1,
      Math.ceil(filteredRows.length / ITEMS_PER_PAGE),
    );

    if (currentQnaPage > totalPages) {
      currentQnaPage = totalPages;
    }

    qnaRows.forEach((row) => row.classList.add("hidden"));

    const startIndex = (currentQnaPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    filteredRows.slice(startIndex, endIndex).forEach((row) => {
      row.classList.remove("hidden");
    });

    renderQnaPagination(totalPages);
  }

  if (qnaPrivateExclude) {
    qnaPrivateExclude.addEventListener("change", function () {
      currentQnaPage = 1;
      renderQnaList();
    });
  }

  if (qnaStatusFilter) {
    qnaStatusFilter.addEventListener("change", function () {
      currentQnaPage = 1;
      renderQnaList();
    });
  }

  renderQnaList();
});

function renderHeader() {
  return `
    <header class="header">
      <div class="top-util-wrap">
        <div class="inner">
          <div class="top-util">
            <a href="login.html">로그인</a>
            <a href="signup.html">회원가입</a>
            <a href="mypage.html">마이페이지</a>
            <a href="cart.html">장바구니</a>
          </div>
        </div>
      </div>

      <div class="main-header">
        <div class="inner">
          <div class="header-content">
            <h1 class="logo">
              <a href="index.html">
                <img src="logo.png" alt="${SITE_CONFIG.siteName} 로고" />
              </a>
            </h1>

            <div class="search-area">
              <form class="search-box" id="searchForm">
                <input type="text" id="searchInput" placeholder="검색어를 입력하세요" />
                <button type="submit" aria-label="검색">
                  <img src="search.png" alt="검색" />
                </button>
              </form>
            </div>

            <div class="bank-area">
              <div class="bank-icon">
                <img src="bank_logo.png" alt="은행 로고" />
              </div>
              <div class="bank-text">
                <p>${SITE_CONFIG.shortSiteName}</p>
                <p>${SITE_CONFIG.bankName}: ${SITE_CONFIG.bankAccount}</p>
              </div>
            </div>

            <div class="phone-area">
              <span class="phone-icon">📞</span>
              <span>${SITE_CONFIG.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderSidebar() {
  const items = CATEGORY_MENU.map((category) => {
    const children = category.children.length
      ? `
          <ul class="subcategory-menu">
            ${category.children
              .map(
                (child) => `
                  <li>
                    <a
                      href="${child.href}"
                      data-category-link="${category.key}"
                      data-subcategory-link="${child.key}"
                    >${child.label}</a>
                  </li>
                `,
              )
              .join("")}
          </ul>
        `
      : "";

    return `
      <li class="category-item">
        <a href="${category.href}" data-category-root="${category.key}">${category.label}</a>
        ${children}
      </li>
    `;
  }).join("");

  return `<ul class="category-menu">${items}</ul>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-top-wrap">
        <div class="inner">
          <div class="footer-top">
            <div class="footer-top-col customer-center">
              <h3>고객센터</h3>
              <p class="footer-phone">${SITE_CONFIG.phone}</p>
              <p class="footer-info-line">팩스: ${SITE_CONFIG.fax}</p>
              <p class="footer-info-line">이메일: ${SITE_CONFIG.email}</p>
              <p class="footer-info-line">월요일~금요일 08:30~18:00</p>
              <p class="footer-info-line">주말, 공휴일 휴무</p>
              <div class="footer-account-box">
                <p class="footer-account">${SITE_CONFIG.bankName} ${SITE_CONFIG.bankAccount}</p>
                <p class="footer-holder">예금주 : ${SITE_CONFIG.bankHolder}</p>
              </div>
            </div>

            <div class="footer-top-col notice-event">
              <div class="footer-heading-row">
                <h3>공지사항</h3>
                <a href="#">더보기+</a>
              </div>
              <ul class="footer-bullet-list">
                <li><a href="#">몰 오픈을 축하합니다.</a></li>
              </ul>
            </div>

            <div class="footer-top-col footer-location">
              <h3>오시는길</h3>
              <p class="footer-address-text">${SITE_CONFIG.address}</p>
              <div class="footer-map-link">
                <a href="${SITE_CONFIG.mapLink}" target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 오시는길 보기" class="naver-map-link">
                  <span class="naver-map-icon-wrap">
                    <img src="naver_map_icon.jpg" alt="네이버맵 아이콘" class="naver-map-icon-img" />
                  </span>
                  <span class="naver-map-text single-line">네이버맵 바로가기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-wrap">
        <div class="inner footer-bottom-inner">
          <div class="footer-brand-row">
            <div class="footer-brand-logo-text">${SITE_CONFIG.siteName}</div>
            <div class="footer-company-info">
              <div class="footer-links">
                <a href="#">회사소개</a>
                <a href="#">이용약관</a>
                <a href="#" class="strong">개인정보처리방침</a>
                <a href="#">이용안내</a>
                <a href="#">제휴문의</a>
              </div>
              <p>법인명(상호) : ${SITE_CONFIG.siteName} <span>|</span> 대표자(성명) : ${SITE_CONFIG.ceoName} <span>|</span> 사업자 등록번호 : ${SITE_CONFIG.businessNumber}</p>
              <p>통신판매업 신고 : ${SITE_CONFIG.salesNumber} <a href="#">[사업자정보확인]</a></p>
              <p>전화 : ${SITE_CONFIG.phone} <span>|</span> 팩스 : ${SITE_CONFIG.fax} <span>|</span> 이메일 : ${SITE_CONFIG.email}</p>
              <p>주소 : ${SITE_CONFIG.addressShort}</p>
              <p>개인정보관리책임자 : ${SITE_CONFIG.privacyManager}(${SITE_CONFIG.email})</p>
              <p class="footer-copy">Copyright © ${SITE_CONFIG.siteName}. All rights reserved.</p>

              <div class="footer-ksnet-box">
                <div class="footer-ksnet-badge">KSNET</div>
                <div class="footer-ksnet-text">
                  <p class="ksnet-title">구매안전 서비스</p>
                  <p>고객님은 안전거래를 위해 현금등으로 결제시</p>
                  <p>저희 쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다.</p>
                  <p class="ksnet-id">결제대행계약증서 등록번호 00-002-00003</p>
                </div>
                <a href="#" class="footer-ksnet-btn">서비스 가입사실 확인 &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function mountCommonLayout() {
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");
  const sidebarTarget = document.getElementById("site-sidebar");

  if (headerTarget) headerTarget.innerHTML = renderHeader();
  if (footerTarget) footerTarget.innerHTML = renderFooter();
  if (sidebarTarget) sidebarTarget.innerHTML = renderSidebar();
}

function initCommonSearch() {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (!searchForm || !searchInput) return;

  searchForm.addEventListener("submit", (e) => {
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

function initCommonLayout() {
  mountCommonLayout();
  initCommonSearch();
}

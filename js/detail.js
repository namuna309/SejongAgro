function initDetailOptionSelector() {
  const optionSelect = document.getElementById("detailOptionSelect");
  const selectedList = document.getElementById("detailSelectedList");
  const totalAmount = document.getElementById("detailTotalAmount");
  const totalCount = document.getElementById("detailTotalCount");

  if (!optionSelect || !selectedList || !totalAmount || !totalCount) return;

  const selectedItems = [];
  const productName = "드롭스파이크 앵글 에로우드립퍼 국산 네타핌 점적단추 관수자재 한솔농자재철강";

  const formatPrice = (price) => `${price.toLocaleString()}원`;

  function renderSelectedItems() {
    let totalPrice = 0;
    let totalQty = 0;

    selectedList.innerHTML = selectedItems.map((item, index) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
      totalQty += item.quantity;

      return `
        <div class="detail-selected-item">
          <div class="detail-selected-left">
            <span class="detail-selected-name">${productName}</span>
            <span class="detail-selected-sub">- ${item.name}</span>
          </div>
          <div class="detail-selected-right">
            <div class="detail-qty-box">
              <input type="text" value="${item.quantity}" class="detail-qty-display" data-index="${index}" readonly />
              <div class="detail-qty-buttons">
                <button type="button" class="detail-qty-btn qty-up" data-index="${index}">▲</button>
                <button type="button" class="detail-qty-btn qty-down" data-index="${index}">▼</button>
              </div>
            </div>
            <span class="detail-selected-price">${formatPrice(itemTotal)}</span>
            <button type="button" class="detail-remove-btn" data-index="${index}">×</button>
          </div>
        </div>
      `;
    }).join("");

    totalAmount.textContent = formatPrice(totalPrice);
    totalCount.textContent = `(${totalQty}개)`;
  }

  optionSelect.addEventListener("change", () => {
    const selectedOption = optionSelect.options[optionSelect.selectedIndex];
    const name = selectedOption.value;
    const price = Number(selectedOption.dataset.price || 0);

    if (!name) return;

    const existingItem = selectedItems.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedItems.push({ name, price, quantity: 1 });
    }

    optionSelect.value = "";
    renderSelectedItems();
  });

  selectedList.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".detail-remove-btn");
    const upBtn = e.target.closest(".qty-up");
    const downBtn = e.target.closest(".qty-down");

    if (removeBtn) {
      selectedItems.splice(Number(removeBtn.dataset.index), 1);
      renderSelectedItems();
      return;
    }

    if (upBtn) {
      selectedItems[Number(upBtn.dataset.index)].quantity += 1;
      renderSelectedItems();
      return;
    }

    if (downBtn) {
      const item = selectedItems[Number(downBtn.dataset.index)];
      if (item.quantity > 1) item.quantity -= 1;
      renderSelectedItems();
    }
  });
}

function initDetailTabs() {
  document.querySelectorAll(".detail-tab-btn, .detail-local-tab-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReviewInteractions() {
  document.querySelectorAll(".review-like-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const countEl = button.querySelector(".review-like-count");
      const isLiked = button.dataset.liked === "true";
      let count = Number(countEl.textContent) || 0;

      if (isLiked) {
        count = Math.max(0, count - 1);
        button.dataset.liked = "false";
        button.classList.remove("active");
      } else {
        count += 1;
        button.dataset.liked = "true";
        button.classList.add("active");
      }

      countEl.textContent = String(count);
    });
  });

  document.querySelectorAll(".review-card").forEach((card) => {
    const thumb = card.querySelector(".review-photo-trigger");
    const viewerImg = card.querySelector(".review-photo-viewer-img");
    if (!thumb || !viewerImg) return;

    thumb.addEventListener("click", () => {
      const isActive = card.classList.contains("review-active");
      document.querySelectorAll(".review-card.review-active").forEach((activeCard) => activeCard.classList.remove("review-active"));
      if (!isActive) card.classList.add("review-active");
    });

    viewerImg.addEventListener("click", () => card.classList.remove("review-active"));
  });
}

function initQnaBoard() {
  const qnaRows = Array.from(document.querySelectorAll(".qna-row"));
  const qnaPrivateExclude = document.getElementById("qnaPrivateExclude");
  const qnaStatusFilter = document.getElementById("qnaStatusFilter");
  const qnaPagination = document.getElementById("qnaPagination");

  if (!qnaRows.length || !qnaPagination) return;

  const ITEMS_PER_PAGE = 10;
  let currentQnaPage = 1;

  function getFilteredRows() {
    const excludePrivate = qnaPrivateExclude?.checked ?? false;
    const selectedStatus = qnaStatusFilter?.value ?? "all";

    return qnaRows.filter((row) => {
      const isPrivate = row.dataset.private === "true";
      const rowStatus = row.dataset.status || "done";
      if (excludePrivate && isPrivate) return false;
      if (selectedStatus !== "all" && rowStatus !== selectedStatus) return false;
      return true;
    });
  }

  function renderQnaPagination(totalPages) {
    qnaPagination.innerHTML = "";
    if (totalPages <= 1) {
      if (totalPages === 1) {
        qnaPagination.innerHTML = '<button type="button" class="qna-page-btn active">1</button>';
      }
      return;
    }

    for (let i = 1; i <= totalPages; i += 1) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `qna-page-btn${i === currentQnaPage ? " active" : ""}`;
      btn.textContent = String(i);
      btn.addEventListener("click", () => {
        currentQnaPage = i;
        renderQnaList();
      });
      qnaPagination.appendChild(btn);
    }
  }

  function renderQnaList() {
    const filteredRows = getFilteredRows();
    const totalPages = Math.max(1, Math.ceil(filteredRows.length / ITEMS_PER_PAGE));

    if (currentQnaPage > totalPages) currentQnaPage = totalPages;
    qnaRows.forEach((row) => row.classList.add("hidden"));

    const startIndex = (currentQnaPage - 1) * ITEMS_PER_PAGE;
    filteredRows.slice(startIndex, startIndex + ITEMS_PER_PAGE).forEach((row) => row.classList.remove("hidden"));
    renderQnaPagination(totalPages);
  }

  qnaPrivateExclude?.addEventListener("change", () => {
    currentQnaPage = 1;
    renderQnaList();
  });

  qnaStatusFilter?.addEventListener("change", () => {
    currentQnaPage = 1;
    renderQnaList();
  });

  renderQnaList();
}

document.addEventListener("DOMContentLoaded", () => {
  initDetailOptionSelector();
  initDetailTabs();
  initReviewInteractions();
  initQnaBoard();
});

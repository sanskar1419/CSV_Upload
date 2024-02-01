// Importing necessary tag and data
const recordDisplay = document.getElementById("record");
const searchInputField = document.getElementById("search-value");
const recordSize = document.getElementById("record-size");

// Add event listener to input field and search function
searchInputField.addEventListener("input", function (e) {
  const rows = document.querySelectorAll("#record tr");
  console.log(rows);
  // console.log(e.target.value);
  const searchInput = e.target.value.toLowerCase();
  console.log(searchInput);

  for (let row of rows) {
    let content = row.textContent.toLowerCase();

    if (content.includes(searchInput)) {
      row.classList.add("search-result-color");
      // console.log(row);
    } else {
      row.classList.remove("search-result-color");
      // console.log(row);
    }

    if (searchInput == "") {
      row.classList.remove("search-result-color");
    }
  }
});

const totalRecordTR = document.querySelectorAll("#record tr");
let recordPerPage = 100;
let pageNumber = 1;
let totalRecordLength = totalRecordTR.length;
let totalPage = Math.ceil(totalRecordLength / recordPerPage);

generatePage();
displayRecord();

// Displaying record
function displayRecord() {
  let startIndex = (pageNumber - 1) * recordPerPage;
  let endIndex = startIndex + (recordPerPage - 1);
  if (endIndex >= totalRecordLength) {
    endIndex = totalRecordLength - 1;
  }
  let statement = "";
  // console.log(totalRecordTR);
  // console.log(startIndex);
  // console.log(endIndex);
  for (let i = startIndex; i <= endIndex; i++) {
    // console.log(totalRecordTR[i]);
    statement += `<tr> ${totalRecordTR[i].innerHTML} </tr>`;
  }
  recordDisplay.innerHTML = statement;
  document.querySelectorAll(".dynamic-item").forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById("page" + pageNumber).classList.add("active");

  if (pageNumber == 1) {
    document.getElementById("prevBtn").parentElement.classList.add("disabled");
  } else {
    document
      .getElementById("prevBtn")
      .parentElement.classList.remove("disabled");
  }
  if (pageNumber == totalPage) {
    document.getElementById("nextBtn").parentElement.classList.add("disabled");
  } else {
    document
      .getElementById("nextBtn")
      .parentElement.classList.remove("disabled");
  }
}

// Generating number of page
function generatePage() {
  let prevButton = `<li class="page-item">
  <a class="page-link" id="prevBtn" onclick="prevBtn()" href="javascript:void(0)" aria-label="Previous">
    <span aria-hidden="true">&laquo;</span>
  </a>
</li>`;
  let nextButton = `<li class="page-item">
  <a class="page-link" id="nextBtn" onclick="nextBtn()" href="javascript:void(0)" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </a>
</li>`;
  let buttons = ``;
  let activeClass = "";
  for (let i = 1; i <= totalPage; i++) {
    if (i == 1) {
      activeClass = "active";
    } else {
      activeClass = "";
    }
    buttons += `<li class="page-item dynamic-item ${activeClass}" id="page${i}"><a class="page-link" onclick="pageChange(${i})" href="#">${i}</a></li>`;
  }

  document.getElementById(
    "pagination"
  ).innerHTML = `${prevButton} ${buttons} ${nextButton}`;
}

// function decrementing page number
function prevBtn() {
  pageNumber--;
  displayRecord();
  searchInputField.value = "";
}

// function incrementing page number
function nextBtn() {
  pageNumber++;
  displayRecord();
  searchInputField.value = "";
}

// function for individual page
function pageChange(index) {
  pageNumber = parseInt(index);
  displayRecord();
  searchInputField.value = "";
}

// function for setting no. of record to display
recordSize.addEventListener("change", function (e) {
  recordPerPage = parseInt(e.target.value);
  totalPage = Math.ceil(totalRecordLength / recordPerPage);
  pageNumber = 1;
  generatePage();
  displayRecord();
});

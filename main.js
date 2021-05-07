const nameIm = document.getElementById("name");
const fromIm = document.getElementById("from");
const schoolIm = document.getElementById("school");
const hobbyIm = document.getElementById("hobby");
const snsIm = document.getElementById("sns");

const menu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    content.classList.remove("is-open");
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == this.menu) {
        continue;
      } else if (menu[i].classList.contains("is-active")) {
        menu[i].classList.remove("is-active");
        menu[i].nextElementSibling.classList.remove("is-open");
      }
    }
    this.classList.add("is-active");
    content.classList.add("is-open");
  }
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}

const image = [
  "url(https://fotoma.net/wp-content/uploads/2020/04/zoom_wall02.jpg)",
  "url(https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/hakodateyama_800.jpg)",
  "url(https://www.tsushin.keio.ac.jp/assets/images/about/img_facility_mita.jpg)",
  "url(https://www.sponichi.co.jp/baseball/news/2016/07/06/jpeg/G20160706012910570_view.jpg)",
  "url(https://ferret.akamaized.net/uploads/article/10074/eyecatch/default-fa70813bada8c6f80fff7383af753bbb.jpg)",
];

const choose = function (n) {
  document.body.style.backgroundImage = image[n];
};

nameIm.onclick = function () {
  choose(0);
};
fromIm.onclick = function () {
  choose(1);
};
schoolIm.onclick = function () {
  choose(2);
};
hobbyIm.onclick = function () {
  choose(3);
};
snsIm.onclick = function () {
  choose(4);
};

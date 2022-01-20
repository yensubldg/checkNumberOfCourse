const w = document.querySelector.bind(document);
let dataNeed = w(
  "#ctl00_PlaceHolderContentArea_ctl00_LeftZone > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(3) > td.no-leftborder > span > div"
);
let data = dataNeed.innerText;
// convert data to number
let dataNumber = parseInt(data);
let reload = setTimeout(() => {
  location.reload();
}, 3000);
if (dataNumber <= 0) {
  // reload page
  console.log("reload");
} else {
  // notification to user
  clearTimeout(reload);
  alert("Bạn có " + dataNumber + " chỗ");
}

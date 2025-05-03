// student.js
const students = {
  "K16THO0002": "Lê Duy An",
  "K16THO0001": "Lê Duy An",
  "K16THO0007": "Lê Quốc Chung",
  "K16THO0008": "Nguyễn Hồng Cung",
  "K16THO0009": "Nguyễn Hữu Đại",
  "K16THO0011": "Mang Huỳnh Tấn Dũng",
  "K16THO0012": "Nguyễn Hữu Dương",
  "K16THO0017": "Nguyễn Ngọc Hoài",
  "K16THO0018": "Nguyễn Huy Hoàng",
  "K16THO0019": "Trần Vũ Hoàng",
  "K16THO0020": "Đoàn Ngọc Quốc Huy",
  "K16THO0021": "Hồ Tấn Huy",
  "K16THO0022": "Lê Quốc Huy",
  "K16THO0024": "Phạm Đăng Huy",
  "K16THO0030": "Nguyễn Đăng Khoa",
  "K16THO0032": "Lê Thị Thanh Liên",
  "K16THO0038": "Nguyễn Thị Hồng Nhạn",
  "K16THO0039": "Lê Minh Nhật",
  "K16THO0040": "Võ Phùng Minh Nhật",
  "K16THO0041": "Vũ Minh Nhật",
  "K16THO0042": "Lê Ngọc Phi",
  "K16THO0043": "Lưu Văn Hoàng Phúc",
  "K16THO0044": "Nguyễn Bá Ngọc Hoàng Phương",
  "K16THO0049": "Trần Ngọc Nhật Tân",
  "K16THO0050": "Nguyễn Thanh Tấn",
  "K16THO0053": "Ngô Gia Thành",
  "K16THO0058": "Phạm Trường Thống",
  "K16THO0059": "Nguyễn Trần Vĩnh Thuận",
  "K16THO0060": "Thông Minh Thuận",
  "K16THO0073": "Nguyễn Trọng Tiến",
  "K16THO0061": "Lương Lê Tín",
  "K16THO0068": "Trần Minh Trực",
  "K16THO0069": "Trần Hữu Trung",
  "K16THO0070": "Nguyễn Anh Tú",
  "K16THO0071": "Lê Vũ",
  "K16THO0072": "Đoàn Quang Vương"
};

// Lấy MSSV từ query string, ví dụ: index.html?mssv=K16THO0042
function getMSSVFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('mssv');
}

document.addEventListener("DOMContentLoaded", () => {
  const mssv = getMSSVFromURL();
  const name = students[mssv];

  document.getElementById("student-name").textContent = name || "Không tìm thấy sinh viên";
  document.getElementById("student-id").textContent = mssv || "Không rõ";
});

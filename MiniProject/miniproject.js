let attemps = 3;
let password;
isLogged = false;
let user;

while (attemps > 0) {
  user = prompt(`Nhập tên người dùng`);
  password = Number(prompt(`Nhập mật khẩu`));
  if (password === 12345 && user == `admin`) {
    isLogged = true;
    alert(`Đăng nhập thành công`);
    break;
  } else {
    attemps--;
    alert(`Sai mật khẩu hoặc tên người dùng. Còn ${attemps} lần `);
  }
}

if (!isLogged) alert(`Bạn đã khê`);
else {
  let choice;
  do {
    choice = Number(
      prompt(`
    -------- MENU ĐẸP TRAI --------
    1. Phân loại mã số sách (Số chẵn/ lẻ)\n
    2. Thiết kế bản đồ kho sách\n
    3. Dự toán phí bảo trì sách theo năm\n
    4. Tìm mã số sách may mắn (Số nguyên tố/ số đặc biệt)\n
    5. Thoát\n
    Lựa chọn của bạn là:
      `),
    );

    switch (choice) {
      case 1:
        let totalBook = 0;
        let evenID = 0;
        let oddID = 0;
        let bookID;

        while (true) {
          bookID = Number(prompt(`Nhập mã sách vào (Nhâp 0 để dừng lại)`));
          if (bookID === 0) break;
          totalBook++;
          if (bookID % 2) evenID++;
          else oddID++;
        }
        console.log(`
          Tổng số sách đã nhập: ${totalBook}
          Tổng số sách là chẵn (Sách khoa học) : ${evenID}
          Tổng số sách là lẻ (Sách nghệ thuật): ${oddID}
          `);
        break;
      case 2:
        let row = Number(prompt(`Nhập số hàng`));
        let col = Number(prompt(`Nhập số cột`));
        for (let i = 1; i <= row; i++) {
          let deptrai = "";
          for (let j = 1; j <= col; j++) {
            if (i === j) {
              deptrai += `[Hàng ${i} Kệ ${j} (Ưu tiên)]`;
            } else deptrai += `[Hàng ${i} Kệ ${j}]`;
          }
          console.log(deptrai);
        }
        break;
      case 3:
        let total = Number(prompt(`Số lượng sách hiện có`));
        let price = Number(prompt(`Phí bảo trì`));
        let years = Number(prompt(`Số năm`));
        let totalPrice = 0;
        for (let i = 1; i <= years; i++) {
          totalPrice = total * price;
          console.log(
            `Năm ${i}: ${totalPrice.toFixed(0)} VNĐ (Đơn giá: ${price.toFixed(0)}/cuốn)`,
          );
          price *= 1.1;
        }
        break;
      case 4:
        let random;
        do {
          random = Number(prompt(`Nhập số từ 1 đến N nguyên dương`));
          if (isNaN(random) || random < 1) alert(`Nhập số nguyên dương`);
          else break;
        } while (true);
        for (let index = 1; index <= random; index++) {
          console.log(`Các mã may mắn là:`);
          let totalCode = 0;
          if (index % 3 === 0 && index % 5 !== 0) {
            console.log(`${index}`);
            totalCode++;
          }
        }
        console.log(`Tổng số mã may mắn là: ${totalCode}`);

        break;
      case 5:
        alert(`Tạm biệt bạn nhỏ`);
        break;
      default:
        alert(`Chọn sai vui lòng chọn lại`);
        break;
    }
  } while (choice !== 5);
}

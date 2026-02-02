let n = Number(prompt(`Khai báo một số nguyên`));

if (n % 2 == 0) console.log(`Số ${n} là số chẵn`);
else console.log(`Số ${n} là số lẻ`);

if (n > 0) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i}`);
  }
} else console.log(`Giá trị n không hợp lệ để tạo dãy số`);

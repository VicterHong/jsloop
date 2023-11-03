console.log("Versi 1");
for (let i = 1; i <=10; i++) {
    let row = '';
    for (let j = 1; j <=10; j++) {
      row += j + ' ';
    }
    console.log(row);
  }

  console.log("Versi 2");

  for (let i = 0; i < 10; i++) {
    let row = '';
    for (let j = 0; j < 10; j++) {
      row += '#';
    }
    console.log(row);
  }
let data = [
    { id: 1, nilai: "Santai" },
    { id: 2, nilai: "berkualitas" },
    { id: 3, nilai: "I Love Cooding" },
    { id: 4, nilai: "berkualitas" },
    { id: 5, nilai: "Santai" },
    { id: 6, nilai: "Berkualitas" },
    { id: 7, nilai: "Santai" },
    { id: 8, nilai: "Berkualitas" },
    { id: 9, nilai: "I love Cooding" },
    { id: 10, nilai: "Berkualitas" },
    { id: 11, nilai: "Santai" },
    { id: 12, nilai: "Berkualitas" },
    { id: 13, nilai: "Santai" },
    { id: 14, nilai: "Berkualitas" },
    { id: 15, nilai: "I love Cooding" },
    { id: 16, nilai: "Berkualitas" },
    { id: 17, nilai: "Santai" },
    { id: 18, nilai: "Berkualitas" },
    { id: 19, nilai: "Santai" },
    { id: 20, nilai: "Berkualitas" },
  ];
  


for (let i = 0; i<data.length; i++) {

    if (data[i].id % 2 === 0) {


    } else if (data[i].id % 3 === 0) {

      data[i].nilai = "I Love Cooding";
    } else {

      data[i].nilai = "Santai";
    }
  }
  

  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].id} - ${data[i].nilai}`);
  }
                
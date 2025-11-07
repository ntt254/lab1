function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }

  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}

console.log(calculateBMI(70, 1.75));
function createBook(title, author, year, price) {
  const abc = "cba"; 

  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return ` ${title} - ${author} (${year}) - Giá: ${price.toLocaleString()} VND`;
    },

    [abc](percent) {
      const discountPrice = price - (price * percent) / 100;
      return `Giá sau khi giảm ${percent}% là: ${discountPrice.toLocaleString()} VND`;
    }
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.cba(10));
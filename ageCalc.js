function getAge() {
  //   let userDate = document.querySelector("#userDate").value;
  //   // console.log(userDate);

  //  let userdate = new Date(userDate);
  //   console.log(userdate);
  //   let day = userdate.getDay();
  //   let month = userdate.getMonth();
  //   let year = userdate.getFullYear();

  //   let currentDate = new Date();
  //   console.log(currentDate);

  //   let cyear = currentDate.getFullYear();
  //   let cmonth = currentDate.getMonth();
  //   let cday = currentDate.getDay();

  //   yearDifference = Number(cyear - year);
  //   monthDifference = Number(cmonth - month);
  //   dayDifference = Number(cday - day);

  //   if(cmonth < 0){
  //     cyear--;
  //     cmonth+=12;
  //   }

  //   if(cday < 0){
  //     cmonth--;
  //     cday+=31;
  //   }

  //   let display = document.querySelector(".info");
  //   display.style.display = "block";
  //   if (yearDifference > 0) {
  //     display.innerHTML =
  //       "Your Age:- " +
  //       yearDifference +
  //       "<br>Month Difference:- " +
  //       monthDifference +
  //       "<br>Day Difference:- " +
  //       dayDifference;
  //   } else {
  //     display.innerHTML = "Invalid DOB";
  //   }

  let userInput = document.querySelector("#userDate").value;

  let birthdate = new Date(userInput);

  let userDate = birthdate.getDate();
  let userMonth = birthdate.getMonth() + 1;
  let userYear = birthdate.getFullYear();

  let now = new Date();
  let currentDate = now.getDate();
  let currentMonth = now.getMonth() + 1;
  let currentYear = now.getFullYear();

  yearDifference = currentYear - userYear;

  if (currentMonth >= userMonth) {
    monthDifference = currentMonth - userMonth;
  } else {
    yearDifference--;
    monthDifference = 12 + currentMonth - userMonth;
  }

  if (currentDate >= userDate) {
    dateDifference = currentDate - userDate;
  } else {
    monthDifference--;
    dateDifference = dayTOmonth(userYear, userMonth) + currentDate - userDate;
  }
  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }

  function dayTOmonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  let display = document.querySelector(".info");
  display.style.display = "block";
  if (yearDifference > 0) {
    display.innerHTML =
      "Your Age:- " +
      yearDifference +
      "<br>Month Difference:- " +
      monthDifference +
      "<br>Day Difference:- " +
      dateDifference;
  } else {
    display.innerHTML = "Invalid DOB";
  }
}

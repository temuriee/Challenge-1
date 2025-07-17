// Switch Statement გამოიყენება იმ შემთხვევაში თუ გვაქვს ბევრი if else ები უფრო კომფორტული და მარტივი წასაკითხი/ჩასაწერია Switch ი ვიდრე if else ები

// ავაწყობთ კვირის დღის switch-ს

let day = "pizza";

// switch statements აქვს ორი ფრჩხილი პირველ ფრჩხილში იწერება variable ან value ხოლო მეორე ფრჩხილში უკვე იწერება case ები

switch (day) {
  // აქ ვადარებთ თუ day უდრის თუ არა 1 რთს
  case 1:
    // აქ ვეუბნებით რომ თუ დღე უდრის 1 რთს მაშინ console.log ში გამოიტანე ტექსტი It is Monday
    console.log("It is Monday");
    // break არის საჭირო იმ შემთხვევაში თუ დღე მართლაც რომ აგმოჩნდა 1 რთი მაშინ მის შემდგომ ყველა case ებს გაუშვებს ეს რომ არ მოხდეს ვწერთ break-ს რომ მხოლოდ ის დღე გამოგვიჩინოს რაც გვიდნა
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 2 ს
  case 2:
    console.log("It is Tuesday");
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 3 ს
  case 3:
    console.log("It is Wednesday");
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 4 ს
  case 4:
    console.log("It is Thursday");
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 5 ს
  case 5:
    console.log("It is Friday");
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 6 ს
  case 6:
    console.log("It is Saturday");
    break;
  // აქ ვადარებთ თუ day უდრის თუ არა 7 ს
  case 7:
    console.log("It is Sunday");
    break;
  // default არის საჭირო იმ შემთხვევაში როცა value არ იქნება ამ შემთხვევაში კვირის დღე და იქნება რაიმე სხვა მაგალითად ვაშლი და კიდე სხვა რამ ამ შემთხვევაში ვწერთ რომ მან გამოიტანოს value რაც იქნება ეგ არ არის კვირის დღე
  default:
    console.log(`${day} is not a day`);
}

let testScore = 95;
let letterGrade;

switch (true) {
  case testScore >= 95:
    letterGrade = "A+";
    break;
  case testScore >= 80:
    letterGrade = "A";
    break;
  case testScore >= 70:
    letterGrade = "B";
    break;
  case testScore >= 60:
    letterGrade = "C";
    break;
  case testScore >= 50:
    letterGrade = "D";
    break;
  case testScore < 49:
    letterGrade = "F";
    break;
  default:
    console.log(`${testScore} is Not A Number`);
}
console.log(letterGrade);

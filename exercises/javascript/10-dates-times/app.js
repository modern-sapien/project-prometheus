// Dates & Times

let val;

const today = new Date()
let birthday = new Date("11-18-1987")
birthday = new Date("May 12 1924")
birthday = new Date("05/12/1924")

// dates are zero based
val = birthday.getMonth()

// day of the month
val = today.getDate()

// day of the week sunday to monday
val = today.getDay()

val = today.getFullYear()

val = today.getHours()

val = today.getMinutes()

val = today.getSeconds()

val = today.getTime()

// Can also set Date & Time values

birthday.setMonth(5)

birthday.setDate(18)

birthday.setFullYear(1874)


console.log(birthday)
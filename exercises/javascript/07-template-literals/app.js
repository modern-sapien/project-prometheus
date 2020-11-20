// String Methods

const firstName = "Marcus";
const lastName =  "Aurelius";
const age = 36;
const job = "Web Developer";
const city = "Atlanta";

function hello(){
    return "hello"
}

// without template strings (es5)
html = "<ul> <li>Name: "  + firstName + "</li><li>Age:" + age + "</li><li>Job:" + job + "</li><li>City: " + city + "</li></ul>"

// template literals
html = `
<ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}     </li>
    <li>Job: ${job}     </li>
    <li>City: ${city} </li>
    <li>City: ${2+2} </li>
    <li>City: ${hello()} </li>
    <li>City: ${age > 30 ? "over 30" : "under 30"} </li>

</ul>
`

document.body.innerHTML = html
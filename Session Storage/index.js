sessionStorage.setItem("name", "CODE With Sufyan Shaikh")
sessionStorage.setItem("name1", "CODE With Sufyan Shaikh2")


const getData = sessionStorage.getItem("name");
console.log(getData);

sessionStorage.removeItem("name1")
// sessionStorage.clear()
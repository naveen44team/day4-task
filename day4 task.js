//How to compare two JSON have the same properties without order
var obj1 = {
    name:"person1",
age:5
};
var obj2 ={
    age:5,
    name:"person1",

};
let flag=true;

if(Object.keys(obj1).length ==Object.keys(obj2).length){
    for (key in obj1){
        if (obj1[key]==obj2[key]){
            continue;
        }
        else{
            flag=false;
            break;
        }
    }
}
else{
    flag=false;
}
console.log(flag);


// FLAG,COUNTRY, CONTRY NAME, REGION, SUBREGION, POPULATON
const getCountries = () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://restcountries.com/v3.1/all");
	xhr.send();

	xhr.responseType = "json";

	xhr.onload = () => {
		const countries = xhr.response;
    const countriesflags = countries.map((country) => country.flags.svg);
    const countriesName = countries.map((country) => country.name.common);
    const countriesregion = countries.map((country) => country.region);
    const countriessub = countries.map((country) => country.subregion);
    const countriespopulation = countries.map((country) => country.population);


    console.log(countries, countriesflags, countriesName, countriesregion, 
        countriessub,
        countriespopulation);
}
}
getCountries()
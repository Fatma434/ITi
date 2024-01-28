async function getCountryData() {
      const countryName = document.getElementById('countryNameInput').value;

      try {
        const countryResponse = await fetch(`https://restcountries.com/v2/name/${countryName}`);
        if (!countryResponse.ok) {
          throw new Error('Country not found');
        }

        const countryData = await countryResponse.json();
        const country = countryData[0];

        const neighboringCountryCode = country.borders[0];
        if (!neighboringCountryCode) {
          throw new Error('No neighboring country found');
        }

        
        const countryInfo = `
        <p> <img src="${country.flags.svg}" alt="Flag" width="200"></p>
          <h2>${country.name}</h2>
          <p>Capital: ${country.capital}</p>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Subregion: ${country.subregion}</p>`;
         
        const neighboringResponse = await fetch(`https://restcountries.com/v2/alpha/${neighboringCountryCode}`);
        if (!neighboringResponse.ok) {
          throw new Error('Neighboring country not found');
        }

        const neighboringData = await neighboringResponse.json();
const neighboring =`
          <h3>Neighboring Country:</h3>
          <p> <img src="${neighboringData.flags.svg}" alt="Flag" width="200"></p>
          <p>Name: ${neighboringData.name}</p>
          <p>Capital: ${neighboringData.capital}</p>
          <p>Population: ${neighboringData.population}</p>
          <p>Region: ${neighboringData.region}</p>
        `;
        document.getElementById('countryInfo').innerHTML = countryInfo;
        document.getElementById('newDiv').innerHTML = neighboring;
      } catch (error) {
        console.error('Error:', error);
        document.getElementById('countryInfo').innerHTML = `<p>${error.message}</p>`;
      }
    }



    var timeoutID; 
    function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 2000);
    }

function slowAlert() {
alert("That was really slow!");
}
var IntervalID;
IntervalID = setInterval(updateClock, 60000); 


function updateClock(){
  console.log(Date.now.toLocaleString());
  }
  





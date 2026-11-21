async function GetList () {
    try {
        const response = await fetch ('travel_recommendation_api.json');
        if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); }
        const data = await response.json ();
        console.log (data);
    } catch (error) {
    console.error('Fetch failed:', error.message);
    }
}

GetList();

async function Search () {
        const response = await fetch ('travel_recommendation_api.json');
        const data = await response.json ();
    const searchInput = document.getElementById('searchbar').value.toLowerCase();
    if (searchInput === "beach" || searchInput === "beaches") {
        const searchResults1 = document.getElementById("1")
        const beach1 = data.beaches.find(item => item.id === 1);
        searchResults1.innerHTML = `
        <div id="beach-${beach1.id}" class="card beach-card1">
          <img src="${beach1.imageUrl}" alt="${beach1.name}" class="card-img1" />
          <div class="card-body1">
            <h2 id="beach-title-${beach1.id}" class="card-title1">${beach1.name}</h2>
            <p class="card-description1" style="font-size:20">${beach1.description}</p>
          </div>
        </div>
        `
        const searchResults2 = document.getElementById("2")
        const beach2 = data.beaches.find(item => item.id === 2);
        searchResults2.innerHTML = `
        <div id="beach-${beach2.id}" class="card beach-card2">
          <img src="${beach2.imageUrl}" alt="${beach2.name}" class="card-img2" />
          <div class="card-body2">
            <h2 id="beach-title-${beach2.id}" class="card-title2">${beach2.name}</h2>
            <p class="card-description2" style="font-size:20">${beach2.description}</p>
          </div>
        </div>
        `
    }
    if (searchInput === "temple" || searchInput === "temples") {
        const searchResults1 = document.getElementById("1")
        const temple1 = data.temples.find(item => item.id === 1);
        searchResults1.innerHTML = `
        <div id="temple-${temple1.id}" class="card temple-card1">
          <img src="${temple1.imageUrl}" alt="${temple1.name}" class="card-img10" />
          <div class="card-body10">
            <h2 id="temple-title-${temple1.id}" class="card-title1">${temple1.name}</h2>
            <p class="card-description10" style="font-size:20">${temple1.description}</p>
          </div>
        </div>
        `
        const searchResults2 = document.getElementById("2")
        const temple2 = data.temples.find(item => item.id === 2);
        searchResults2.innerHTML = `
        <div id="temple-${temple2.id}" class="card temple-card2">
          <img src="${temple2.imageUrl}" alt="${temple2.name}" class="card-img20" />
          <div class="card-body20">
            <h2 id="temple-title-${temple2.id}" class="card-title2">${temple2.name}</h2>
            <p class="card-description20" style="font-size:20">${temple2.description}</p>
          </div>
        </div>
        `
    }
    if (searchInput === "country" || searchInput === "countries") {
        const allCities = data.countries.flatMap(country => country.cities);
        allCities.forEach((city, index) => {
            const slotNumber = index + 1;
            const targetDiv = document.getElementById(String(slotNumber));
            if (targetDiv) {
                targetDiv.innerHTML = `
                  <div id="city-${slotNumber}" class="card country-card${slotNumber}">
                    <img src="${city.imageUrl}" alt="${city.name}" class="card-img${slotNumber}00" />
                    <div class="card-body${slotNumber}00">
                      <h2 id="city-title-${slotNumber}" class="card-title${slotNumber}">${city.name}</h2>
                      <p class="card-description${slotNumber}00" style="font-size: 20px">${city.description}</p>
                    </div>
                  </div>
                `;
              }
            });
          }
    }


function Clear () {
    const s1 = document.getElementById("1");
    const s2 = document.getElementById("2");
    const s3 = document.getElementById("3");
    const s4 = document.getElementById("4");
    const s5 = document.getElementById("5");
    const s6 = document.getElementById("6");
    s1.innerHTML = ""
    s2.innerHTML = ""
    s3.innerHTML = ""
    s4.innerHTML = ""
    s5.innerHTML = ""
    s6.innerHTML = ""
            }

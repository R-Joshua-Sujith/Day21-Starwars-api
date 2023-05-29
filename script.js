const getData = function () {
    for (let i = 1; i < 16; i++) {
        fetch(`https://swapi.dev/api/people/${i}/`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const products = document.querySelector("#characters");

                const product = document.createElement("div");
                product.classList.add("product");

                const name = document.createElement("h2");
                name.innerText = `Name: ${data.name}`;
                const birth = document.createElement("h3");
                birth.innerText = `Birth-Year:${data.birth_year}`;
                const gender = document.createElement("h4");
                gender.innerText = `Gender:${data.gender}`;
                const height = document.createElement("h4");
                height.innerText = `Height:${data.height}`;

                const mass = document.createElement("h4");
                mass.innerText = `Mass:${data.mass}`;
                const hair = document.createElement("h4");
                hair.innerText = `Hair Color:${data.hair_color}`;
                const skin = document.createElement("h4");
                skin.innerText = `Skin Color:${data.skin_color}`;

                product.appendChild(name);
                product.appendChild(birth);
                product.appendChild(gender);
                product.appendChild(height);
                product.appendChild(mass);
                product.appendChild(hair);
                product.appendChild(skin);

                products.appendChild(product);
                console.log(data);
            })
    }
}

getData();
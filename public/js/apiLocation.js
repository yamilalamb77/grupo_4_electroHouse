

window.addEventListener('load', function () {
    let $provinceList = document.querySelector("#provinceList");
    let $citiesList = document.querySelector("#citiesList");

    fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(function (res) {
            return res.json();
        })
        .then(function (resp) {
            let provinces = resp.provincias.sort(function (prev, next) {
                return prev.nombre > next.nombre
                    ? 1
                    : prev.nombre < next.nombre
                        ? -1
                        : 0;
            });
            return provinces.forEach(province => {
                $provinceList.innerHTML +=`<option value="${province.id}">${province.nombre}</option>`
            });
        })
        .catch(function (error) {
            console.log(error);
        });

        $provinceList.addEventListener('change', function (event){
         let idProvince = event.target.value
         $citiesList.innerHTML = ""
         function fetchCities (id){
             fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&campos=id,nombre&max=5000`)
             .then(response => response.json())
            .then(result => {
                let cities = result.localidades.sort(function (prev, next) {
                    return prev.nombre > next.nombre
                        ? 1
                        : prev.nombre < next.nombre
                            ? -1
                            : 0;
                });
                cities.forEach(city =>{
                    $citiesList.innerHTML += `<option value="${city.nombre}">${city.nombre}</option>`
                })
            })
            }

fetchCities(idProvince)


        })
        
});
/*creamos variable  para crear la ruta de la base de datos*/

let ruta='https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv'

/*usamos el meyodo de fecth para la llamada de la base de datos de la ruta*/
fetch(ruta)
.then(Response => Response.text())
.then(data=> {

/*creamos las filas de nuestro documento .csv(recordar que era un documento
    excel conevrtido en texto)suelen ser los documentos .cvs asi*/

    let rows = data.split('\n');/*SPLIT este metodo corto desde una parte,
    hemos cogido \n (baqueslap)para dividir las filas cuando lo necesitemos se puede usar*/

    /*ahora vamos a crear un elemento con cada uno */
    let cols = rows.map(el => el.split(','));

    /*console.table (cols);/*cuando le ponemos table en vez de log 
    nos lo pone en una tabla
    simplemente esa es la diferencia
    vamos a filtrar nuestra tabla de datos quitando la que tienen 
    los nombres vacio*/
    let properValeu = cols.filter(name_star=> name_star[6] !='');
    /*console.table(properValeu);*/

    /*creamos un array con objetos,estos objetos tienen la informacion de nuestra tabla filtrada*/
    let final_star_array = properValeu.map(final_star =>{
        return{
            id: final_star[0],
            name: final_star[6],
            coordenadas :`x: ${final_star[17]}, y: ${final_star[18]}, z: ${final_star[19]}`
        }
    })
    /*aqui quitabamos la ptimera y la ultima columna ya que no tenian informacion
    necesaria*/
    final_star_array.pop();
    final_star_array.shift();


    /*console.table(final_star_array);

    /*creamos una variable con el padre de nuestras cartas*/
    let container= document.querySelector('.row')

    /*creamos una funcion para mostrar las cartas en el DOM*/

    final_star_array.forEach(estrella=>{
        /*creo las columnas para cada una de mis card*/
        let div_cols= document.createElement('div')

        /*añado estas columnas al padre en html*/
        container.appendChild(div_cols)

        /*añadimos el contenido a mis columnas,conseguimos hacer que saliera
         la documentacion que nos daba antes en card*/
        div_cols.innerHTML= `
        <div class="card text-bg-warning mb-3 me-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${estrella.name}</h5>
                <p class="card-text">Edad: ${estrella.id}</p>
                <p class="card-text">Profesion: ${estrella.coordenadas}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    });
})
/*metodo fetch */
/*primero le damos valor a la variable poniendo el api de la pagina
como puso jonathan el de richy morty*/
let path_api= ''/*aqui pondrias la pagina del api*/
fetch(path_api) /*esto setia el metodo fetch*/
.then(Response => Response.json()) /*aqui es para asegurarnos que la pagina este en json y sino lo cambiamos*/
.then(data=>{  /*hacemos una fuction arrow*/
   let data_result = data.results;
   let data_vivos = [];
   data_result.map(data=>{ 
    if (data.status== 'Alive') {
        data_vivos.push(data)/*para crearlo en array*/
        
    }
   })
       console.log(data_vivos);
   
 });

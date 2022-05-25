const productos = [
    { id: '1', categoria: 'Hamburguesa',  nombre: "Hamburguesa Cheddar",    precio: 37, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '2', categoria: 'Hamburguesa',  nombre: "Hamburguesa Doble",      precio: 27, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '3', categoria: 'Hamburguesa',  nombre: "Hamburguesa Triple",     precio: 40, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '4', categoria: 'Hamburguesa',  nombre: "Hamburguesa Cuadruple",  precio: 55, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '5', categoria: 'Hamburguesa',  nombre: "Hamburguesa Clasica",    precio: 11, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '6', categoria: 'Hamburguesa',  nombre: "Hamburguesa Pollo",      precio: 19, foto: '/assets/images/hamburguesa clasica.jpg' },
    { id: '7', categoria: 'Hamburguesa',  nombre: "Hamburguesa Panceta",    precio: 2,  foto: '/assets/images/hamburguesa clasica.jpg' }
  ]

    
    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                    resolve( query )                           
                }, 2000)
            })            
        
    }


  const producto = { id: '1', categoria: 'Hamburguesas', nombre: "Hamburguesa Cheddar",   precio: 37, foto: '/assets/images/hamburguesa clasica.jpg' }

  export const getFechOne = new Promise((resolve)=>{
        setTimeout(()=>{                                          
            resolve( producto )                           
        }, 2000)
    })
  
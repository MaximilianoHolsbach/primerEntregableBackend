class ProductManager{
    constructor(){
        this.products = []
    }
    addProduct(product){
        //Verifico y genero los id-code para los productos
        if(this.products.length === 0){
            product.code = 1
        }else{
            product.code = this.products[this.products.length - 1].code + 1
        }
        this.products.push(product)
    }
    getProducts(){
        return this.products
    }
    getProductByld(code){
        const product = this.products.find(e => e.code === code)
        if(!product){
            throw new Error('Not found')
        }
        return product
    }

}

class Product{
    constructor(title,description,price,thumbnail,stock ){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
    }
}

console.log('Comienza el desarrollo del ejercicio')

const gestorDeProductos = new ProductManager()

console.log('Creamos los productos')

gestorDeProductos.addProduct(new Product('Toner Ricoh MP301','Insumo para impresoras Ricoh',10,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Ricoh 1170D','Insumo para modelos 1515,161,171,201',8,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Ricoh MP401','Insumo para modelos 401,4510,402',15,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Ricoh 1130D','Insumo para modelos 1500, 1900, 2500',10,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Ricoh 377','Insumo para modelos 3710',15,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Brother DCP 2540DN','Insumo para modelos 2370, 2540',5,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))
gestorDeProductos.addProduct(new Product('Toner Brother DCP 1810','Insumo para modelos 1860, 1260',5,'https://c8.alamy.com/compes/2gxf6rm/icono-de-impresora-laser-moderna-en-estilo-de-contorno-aislado-sobre-fondo-blanco-2gxf6rm.jpg',50))

console.log(gestorDeProductos.getProducts())

console.log(gestorDeProductos.getProductByld(5))

//console.log(gestorDeProductos.getProductByld(8))


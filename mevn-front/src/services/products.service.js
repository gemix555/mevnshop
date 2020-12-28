import {request} from "@/services/generic.service"

const getProduct = (id) => {
    request({url:`products/${id}`, method: 'GET'})
        .then(res => {console.log('Products_service_one')})
}

const getProducts = () => {
        request({url: 'products', method: 'GET'})
            .then(res => {
                console.log('Products_service_all')
            })
}

export {
    getProduct, getProducts
}
//1.30

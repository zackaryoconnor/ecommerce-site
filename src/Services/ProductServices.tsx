const url = 'http://localhost:3000/product'

export const fetchProducts = async () => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const fetchProductById = async (id: string) => {
    try {
        const response = await fetch(`${url}/${id}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
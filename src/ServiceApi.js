import axios from 'axios'

export default class ServiceApi {
    static async getProductsList(actualPage, sizes = [], colors = []) {
        console.log('sizes', sizes)
        const sizeFilters = sizes.map(size => {
            let sizeToString;
            
            if (sizes[0] === size) {
                sizeToString = `&size=${size}`
            } else {
                sizeToString = `%2C${size}`
            }
            return sizeToString
        })

        const colorFilters = colors.map(color => {
            let colorToString;
            
            if (colors[0] === color) {
                colorToString = `&color=${color}`
            } else {
                colorToString = `%2C${color}`
            }
            return colorToString
        })
        const res = await axios.get(
            `https://qa-api.wovenlyrugs.com/products?page=${actualPage}&page_size=12${sizeFilters.join('')}${colorFilters.join('')}&group=Rug`
            )
        return res;
    }
}
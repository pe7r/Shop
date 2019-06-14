import axios from 'axios'

export default class ServiceApi {

    static changeFilterToApi = (filterArrToChange = [], filterNameToAPI) => {
        const filterArray = filterArrToChange.map(filter => {
            let filterToString;
            if (filterArrToChange[0] === filter) {
                filterToString = `&${filterNameToAPI}=${filter}`
            } else {
                filterToString = `%2C${filter}`
            }
            return filterToString
        })
        return filterArray
    }

    static async getProductsList(actualPage, allChosenFilters, chosenSort) {
        const { size, color, room, price, material, construction, style } = allChosenFilters;

        let sortToApi = ``;
        if (chosenSort.length >= 1) {
            sortToApi = `sort=${chosenSort}&`;
        }
        

        const sizeFilter = this.changeFilterToApi(size, 'size').join('')
        const colorFilter = this.changeFilterToApi(color, 'color').join('')
        const roomFilter = this.changeFilterToApi(room, 'room').join('')
        const priceFilter = this.changeFilterToApi(price, 'price').join('')
        const materialFilter = this.changeFilterToApi(material, 'material').join('')
        const constructionFilter = this.changeFilterToApi(construction, 'construction').join('')
        const styleFilter = this.changeFilterToApi(style, 'style').join('')

        const allFiltersApi = [sizeFilter, colorFilter, roomFilter, priceFilter, materialFilter, constructionFilter, styleFilter]

        const res = await axios.get(
            `https://qa-api.wovenlyrugs.com/products?${sortToApi}page=${actualPage}&page_size=12&group=Rug${allFiltersApi.join('')}`
            )
        return res;
    }
}
import axios from 'axios'

export default class ServiceApi {
    static async getProductsList(actualPage) {
        const res = await axios.get(
            `https://qa-api.wovenlyrugs.com/products?page=${actualPage}&page_size=12&size=runners&group=Rug`
            )
        return res;
    }
}
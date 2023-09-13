import { get } from '@/utils/request'


export default class Tags {

    /**
     * 获取标签数据
     */
    static async getTags() {
        return get('/api/res/tags')
    }
}
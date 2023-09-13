import { defineStore } from 'pinia'

import Tags from '@/api/Tags'

export const useResTagsStore = defineStore('resTags', {
    state: () => {
        return {
            //QUESTION:store中的数据是响应式的吗？ 是的tags属性最终会指向一个ObjectRefImpl对象，这个对象是响应式的
            tags: []
        }
    },
    actions: {
        async reqResTags() {
            if (this.tags.length > 0) {
                return Promise.resolve("已经获取过标签数据了")
            }
            //QUESTION:是不是await的地方都要try catch?
            let tagRespones = await Tags.getTags()
            console.log("tagRespones", tagRespones)
            if (tagRespones.data.code === '302') {
                tagRespones = await Tags.getTags()
            }
            if (tagRespones.data.code === '200') {
                this.tags = tagRespones.data.result
                //QUESTION: 这里返回Promise对象是为什么？ 因为async函数都会u返回Promise对象？如果不是Promise则包装成Promise
                return Promise.resolve(tagRespones.message)
            } else {
                return Promise.reject(tagRespones.data.message)
            }
        }
    }
})
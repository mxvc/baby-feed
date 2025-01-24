import {showError, showSuccess} from "./msg";
import type_1 from '../assets/type_1.png'
import type_2 from '../assets/type_2.png'
import type_3 from '../assets/type_3.png'
import type_banai from '../assets/type_banai.png'
import {LocalStorage} from "quasar";

const KEY_LIST = 'list'

export const EVENT_LIST = [
  {
    key: 1,
    name: '母乳',
    icon: type_1,
  },
  {
    key: 2,
    name: '奶粉',
    icon: type_2,
  },
  {
    key: 3,
    name: '尿布',
    icon: type_3
  },
  {
    key: 4,
    name: '尿布 💩',
    icon: type_3
  },
  {
    key: 5,
    name: '拔奶',
    icon: type_banai
  },

  {
    key: 6,
    name: '母乳 左',
    icon: type_banai
  },
  {
    key: 7,
    name: '母乳 右',
    icon: type_banai
  },
]

export function getEventOptions(){
  return EVENT_LIST.map(item=>{
    return {
      label:item.name,
      value:item.key
    }
  })
}

export const EVENT_MAP = {}
for (let item of EVENT_LIST) {
  EVENT_MAP[item.key] = item
}


export function saveAll(list) {
  LocalStorage.set(KEY_LIST, list)
}

export function findAll() {
  return new Promise(resolve => {
    const list = LocalStorage.getItem(KEY_LIST)
    resolve(list)
  })

}


export function deleteItem(item) {
  uni.showModal({
    title: '操作提示',
    content: '是否确定删除',
    success: (res) => {
      if (res.confirm) {
        uni.showToast({
          icon: 'success',
          title: '删除成功'
        })
      }
    }
  });
}

<template>
  <q-page class="">
    <div>
      <q-list v-for="(dayList,key) in dayDict" :title="key">
        <q-item-label header>{{ key }}</q-item-label>
        <q-item v-for="(item,index) in dayList">
          <q-item-section avatar>
            <q-avatar>
              <img :src="getImageSrc(item.type)">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ itemNameRender(item) }}</q-item-label>
            <q-item-label caption>{{ fullDateRender(item) }}</q-item-label>
          </q-item-section>
          <q-item-section side :to="'/edit'">
            <q-item-label>{{ simpleDateRender(item) }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </div>
    <div class="q-pa-md" style="position: fixed;bottom: 0;">
      <div style="display: flex;gap:8px; justify-content:flex-start; flex-wrap:wrap;">
        <q-btn v-for="item in eventList" color="primary" :label="item.name" style="width: 23%"
               @click="add(item.key)"></q-btn>

      </div>
    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import {EVENT_LIST, EVENT_MAP, findAll, saveAll} from "src/utils/data.js";
import {formatFullDay, formatTime, pastTime} from "src/utils/dateUtil.js";

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      eventList: EVENT_LIST,
      eventMap: EVENT_MAP,
      list: [],
    }
  },
  computed: {
    dayDict() {
      const dict = {}
      for (let item of this.list) {
        const day = formatFullDay(item.time)
        if (dict[day] == null) {
          dict[day] = []
        }
        dict[day].push(item)
      }

      return dict;
    }
  },
  mounted() {
    this.loadData()
  },
  onShow() {
    // this.loadData()
  },
  methods: {
    loadData() {
      findAll().then(list => {
        this.list = list
      })

    },
    add(type) {
      const time = new Date().getTime();
      if (this.list.length > 600) {
        this.list.pop()
      }
      this.list = [{time, type}, ...this.list]

      saveAll(this.list)
    },
    deleteItem(index) {
      uni.showModal({
        title: '操作提示',
        content: '是否确定删除',
        success: res => {
          if (res.confirm) {
            this.list.splice(index, 1)
            saveAll(this.list)
          }
        }
      });
    },
    simpleDateRender(item) {
      const {time, type} = item
      const d = new Date(time)

      return pastTime(d)

    },
    fullDateRender(item) {
      const {time, type} = item
      const d = new Date(time)
      return formatTime(d)
    },
    itemNameRender(item) {
      const {time, type} = item
      return this.eventMap[type].name;
    },
    getImageSrc(type) {
      return this.eventMap[type].icon
    },

    gotoForm(item, index) {
      uni.navigateTo({
        url: '/pages/form/form?time=' + item.time + '&index=' + index,
      })
    }

  }

});
</script>

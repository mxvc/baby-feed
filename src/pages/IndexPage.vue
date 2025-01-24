<template>
  <q-page>

    <div style="height: calc(100vh - 280px)">
      <q-list>

        <q-item-label header>1月2日</q-item-label>

        <q-item :to="'/edit'">
          <q-item-section
            avatar
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>母乳</q-item-label>
            <q-item-label caption>2024</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section
            avatar
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>母乳</q-item-label>
            <q-item-label caption>2024</q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
    <div>
      <div style="display: flex;gap:8px;justify-content: center">
        <q-btn v-for="item in eventList" color="primary" :label="item.name"
               @click="add(item.key)"></q-btn>
      </div>

    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import {EVENT_LIST, EVENT_MAP, saveAll} from "src/utils/data.js";
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
  methods: {
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

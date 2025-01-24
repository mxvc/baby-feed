<template>
  <q-page>
    显示母乳
    母乳区分左右
    显示奶粉
    显示尿布,区分拉屎
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {EVENT_LIST} from "src/utils/data.js";

export default defineComponent({
  name: 'CustomPage',
  data(){
    return {
      eventList: EVENT_LIST
    }
  }
});
</script>

<template>
  <q-page class="q-pa-md" >

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-select v-model="type" label="类别" :options="eventList" emit-value>

      </q-select>

      <q-time model-value=""></q-time>




      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {getEventOptions} from "src/utils/data.js";

export default defineComponent({
  name: 'EditPage',
  data(){
    return {
      eventList:getEventOptions(),
      type: null,
      time: null
    }
  }
});
</script>

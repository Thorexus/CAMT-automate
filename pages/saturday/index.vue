<template>
  <div class="container">
    <div :style="{ margin: '24px 16px 0' }">
      <span :style="{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'underline' }"
        >To-do List: Saturday</span
      >
      <a-button type="primary" @click="showModal"><a-icon type="plus" /> Add Task </a-button>
      <a-modal title="Title" @ok="handleOk" :visible="visible" @cancel="handleCancel">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item>
            Task: <a-input id="error" placeholder="type your task" v-model="taskInput" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
      <a-table :columns="columns" :data-source="data" bordered>
        <template v-for="col in ['name', 'number', 'description']" :slot="col" slot-scope="text">
          <div :key="col">
            {{ text }}
          </div>
        </template>
        <template slot="operation">
          <div class="editable-row-operations">
            <span>
              <a @click="editModal"><a-icon type="edit"/></a>
              <a-modal
                title="Title"
                @ok="handleEditOk"
                :visibleEdit="visibleEdit"
                @cancel="handleEditCancel"
              >
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                  <a-form-item>
                    Task: <a-input id="error" placeholder="type your task" v-model="taskInput" />
                  </a-form-item>
                </a-form>
              </a-modal>
              <a @click="deleteTask"><a-icon type="stop"/></a>
            </span>
          </div>
        </template>
      </a-table>
    </a-layout-content>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
const columns = [
  {
    title: 'No.',
    dataIndex: 'number',
    width: '5%',
    align: 'center',
    scopedSlots: { customRender: 'number' },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '75%',
    align: 'center',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    align: 'center',
    scopedSlots: { customRender: 'operation' },
  },
]

const data = []
// for (let i = 0; i < data.length; i++) {
//   data.push({
//     key: i.toString(),
//     number: `${i}`,
//     name: `Task ${i}`,
//     description: `London Park no. ${i}`,
//   })
// }
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      taskInput: '',
      columns,
      taskInput: null,
      editingKey: '',
      content: [],
      visible: false,
      visibleEdit: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    }
  },
  mounted() {
    this.getAllData()
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    async getAllData() {
      const content = axios({
        method: 'get',
        url: 'https://claris-backend.artisandigital.tech/api/get/list/byDay/7',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5lVXNlcklkIjoiIiwiaWF0IjoxNTk0MjAyMjkwfQ.40-BL-byG8Kd7d9jhcArbge-J9u94bJoUI7q9mY7Q6Q',
          Channel: 'LINE',
        },
      }).then(async response => {
        const content = await response.data.response
        const afterMapData = content.map((item, index) => {
          return {
            key: (index + 1).toString(),
            number: index + 1,
            description: item.todo,
          }
        })
        this.data = await afterMapData
      })
    },
    showModal() {
      this.visible = true
    },
    editModal() {
      this.visibleEdit = true
    },
    handleOk(e) {
      console.log('e', this.taskInput)
      axios
        .post(
          'https://claris-backend.artisandigital.tech/api/save/todo',
          { day: 7, todo: this.taskInput },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5lVXNlcklkIjoiIiwiaWF0IjoxNTk0MjAyMjkwfQ.40-BL-byG8Kd7d9jhcArbge-J9u94bJoUI7q9mY7Q6Q',
              Channel: 'LINE',
            },
          }
        )
        .then(async response => {
          console.log('response', response)
        })
    },
    handleEditOk(e) {
      console.log('e', this.taskInput)
      axios
        .put(
          'https://claris-backend.artisandigital.tech/api/update/todo/7',
          { day: 7, todo: this.taskInput },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5lVXNlcklkIjoiIiwiaWF0IjoxNTk0MjAyMjkwfQ.40-BL-byG8Kd7d9jhcArbge-J9u94bJoUI7q9mY7Q6Q',
              Channel: 'LINE',
            },
          }
        )
        .then(async response => {
          console.log('response', response)
        })
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleEditCancel(e) {
      console.log('Clicked cancel button')
      this.visibleEdit = false
    },
    deleteTask() {
      console.log('delete')
    },
  },
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

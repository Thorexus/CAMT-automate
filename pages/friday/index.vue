<template>
<div class="container">
    <div :style="{ margin: '24px 16px 0' }">
      <span :style="{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'underline' }">To-do List: Friday</span> <a-button type="primary" @click="addTask"><a-icon type="plus" /> Add Task</a-button>
    </div>
    <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
      <a-table :columns="columns" :data-source="data" bordered>
        <template
          v-for="col in ['name', 'number', 'description']"
          :slot="col"
          slot-scope="text"
        >
          <div :key="col">
              {{ text }}
          </div>
        </template>
        <template slot="operation">
          <div class="editable-row-operations">
            <span>
              <a @click="editTask"><a-icon type="edit" /></a>
              <a @click="deleteTask"><a-icon type="stop" /></a>
            </span>
          </div>
        </template>
      </a-table>
    </a-layout-content>
</div>
</template>

<script>
const columns = [
  {
    title: 'No.',
    dataIndex: 'number',
    width: '5%',
    align: 'center',
    scopedSlots: { customRender: 'number' },
  },
  {
    title: 'Task name',
    dataIndex: 'name',
    width: '15%',
    align: 'center',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '60%',
    align: 'center',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    align: 'center',
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    number: `${i}`,
    name: `Task ${i}`,
    description: `London Park no. ${i}`,
  });
}
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
      editingKey: '',
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    addTask() {
      console.log('Add Task');
    },
    editTask() {
      console.log('edit');
    },
    deleteTask() {
      console.log('delete');
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
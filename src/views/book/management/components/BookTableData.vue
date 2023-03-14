<template>
  <n-space vertical :size="12">
    <n-data-table :bordered="false" :single-line="false" :columns="columns" :data="data" :pagination="pagination" />
  </n-space>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue';
import { NButton, useMessage } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';

type RowData = {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const createColumns = ({ sendMail }: { sendMail: (rowData: RowData) => void }): DataTableColumns<RowData> => {
  return [
    {
      title: '条码',
      key: 'bookBarCode'
    },
    {
      title: '书名',
      key: 'bookName'
    },
    {
      title: '出版社',
      key: 'bookPress'
    },
    {
      title: '中图分类',
      key: 'bookType'
    },
    {
      title: '定价',
      key: 'bookOriginPrice'
    },
    {
      title: '库存',
      key: 'address'
    },
    {
      title: '库位',
      key: 'bookOther'
    },
    {
      title: '出版时间',
      key: 'time'
    },
    {
      title: '销价',
      key: 'bookSalePrice'
    },
    {
      title: '库房',
      key: 'bookAddress'
    },
    {
      title: '读者对象',
      key: 'bookReaders'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        );
      }
    }
  ];
};

const createData = (): RowData[] => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {
          message.info(`send mail to ${rowData.name}`);
        }
      }),
      pagination: {
        pageSize: 10
      }
    };
  }
});
</script>

import { Form } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type DataType = {
  id: string;
  text: string;
  isDone: boolean;
  isEdit: boolean;
};

// let x:DataType = {
//     id: '343',
//     text: 'dfdkfdlkf dl',
//     isDone: false,
//     isEdit: false,
// }

// let key: keyof DataType = 'text';

// let value: string | boolean = 'mahid'

// x[key] = value;

const useCheckList = () => {
  const [data, setData] = useState<DataType[]>([]);

  const addData = (values: { text: string }) => {
    console.log("🚀 ~ file: useCheckList.tsx:30 ~ addData ~ values:", values);
    setData([
      {
        id: uuidv4(),
        ...values,
        isDone: false,
        isEdit: false,
      },
      ...data,
    ]);

    // form.resetFields();
  };

  function updateBooleanData(dataId: string, value: boolean) {
    let updatedData: DataType[] = data.map((item) => {
      if (item.id === dataId) {
        item.isDone = value;
      }
      return item;
    });
    setData(updatedData);
  }

  // function handleComplete(dataId: string, value: boolean): void {
  //   updateBooleanData(dataId, value);
  // }

  // function handleEdit(dataId: string, value: boolean): void {
  //   updateBooleanData(dataId, value);
  // }

  function updateData(
    dataId: string,
    key: keyof DataType,
    value: string | boolean
  ) {
    let updatedData: DataType[] = data.map((item:any) => {
      if (item.id === dataId) {
        item[key] = value;
      }
      return item;
    });
    setData(updatedData);
  }

  return {
    data,
    addData,
    updateData,
  };
};

export default useCheckList;

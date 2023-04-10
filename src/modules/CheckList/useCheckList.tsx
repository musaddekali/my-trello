import { Form } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type DataType = {
  id: string;
  text: string;
  isDone: boolean;
  isEdit: boolean;
};

const useCheckList = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [form] = Form.useForm();

  const addData = (values: { text: string }) => {
    setData([
      {
        id: uuidv4(),
        ...values,
        isDone: false,
        isEdit: false,
      },
      ...data,
    ]);

    form.resetFields();
  };

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
    let updatedData: DataType[] = data.map((item: any) => {
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
    form,
  };
};

export default useCheckList;

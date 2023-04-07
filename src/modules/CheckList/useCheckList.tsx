import { Form } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Data = {
  id: string;
  text: string;
  isDone: boolean;
  isEdit: boolean;
};

const useCheckList = () => {
  const [data, setData] = useState<Data[]>([]);
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

  function updateData(dataId: string, key: string, value: string | boolean) {
    let updatedData = data.map((item) => {
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

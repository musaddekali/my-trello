import { Form } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type DataType = {
  id: string;
  text: string;
  isDone: boolean;
  isEdit: boolean;
};

const useCheckList = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [totalCompleted, setTotalCompleted] = useState<number>(0);
  const [form] = Form.useForm();

  function getComplitedPercent() {
    const totalData: number = data.length;
    const doneData: DataType[] = data.filter((item) => item.isDone);
    const percent: number = doneData.length * (100 / totalData);
    setTotalCompleted(Math.floor(percent));
  }

  function storeDatainDatabase<T>(payload: T) {
    localStorage.setItem("data", JSON.stringify(payload));
    console.log('Data stored in local', payload)
  }

  function getDataFromDatabase() {
    const allData = JSON.parse(localStorage.getItem("data") || "[]");
    if (allData.length) {
      setData(allData);
    }
    console.log(
      "🚀 ~ file: useCheckList.tsx:30 ~ getDataFromDatabase ~ allData:",
      allData
    );
  }

  useEffect(() => {
    getDataFromDatabase();
  }, [])

  useEffect(() => {
    getComplitedPercent();
  }, [data]);

  const addData = (values: { text: string }) => {
    const fullData = [
      {
        id: uuidv4(),
        ...values,
        isDone: false,
        isEdit: false,
      },
      ...data,
    ];
    setData(fullData);
    storeDatainDatabase(fullData);
    form.resetFields();
  };

  function deleteListItem(listId: string) {
    const remainData = data.filter((item) => item.id !== listId);
    setData(remainData);
    storeDatainDatabase(remainData);
  }

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
    storeDatainDatabase(updatedData);
  }

  return {
    data,
    addData,
    updateData,
    form,
    deleteListItem,
    totalCompleted,
  };
};

export default useCheckList;

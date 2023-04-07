import { Form, Input, Button } from "antd";

type CheckListFormPropType = {
  form: any;
  addData: (values: { text: string }) => void;
};

const CheckListForm = ({ form, addData }: CheckListFormPropType) => {
  return (
    <>
      <div className="mt-5 w-1/2 mx-auto shadow p-4 rounded-md">
        <Form form={form} onFinish={addData} layout="vertical">
          <Form.Item
            rules={[{ required: true, message: "Please insert some text" }]}
            name="text"
            label="Add new item"
          >
            <Input.TextArea size="large" placeholder="Add new item..." />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button
              size="large"
              className="bg-blue-500 hover:bg-blue-600"
              type="primary"
              htmlType="submit"
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CheckListForm;
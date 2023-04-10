import { Editor } from "@tinymce/tinymce-react";
import {  Button, Checkbox, Form, Input } from "antd";
import { useRef, useState } from "react";

const CheckListForm = ({ addData }: any) => {
  const [content, setContent] = useState("");
  const editorRef = useRef<any>(null);

  const handleContent = () => {
    if (editorRef.current) {
      addData({ text:editorRef.current.getContent() });
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="mt-5 w-1/2 mx-auto shadow p-4 rounded-md">
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          apiKey="sey5db1hjwjm9hns89aej71i6bwbqd50p3hkr2pg6kv5lyzk"
          init={{
            branding: false,
            height: 200,
            menubar: false,
            // plugins:
            //   "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
            toolbar:
              "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
            image_advtab: true,
          }}
        />
        {/* <Form.Item>
          <Input size="large" placeholder="Type you name"/>
        </Form.Item>
        <Form.Item>
          <Checkbox>
            <p className="text-base leading-tight bg-yellow-400 px-2">Remember me for this device</p>
          </Checkbox>
        </Form.Item> */}
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={handleContent}
        >
          Log editor content
        </Button>
      </div>
    </>
  );
};

export default CheckListForm;

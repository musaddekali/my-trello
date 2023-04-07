import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { useEffect, useRef } from "react";

const ListItem = ({ data, updateData }: any) => {
    const { id, text, isDone, isEdit } = data;
    const editField = useRef<any>(null);
  
    useEffect(() => {
      if (isEdit) {
        editField.current?.focus();
      } else {
        editField.current?.blur();
      }
    }, [isEdit]);
  
    return (
      <li className="data_list_item p-4 rounded-md shadow">
        <div className="flex gap-2">
          <Checkbox
            onChange={(e) => updateData(id, "isDone", e.target.checked)}
          />
          {!isEdit ? (
            <p
              onClick={() => updateData(id, "isEdit", true)}
              className={`${
                isDone ? "line-through" : ""
              } whitespace-break-spaces cursor-pointer`}
            >
              {text}
            </p>
          ) : (
            <div className="w-full">
              <Input.TextArea
                className="text-normal"
                ref={editField}
                value={text}
                onChange={(e) => updateData(id, "text", e.target.value)}
                onBlur={() => updateData(id, "isEdit", false)}
              />
              <div className="mt-3 flex gap-3">
                <Button className="bg-blue-500 hover:bg-blue-600" type="primary">
                  Save
                </Button>
                <Button danger onClick={() => updateData(id, "isEdit", false)}>
                  <CloseOutlined />
                </Button>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  };

  export default ListItem;
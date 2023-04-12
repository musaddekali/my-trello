import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Modal } from "antd";
import { useEffect, useRef } from "react";

const ListItem = ({ data, updateData, deleteListItem }: any) => {
  const { id, text, isDone, isEdit } = data;
  const editField = useRef<any>(null);
  const listTextRef = useRef<any>(null)

  useEffect(() => {
    if (isEdit) {
      editField.current?.focus();
    } else {
      editField.current?.blur();
    }
  }, [isEdit]);

  function confirmDelete() {
    Modal.confirm({
      title: 'Sure want to delete?',
      content: 'This delete item can not be undo!',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: () => deleteListItem(id)
    });
  }

  return (
    <li className="data_list_item p-4 rounded-md shadow">
      <div className="flex gap-2 relative pr-5">
        {!isEdit ? (
          <Button
          onClick={confirmDelete}
            type="primary"
            danger
            className="absolute top-0 right-0 inline-flex p-2 rounded-full cursor-pointer"
          >
            <DeleteOutlined />
          </Button>
        ) : null}
        <Checkbox
          onChange={(e) => updateData(id, "isDone", e.target.checked)}
        />
        {!isEdit ? (
          <p
            ref={listTextRef}
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
              className="text-base h-0"
              style={{height: `${listTextRef?.current?.scrollHeight}px`}}
              ref={editField}
              value={text}
              onChange={(e) => updateData(id, "text", e.target.value)}
              onBlur={() => updateData(id, "isEdit", false)}
            />
            <div className="mt-3 flex gap-3">
              <Button type="primary">
                Save
              </Button>
              <Button type="primary" className="inline-flex items-center" danger onClick={() => updateData(id, "isEdit", false)}>
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

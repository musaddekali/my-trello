import useCheckList from "./useCheckList";
import CheckListForm from "./CheckListForm";
import CheckLists from "./CheckLists";
import { Progress } from "antd";

const CheckList = () => {
  const { form, data, addData, updateData, deleteListItem, totalCompleted } =
    useCheckList();
  return (
    <>
      <div className="container">
        <div className="flex align-center flex-col max-w-3xl  mx-auto">
          <CheckListForm form={form} addData={addData} />
          <div className="data_list mt-10">
            {/* Progress bar  */}
            <div className="mb-4 border rounded-md p-3 shadow">
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                percent={totalCompleted}
              />
            </div>
            {/* End Progress bar  */}
            <CheckLists
              updateData={updateData}
              deleteListItem={deleteListItem}
              allData={data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckList;

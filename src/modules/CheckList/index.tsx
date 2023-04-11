import useCheckList from "./useCheckList";
import CheckListForm from "./CheckListForm";
import CheckLists from "./CheckLists";

const CheckList = () => {
  const { form, data, addData, updateData, deleteListItem } = useCheckList();
  return (
    <>
      <div className="container">
        <div className="flex align-center flex-col max-w-3xl  mx-auto">
          <CheckListForm form={form} addData={addData} />
          <div className="data_list mt-10">
            <CheckLists updateData={updateData} deleteListItem={deleteListItem} allData={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckList;

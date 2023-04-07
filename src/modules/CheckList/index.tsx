import useCheckList from "./useCheckList";
import CheckListForm from "./CheckListForm";
import CheckLists from "./CheckLists";

const CheckList = () => {
  const {form, data, addData, updateData } = useCheckList();
  return (
    <>
      <div className="container">
        <CheckListForm form={form} addData={addData}/>
        <div className="data_list mt-10">
          <CheckLists updateData={updateData} allData={data} />
        </div>
      </div>
    </>
  );
};



export default CheckList;

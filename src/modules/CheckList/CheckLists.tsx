import ListItem from "./ListItem";

const CheckLists = ({ allData, updateData, deleteListItem }: any) => {
    return (
      <ul className="flex flex-col gap-3">
        {allData?.length > 0 ? (
          allData.map((item:any) => {
            return <ListItem updateData={updateData} deleteListItem={deleteListItem} key={item.id} data={item} />;
          })
        ) : (
          <h4 className="p-4 bg-orange-500 text-white text-lg text-center rounded-md shadow-lg">
            No Data available
          </h4>
        )}
      </ul>
    );
  };
  

  export default CheckLists;
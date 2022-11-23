const TableLayout = ({ children }) => {
  return (
    <div className="flex flex-col  h-full">
      <div className="w-full mx-auto bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;

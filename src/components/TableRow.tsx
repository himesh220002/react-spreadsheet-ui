import type { SpreadsheetRow } from "../data/types";
import Badge from "./Badge";

type Props = {
  row: SpreadsheetRow;
  index: number;
};

const TableRow = ({ row, index }: Props) => {
    console.log("Rendering row", index, row.jobRequest);

  return (
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-200 text-center py-2">{index +1}</td>
      <td className="border border-gray-200 px-4 py-2 max-w-[250px] truncate">{row.jobRequest}</td>
      <td className="border border-gray-200 px-4 py-2">{row.submitted}</td>
      <td className="border border-gray-200 px-4 py-2">
        <Badge label={row.status} type="status" />
      </td>
      <td className="border border-gray-200 px-4 py-2">{row.submitter}</td>
      
      <td className="border border-gray-200 px-4 py-2 max-w-[160px]">
        <button onClick={()=>{console.log("clicked url link- "+row.url)}} className="cursor-pointer max-w-[150px] truncate">
        <a
          href={`https://${row.url}`}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.url}
        </a>
        </button>
      </td>
      <td className="border border-gray-200 px-4 py-2">{row.assignedTo}</td>
      <td className="border border-gray-200 px-4 py-2">
        <Badge label={row.priority} type="priority" />
      </td>
      <td className="border border-gray-200 px-4 py-2">{row.dueDate}</td>
      <td className="border border-gray-200 px-4 py-2">{row.estimatedValue}</td>
      <td className="border border-gray-200 px-4 py-2"></td>
       
    </tr>
  );
};

export default TableRow;

import { useState } from "react";
import { mockData } from "../data/mockData";
import type { SpreadsheetRow } from "../data/types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
// import { IoMdAdd } from "react-icons/io";

const TOTAL_ROWS = 15; 

const Spreadsheet = () => {
    const [rows, _setRows] = useState<SpreadsheetRow[]>(mockData);

    //   const handleAddRow = () => {
    //     const newRow: SpreadsheetRow = {
    //       id: rows.length + 1,
    //       jobRequest: "",
    //       submitted: "",
    //       status: "Need to start",
    //       submitter: "",
    //       url: "",
    //       assignedTo: "",
    //       priority: "Low",
    //       dueDate: "",
    //       estimatedValue: "",
    //     };
    //     setRows([...rows, newRow]);
    //   };

    const emptyRowCount = Math.max(TOTAL_ROWS - rows.length, 0);

    return (
        <div className="w-full overflow-x-auto ">
            <table className="w-full text-sm border-collapse border border-gray-300">

                <TableHeader />

                <tbody>
                    {/* Filled rows */}
                    {rows.map((row, index) => (
                        <TableRow key={row.id} row={row} index={index} />
                    ))}

                    {/* Empty rows */}
                    {Array.from({ length: emptyRowCount }).map((_, rowIndex) => {
                        const displayIndex = rows.length + rowIndex; 
                        return (
                            <tr key={`empty-${rowIndex}`} className="hover:bg-gray-50">
                                {Array.from({ length: 11 }).map((_, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="border border-gray-100 px-2 text-center py-2 h-[40px]"
                                    >
                                        {colIndex === 0 ? displayIndex + 1 : ""} 
                                    </td>
                                ))}
                            </tr>
                        );
                    })}

                </tbody>
            </table>

            <div className="flex items-center gap-4 bg-gray-100 border-t border-gray-300 px-4 py-2">
                {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab, i) => (
                    <button
                        key={i}
                        className={`px-4 py-1 text-sm rounded ${i === 0
                                ? "bg-white text-green-700 font-medium border border-green-700"
                                : "text-gray-600 hover:text-black"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
                <button className="text-xl text-gray-700">+</button>
            </div>
        </div>
    );
};

export default Spreadsheet;

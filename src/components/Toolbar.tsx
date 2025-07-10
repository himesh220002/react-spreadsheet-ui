// Toolbar.tsx
import { BiHide, BiSortAlt2 } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import { TbViewportTall } from "react-icons/tb";
import { CiImport, CiExport } from "react-icons/ci";
import { FaRegShareFromSquare, FaAnglesRight } from "react-icons/fa6";
// import { VscNewFile } from "react-icons/vsc";
import { PiArrowsSplit } from "react-icons/pi";

const Toolbar = () => (
  <div className="flex justify-between items-center border border-gray-300 px-4 py-1 bg-white">
    <div className="flex gap-5 ">
        <button onClick={()=>{ console.log("clicked on tollbar Tool")}} className="text-sm cursor-pointer p-1 flex gap-1 items-center justify-center">Tool bar<FaAnglesRight className="text-md text-gray-600"/></button>
        <div className="border-r-2 border-gray-100"></div>
        <button onClick={()=>{ console.log("clicked on Hide")}} className="text-sm cursor-pointer p-1 flex gap-1 items-center"><BiHide className="text-md text-gray-600"/>Hide fields</button>
        <button onClick={()=>{ console.log("clicked on Sort")}} className="text-sm cursor-pointer p-1 flex gap-1 items-center"><BiSortAlt2 className="text-md text-gray-600"/>Sort</button>
        <button onClick={()=>{ console.log("clicked on Filter")}} className="text-sm cursor-pointer p-1 flex gap-1 items-center"><IoFilter className="text-md text-gray-600"/>Filter</button>
        <button onClick={()=>{ console.log("clicked on Cell")}} className="text-sm cursor-pointer p-1 flex gap-1 items-center"><TbViewportTall className="text-md text-gray-600"/>Cell View</button>
    </div>
    <div className="flex gap-3">
      <button onClick={()=>{ console.log("clicked on Import")}} className="btn p-1 px-2 rounded-sm cursor-pointer border-1 border-gray-200 flex gap-1 items-center"><CiImport className="text-md text-gray-600"/>Import</button>
      <button onClick={()=>{ console.log("clicked on Export")}} className="btn p-1 px-2 rounded-sm cursor-pointer border-1 border-gray-200 flex gap-1 items-center"><CiExport className="text-md text-gray-600"/>Export</button>
      <button onClick={()=>{ console.log("clicked on Share")}} className="btn p-1 px-2 rounded-sm cursor-pointer border-1 border-gray-200 flex gap-1 items-center"><FaRegShareFromSquare className="text-md text-gray-600"/>Share</button>
      <button onClick={()=>{ console.log("clicked on New Action")}} className="btn bg-green-700 cursor-pointer text-white p-1 px-2 rounded-sm  flex gap-1 items-center"><PiArrowsSplit className="text-md text-gray-200"/> New Action</button>
    </div>
  </div>
);

export default Toolbar;
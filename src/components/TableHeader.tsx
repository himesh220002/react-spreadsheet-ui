import { IoLinkOutline , IoCalendar } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { PiArrowsSplit } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { FaChevronDown , FaChevronCircleDown ,FaGlobe } from "react-icons/fa";
import { MdOutlineWork , MdOutlineAssignmentInd } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const TableHeader = () => (
    <thead>
        <tr>
            <th colSpan={1} className="bg-white px-4 py-1 text-gray-700 font-medium border border-gray-300">

            </th>
            <th colSpan={4} className="bg-gray-200 px-2 py-1 text-gray-700 font-medium border border-gray-300">
                <div className="flex justify-start items-center gap-2">
                    <button onClick={() => { console.log("clicked spreadsheet link") }} className="p-2 rounded-sm bg-gray-300 flex items-center gap-2 cursor-pointer"><div><IoLinkOutline className="text-lg text-blue-400" /></div> Q3 Financial OverView</button>
                    <button onClick={() => { console.log("clicked sheet Refresh") }}><LuRefreshCw className="text-lg text-yellow-700 cursor-pointer" /></button>
                </div>
            </th>
            <th colSpan={1} className="bg-white px-4 py-1 text-gray-700 font-medium border border-gray-300">

            </th>

            <th className="bg-green-200 px-4 py-1 text-green-700 font-medium border border-gray-300">
                <div className="flex gap-3 items-center justify-center text-md">
                    <div><PiArrowsSplit className="" /></div>
                    <div>ABC</div>
                    <div><IoIosMore className="" /></div>
                </div>
            </th>

            <th colSpan={2} className="bg-blue-200 px-4 py-1 text-blue-700 font-medium border border-gray-300">
                <div className="flex gap-3 items-center justify-center text-md">
                    <div><PiArrowsSplit className="" /></div>
                    <div>Answer a question </div>
                    <div><IoIosMore className="" /></div>
                </div>
            </th>

            <th className="bg-orange-200 px-4 py-1 text-orange-700 font-medium border border-gray-300">
                
                <div className="flex gap-3 items-center justify-center text-md">
                    <div><PiArrowsSplit className="" /></div>
                    <div>Extract</div>
                    <div><IoIosMore className="" /></div>
                </div>
            </th>

            <th className="px-4 py-1 border border-gray-300 text-center">
                <button onClick={() => { console.log("clicked add row") }} className="text-green-700 text-lg font-bold hover:text-green-900 cursor-pointer"><div className="w-20">+</div></button>
            </th>
        </tr>

        <tr>
            <th className="px-2 py-2 border border-gray-300 text-gray-500 text-xl bg-gray-100">#</th>
            <th className="px-4 py-2 border border-gray-300 font-medium  bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><MdOutlineWork className="text-gray-400"/>Job Request</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium  bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><IoCalendar className="text-gray-400"/>Submitted</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium  bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><FaChevronCircleDown className="text-gray-400"/>Status</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium  bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><FaUser className="rounded-full text-gray-400"/>Submitter</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><FaGlobe className="text-gray-400"/>Url</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600"><MdOutlineAssignmentInd className="text-gray-400"/>Assigned</div>
                    <div><FaChevronDown className="text-gray-400"/></div>
                </div>
            </th>
            <th className="text-start px-4 py-2 border border-gray-300 font-medium text-gray-600 bg-blue-100">
                Priority
            </th>
            <th className="text-start px-4 py-2 border border-gray-300 font-medium text-gray-600  bg-blue-100">
                Due Date
            </th>
            <th className="text-start px-4 py-2 border border-gray-300 font-medium text-gray-600 bg-orange-100">
                Est. Value
            </th>
            <th className="px-4 py-2 border border-gray-300"></th>  
            
        </tr>
    </thead>
);

export default TableHeader;

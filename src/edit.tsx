import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import amazon from'./assets/amazon.svg';

function CustomNode() {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-white">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white">
         <img src={amazon} ></img> 
        </div>

        <div className="ml-2 mt-2 w-[148px] h-[130px]">
          <div className="text-[16px] font-['Manrope']">Amazon Web Services</div>
          <div className=' relative border mt-[12px] w-[219px] right-[50px]  border-[#DCDCDC] opacity-[.50] '></div>
          <p className='text-[14px] font-["Manrope"] mt-[8px] w-[200px] relative  right-[50px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>

      </div>

      <Handle type="target" position={Position.Top} className="w-16 " />
      <Handle type="source" position={Position.Bottom} className="w-16" />
    </div>
  );
}

export default memo(CustomNode);

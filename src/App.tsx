import {  useCallback } from 'react';
import './App.css';
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState
} from "reactflow";

import 'reactflow/dist/style.css';
import profile from'./assets/profile.png';
import calendar from'./assets/calendar.svg';
import edit from'./assets/edit.svg';
import undo from'./assets/undo.svg';
import arrow from'./assets/arrow.svg';
import bulatHijau from'./assets/bulathijau.svg';
import bulatAbu from'./assets/bulatabu.svg';
import keranjang from'./assets/keranjang.svg';
import schedule from'./assets/schedule.svg';
import box from'./assets/box.svg';
import cart from'./assets/cart.svg';
import cog from'./assets/cog.svg';
import chat from'./assets/chat.svg';
import fullscreen from'./assets/fullscreen.svg';
import logout from'./assets/logout.svg';


function App() {
  const initialNodes: Node[] = [
    {
      id: "1",
      type: "input",
      data: { label: "Node 1" },
      position: { x: 250, y: 5 }
    },
    { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
    { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
    { id: "4", data: { label: "Node 4" }, position: { x: 400, y: 200 } }
  ];
  
  const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3" }
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );
  const year = new Date();
  return (
  <>
    <div className="flex  justify-between fixed bg-white w-full h-[120px] top-0 left-0">
  {/* sidebar */}
      <div className='border w-24 bg-[#130F40] h-full fixed top-0 left-0 '>
 
        <div className='flex flex-row  h-6 mt-8 left-2 relative'>
          <img src={bulatAbu} className='relative left-8'></img>
          <img src={bulatHijau} className='absolute h-6 bottom-2 left-5'></img>
        </div>

        <div className='border mt-8 w-1/2 ml-6 border-[#fffff]'></div>

        <div className='flex flex-col mt-6 place-items-center'>
          <img src={keranjang} className='w-[20px]'></img>
          <img src={schedule} className='w-[18px] mt-6'></img>
          <img src={box} className='w-[18px] mt-6'></img>
          <img src={cart} className='w-[20px] mt-6'></img>
        </div>

        <div className='border mt-8 w-1/2 ml-6 border-[#fffff]'></div>

        <div className='flex flex-col mt-6 place-items-center'>
          <img src={cog} className='w-[20px]'></img>
          <img src={chat} className='w-[20px] mt-6'></img>
          <img src={fullscreen} className='w-[16px] mt-6'></img>
        </div>

        <div className='flex flex-col pt-36 place-items-center mr-2'>
          <img src={logout} className='w-[18px] mt-6'></img>
        </div>
      </div>

 {/*end  sidebar */}


  {/* navbar */}
      <div className='ml-36 mt-4 w-80 z-10 '>

        <h5 className='text-[16px] ml-1 flex flex-row'> <span className='text-[#A0A0A0] '>Project  </span>  <img src={arrow} className='ml-2'></img>  <span className='text-[#A0A0A0] ml-2'> Flows</span> <img src={arrow} className='ml-2'></img>     <span className='text-[#130F40] ml-2'> Sumary Finance {year.getFullYear()} </span>  </h5>
        <span className='text-[32px] relative bottom-2 left-1'>Sumary Finance {year.getFullYear()}  </span>
      </div> 

      <div className='flex  flex-row  relative  w-2/5 h-12 left-10 top-7'>
        <button type='button'  className='border w-8 mt-2  h-8 bg-[#EEEFF3] rounded' ><img src={undo}  className='ml-2'></img > </button>
        <button type='button' className='border w-8 mt-2  h-8 bg-[#EEEFF3] ml-8 rounded'><img src={edit} className='ml-2'></img> </button>
        <img src={calendar} className=' w-6 mt-3  h-6 ml-8' ></img>
      

        <div className='border ml-6  border-[#D1D2D7]'></div>
        <img src={profile} className='ml-8'></img>

        <div className='flex-col  relative left-3 bottom-1'>
          <h4 className='text-[20px]'>Angel Markoer </h4>
          <h5 className='text-[#656363] text-[14px] relative bottom-1'>Software Engineer</h5>
        </div>
    
      </div>
      {/* end navbar */}
     

  
      
   
    </div>

    <div className=' flex flex-row border w-[1270px] ml-24 left-30 mt-[118px] bg-slate-200 h-[450px]'>
       {/* <p className='mt-0'>dsadsadsadsadsadsadsadsadsadsadsadsadsa</p>  */}
       <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
    </ReactFlow>
        </div>
    </>

  );  
}






export default App;
import { useState, useCallback , useRef  } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  updateEdge,
  useNodesState,
  useEdgesState,
  OnConnectStartParams,
  DefaultEdgeOptions,
  MarkerType
} from 'reactflow';
import './App.css';
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
import { basename } from 'path';

import useStore from './store';
import ColorChooserNode from './edit';

const nodeTypes = {
  custom: ColorChooserNode,
};

const defaultEdgeOptions : DefaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: '#9ca8b3' },
  markerEnd: {
    type: MarkerType.Arrow,
  },
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: -1400, y: 10 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

    position: { x: -800, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: -1600, y: 220 },
  },
  {
    id: '4',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },
    position: { x: -300, y: -100 },
  },
  // {
  //   id: '5',
  //   type: 'custom',
  //   data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

  //   position: { x: -200, y: 200 },
  // },
  // {
  //   id: '6',
  //   type: 'custom',
  //   data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },
  //   position: { x: -200, y: 200 },
  // },
  

];

const initEdges = [
  {
    id: '1',
    source: '1',
    target: '2',
    animated: true,
 
  },
  {
    id: '2',
    source: '2',
    target: '3',
 
  },
  {
    id: '4',
    source: '4',
    target: '5',
  
  },

];

const fitViewOptions: FitViewOptions = {
  padding: 0.4,
};



function Flow() {
  // const [nodes, setNodes, onNodesChange] = useState<Node[]>(initNodes);
  // const [edges, setEdges, onEdgesChange] = useState<Edge[]>(initEdges);

  // const onNodesChange = useCallback(
  //   (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const onEdgeUpdate = useCallback(
    (oldEdge : Edge, connection: Connection) => setEdges((eds) => updateEdge(oldEdge, connection, eds)),
    []
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  
  const year = new Date();

  return (
  <>
    <div className="flex  justify-between fixed bg-white w-full h-[120px] top-0 left-0">
  {/* sidebar */}
      <div className='w-24 bg-[#130F40] h-full fixed top-0 left-0 '>
 
        <div className='h-6 mt-10 left-2 relative'>
          <img src={bulatAbu} className='relative left-8'></img>
          <img src={bulatHijau} className='absolute h-6 bottom-2 left-5'></img>
        </div>

        <div className='border mt-8 w-2/5 ml-[29px] border-[#fffff] opacity-[.29] '></div>

        <div className='flex flex-col mt-8 place-items-center'>
          <img src={keranjang} className='w-[22px]'></img>
          <img src={schedule} className='w-[18px] mt-8'></img>
          <img src={box} className='w-[20px] mt-8'></img>
          <img src={cart} className='w-[20px] mt-8'></img>
        </div>

        <div className='border mt-6 w-2/5 ml-[29px] border-[#fffff] opacity-[.29]'></div>

        <div className='flex flex-col mt-8 place-items-center'>
          <img src={cog} className='w-[20px]'></img>
          <img src={chat} className='w-[20px] mt-8'></img>
          <img src={fullscreen} className='w-[14px] mt-8'></img>
        </div>

        <div className='flex flex-col pt-96 place-items-center mr-2'>
          <img src={logout} className='w-[18px] mt-14'></img>
        </div>
      </div>

 {/*end  sidebar */}


  {/* navbar */}
      <div className='ml-36 mt-4 w-96 z-10 '>

        <h5 className='text-[16px] ml-1 flex flex-row'> <span className='text-[#A0A0A0] '>Project  </span>  <img src={arrow} className='ml-2'></img>  <span className='text-[#A0A0A0] ml-2'> Flows</span> <img src={arrow} className='ml-2'></img>     <span className='text-[#130F40] ml-2 font-semibold'> Sumary Finance {year.getFullYear()} </span>  </h5>
        <span className='text-[32px] relative bottom-2 left-1 font-bold '>Sumary Finance {year.getFullYear()}  </span>
      </div> 

      <div className='flex  flex-row  relative  w-2/5 h-12 left-72 top-7'>
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

    <div className=' fixed border w-full ml-[96px] left-30 mt-[118px] bg-[#f2f2f2] h-[500px]'>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      fitView
      fitViewOptions={fitViewOptions}
      nodeTypes={nodeTypes}
      snapToGrid
      defaultEdgeOptions={defaultEdgeOptions}
    />
        </div>
    </>

  );  
}






export default Flow;


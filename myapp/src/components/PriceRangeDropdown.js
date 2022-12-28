import React,{useState,useEffect, useContext} from 'react';
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import {HouseContext} from './HouseContext';
const PriceRangeDropdown = () => {
  const {price,setPrice}=useContext(HouseContext);
 // console.log(price);
  const [isOpen,setIsOpen]=useState(false);
  const prices=[
    {
      value:'Price range (any)',
    },
    {
      value:'1000000 - 1500000',
    },
    {
      value:'1500000 - 2000000',
    },
    {
      value:'2000000 - 2500000',
    },
    {
      value:'100000 - 300000',
    },
    {
      value:'300000 - 400000',
    },
  ]
  return (
  <Menu as='div'className='dropdown relative'>
    <Menu.Button onClick={()=>setIsOpen(!isOpen)}className='dropdown-btn w-full text-left'>

      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose price range</div>
        {
          isOpen ?(
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ):(
            <RiArrowDownSLine className='dropdown-icon-secondary'/>   
          )}
      </div>
    </Menu.Button>
     <Menu.Items className='dropdown-menu'>{prices.map((price,index)=>{
      return(
        <Menu.Item onClick={()=>setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li'key={index}>
            {price.value}
        </Menu.Item>
      );
    })}</Menu.Items>
  </Menu>
  );
};
export default PriceRangeDropdown;


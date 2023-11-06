import React from 'react'
import Content1 from './footerContent1';
import Content2 from './footerContent2';
function Footer() {
    return (
        <div className="flex align-middle  rounded-t-81xl rounded-b-none bg-light-purple1  w-full h-[8.3rem] overflow-hidden">
       <Content1 />
       <Content2 />
            </div>
      );
}
export default Footer




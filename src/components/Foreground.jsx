import React from 'react';
import Card from './card';

function Foreground() {
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full' flex items-center>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}

export default Foreground;

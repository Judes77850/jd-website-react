import React from 'react';
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';

const Component = () => {
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
  
    return (
      <div ref={ref} className={`toShow${inView}`}>
        <h2>Header inside viewport</h2>
      </div>
    );
  };

export default Component
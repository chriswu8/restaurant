import React from 'react';
import { images } from '../../constants';

const Heading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    {/* cormorant is the font */}
    <p className="p__cormorant2">{title}</p>
  </div>
);

export default Heading;
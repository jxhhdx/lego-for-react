import React, { useState } from 'react';
import TemplateList from '@/components/TemplateList';
import './index.less';

const Index: React.FC = () => {
  const [testData] = useState([]);
  return (
    <div className="content-container">
      <TemplateList list={testData}></TemplateList>
    </div>
  );
};

export default Index;
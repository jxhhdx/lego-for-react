import React, { useState } from 'react';
import TemplateList from '@/components/TemplateList';
import { connect } from 'dva';
import type { GlobalDataProps } from '@/models';
import type { SubscriptionAPI } from '@/typings/dva-types';
import './index.less';

const Index: React.FC<GlobalDataProps & SubscriptionAPI> = (props) => {
  const [testData] = useState([]);
  return (
    <div className="content-container">
      <TemplateList list={testData}></TemplateList>
    </div>
  );
};

export default connect((state: GlobalDataProps) => state)(Index);
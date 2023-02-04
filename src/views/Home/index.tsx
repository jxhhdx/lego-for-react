import React from 'react';
import TemplateList from '@/components/TemplateList';
import { connect } from 'dva';
import { BaseProps, mapStateToProps } from '@/views/typing';
import './index.less';

const Home: React.FC<BaseProps> = (props) => {
  return (
    <div className="content-container">
      <TemplateList list={props.templates.data}></TemplateList>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
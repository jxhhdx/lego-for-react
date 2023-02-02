import React from 'react';
import { connect } from 'dva';
import HelloWorld from '../components/HelloWorld';
function IndexPage() {
  return (
    <HelloWorld />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

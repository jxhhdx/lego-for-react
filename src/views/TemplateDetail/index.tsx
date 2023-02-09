import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Button, Avatar } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { BaseProps, mapStateToProps } from '@/views/typing';
import { TemplateProps } from '@/models/templates';
import { connect } from 'dva';
import './index.less';

const TemplateDetail: React.FC<BaseProps> = (props) => {
  
  const [template, setTemplate] = useState<Partial<TemplateProps>>({
    title: '',
    author: '',
  });
  const container = useRef(null);
  let params = useParams();

  useEffect(() => {
    const { data } = props.templates;
    if (params.id) {
      const template = data.find((item) => String(item.id) === params.id)
      template && setTemplate(template);
    }
  }, [props.templates])
  return (
    <div className="work-detail-container">
      <Row justify="center" v-if="template">
        <Col span={8} className="cover-img">
          <img src={template.coverImg} alt="" />
        </Col>
        <Col span={8}>
          <h2>{template.title}</h2>
          <p>{template.title}</p>
          <div className="author">
            <Avatar>V</Avatar>
            该模版由 <b>{template.author}</b> 创作
          </div>
          <div className="bar-code-area" >
            <span>扫一扫，手机预览</span>
            <div ref={container}></div>
          </div>
          <div className="use-button">
            <Link to="/editor">
              <Button
                type="primary" size="large"
              >
                使用模版
              </Button>
            </Link>
            <Button
              size="large"
            >
              下载图片海报
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default connect(mapStateToProps)(TemplateDetail);
import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'dva/router';
import type { TemplateProps } from '@/models/types';
import './index.less';

type IProps = {
  list: TemplateProps[];
}
const { Meta } = Card;
const TemplateList: React.FC<IProps> = (props) => {
  const { list } = props;
  return (
    <div className="template-list-component">
      <Row gutter={16}>
        {list.map((item, index) => (
          <Col span={6} key={index} className="poster-item">
            <Link to={{ name: 'template', params: { id: item.id }}}>
              <Card
                hoverable
                cover={(
                  <>
                    <img 
                      src={
                        item.coverImg 
                          ? item.coverImg 
                          : 'http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png'
                      } 
                    />
                    <div className="hover-item">
                      <Button size="large" type="primary">使用该模版创建</Button>
                    </div>
                  </>
                )}
              >
                <Meta
                  title={item.title}
                  description={(
                    <div className="description-detail">
                      <span>作者：{item.author}</span>
                      <span className="user-number">{item.copiedCount}</span>
                    </div>
                  )}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TemplateList;
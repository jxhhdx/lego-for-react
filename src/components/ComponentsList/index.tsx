import React from "react";
import LText from "../LText";

import './index.less';
type ComponentsListProps = {
  list: object[];
  onItemClick: (props: unknown) => void;
}
const ComponentsList: React.FC<ComponentsListProps> = (props) => {
  const { list, onItemClick } = props;
  return (
    <div className="create-component-list">
      {list.map((item, index) => (
        <div key={index} className="component-item" onClick={() => onItemClick(item)}>
          <LText {...item}></LText>
        </div>
      ))}
    </div>
  );
};

export default ComponentsList;
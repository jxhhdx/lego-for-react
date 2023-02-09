import React from "react";
import './index.less';
type EditWrapperProps = {
  id: string;
  active?: boolean;
  setActive?: (id: string) => void
}
const EditWrapper: React.FC<EditWrapperProps> = (props) => {
  const { 
    id, 
    active = false, 
    children, 
    setActive
  } = props;
  const onItemClick = () => {
    setActive?.(id);
  };
  return (
    <div
      className={`edit-wrapper${active ? ' active' : ''}`}
      onClick={onItemClick}
    >
      {children}
    </div>
  );
};

export default EditWrapper;
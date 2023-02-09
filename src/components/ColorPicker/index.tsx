import React from "react";
import './index.less';

const defaultColors = ['#ffffff', '#f5222d', '#fa541c', '#fadb14', '#52c41a', '#1890ff', '#722ed1', '#8c8c8c', '#000000', '']
type ColorPickerProps = {
  value: string;
  colors: string[];
  onChange: (color: string) => void
}
const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const {
    value,
    colors = defaultColors,
    onChange
  } = props;
  return (
    <div className="lego-color-picker">
      <div className="native-color-container">
        <input type="color" value={value} onInput={(e) => onChange((e.target as any).value)} />
      </div>
      <ul className="picked-color-list">
        {colors.map((item, key) => (
          <li
            key={key}
            className={`item-${key}`}
            onClick={(event) => {
              event.preventDefault();
              onChange(item);
            }}
          >
            {item.startsWith('#') ? (
              <div style={{ backgroundColor: item }} className="color-item"></div>
            ) : (
              <div className="color-item transparent-back"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorPicker;
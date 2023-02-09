import { createElement } from 'react';
import LText from '@/components/LText';
import ColorPicker from '@/components/ColorPicker';
import { Select, InputNumber, Input, Slider, Radio } from 'antd';

const components = {
  LText,
  Select,
  SelectOption: Select.Option,
  InputNumber,
  Textarea: Input.TextArea,
  Slider,
  RadioGroup: Radio.Group,
  RadioButton: Radio.Button,
  ColorPicker
};

export default function createComponent(name: string, ...args: any[]) {
  let newName: any = name.split('-').map((item) => item.slice(0, 1).toUpperCase() + item.slice(1)).join('');
  if (newName in components) {
    newName = components[newName as keyof typeof components]
  }
  return createElement(newName, ...args)
}
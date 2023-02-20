import React, { useEffect, useMemo, useState } from "react";
import { PropsTableProps, FormProps } from "./types";
import { reduce } from 'lodash';
import { TextComponentProps } from '@/defaultProps';
import { mapPropsToForms } from '@/propsMap';
import createComponent from '@/utils/createComponent';
import './index.less';

const PropsTable: React.FC<PropsTableProps> = (props) => {
  const { props: innerProps } = props
  const formatProps = (propsProps: PropsTableProps['props']) => {
    return reduce(propsProps, (result, value, key) => {
      const newKey = key as keyof TextComponentProps
      const item = mapPropsToForms[newKey]
      if (item) {
        const { valueProp = 'defaultValue', eventName = 'onChange', initalTransform, afterTransform } = item;
        const newItem: FormProps = {
          ...item,
          value: initalTransform ? initalTransform(value) : value,
          valueProp,
          eventName,
          events: {
            [eventName]: (e: any) => {
              props?.onChange?.({ key, value: afterTransform ? afterTransform(e) : e });
            }
          }
        }
        result[newKey] = newItem;
      }
      return result;
    }, {} as { [key: string]: FormProps });
  }
  const [finalProps, setFinalProps] = useState<{ [key: string]: FormProps; }>({});
  useEffect(() => {
    setFinalProps(formatProps(props.props));
  }, [innerProps]);
  return (
    <div className="props-table">
      {Object.entries(finalProps).map(([key, value]) => (
        <div
          key={key}
          className="prop-item"
        >
          {value.text && <span className="label">{value.text}</span>}
          <div className="prop-component">
            {createComponent(
              value.component,
              {
                key: key + '_level1',
                [value.valueProp]: value.value,
                ...value.extraProps,
                ...value.events,
              },
              value.options
                ? value.options.map((option, index) => {
                  return value.subComponent && createComponent(
                    value.subComponent,
                    {
                      key: key + '_level2' + index,
                      'data-id': '123333',
                      value: option.value
                    },
                    option.text
                  )
                })
                : undefined
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropsTable;
import React, { useMemo, createElement } from "react";
import { PropsTableProps, FormProps } from "./types";
import { reduce } from 'lodash';
import { TextComponentProps } from '@/defaultProps';
import { mapPropsToForms } from '@/propsMap'
import './index.less';

const PropsTable: React.FC<PropsTableProps> = (props) => {
  const finalProps = useMemo(() => {
    return reduce(props.props, (result, value, key) => {
      const newKey = key as keyof TextComponentProps
      const item = mapPropsToForms[newKey]
      if (item) {
        const { valueProp = 'value', eventName = 'onChange', initalTransform, afterTransform } = item;
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
  }, [props.props]);
  return (
    <div className="props-table">
      {Object.entries(finalProps).map(([key, value]) => (
        <div
          key={key}
          className="prop-item"
        >
          {value.text && <span className="label">{value.text}</span>}
          <div className="prop-component">
            {createElement(
              value.component,
              {
                [value.valueProp]: value.value,
                ...value.extraProps,
                ...value.events,
              },
              value.options 
                ? value.options.map((option) => {
                    return value.subComponent && createElement(
                      value.subComponent, 
                      {
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
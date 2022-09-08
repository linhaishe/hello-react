import React, { ReactNode } from 'react';
import {
  Draggable,
  DraggableProps,
  Droppable,
  DroppableProps,
  DroppableProvided,
  DroppableProvidedProps,
} from 'react-beautiful-dnd';

// 重写DroppableProps里children属性
type DropProps = Omit<DroppableProps, 'children'> & { children: ReactNode };

export function Drop({ children, ...props }: DropProps) {
  return (
    <Droppable {...props}>
      {(provided) => {
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            ...provided.droppableProps,
            ref: provided.innerRef,
            provided,
          });
        }
        return <div />;
      }}
    </Droppable>
  );
}

type DropChildProps = Partial<{ provided: DroppableProvided } & DroppableProvidedProps> &
  React.HTMLAttributes<HTMLDivElement>;
export const DropChild = React.forwardRef<HTMLDivElement, DropChildProps>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
  >
    {children}
    {props.provided?.placeholder}
  </div>
));

// React.cloneElement(children, children代表Drag组件里的子元素->即<div> <Drag><div></div></Drag>
type DragProps = Omit<DraggableProps, 'children'> & { children: ReactNode };
export function Drag({ children, ...props }: DragProps) {
  return (
    <Draggable {...props}>
      {(provided) => {
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            // 把所有属性给到子元素,不用显示传递propsß
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            ref: provided.innerRef,
          });
        }
        return <div />;
      }}
    </Draggable>
  );
}

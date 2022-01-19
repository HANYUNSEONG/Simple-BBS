import styled from "@emotion/styled";
import { HTMLAttributes, SelectHTMLAttributes } from "react";

type OptionsType = {
  title: string;
  value: any;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionsType[];
}

function Select({ options, ...props }: ISelectProps) {
  return (
    <SelectWrapper {...props}>
      {options.map(({ title, value }, index) => (
        <option key={index + title} value={value}>
          {title}
        </option>
      ))}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.select`
  height: 100%;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 0 0.7rem;
`;

export default Select;

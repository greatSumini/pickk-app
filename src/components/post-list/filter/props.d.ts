type ButtonProps<T> = {
  value: T;
  setValue: (v) => void;
};

type FilterProps = {
  postType: string;
};

export default FilterProps;

export {ButtonProps};

type ButtonProps<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type FilterProps = {
  postType: 'REVIEW' | 'LOOK';
};

export default FilterProps;

export {ButtonProps};

type ButtonProps<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type FilterProps = {
  postType: '리뷰' | 'LOOK';
};

export default FilterProps;

export {ButtonProps};

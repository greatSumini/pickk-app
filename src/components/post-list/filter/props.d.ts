type ButtonProps<T> = {
  value: T;
<<<<<<< HEAD
  setValue: (v) => void;
};

type FilterProps = {
  postType: string;
=======
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type FilterProps = {
  postType: '리뷰' | 'LOOK';
>>>>>>> b624cb18a9d40f1eb3cdac3ded77254a46ce9dd9
};

export default FilterProps;

export {ButtonProps};

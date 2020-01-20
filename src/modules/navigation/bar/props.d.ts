export type StateControlType<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type NavigationBarProps = {
  items: string[];
  navControl: StateControlType<string>;
  category: string[];
};

export default NavigationBarProps;

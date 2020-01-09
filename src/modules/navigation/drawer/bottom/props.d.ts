type BottomDrawerProps = {
  visible: boolean;
  setVisible: (v) => void;
  data: {title?: string; component: any}[];
};

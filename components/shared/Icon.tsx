type Props = {
  iconName: string;
};
export const IconLightBg = ({ iconName }: Props) => {
  return (
    <span className="material-symbols-outlined w-max rounded-full bg-primary-color-2 bg-opacity-40 p-2 text-[24px] text-primary-color-1">
      {iconName}
    </span>
  );
};

export const IconDarkBg = ({ iconName }: Props) => {
  return (
    <span className="material-symbols-outlined w-max rounded-full bg-primary-color-2 p-2 text-[24px] text-primary-color-1">
      {iconName}
    </span>
  );
};

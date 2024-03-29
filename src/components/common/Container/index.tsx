import clsx from "clsx";

interface Iprops {
  className?: string;
  size?: "md";
  children: React.ReactNode;
}

interface SsProps {
  md: string;
}

const sizeStyles: SsProps = {
  md: "mx-auto px-4 md:max-w-[1280px]",
};

const Container = ({ size = "md", className, ...props }: Iprops) => {
  return <div className={clsx(sizeStyles[size], className)} {...props} />;
};

export default Container;

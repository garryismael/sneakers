type Props = {
  className: string;
  src: string;
};

const ProductImage = (props: Props) => {
  const { className, src } = props;
  return (
    <div className={`w-full ${className}`}>
      <img src={src} className="w-full h-auto" />
    </div>
  );
};

export default ProductImage;

const InfoDetail = ({
  images,
  description,
}: {
  images: Array<string>;
  description: Array<string>;
}) => {
  const mergeData = (description: Array<string>, images: Array<string>) => {
    const res = [];
    for (let i = 0; i < description.length; i++) {
      if (i < images.length) {
        res.push([description[i]]);
        res.push(images[i]);
      } else res.push(description[i]);
    }
    return res;
  };
  return (
    <>
      {mergeData(description, images).map((block, index) => (
        <div key={index}>
          {block[5] == ":" ? (
            <div className="w-full h-80 overflow-hidden mb-8">
              <img
                src={block}
                alt="Hình ảnh"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <p className="text-l text-justify mb-8">{block}</p>
          )}
        </div>
      ))}
      <div className="w-full h-1 bg-amber-500"></div>
    </>
  );
};

export default InfoDetail;

const Card = (props: any) => {
  const title = props.title;
  const author = props.author;
  const description = props.description;

  return (
    <div className="flex flex-col bg-[#191717] text-white rounded p-1">
      <div id="title" className="text-xl underline pl-1 font-mono">
        {title}
      </div>
      <div
        id="description"
        className="flex justify-center font-serif m-2 text-sm"
      >
        {description}
      </div>
      <div id="author" className="font-serif pl-5 italic text-base">
        {author}
      </div>
    </div>
  );
};

export default Card;

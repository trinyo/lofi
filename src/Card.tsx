const Card = (props: any) => {
  const title = props.title;
  const author = props.author;
  const description = props.description;

  return (
    <div className="flex flex-col bg-[#191717] text-white rounded p-1">
      <div id="title" className="pl-1">
        {title}
      </div>
      <div id="author" className="font-serif pl-5">
        {author}
      </div>
      <div id="description" className="flex justify-center">
        {description}
      </div>
    </div>
  );
};

export default Card;

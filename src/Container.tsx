import Card from "./Card";

const Container = (props: any) => {
  const notes = props.notes;

  console.log(notes);

  return (
    <div className="flex justify-center w-full h-full p-2">
      <div className="h-full w-full">
        {notes.map((note: any, index: number) => (
          <Card
            key={index}
            title={note.title}
            author={note.author}
            description={note.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;

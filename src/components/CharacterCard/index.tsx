import { ICharacterCard } from "@/interfaces/ICharacterCard";
import Link from "next/link";

const CharacterCard = ({
  name,
  status,
  species,
  type,
  image,
  id,
  gender,
  location,
}: ICharacterCard) => {
  return (
    <div className="rounded-b-lg bg-slate-800 p-1">
      <div className="flex items-center justify-center hover:opacity-40">
        <Link href={`/character/${id}`}>
          <img alt={name} src={image} className="cent my-2 rounded" />
        </Link>
      </div>
      <div className="flex flex-col px-2">
        <span>Name: {name}</span>
        <span>Status: {status}</span>
        <span>Species: {species}</span>
        <span>Gender: {gender}</span>
        <span>Location: {location}</span>
        {type && <span>Type: {type}</span>}
      </div>
    </div>
  );
};

export default CharacterCard;

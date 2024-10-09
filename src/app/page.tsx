import { GET_CHARACTERS } from "@/api";
import CharacterCard from "@/components/CharacterCard";
import SearchParams from "@/components/SearchParams";
import { ICharacterData } from "@/interfaces/ICharacterData";
import { ISearchParams } from "@/interfaces/ISearchParams";
import client from "./lib/apolloClient";

export default async function Home({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: {
      status: searchParams.status ?? "",
      gender: searchParams.gender ?? "",
      species: searchParams.species ?? "",
      type: searchParams.type ?? "",
    },
    fetchPolicy: 'network-only',
  });

  return (
    <main>
      <SearchParams />
      <div className="mx-2 grid grid-cols-4 gap-4">
        {data.characters.results.map((character: ICharacterData) => (
          <CharacterCard
            key={character.id}
            {...character}
            location={character.location.name}
          />
        ))}
      </div>
    </main>
  );
}

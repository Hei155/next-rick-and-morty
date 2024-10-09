import { GET_CHARACTER } from "@/api";
import client from "@/app/lib/apolloClient";
import { IEpisodeData } from "@/interfaces/IEpisodeData";

export default async function Character({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data } = await client.query({
    query: GET_CHARACTER,
    variables: { id: id },
  });

  return (
    <div>
      <span>Name: {data.character.name}</span>
      {data.character.episode.map((episode: IEpisodeData) => (
        <div key={episode.id}>
          <span>Episode: {episode.name}</span>
        </div>
      ))}
    </div>
  );
}

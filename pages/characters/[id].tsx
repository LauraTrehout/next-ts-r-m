import { GetCharacterResults, Character } from "../../types";
import Image from "next/image";
import Link from "next/link";
import ImageLoader from "./../../imageLoader";

export const getStaticPaths = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const characters: GetCharacterResults = await response.json();
  return {
    paths: characters.results.map((char) => {
      return {
        params: {
          id: String(char.id),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character: Character = await response.json();
  return {
    props: {
      character,
    },
  };
};

const CharacterPage = ({ character }: { character: Character }) => {
  return (
    <div>
      <h1>{character.name}</h1>

      <Image
        src={character.image}
        alt={character.name}
        unoptimized
        width={200}
        height={200}
        loader={ImageLoader}
      />
    </div>
  );
};

export default CharacterPage;

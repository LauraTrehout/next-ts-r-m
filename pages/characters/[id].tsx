import { GetCharacterResults, Character } from "../../types";
import Image from "next/image";
import Link from "next/link";
import ImageLoader from "./../../imageLoader";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
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

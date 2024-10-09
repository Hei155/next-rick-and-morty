import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($status: String, $species: String, $gender: String, $type: String) {
    characters(
      filter: {
        status: $status
        species: $species
        gender: $gender
        type: $type
      }
    ) {
      results {
        id
        name
        status
        species
        gender
        type
        image
        location {
          id
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      episode {
        id
        name
      }
    }
  }
`;

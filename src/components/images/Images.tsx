import * as React from 'react'
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Image from './Image'
import { GET_IMAGES } from '../../graphql/queries/uploads'
import { GetImages, GetImages_uploads } from '../../graphql/types/GetImages'

const Images = () => {
  const { data, error, loading } = useQuery<GetImages>(GET_IMAGES);

  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <ul>
      {data!.uploads.map((image: GetImages_uploads) => (
        <Image image={image} />
      ))}
    </ul>
  );
}

export default Images
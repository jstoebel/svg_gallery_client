import * as React from 'react'
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Image from './Image'
import { GET_IMAGES } from '../../graphql/queries/uploads'
import { GetImages, GetImages_uploads } from '../../graphql/types/GetImages'
import * as css from './styles'


const Images = () => {
  const { data, error, loading } = useQuery<GetImages>(GET_IMAGES);

  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <css.imageList>
      {data!.uploads.map((image: GetImages_uploads, key) => (
        <Image image={image} key={key} />
      ))}
    </css.imageList>
  );
}

export default Images
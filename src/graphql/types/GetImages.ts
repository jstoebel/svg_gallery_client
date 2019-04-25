/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetImages
// ====================================================

export interface GetImages_uploads {
  __typename: "File";
  imagePath: string;
  altText: string;
  svg: string | null;
}

export interface GetImages {
  uploads: GetImages_uploads[];
}

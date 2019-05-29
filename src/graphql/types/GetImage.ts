/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetImage
// ====================================================

export interface GetImage_upload {
  __typename: "File";
  id: number;
  title: string;
  altText: string;
  svg: string | null;
}

export interface GetImage {
  upload: GetImage_upload;
}

export interface GetImageVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadFile
// ====================================================

export interface UploadFile_uploadFile {
  __typename: "File";
  imagePath: string;
  altText: string;
  svg: string | null;
}

export interface UploadFile {
  uploadFile: UploadFile_uploadFile;
}

export interface UploadFileVariables {
  file: any;
  altText: string;
  title: string;
}

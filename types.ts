export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `UUID` scalar type represents UUID values as specified by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type CertificateCreateInput = {
  description: Scalars['String'];
  templateId: Scalars['String'];
  title: Scalars['String'];
};

export type CertificateListAllFilter = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type CertificateListAllResponse = {
  __typename?: 'CertificateListAllResponse';
  edges: Array<Maybe<CertificateRecord>>;
  pageInfo: CertificatePageInfo;
};

export type CertificateMutation = {
  __typename?: 'CertificateMutation';
  createOne: CertificateRecord;
};


export type CertificateMutationCreateOneArgs = {
  newCertificate: CertificateCreateInput;
};

export type CertificatePageInfo = {
  __typename?: 'CertificatePageInfo';
  count: Scalars['Int'];
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
};

export type CertificateQuery = {
  __typename?: 'CertificateQuery';
  getOne?: Maybe<CertificateRecord>;
  listAll?: Maybe<CertificateListAllResponse>;
};


export type CertificateQueryGetOneArgs = {
  masterId: Scalars['String'];
};


export type CertificateQueryListAllArgs = {
  filter?: InputMaybe<CertificateListAllFilter>;
};

export type CertificateRecord = {
  __typename?: 'CertificateRecord';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  masterId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']>;
  certificate?: Maybe<CertificateMutation>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  certificate?: Maybe<CertificateQuery>;
};

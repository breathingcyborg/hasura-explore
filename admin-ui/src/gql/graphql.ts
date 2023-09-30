/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token: Scalars['String']['output'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type SignupOutput = {
  __typename?: 'SignupOutput';
  user_id: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "article" */
export type Article = {
  __typename?: 'article';
  /** An object relationship */
  author: User;
  author_id: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug: Scalars['String']['output'];
  status: Article_Status_Enum;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "article" */
export type Article_Aggregate = {
  __typename?: 'article_aggregate';
  aggregate?: Maybe<Article_Aggregate_Fields>;
  nodes: Array<Article>;
};

export type Article_Aggregate_Bool_Exp = {
  count?: InputMaybe<Article_Aggregate_Bool_Exp_Count>;
};

export type Article_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Article_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "article" */
export type Article_Aggregate_Fields = {
  __typename?: 'article_aggregate_fields';
  avg?: Maybe<Article_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Article_Max_Fields>;
  min?: Maybe<Article_Min_Fields>;
  stddev?: Maybe<Article_Stddev_Fields>;
  stddev_pop?: Maybe<Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Article_Stddev_Samp_Fields>;
  sum?: Maybe<Article_Sum_Fields>;
  var_pop?: Maybe<Article_Var_Pop_Fields>;
  var_samp?: Maybe<Article_Var_Samp_Fields>;
  variance?: Maybe<Article_Variance_Fields>;
};


/** aggregate fields of "article" */
export type Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "article" */
export type Article_Aggregate_Order_By = {
  avg?: InputMaybe<Article_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Article_Max_Order_By>;
  min?: InputMaybe<Article_Min_Order_By>;
  stddev?: InputMaybe<Article_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Article_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Article_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Article_Sum_Order_By>;
  var_pop?: InputMaybe<Article_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Article_Var_Samp_Order_By>;
  variance?: InputMaybe<Article_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "article" */
export type Article_Arr_Rel_Insert_Input = {
  data: Array<Article_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Article_On_Conflict>;
};

/** aggregate avg on columns */
export type Article_Avg_Fields = {
  __typename?: 'article_avg_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "article" */
export type Article_Avg_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "article". All fields are combined with a logical 'AND'. */
export type Article_Bool_Exp = {
  _and?: InputMaybe<Array<Article_Bool_Exp>>;
  _not?: InputMaybe<Article_Bool_Exp>;
  _or?: InputMaybe<Array<Article_Bool_Exp>>;
  author?: InputMaybe<User_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Article_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "article" */
export enum Article_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArticlePkey = 'article_pkey',
  /** unique or primary key constraint on columns "slug" */
  ArticleSlugKey = 'article_slug_key'
}

/** input type for incrementing numeric columns in table "article" */
export type Article_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "article" */
export type Article_Insert_Input = {
  author?: InputMaybe<User_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Article_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Article_Max_Fields = {
  __typename?: 'article_max_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "article" */
export type Article_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Article_Min_Fields = {
  __typename?: 'article_min_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "article" */
export type Article_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "article" */
export type Article_Mutation_Response = {
  __typename?: 'article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Article>;
};

/** on_conflict condition type for table "article" */
export type Article_On_Conflict = {
  constraint: Article_Constraint;
  update_columns?: Array<Article_Update_Column>;
  where?: InputMaybe<Article_Bool_Exp>;
};

/** Ordering options when selecting data from "article". */
export type Article_Order_By = {
  author?: InputMaybe<User_Order_By>;
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: article */
export type Article_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "article" */
export enum Article_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "article" */
export type Article_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Article_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "article_status" */
export type Article_Status = {
  __typename?: 'article_status';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "article_status" */
export type Article_Status_Aggregate = {
  __typename?: 'article_status_aggregate';
  aggregate?: Maybe<Article_Status_Aggregate_Fields>;
  nodes: Array<Article_Status>;
};

/** aggregate fields of "article_status" */
export type Article_Status_Aggregate_Fields = {
  __typename?: 'article_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Article_Status_Max_Fields>;
  min?: Maybe<Article_Status_Min_Fields>;
};


/** aggregate fields of "article_status" */
export type Article_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Article_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "article_status". All fields are combined with a logical 'AND'. */
export type Article_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Article_Status_Bool_Exp>>;
  _not?: InputMaybe<Article_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Article_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "article_status" */
export enum Article_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  ArticleStatusPkey = 'article_status_pkey'
}

export enum Article_Status_Enum {
  /** Draft */
  Draft = 'draft',
  /** Published */
  Published = 'published'
}

/** Boolean expression to compare columns of type "article_status_enum". All fields are combined with logical 'AND'. */
export type Article_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Article_Status_Enum>;
  _in?: InputMaybe<Array<Article_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Article_Status_Enum>;
  _nin?: InputMaybe<Array<Article_Status_Enum>>;
};

/** input type for inserting data into table "article_status" */
export type Article_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Article_Status_Max_Fields = {
  __typename?: 'article_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Article_Status_Min_Fields = {
  __typename?: 'article_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "article_status" */
export type Article_Status_Mutation_Response = {
  __typename?: 'article_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Article_Status>;
};

/** on_conflict condition type for table "article_status" */
export type Article_Status_On_Conflict = {
  constraint: Article_Status_Constraint;
  update_columns?: Array<Article_Status_Update_Column>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "article_status". */
export type Article_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: article_status */
export type Article_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "article_status" */
export enum Article_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "article_status" */
export type Article_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "article_status" */
export type Article_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Article_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Article_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "article_status" */
export enum Article_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Article_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Article_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Article_Status_Bool_Exp;
};

/** aggregate stddev on columns */
export type Article_Stddev_Fields = {
  __typename?: 'article_stddev_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "article" */
export type Article_Stddev_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Article_Stddev_Pop_Fields = {
  __typename?: 'article_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "article" */
export type Article_Stddev_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Article_Stddev_Samp_Fields = {
  __typename?: 'article_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "article" */
export type Article_Stddev_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "article" */
export type Article_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Article_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Article_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Article_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Article_Sum_Fields = {
  __typename?: 'article_sum_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "article" */
export type Article_Sum_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "article" */
export enum Article_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Article_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Article_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Article_Set_Input>;
  /** filter the rows which have to be updated */
  where: Article_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Article_Var_Pop_Fields = {
  __typename?: 'article_var_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "article" */
export type Article_Var_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Article_Var_Samp_Fields = {
  __typename?: 'article_var_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "article" */
export type Article_Var_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Article_Variance_Fields = {
  __typename?: 'article_variance_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "article" */
export type Article_Variance_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "article" */
  delete_article?: Maybe<Article_Mutation_Response>;
  /** delete single row from the table: "article" */
  delete_article_by_pk?: Maybe<Article>;
  /** delete data from the table: "article_status" */
  delete_article_status?: Maybe<Article_Status_Mutation_Response>;
  /** delete single row from the table: "article_status" */
  delete_article_status_by_pk?: Maybe<Article_Status>;
  /** delete data from the table: "my_profile" */
  delete_my_profile?: Maybe<My_Profile_Mutation_Response>;
  /** delete data from the table: "published_article" */
  delete_published_article?: Maybe<Published_Article_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** insert data into the table: "article" */
  insert_article?: Maybe<Article_Mutation_Response>;
  /** insert a single row into the table: "article" */
  insert_article_one?: Maybe<Article>;
  /** insert data into the table: "article_status" */
  insert_article_status?: Maybe<Article_Status_Mutation_Response>;
  /** insert a single row into the table: "article_status" */
  insert_article_status_one?: Maybe<Article_Status>;
  /** insert data into the table: "my_profile" */
  insert_my_profile?: Maybe<My_Profile_Mutation_Response>;
  /** insert a single row into the table: "my_profile" */
  insert_my_profile_one?: Maybe<My_Profile>;
  /** insert data into the table: "published_article" */
  insert_published_article?: Maybe<Published_Article_Mutation_Response>;
  /** insert a single row into the table: "published_article" */
  insert_published_article_one?: Maybe<Published_Article>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** login */
  login?: Maybe<LoginOutput>;
  /** signup to be used from console */
  signup?: Maybe<SignupOutput>;
  /** update data of the table: "article" */
  update_article?: Maybe<Article_Mutation_Response>;
  /** update single row of the table: "article" */
  update_article_by_pk?: Maybe<Article>;
  /** update multiples rows of table: "article" */
  update_article_many?: Maybe<Array<Maybe<Article_Mutation_Response>>>;
  /** update data of the table: "article_status" */
  update_article_status?: Maybe<Article_Status_Mutation_Response>;
  /** update single row of the table: "article_status" */
  update_article_status_by_pk?: Maybe<Article_Status>;
  /** update multiples rows of table: "article_status" */
  update_article_status_many?: Maybe<Array<Maybe<Article_Status_Mutation_Response>>>;
  /** update data of the table: "my_profile" */
  update_my_profile?: Maybe<My_Profile_Mutation_Response>;
  /** update multiples rows of table: "my_profile" */
  update_my_profile_many?: Maybe<Array<Maybe<My_Profile_Mutation_Response>>>;
  /** update data of the table: "published_article" */
  update_published_article?: Maybe<Published_Article_Mutation_Response>;
  /** update multiples rows of table: "published_article" */
  update_published_article_many?: Maybe<Array<Maybe<Published_Article_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ArticleArgs = {
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Article_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Article_StatusArgs = {
  where: Article_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Article_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_My_ProfileArgs = {
  where: My_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Published_ArticleArgs = {
  where: Published_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ArticleArgs = {
  objects: Array<Article_Insert_Input>;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_OneArgs = {
  object: Article_Insert_Input;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_StatusArgs = {
  objects: Array<Article_Status_Insert_Input>;
  on_conflict?: InputMaybe<Article_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_Status_OneArgs = {
  object: Article_Status_Insert_Input;
  on_conflict?: InputMaybe<Article_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_ProfileArgs = {
  objects: Array<My_Profile_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_My_Profile_OneArgs = {
  object: My_Profile_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Published_ArticleArgs = {
  objects: Array<Published_Article_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Published_Article_OneArgs = {
  object: Published_Article_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  input: LoginInput;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  input: SignupInput;
};


/** mutation root */
export type Mutation_RootUpdate_ArticleArgs = {
  _inc?: InputMaybe<Article_Inc_Input>;
  _set?: InputMaybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Article_By_PkArgs = {
  _inc?: InputMaybe<Article_Inc_Input>;
  _set?: InputMaybe<Article_Set_Input>;
  pk_columns: Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Article_ManyArgs = {
  updates: Array<Article_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Article_StatusArgs = {
  _set?: InputMaybe<Article_Status_Set_Input>;
  where: Article_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Article_Status_By_PkArgs = {
  _set?: InputMaybe<Article_Status_Set_Input>;
  pk_columns: Article_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Article_Status_ManyArgs = {
  updates: Array<Article_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_My_ProfileArgs = {
  _inc?: InputMaybe<My_Profile_Inc_Input>;
  _set?: InputMaybe<My_Profile_Set_Input>;
  where: My_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_My_Profile_ManyArgs = {
  updates: Array<My_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Published_ArticleArgs = {
  _inc?: InputMaybe<Published_Article_Inc_Input>;
  _set?: InputMaybe<Published_Article_Set_Input>;
  where: Published_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Published_Article_ManyArgs = {
  updates: Array<Published_Article_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** columns and relationships of "my_profile" */
export type My_Profile = {
  __typename?: 'my_profile';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "my_profile" */
export type My_Profile_Aggregate = {
  __typename?: 'my_profile_aggregate';
  aggregate?: Maybe<My_Profile_Aggregate_Fields>;
  nodes: Array<My_Profile>;
};

/** aggregate fields of "my_profile" */
export type My_Profile_Aggregate_Fields = {
  __typename?: 'my_profile_aggregate_fields';
  avg?: Maybe<My_Profile_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<My_Profile_Max_Fields>;
  min?: Maybe<My_Profile_Min_Fields>;
  stddev?: Maybe<My_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<My_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<My_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<My_Profile_Sum_Fields>;
  var_pop?: Maybe<My_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<My_Profile_Var_Samp_Fields>;
  variance?: Maybe<My_Profile_Variance_Fields>;
};


/** aggregate fields of "my_profile" */
export type My_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<My_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type My_Profile_Avg_Fields = {
  __typename?: 'my_profile_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "my_profile". All fields are combined with a logical 'AND'. */
export type My_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<My_Profile_Bool_Exp>>;
  _not?: InputMaybe<My_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<My_Profile_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "my_profile" */
export type My_Profile_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "my_profile" */
export type My_Profile_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type My_Profile_Max_Fields = {
  __typename?: 'my_profile_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type My_Profile_Min_Fields = {
  __typename?: 'my_profile_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "my_profile" */
export type My_Profile_Mutation_Response = {
  __typename?: 'my_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<My_Profile>;
};

/** Ordering options when selecting data from "my_profile". */
export type My_Profile_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** select columns of table "my_profile" */
export enum My_Profile_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "my_profile" */
export type My_Profile_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type My_Profile_Stddev_Fields = {
  __typename?: 'my_profile_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type My_Profile_Stddev_Pop_Fields = {
  __typename?: 'my_profile_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type My_Profile_Stddev_Samp_Fields = {
  __typename?: 'my_profile_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "my_profile" */
export type My_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: My_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type My_Profile_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type My_Profile_Sum_Fields = {
  __typename?: 'my_profile_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type My_Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<My_Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<My_Profile_Set_Input>;
  /** filter the rows which have to be updated */
  where: My_Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type My_Profile_Var_Pop_Fields = {
  __typename?: 'my_profile_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type My_Profile_Var_Samp_Fields = {
  __typename?: 'my_profile_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type My_Profile_Variance_Fields = {
  __typename?: 'my_profile_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "published_article" */
export type Published_Article = {
  __typename?: 'published_article';
  /** An object relationship */
  author?: Maybe<User>;
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "published_article" */
export type Published_Article_Aggregate = {
  __typename?: 'published_article_aggregate';
  aggregate?: Maybe<Published_Article_Aggregate_Fields>;
  nodes: Array<Published_Article>;
};

/** aggregate fields of "published_article" */
export type Published_Article_Aggregate_Fields = {
  __typename?: 'published_article_aggregate_fields';
  avg?: Maybe<Published_Article_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Published_Article_Max_Fields>;
  min?: Maybe<Published_Article_Min_Fields>;
  stddev?: Maybe<Published_Article_Stddev_Fields>;
  stddev_pop?: Maybe<Published_Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Published_Article_Stddev_Samp_Fields>;
  sum?: Maybe<Published_Article_Sum_Fields>;
  var_pop?: Maybe<Published_Article_Var_Pop_Fields>;
  var_samp?: Maybe<Published_Article_Var_Samp_Fields>;
  variance?: Maybe<Published_Article_Variance_Fields>;
};


/** aggregate fields of "published_article" */
export type Published_Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Published_Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Published_Article_Avg_Fields = {
  __typename?: 'published_article_avg_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "published_article". All fields are combined with a logical 'AND'. */
export type Published_Article_Bool_Exp = {
  _and?: InputMaybe<Array<Published_Article_Bool_Exp>>;
  _not?: InputMaybe<Published_Article_Bool_Exp>;
  _or?: InputMaybe<Array<Published_Article_Bool_Exp>>;
  author?: InputMaybe<User_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "published_article" */
export type Published_Article_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "published_article" */
export type Published_Article_Insert_Input = {
  author?: InputMaybe<User_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Published_Article_Max_Fields = {
  __typename?: 'published_article_max_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Published_Article_Min_Fields = {
  __typename?: 'published_article_min_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "published_article" */
export type Published_Article_Mutation_Response = {
  __typename?: 'published_article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Published_Article>;
};

/** Ordering options when selecting data from "published_article". */
export type Published_Article_Order_By = {
  author?: InputMaybe<User_Order_By>;
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "published_article" */
export enum Published_Article_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "published_article" */
export type Published_Article_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Published_Article_Stddev_Fields = {
  __typename?: 'published_article_stddev_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Published_Article_Stddev_Pop_Fields = {
  __typename?: 'published_article_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Published_Article_Stddev_Samp_Fields = {
  __typename?: 'published_article_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "published_article" */
export type Published_Article_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Published_Article_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Published_Article_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Published_Article_Sum_Fields = {
  __typename?: 'published_article_sum_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Published_Article_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Published_Article_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Published_Article_Set_Input>;
  /** filter the rows which have to be updated */
  where: Published_Article_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Published_Article_Var_Pop_Fields = {
  __typename?: 'published_article_var_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Published_Article_Var_Samp_Fields = {
  __typename?: 'published_article_var_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Published_Article_Variance_Fields = {
  __typename?: 'published_article_variance_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  article_aggregate: Article_Aggregate;
  /** fetch data from the table: "article" using primary key columns */
  article_by_pk?: Maybe<Article>;
  /** fetch data from the table: "article_status" */
  article_status: Array<Article_Status>;
  /** fetch aggregated fields from the table: "article_status" */
  article_status_aggregate: Article_Status_Aggregate;
  /** fetch data from the table: "article_status" using primary key columns */
  article_status_by_pk?: Maybe<Article_Status>;
  /** fetch data from the table: "my_profile" */
  my_profile: Array<My_Profile>;
  /** fetch aggregated fields from the table: "my_profile" */
  my_profile_aggregate: My_Profile_Aggregate;
  /** fetch data from the table: "published_article" */
  published_article: Array<Published_Article>;
  /** fetch aggregated fields from the table: "published_article" */
  published_article_aggregate: Published_Article_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
};


export type Query_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootArticle_StatusArgs = {
  distinct_on?: InputMaybe<Array<Article_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Status_Order_By>>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};


export type Query_RootArticle_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Status_Order_By>>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};


export type Query_RootArticle_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootMy_ProfileArgs = {
  distinct_on?: InputMaybe<Array<My_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Profile_Order_By>>;
  where?: InputMaybe<My_Profile_Bool_Exp>;
};


export type Query_RootMy_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Profile_Order_By>>;
  where?: InputMaybe<My_Profile_Bool_Exp>;
};


export type Query_RootPublished_ArticleArgs = {
  distinct_on?: InputMaybe<Array<Published_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Article_Order_By>>;
  where?: InputMaybe<Published_Article_Bool_Exp>;
};


export type Query_RootPublished_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Published_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Article_Order_By>>;
  where?: InputMaybe<Published_Article_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  article_aggregate: Article_Aggregate;
  /** fetch data from the table: "article" using primary key columns */
  article_by_pk?: Maybe<Article>;
  /** fetch data from the table: "article_status" */
  article_status: Array<Article_Status>;
  /** fetch aggregated fields from the table: "article_status" */
  article_status_aggregate: Article_Status_Aggregate;
  /** fetch data from the table: "article_status" using primary key columns */
  article_status_by_pk?: Maybe<Article_Status>;
  /** fetch data from the table in a streaming manner: "article_status" */
  article_status_stream: Array<Article_Status>;
  /** fetch data from the table in a streaming manner: "article" */
  article_stream: Array<Article>;
  /** fetch data from the table: "my_profile" */
  my_profile: Array<My_Profile>;
  /** fetch aggregated fields from the table: "my_profile" */
  my_profile_aggregate: My_Profile_Aggregate;
  /** fetch data from the table in a streaming manner: "my_profile" */
  my_profile_stream: Array<My_Profile>;
  /** fetch data from the table: "published_article" */
  published_article: Array<Published_Article>;
  /** fetch aggregated fields from the table: "published_article" */
  published_article_aggregate: Published_Article_Aggregate;
  /** fetch data from the table in a streaming manner: "published_article" */
  published_article_stream: Array<Published_Article>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootArticle_StatusArgs = {
  distinct_on?: InputMaybe<Array<Article_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Status_Order_By>>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};


export type Subscription_RootArticle_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Status_Order_By>>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};


export type Subscription_RootArticle_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootArticle_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Article_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Article_Status_Bool_Exp>;
};


export type Subscription_RootArticle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Article_Stream_Cursor_Input>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootMy_ProfileArgs = {
  distinct_on?: InputMaybe<Array<My_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Profile_Order_By>>;
  where?: InputMaybe<My_Profile_Bool_Exp>;
};


export type Subscription_RootMy_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Profile_Order_By>>;
  where?: InputMaybe<My_Profile_Bool_Exp>;
};


export type Subscription_RootMy_Profile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<My_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<My_Profile_Bool_Exp>;
};


export type Subscription_RootPublished_ArticleArgs = {
  distinct_on?: InputMaybe<Array<Published_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Article_Order_By>>;
  where?: InputMaybe<Published_Article_Bool_Exp>;
};


export type Subscription_RootPublished_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Published_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Article_Order_By>>;
  where?: InputMaybe<Published_Article_Bool_Exp>;
};


export type Subscription_RootPublished_Article_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Published_Article_Stream_Cursor_Input>>;
  where?: InputMaybe<Published_Article_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  articles: Array<Article>;
  /** An aggregate relationship */
  articles_aggregate: Article_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: User_Role_Enum;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "user" */
export type UserArticlesArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  articles?: InputMaybe<Article_Bool_Exp>;
  articles_aggregate?: InputMaybe<Article_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Role_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  articles?: InputMaybe<Article_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  articles_aggregate?: InputMaybe<Article_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserRolePkey = 'user_role_pkey'
}

export enum User_Role_Enum {
  /** Editor */
  Editor = 'editor',
  /** Writer */
  Writer = 'writer'
}

/** Boolean expression to compare columns of type "user_role_enum". All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Role_Enum>;
  _in?: InputMaybe<Array<User_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Role_Enum>;
  _nin?: InputMaybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type User_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type PublishArticleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PublishArticleMutation = { __typename?: 'mutation_root', update_article_by_pk?: { __typename?: 'article', id: number } | null };

export type CreateArticle_CreateArticleMutationVariables = Exact<{
  input: Article_Insert_Input;
}>;


export type CreateArticle_CreateArticleMutation = { __typename?: 'mutation_root', insert_article_one?: { __typename?: 'article', id: number } | null };

export type EditArticle_FindArticleByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type EditArticle_FindArticleByIdQuery = { __typename?: 'query_root', article?: { __typename?: 'article', id: number, title: string, slug: string, status: Article_Status_Enum, content: string, author_id: number, author: { __typename?: 'user', id: number, name: string } } | null };

export type EditArticle_EditArticleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: Article_Set_Input;
}>;


export type EditArticle_EditArticleMutation = { __typename?: 'mutation_root', update?: { __typename?: 'article', id: number, slug: string, title: string } | null };

export type ListArticles_FetchArticlesQueryVariables = Exact<{
  where: Article_Bool_Exp;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type ListArticles_FetchArticlesQuery = { __typename?: 'query_root', article_aggregate: { __typename?: 'article_aggregate', aggregate?: { __typename?: 'article_aggregate_fields', totalCount: number } | null }, article: Array<{ __typename?: 'article', id: number, title: string, slug: string, status: Article_Status_Enum, author: { __typename?: 'user', id: number, name: string } }> };

export type ListArticles_FetchAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListArticles_FetchAuthorsQuery = { __typename?: 'query_root', authors: Array<{ __typename?: 'user', value: number, label: string }> };

export type LoginPage_LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginPage_LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', access_token: string } | null };

export type LogingPage_MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type LogingPage_MyProfileQuery = { __typename?: 'query_root', my_profile: Array<{ __typename?: 'my_profile', id?: number | null, name?: string | null, email?: string | null, role?: string | null, created_at?: any | null }> };


export const PublishArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"published"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublishArticleMutation, PublishArticleMutationVariables>;
export const CreateArticle_CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticle_CreateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"article_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_article_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateArticle_CreateArticleMutation, CreateArticle_CreateArticleMutationVariables>;
export const EditArticle_FindArticleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EditArticle_FindArticleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"article"},"name":{"kind":"Name","value":"article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EditArticle_FindArticleByIdQuery, EditArticle_FindArticleByIdQueryVariables>;
export const EditArticle_EditArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditArticle_EditArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"article_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"update"},"name":{"kind":"Name","value":"update_article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<EditArticle_EditArticleMutation, EditArticle_EditArticleMutationVariables>;
export const ListArticles_FetchArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListArticles_FetchArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"article_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"totalCount"},"name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ListArticles_FetchArticlesQuery, ListArticles_FetchArticlesQueryVariables>;
export const ListArticles_FetchAuthorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListArticles_FetchAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"authors"},"name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"label"},"name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ListArticles_FetchAuthorsQuery, ListArticles_FetchAuthorsQueryVariables>;
export const LoginPage_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginPage_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginPage_LoginMutation, LoginPage_LoginMutationVariables>;
export const LogingPage_MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LogingPage_MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"my_profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<LogingPage_MyProfileQuery, LogingPage_MyProfileQueryVariables>;
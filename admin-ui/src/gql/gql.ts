/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation PublishArticle($id: Int!) {\n    update_article_by_pk(\n    _set: {status: published}, \n    pk_columns: {id: $id}\n    ) {\n        id,\n    }\n}": types.PublishArticleDocument,
    "\nmutation CreateArticle_CreateArticle($input: article_insert_input!) {\n    insert_article_one(object: $input) {\n        id,\n    }\n}": types.CreateArticle_CreateArticleDocument,
    "\nquery EditArticle_FindArticleById($id: Int!) {\n    article: article_by_pk(id: $id) {\n        id,\n        title,\n        slug,\n        status,\n        content,\n        author_id,\n        author {\n            id,\n            name,\n        }\n    }\n}": types.EditArticle_FindArticleByIdDocument,
    "\nmutation  EditArticle_EditArticle(\n    $id: Int!,\n    $input: article_set_input!\n) {\n    update: update_article_by_pk(\n        pk_columns: {id: $id}, \n        _set: $input\n    ) {\n        id,\n        slug,\n        title,\n    }\n}": types.EditArticle_EditArticleDocument,
    "\nquery ListArticles_FetchArticles ($where: article_bool_exp!, $limit: Int!, $offset: Int!) {\n    article_aggregate(where: $where) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    article (where: $where limit: $limit, offset: $offset) {\n        id\n        title\n        slug\n        status\n        author {\n            id\n            name\n        }\n    }\n}": types.ListArticles_FetchArticlesDocument,
    "\nquery ListArticles_FetchAuthors {\n    authors: user {\n        value: id\n        label: name\n    }\n}": types.ListArticles_FetchAuthorsDocument,
    "\nmutation LoginPage_login($input: LoginInput!){\n    login(input: $input) {\n        access_token,\n    }\n}": types.LoginPage_LoginDocument,
    "\nquery LogingPage_MyProfile {\n    my_profile {\n        id,\n        name,\n        email,\n        role,\n        created_at,\n    }\n}": types.LogingPage_MyProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation PublishArticle($id: Int!) {\n    update_article_by_pk(\n    _set: {status: published}, \n    pk_columns: {id: $id}\n    ) {\n        id,\n    }\n}"): (typeof documents)["\nmutation PublishArticle($id: Int!) {\n    update_article_by_pk(\n    _set: {status: published}, \n    pk_columns: {id: $id}\n    ) {\n        id,\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateArticle_CreateArticle($input: article_insert_input!) {\n    insert_article_one(object: $input) {\n        id,\n    }\n}"): (typeof documents)["\nmutation CreateArticle_CreateArticle($input: article_insert_input!) {\n    insert_article_one(object: $input) {\n        id,\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery EditArticle_FindArticleById($id: Int!) {\n    article: article_by_pk(id: $id) {\n        id,\n        title,\n        slug,\n        status,\n        content,\n        author_id,\n        author {\n            id,\n            name,\n        }\n    }\n}"): (typeof documents)["\nquery EditArticle_FindArticleById($id: Int!) {\n    article: article_by_pk(id: $id) {\n        id,\n        title,\n        slug,\n        status,\n        content,\n        author_id,\n        author {\n            id,\n            name,\n        }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation  EditArticle_EditArticle(\n    $id: Int!,\n    $input: article_set_input!\n) {\n    update: update_article_by_pk(\n        pk_columns: {id: $id}, \n        _set: $input\n    ) {\n        id,\n        slug,\n        title,\n    }\n}"): (typeof documents)["\nmutation  EditArticle_EditArticle(\n    $id: Int!,\n    $input: article_set_input!\n) {\n    update: update_article_by_pk(\n        pk_columns: {id: $id}, \n        _set: $input\n    ) {\n        id,\n        slug,\n        title,\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery ListArticles_FetchArticles ($where: article_bool_exp!, $limit: Int!, $offset: Int!) {\n    article_aggregate(where: $where) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    article (where: $where limit: $limit, offset: $offset) {\n        id\n        title\n        slug\n        status\n        author {\n            id\n            name\n        }\n    }\n}"): (typeof documents)["\nquery ListArticles_FetchArticles ($where: article_bool_exp!, $limit: Int!, $offset: Int!) {\n    article_aggregate(where: $where) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    article (where: $where limit: $limit, offset: $offset) {\n        id\n        title\n        slug\n        status\n        author {\n            id\n            name\n        }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery ListArticles_FetchAuthors {\n    authors: user {\n        value: id\n        label: name\n    }\n}"): (typeof documents)["\nquery ListArticles_FetchAuthors {\n    authors: user {\n        value: id\n        label: name\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation LoginPage_login($input: LoginInput!){\n    login(input: $input) {\n        access_token,\n    }\n}"): (typeof documents)["\nmutation LoginPage_login($input: LoginInput!){\n    login(input: $input) {\n        access_token,\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery LogingPage_MyProfile {\n    my_profile {\n        id,\n        name,\n        email,\n        role,\n        created_at,\n    }\n}"): (typeof documents)["\nquery LogingPage_MyProfile {\n    my_profile {\n        id,\n        name,\n        email,\n        role,\n        created_at,\n    }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
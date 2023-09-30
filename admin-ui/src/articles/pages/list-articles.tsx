import { ProTable } from "@ant-design/pro-components"
import { AntPageContainer } from "../../layout/ant-page-container"
import { graphql } from "../../gql"
import { useLazyQuery, useQuery } from "@apollo/client"
import { Article_Bool_Exp, Article_Status_Enum } from "../../gql/graphql"
import { ErrorMessage } from "../../error-message"
import { Link } from "react-router-dom"
import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useAuthUser } from "../../auth/hooks/use-auth-user"
import { ResultOf } from "@graphql-typed-document-node/core"
import { ArticleActions } from "../components/article-actions"

const ListArticles_FetchArticles = graphql(/** GraphQL */`
query ListArticles_FetchArticles ($where: article_bool_exp!, $limit: Int!, $offset: Int!) {
    article_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
    article (where: $where limit: $limit, offset: $offset) {
        id
        title
        slug
        status
        author {
            id
            name
        }
    }
}`)

const ListArticles_FetchAuthors = graphql(/** GraphQL */`
query ListArticles_FetchAuthors {
    authors: user {
        value: id
        label: name
    }
}`)


export type ArticleType = ResultOf<typeof ListArticles_FetchArticles>['article'][number]

export const ListArticles = () => {
    const { user } = useAuthUser();

    const [fetchArticles, { error }] = useLazyQuery(ListArticles_FetchArticles);
    const { data: authorsResponse } = useQuery(ListArticles_FetchAuthors);

    return <AntPageContainer>
        <ErrorMessage error={error} />
        <ProTable
            toolBarRender={()=> [
                <Link to='create'>
                    <Button key="create" icon={<PlusOutlined/>} type="primary">
                        Create
                    </Button>
                </Link>
            ]}
            columns={[
                {
                    key: 'id',
                    title: 'ID',
                    dataIndex: 'id',
                    hideInSearch: true,
                },
                {
                    key: 'title',
                    title: 'Title',
                    dataIndex: 'title',
                },
                {
                    key: 'status',
                    title: 'Status',
                    dataIndex: 'status',
                    valueEnum: {
                        [Article_Status_Enum.Draft]: { color: 'red', text: 'Draft' },
                        [Article_Status_Enum.Published]: { color: 'green', text: 'Published' }
                    }
                },
                {
                    key: 'author_display',
                    title: 'Author',
                    dataIndex: ['author', 'name'],
                    hideInSearch: true,
                },
                {
                    key: 'author_id',
                    title: 'Author',
                    hideInTable: true,
                    valueType: 'select',
                    fieldProps: {
                        options: authorsResponse?.authors || [],
                    }
                },
                {
                    key: 'actions',
                    title: 'Actions',
                    hideInSearch: true,
                    render: (_, article: ArticleType, __, actions) => {
                        return <ArticleActions 
                            article={article} 
                            user={user!} 
                            onPublish={() => {
                                actions?.reload();
                            }}
                        />
                    },
                }
            ]}
            request={async (params, sort, _) => {
                const limit = params.pageSize!;
                const offset = (params.current! - 1) * params.pageSize!;

                const where : Article_Bool_Exp = {};
                if (params.title) {
                    where['title'] = {
                        _ilike: `%${params.title}%`
                    }
                }

                if (params.author_id) {
                    where['author_id'] = {
                        _eq: Number(params.author_id),
                    }
                }

                if (params.status) {
                    where['status'] = {
                        _eq: params.status
                    }
                }

                const response = await fetchArticles({
                    fetchPolicy: 'network-only',
                    variables: {
                        limit,
                        offset,
                        where,
                    }
                });
                return {
                    data: response.data!.article,
                    total: response.data!.article_aggregate!.aggregate!.totalCount,
                }
            }}
        >

        </ProTable>
    </AntPageContainer>
}
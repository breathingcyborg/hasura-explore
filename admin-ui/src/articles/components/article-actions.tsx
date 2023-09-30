import { Link } from "react-router-dom";
import { AuthUser } from "../../auth/auth-store/store";
import { Article_Status_Enum, User_Role_Enum } from "../../gql/graphql";
import { ArticleType } from "../pages/list-articles";
import { Button, Popconfirm, Space } from "antd";
import { EditFilled } from "@ant-design/icons";
import { graphql } from "../../gql";
import { useMutation } from "@apollo/client";
import { getErrorMessage } from "../../error-utils";
import { message } from 'antd'

const ArticleActions_PublishArticle = graphql(/** GraphQL */`
mutation PublishArticle($id: Int!) {
    update_article_by_pk(
    _set: {status: published}, 
    pk_columns: {id: $id}
    ) {
        id,
    }
}`)

export function ArticleActions({ 
    article, 
    user,
    onPublish,
} : { 
    article: ArticleType, 
    user: AuthUser,
    onPublish?: () => void,
}) {
    const actions = [];
    const isEditor = user?.role === User_Role_Enum.Editor;
        
    const isDraft = article.status === Article_Status_Enum.Draft;
    const isAuthorOfArticle = user?.id === article.author.id;

    const canEdit = isEditor || isAuthorOfArticle;
    const canPublish = isEditor && isDraft;

    const [publishArticle] = useMutation(ArticleActions_PublishArticle);
    const [ messageApi, contextHolder ] = message.useMessage();

    if (canEdit) {
        actions.push(
            <Link to={`${article.id}/edit`}>
                <Button>
                    <EditFilled />
                </Button>
            </Link>
        )
    }

    if (canPublish) {
        actions.push(<Popconfirm 
            title={"Are Your Sure"}
            onConfirm={async () => {
                const result = await publishArticle({
                    variables: { id: article.id }
                });
                
                if (result.errors && result.errors.length > 0) {
                    const errorMessge = getErrorMessage(result.errors);
                    messageApi.error(errorMessge);
                } else {
                    messageApi.success('article published');
                    if (onPublish !== undefined) {
                        onPublish();
                    }
                }

            }}
        >
            <Button>
                Publish
            </Button>
        </Popconfirm>)
    }

    return <Space>
        { contextHolder }
        { actions }
    </Space>
}
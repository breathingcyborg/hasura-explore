import { ProCard, ProForm } from "@ant-design/pro-components"
import { message } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import { AntPageContainer } from "../../layout/ant-page-container"
import { Article_Set_Input } from '../../gql/graphql'
import { useLazyQuery, useMutation } from "@apollo/client"
import { ErrorMessage } from "../../error-message"
import { ArticleFormFields } from "../components/article-form-fields"
import { graphql } from "../../gql";

const EditArticle_FindArticleById = graphql(/* GraphQL */`
query EditArticle_FindArticleById($id: Int!) {
    article: article_by_pk(id: $id) {
        id,
        title,
        slug,
        status,
        content,
        author_id,
        author {
            id,
            name,
        }
    }
}`);

const EditArticle_EditArticle = graphql(/* GraphQL */`
mutation  EditArticle_EditArticle(
    $id: Int!,
    $input: article_set_input!
) {
    update: update_article_by_pk(
        pk_columns: {id: $id}, 
        _set: $input
    ) {
        id,
        slug,
        title,
    }
}`);


export const EditArticle = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate();

    const [editArticle, { error }] = useMutation(EditArticle_EditArticle);
    const [fetchArticle, { error: fetchError }] = useLazyQuery(EditArticle_FindArticleById, {
        variables: {
            id: Number(id),
        }
    });

    return <AntPageContainer>
        { contextHolder }
        <ProCard>
            <ErrorMessage error={fetchError || error} />
            <ProForm<Article_Set_Input>
                request={async () => {
                    try {
                        const response = await fetchArticle();
                        return response.data!.article!;
                    } catch(e) {}
                    return {} as Article_Set_Input;
                }}
                onFinish={async (input) => {
                    try {
                        const response = await editArticle({
                            variables: {
                                id: Number(id),
                                input: input,
                            }
                        });
                        
                        messageApi.success("Edited Article");
                        navigate(-1);
                    } catch(e) {}
                }}
            >
                <ArticleFormFields />
            </ProForm>
        </ProCard>
    </AntPageContainer>
}
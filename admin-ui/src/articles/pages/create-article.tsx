import { ProCard, ProForm } from "@ant-design/pro-components"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
import { AntPageContainer } from "../../layout/ant-page-container"
import { Article_Insert_Input } from '../../gql/graphql'
import { useMutation } from "@apollo/client"
import { ErrorMessage } from "../../error-message"
import { ArticleFormFields } from "../components/article-form-fields"
import { graphql } from "../../gql"

const CreateArticle_CreateArticle = graphql(/* GraphQL */`
mutation CreateArticle_CreateArticle($input: article_insert_input!) {
    insert_article_one(object: $input) {
        id,
    }
}`) 

export const CreateArticle = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const navigate = useNavigate();

    const [createArticle, { error }] = useMutation(CreateArticle_CreateArticle);

    return <AntPageContainer>
        { contextHolder }
        <ProCard>
            <ErrorMessage error={error} />
            <ProForm<Article_Insert_Input>
                onFinish={async (input) => {
                    try {
                        const response = await createArticle({
                            variables: { input }
                        });
                        console.log(response);
                        messageApi.success("Created Article");
                        navigate(-1);
                    } catch(e) {}
                }}
            >
                <ArticleFormFields />
            </ProForm>
        </ProCard>
    </AntPageContainer>
}
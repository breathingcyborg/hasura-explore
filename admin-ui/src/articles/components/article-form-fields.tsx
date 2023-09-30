import { ProFormText, ProFormTextArea } from "@ant-design/pro-components"

export const ArticleFormFields = () => {
    return <>
        <ProFormText
            label="Title"
            name='title'
            rules={[
                { required: true, message: 'title is required' },
            ]}
            required
        />
        <ProFormText
            label="Slug"
            name='slug'
            rules={[
                { required: true, message: 'slug is required' },
            ]}
            required
        />
        <ProFormTextArea
            label="Content"
            name='content'
            rules={[
                { required: true, message: 'content is required' },
            ]}
            required
        />
    </>
}
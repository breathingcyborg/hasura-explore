import { MailOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import './login-page.scss';
import { LoginInput, User_Role_Enum } from '../../gql/graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ErrorMessage } from '../../error-message';
import getAuthStore from '../auth-store/store';
import { graphql } from "../../gql";

const LoginPage_login = graphql(/* GraphQL */`
mutation LoginPage_login($input: LoginInput!){
    login(input: $input) {
        access_token,
    }
}`);

const LoginPage_MyProfile = graphql(/* GraphQL */`
query LogingPage_MyProfile {
    my_profile {
        id,
        name,
        email,
        role,
        created_at,
    }
}`)

export const LoginPage = () => {

    const [login, { error }] = useMutation(LoginPage_login);
    const [getMyProfile, { error: myProfileError }] = useLazyQuery(LoginPage_MyProfile);

    const onFinish = async (input: LoginInput) => {
        try {
            const response = await login({
                variables: { input }
            });

            // save auth tokens
            const authStore = getAuthStore();
            await authStore.setTokens({
                access_token: response.data!.login!.access_token,
            });

            // fetch user profile
            const myProfileResult = await getMyProfile();
            const myProfile = myProfileResult.data!.my_profile[0];

            // save profile in storage
            await authStore.setUser({
                id: myProfile.id!,
                email: myProfile.email!,
                name: myProfile.name!,
                created_at: myProfile.created_at,
                role: myProfile.role as User_Role_Enum,
            });

            // alert success
            messageApi.success("Login Successfull");

        } catch(e) {}
    }

    const [messageApi, coontextHolder] = message.useMessage();

    return <LoginFormPage<LoginInput>
        onFinish={onFinish}
        style={{
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: '#fff',
        }}
        title="Login"
        subTitle="Login to continue to your account"
        backgroundImageUrl='https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    >
        {coontextHolder}
        <ErrorMessage error={error || myProfileError} />
        <ProFormText
            name='email'
            label='Email'
            placeholder='Email'
            required
            rules={[
                { required: true, message: 'Email is required' },
            ]}
            fieldProps={{
                addonBefore: <MailOutlined />,
                type: 'email',
            }}
        />
        <ProFormText.Password
            name='password'
            label='Password'
            required
            rules={[
                { required: true, message: 'Password is required' },
            ]}
        />
    </LoginFormPage>
}
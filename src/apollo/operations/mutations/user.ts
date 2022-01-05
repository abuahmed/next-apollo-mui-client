import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    authUser(input: { email: $email, password: $password }) {
      id
      name
      email
      avatar
      isAdmin
      token
      roles {
        id
        displayName
      }
      warehouses {
        id
        displayName
      }
      client {
        id
        displayName
      }
    }
  }
`;
export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email }) {
      id
      name
      email
      avatar
    }
  }
`;
export const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $userId: Int!
    $oldPassword: String!
    $password: String!
    $confirmPassword: String!
  ) {
    changePassword(
      input: {
        userId: $userId
        oldPassword: $oldPassword
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      name
      email
      avatar
    }
  }
`;
export const RESET_USER_PASSWORD = gql`
  mutation ResetUserPassword(
    $id: Int!
    $token: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetUserPassword(
      input: {
        id: $id
        token: $token
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      name
      email
      avatar
    }
  }
`;

export const RESEND_VERIFICATION_EMAIL = gql`
  mutation ResendVerificationEmail($id: Int!) {
    resendVerificationEmail(input: { id: $id }) {
      id
      name
      email
      avatar
    }
  }
`;
export const VERIFY_EMAIL = gql`
  mutation VerifyEmail(
    $id: Int!
    $token: String!
    $expires: String!
    $signature: String!
  ) {
    verifyEmail(
      input: {
        id: $id
        token: $token
        expires: $expires
        signature: $signature
      }
    ) {
      id
      name
      email
      avatar
    }
  }
`;
export const SIGN_UP = gql`
  mutation SignUpUser(
    $email: String
    $name: String
    $password: String
    $confirmPassword: String
  ) {
    register(
      input: {
        email: $email
        name: $name
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      name
      email
      avatar
      isAdmin
      token
      roles {
        id
        displayName
      }
      warehouses {
        id
        displayName
      }
    }
  }
`;

export const SIGN_IN_GOOGLE = gql`
  mutation Login($idToken: String!) {
    googleLogin(input: { idToken: $idToken }) {
      id
      name
      email
      avatar
      isAdmin
      token
      roles {
        id
        displayName
      }
      warehouses {
        id
        displayName
      }
      client {
        id
        displayName
      }
    }
  }
`;

export const SIGN_IN_FACEBOOK = gql`
  mutation Login($userID: String!, $accessToken: String!) {
    facebookLogin(input: { userID: $userID, accessToken: $accessToken }) {
      id
      name
      email
      isAdmin
      token
      roles {
        id
        displayName
      }
      warehouses {
        id
        displayName
      }
      client {
        id
        displayName
      }
    }
  }
`;

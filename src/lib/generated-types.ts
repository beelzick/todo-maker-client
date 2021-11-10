import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<User>;
  deleteTodo?: Maybe<User>;
  setTodoDone?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  content: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  todoId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationSetTodoDoneArgs = {
  done?: Maybe<Scalars['Boolean']>;
  todoId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  _id: Scalars['ID'];
};

export type Todo = {
  __typename?: 'Todo';
  _id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type SetTodoDoneMutationVariables = Exact<{
  todoId: Scalars['ID'];
  userId: Scalars['ID'];
  done: Scalars['Boolean'];
}>;


export type SetTodoDoneMutation = { __typename?: 'Mutation', setTodoDone?: { __typename?: 'Todo', done?: boolean | null | undefined, _id?: string | null | undefined } | null | undefined };

export type CreateTodoMutationVariables = Exact<{
  userId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'User', _id?: string | null | undefined, todos?: Array<{ __typename?: 'Todo', done?: boolean | null | undefined, _id?: string | null | undefined, content?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteTodoMutationVariables = Exact<{
  userId: Scalars['ID'];
  todoId: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'User', _id?: string | null | undefined, todos?: Array<{ __typename?: 'Todo', _id?: string | null | undefined, content?: string | null | undefined, done?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UserQueryVariables = Exact<{
  _id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', _id?: string | null | undefined, todos?: Array<{ __typename?: 'Todo', _id?: string | null | undefined, content?: string | null | undefined, done?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const SetTodoDoneDocument = gql`
    mutation SetTodoDone($todoId: ID!, $userId: ID!, $done: Boolean!) {
  setTodoDone(userId: $userId, todoId: $todoId, done: $done) {
    done
    _id
  }
}
    `;
export type SetTodoDoneMutationFn = Apollo.MutationFunction<SetTodoDoneMutation, SetTodoDoneMutationVariables>;

/**
 * __useSetTodoDoneMutation__
 *
 * To run a mutation, you first call `useSetTodoDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTodoDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTodoDoneMutation, { data, loading, error }] = useSetTodoDoneMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      userId: // value for 'userId'
 *      done: // value for 'done'
 *   },
 * });
 */
export function useSetTodoDoneMutation(baseOptions?: Apollo.MutationHookOptions<SetTodoDoneMutation, SetTodoDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetTodoDoneMutation, SetTodoDoneMutationVariables>(SetTodoDoneDocument, options);
      }
export type SetTodoDoneMutationHookResult = ReturnType<typeof useSetTodoDoneMutation>;
export type SetTodoDoneMutationResult = Apollo.MutationResult<SetTodoDoneMutation>;
export type SetTodoDoneMutationOptions = Apollo.BaseMutationOptions<SetTodoDoneMutation, SetTodoDoneMutationVariables>;

export const CreateTodoDocument = gql`
    mutation CreateTodo($userId: ID!, $content: String!) {
  createTodo(userId: $userId, content: $content) {
    _id
    todos {
      done
      _id
      content
    }
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($userId: ID!, $todoId: ID!) {
  deleteTodo(userId: $userId, todoId: $todoId) {
    _id
    todos {
      _id
      content
      done
    }
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;

export const UserDocument = gql`
    query User($_id: ID!) {
  user(_id: $_id) {
    _id
    todos {
      _id
      content
      done
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
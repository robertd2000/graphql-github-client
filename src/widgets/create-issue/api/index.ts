import { useMutation } from "@apollo/client";
import { CREATE_ISSUE } from "./query";

export const createIssue = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_ISSUE);

  return {
    mutateFunction,
    data,
    loading,
    error,
  };
};

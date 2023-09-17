import { persist } from "../../../../shared/lib/browser";
import { CREDENTIAL_KEY } from "../../lib";
import { UserCredential } from "../../types";

export const useAuth = () => {
  const [viewer, setViewer] = persist.useLocalStorage<UserCredential | null>(
    CREDENTIAL_KEY,
    null
  );
  const isAuth = !!viewer;

  const login = (credential: UserCredential) => {
    console.log("credential", credential);

    setViewer(credential);
    // window.location.href = `/graphql-github-client/${credential.username}`;
  };

  const logout = () => {
    setViewer(null);
  };

  return { isAuth, viewer, login, logout };
};

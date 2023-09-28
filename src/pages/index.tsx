import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AuthPage from "./auth";
import { SearchPage } from "./search";
import {
  UserOverviewPage,
  UserPage,
  UserReposPage,
  UserStarsPage,
} from "./user";
import { OrgPage } from "./org";
import { OrgOverviewPage } from "./org/ui/overview";
import { RepoPage } from "./repo";
import { RepoOverviewPage } from "./repo/overview";
import { RepoIssuesPage } from "./repo/issues";
import { NewIssuePage } from "./repo/issues/new";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/user/:login" element={<UserPage />}>
        <Route path="" element={<UserOverviewPage />} />
        <Route path="repositories" element={<UserReposPage />} />
        <Route path="stars" element={<UserStarsPage />} />
      </Route>
      <Route path="/org/:name" element={<OrgPage />}>
        <Route path="" element={<OrgOverviewPage />} />
      </Route>
      <Route path="/repository/:owner/:name" element={<RepoPage />}>
        <Route path="" element={<RepoOverviewPage />} />
        <Route path="issues" element={<RepoIssuesPage />} />
        <Route path="issues/new" element={<NewIssuePage />} />
      </Route>
    </Routes>
  );
};

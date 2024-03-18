import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import { useState } from "react";
import styles from "./issue-list.module.scss";
import {
  ButtonIconType,
  ButtonSize,
  ButtonColor,
} from "../../../ui/ui-button/ui-button.types";
import { UICheckbox, CheckboxSize } from "../../../ui/ui-checkbox/ui-checkbox";
import { UISelect } from "../../../ui/ui-select/ui-select";
import { UIButton } from "../../../ui/ui-button";
import { UIInput } from "../../../ui/ui-input/ui-input";

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });

  const issuesPage = useGetIssues(page);
  const projects = useGetProjects();

  const [selectedIssueType, setSelectedIssueType] = useState(""); // State to hold the selected value
  const [selectedLevel, setSelectedLevel] = useState(""); // State to hold the selected value
  const [selectedSearch, setSelectedSearch] = useState(""); // State to hold the selected value

  if (projects.isLoading || issuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>,
  );
  const { items, meta } = issuesPage.data || {};

  // Function to update the selected value
  const handleIssueTypeChange = (selectedValue: string) => {
    console.log(selectedValue);
    setSelectedIssueType(selectedValue);
  };
  const handleLevelChange = (selectedLevel: string) => {
    console.log(selectedLevel);
    setSelectedLevel(selectedLevel);
  };

  const handleSearchChange = (selectedSearch: string) => {
    console.log(selectedSearch);
    setSelectedSearch(selectedSearch);
  };

  return (
    <>
      <div className={styles.filtersContainer}>
        <UIButton
          size={ButtonSize.large}
          color={ButtonColor.primary}
          iconSrc={"/icons/issues-checkmark.svg"}
          iconStyle={ButtonIconType.leading}
          alt={"Resolve selected issues"}
        >
          Resolve selected issues
        </UIButton>
        <div>
          <div>
            <UISelect
              placeholder="Issue Type"
              options={["Resolved", "Unresolved"]}
              value={selectedIssueType}
              onChange={handleIssueTypeChange}
              icon={false}
            />
          </div>
          <div>
            <UISelect
              placeholder="Level"
              options={["Error", "Warning", "Info"]}
              value={selectedLevel}
              onChange={handleLevelChange}
              icon={false}
              // label="Project Name"
              // hint="This is a hint"
            />
          </div>
          <div>
            <UIInput
              placeholder="Project Name"
              value={selectedSearch}
              onChange={handleSearchChange}
              iconSrc="/icons/magnify.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>
                <UICheckbox boxSize={CheckboxSize.small}>Issue</UICheckbox>
              </th>
              <th className={styles.headerCell}>Level</th>
              <th className={styles.headerCell}>Events</th>
              <th className={styles.headerCell}>Users</th>
            </tr>
          </thead>
          <tbody>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </table>
        <div className={styles.paginationContainer}>
          <div>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </button>
          </div>
          <div className={styles.pageInfo}>
            Page <span className={styles.pageNumber}>{meta?.currentPage}</span>{" "}
            of <span className={styles.pageNumber}>{meta?.totalPages}</span>
          </div>
        </div>
      </div>
    </>
  );
}

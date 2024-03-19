import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import { useState, useEffect } from "react";
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
import { Issue } from "@api/issues.types";

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

  const [selectedIssueType, setSelectedIssueType] = useState(""); // State to hold the selected issue type
  const [selectedLevel, setSelectedLevel] = useState(""); // State to hold the selected level
  const [selectedSearch, setSelectedSearch] = useState(""); // State to hold the selected search term

  // const initialFiltersFromLocalStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('filters') || '{}') : {};
  // const [selectedIssueType, setSelectedIssueType] = useState(initialFiltersFromLocalStorage.selectedIssueType || "");
  // const [selectedLevel, setSelectedLevel] = useState(initialFiltersFromLocalStorage.selectedLevel || "");
  // const [selectedSearch, setSelectedSearch] = useState(initialFiltersFromLocalStorage.selectedSearch || "");

  useEffect(() => {
    // Retrieve filter values from localStorage on component mount
    const filtersFromLocalStorage = JSON.parse(
      localStorage.getItem("filters") || "{}",
    );
    console.log(filtersFromLocalStorage);
    setSelectedIssueType(filtersFromLocalStorage.selectedIssueType);
    setSelectedLevel(filtersFromLocalStorage.selectedLevel);
    setSelectedSearch(filtersFromLocalStorage.selectedSearch);
    console.log("running");
  }, []);
  console.log("***", selectedLevel);

  // const setLocalStorage = useCallback(() => {
  //   localStorage.setItem('filters', JSON.stringify({
  //     selectedIssueType,
  //     selectedLevel,
  //     selectedSearch,
  //   }));
  // }, [selectedIssueType, selectedLevel, selectedSearch]);

  // useEffect(() => {
  //   // Update localStorage whenever the state changes
  //   setLocalStorage();
  // }, [setLocalStorage]);

  const filterIssues = (issue: Issue): boolean => {
    if (selectedIssueType && issue.status !== selectedIssueType) return false;
    if (selectedLevel && issue.level !== selectedLevel.toLocaleLowerCase())
      return false;
    if (
      selectedSearch &&
      !issue.name.toLowerCase().includes(selectedSearch.toLowerCase())
    )
      return false;
    return true;
  };

  const handleIssueTypeChange = (selectedValue: string) => {
    switch (selectedValue) {
      case "Resolved":
        setSelectedIssueType("closed");
        break;
      case "Unresolved":
        setSelectedIssueType("open");
        break;
      case "":
        setSelectedIssueType("");
        break;
      default:
        break;
    }
    // setLocalStorage();
  };
  const handleLevelChange = (selectedLevel: string) => {
    // setLocalStorage();
    setSelectedLevel(selectedLevel);
  };

  const handleSearchChange = (selectedSearch: string) => {
    console.log("seetinglocal storage here");
    // setLocalStorage();
    setSelectedSearch(selectedSearch);
  };

  // const setLocalStorage = () => {
  //   console.log('seetinglocal storage')
  //   localStorage.setItem('filters', JSON.stringify({
  //     selectedIssueType,
  //     selectedLevel,
  //     selectedSearch,
  //   }));
  // }

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

  return (
    <>
      {selectedLevel}
      <br />
      {selectedIssueType}
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
          <UISelect
            placeholder="Issue Type"
            options={["Resolved", "Unresolved"]}
            value={selectedIssueType}
            onChange={handleIssueTypeChange}
            icon={false}
          />
          <UISelect
            placeholder="Level"
            options={["Error", "Warning", "Info"]}
            value={selectedLevel}
            onChange={handleLevelChange}
            icon={false}
          />
          <UIInput
            placeholder="Project Name"
            value={selectedSearch}
            onChange={handleSearchChange}
            icon={true}
            iconSrc="/icons/magnify.svg"
          />
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
            {(items || []).filter(filterIssues).map((issue) => (
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

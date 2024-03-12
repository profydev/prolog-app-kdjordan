import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();
  console.log(isError, error);
  const test = 1;

  function handleReload() {
    console.log("do reload");
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  // if (isError) {
  // {error.message}{
  if (test == 1) {
    return (
      <div className={styles.error}>
        <div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/exclaim.svg" alt="Alert !" />
          </div>
          <div>There was a problem loading the project data</div>
        </div>
        <div onClick={handleReload}>
          <div>Try Again</div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/arrow-right.svg" alt="Alert !" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

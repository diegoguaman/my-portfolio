/**
 * Project-related models and types
 */

export interface Project {
  id: number;
  title: string;
  image: string;
  remoteUrl: string;
  repoFront: string;
  repoBack: string;
  longDescription: string;
  thumbnailUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

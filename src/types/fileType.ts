export interface filesType {
  file: imageTypes | videoTypes;
}

export type imageTypes =
  | "image/jpg"
  | "image/png"
  | "image/webp"
  | "image/gif"
  | "image/jpeg";

export type videoTypes = "video/mp4" | "video/avi";

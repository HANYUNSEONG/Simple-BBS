import CustomAxios from "./customAxios";

export const postFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return await CustomAxios.post(`/file/upload`, formData);
};

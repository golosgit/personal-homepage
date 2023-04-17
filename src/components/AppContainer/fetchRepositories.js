export const fetchRepositories = async () => {
  const response = await fetch("https://api.github.com/users/golosgit/repos");

  if (!response.ok) {
    return await new Error.json();
  }

  return await response.json();
};

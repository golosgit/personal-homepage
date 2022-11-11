export const getGithubRepositories = async () => {
  const response = await fetch ("https://api.github.com/users/golosgit/repos");

  if(!response.ok) {
    new Error();
    return Error.json();
  }
  
  return await response.json();
};
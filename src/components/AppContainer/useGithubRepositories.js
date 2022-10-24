import { useState, useEffect } from "react";
import axios from "axios";

export const useGithubRepositories = () => {
  const requestStatus = {
    success: "success",
    loading: "loading",
    error: "error",
  };

  const [status, setStatus] = useState(requestStatus.loading);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/golosgit/repos");
        setStatus(requestStatus.success);
        setResult(response.data);
      } catch (error) {
        setStatus(requestStatus.error);
      }
    };
    setTimeout(fetchGithubRepos, 5000);
  });

  return { result, status, requestStatus };
};
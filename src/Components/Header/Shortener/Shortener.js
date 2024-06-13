import React from 'react'
import './Shortener.css'
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';



const apiToken = '5zndQvlb6ODlRTcjzgS4no57Ail4ECjxav8AttbLohLUE'

const url = "https://shrtlnk.dev/api/v2/link"

export default function Shortener() {

  const [search, setSearch] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [error, setError] = useState(null);
  const [searchedURL, setSearchedURL] = useState("");
  const displayLimit = 4;

  const requestData = {
    url: search
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'api-key': `${apiToken}`
    },
    body: JSON.stringify(requestData)
  };

  useEffect(() => {
    const storedURLs = localStorage.getItem('shortenedURLs');
    if (storedURLs) {
      setShortenedURLs(JSON.parse(storedURLs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shortenedURLs', JSON.stringify(shortenedURLs));
  }, [shortenedURLs]);

  function isValidURL(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  function getLink() {

    if (!isValidURL(search)) {
      setError("Please add a link");
      return;
    }

    console.log("Fetching data...");
    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Shortened URL:', data.shrtlnk);
        setShortenedURLs(prevURLs => [{ original: search, short: data.shrtlnk }, ...prevURLs]);
        setSearchedURL(search);
        setError(null);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to shorten URL');
      });

  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!search) {
      alert("Please try again")
    }
    getLink();
  }

  useEffect(() => {
    getLink();
  }, []);

  async function copyToClip(event, url) {
    try {
      await navigator.clipboard.writeText(url);
      const button = event.target;
      if (button) {
        button.textContent = 'Copied!';
        button.style.backgroundColor = 'hsl(257, 27%, 26%)';
      }
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed: " + err.message);
    }
  }

  function deleteURL(index) {
    setShortenedURLs(prevURLs => prevURLs.filter((_, i) => i !== index));
  }

  useEffect(() => {
    setError(null);
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="middle"
      >
        <div className='form-container'>
          <input
            type="search"
            required
            className={`link ${error ? 'error' : ''}`}
            placeholder='Shorten a link here...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            className='shorten'
          >Shorten it!
          </button>
        </div>
        </form>
    <div className='urls-container'>
      {searchedURL && shortenedURLs.slice(0, displayLimit).map((url, index) => (
          <div className="shortened-urls" key={index}>
            
            <p className='original'>{url.original}</p>
            <ul>
              <li className="shortened-url-item">
                {url.short}
                <button className="copy-btn" onClick={(event) => copyToClip(event,url.short)}>Copy</button>
                <CloseIcon className='close' onClick={() => deleteURL(index)} />
              </li>
            </ul>

          </div>

      ))}
    </div>
</div>
  )
 }



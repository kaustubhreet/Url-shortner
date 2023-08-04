import React,{useState} from 'react';


const Output = () => {
    
  const [data, setData] = useState([]);

  const fetchData =async () => {
   fetch(`http://localhost:5000/urls`)
      .then((response) => {
      return response.json()})
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

    return (
    <>
    <h1 className="text-4xl my-6 font-bold text-black-200 text-center">
       Your Shortened URL
      </h1>
      <h5 className='font-bold text-center'>Copy the shortened link and share it in messages, texts, posts, websites and other locations.</h5>

      <div className="box-content text-center  mx-flex py-20 m-28 
                border-5 bg-cyan-100  shadow-white">
        <h3 className="text-4xl my-8 font-bold" >Paste the URL to be shortened</h3>
        <div className='text-2xl border-l-slate-700 p-3'>
        <div >Some text to copy</div>
          <button type="submit" onClick={fetchData} className="mx-3 bg-cyan-500 rounded-md p-2">Copy URL</button>
          {data.length > 0 && (
        <ul>
          {data.map(datas => (
            <li key={datas.longUrl}>{datas.shortUrl}</li>
          ))}
        </ul>
      )}
        </div>
        <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
        <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
      <h3>Thanks For Using.</h3>
      </div>

    </>
  )
}

export default Output;
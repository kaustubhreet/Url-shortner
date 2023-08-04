import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const url="http://localhost:5000/";
const Home = () => {
  const [longUrl, setLongUrl] = useState([]);
  const [message, setMessage] = useState("");
  const [reqId, setReqId] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${url}shorten`, {
        method: 'POST',
        body: JSON.stringify({
          longUrl: longUrl
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      //  console.log(longUrl._id)
      if (res.status === 200) {
        const responseData = await res.json();
        const { _id } = responseData;
        setLongUrl('');
        setReqId(responseData.shortUrl);
        setMessage("Url is successfully Converted!");

      } else {
        setMessage("Some error occured");
      }

    } catch (err) {
      console.log(err);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  /*const fetchData = async (_id) => {
    try {
      const res = await fetch(`http://localhost:5000/${_id.toString()}`);

      if (res.status === 200) {
        const responseData = await res.json();
        console.log(responseData);
        // Use the response data as needed
      } else {
        console.error("Error fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };*/

  return (
    <>

      <h1 className="text-7xl my-8 font-bold text-cyan-500 text-center">
        Short URL
      </h1>

      <div className="box-content text-center  mx-flex py-20 m-28 
                border-5 bg-cyan-100  shadow-white">
        <h3 className="text-4xl my-8 font-bold" >Paste the URL to be shortened</h3>
        <form className='text-2xl border-l-slate-700 p-3' onSubmit={handleSubmit}>
          <label>Enter URL
            <input type="text" value={longUrl} name="longUrl" onChange={(e) => setLongUrl(e.target.value)} required />
          </label>
          <button type="submit" className="mx-3 bg-cyan-500 rounded-md p-2">Submit</button>
          <div className="message">{message ? <div>{message}<br />
            <p>{reqId}</p>
            <CopyToClipboard style={{backgroundColor:"white"}}text={JSON.stringify(url+reqId)} onCopy={handleCopy}>
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
            {copied ? <span>Copied!</span> : null}
          </div> : null}</div>
        </form>
        <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
        <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
      </div>

      <div className="box-content text-center p-12 m-36
                border-5 border-dotted bg-cyan-100  shadow-white "  >
        <h3 className="text-4xl my-8 font-bold" >Want More? Try Premium Features!</h3>
        <p>Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes,</p>
        <p> browser extension, 50+ app integrations and support. Only $17/month.</p>
        <div className="box-border mt-8 p-6 mx-28 " style={{ backgroundColor: "rgb(44, 135, 197)" }}>
          <button type="btn">Submit</button>
        </div>
      </div>
    </>
  )
}

export default Home;
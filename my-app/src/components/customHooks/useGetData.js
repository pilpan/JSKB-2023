import { useEffect, useState } from "react";

function useGetData(url,defaultValue) {
    const [data, setdata] = useState(defaultValue)
    useEffect(async ()=>{
    const url = `https://free-nba.p.rapidapi.com${url}?page=0&per_page=25`;
    const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	    }
    };

try {
	const response = await fetch(url, options);
	const result = await response.text();
	setdata(result);
} catch (error) {
	console.error(error);
}
    })

    return [data,setdata];

}

export default useGetData;
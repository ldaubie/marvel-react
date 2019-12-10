import md5 from 'md5';

export default async () => {
    const ts = new Date().getTime();
    const hash = md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`);
    const apiResult = await fetch(`${process.env.REACT_APP_MARVEL_URL}?apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${ts}&offset=100&limit=20`);
    const apiResponse = await apiResult.json();

    return apiResponse.data.results
}
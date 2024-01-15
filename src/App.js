import './App.css';
import Header from "./components/Header";
import Images from "./components/Images";
import {useCallback, useEffect, useState} from "react";
import _debounce from "lodash/debounce";
import Heading from "./components/Heading";

function App() {
    const [loading, setLoading] = useState(false)
    const [errored, setErrored] = useState(false)
    const [images, setImages] = useState([])

    const fetchImages = async (searchTerm = 'travel') => {
        try {
            setLoading(true);
            const url = `https://api.unsplash.com/search/photos?query=${searchTerm}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept-Version': 'v1', // Unsplash Api required header
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                }
            })

            if (!response.ok) {
                throw new Error(`Unsplash HTTP error, Status: ${response.status}`);
            }

            const data = await response.json();
            setImages(data.results)

        } catch (error) {
            setErrored(true)
            console.error('Error calling unsplash api: ', error)
        } finally {
            setLoading(false)
        }
    }
    const debouncedFetchImages = _debounce(fetchImages, 1000); // Only fetch every 500 ms

    useEffect(() => {
        // Get initial images
        fetchImages()
    }, [])

    // Memoize the handleSearch function to prevent unnecessary re-renders
    const handleSearch = useCallback(
        (searchTerm) => {
            debouncedFetchImages(searchTerm);
        },
        [debouncedFetchImages]
    );

    return (
        <div className="App">
            <div className={"container max-w-5xl mt-20"}>
                <Header onSearch={(searchTerm) => handleSearch(searchTerm)}/>

                <div className={"py-12"}>
                    {loading && <Heading size={"h2"}>Loading...</Heading>}
                    {errored && <p className={"text-red-800 text-2xl"}>Error fetching images.</p>}
                    {images && images.length > 0 && <Images images={images}/>}
                </div>
            </div>
        </div>
    );
}

export default App;

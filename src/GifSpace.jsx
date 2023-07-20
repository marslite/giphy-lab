
export default function GifSpace({gif}){

    console.log(gif, "<-- check here")
    // console.log(gif.data.type, "Type?")
    // console.log(gif.data.rating, "Rating?")
    // console.log(gif.data.title , "<-- Check title")

    if(!gif || !gif.data){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            <h1>Title: {gif.data.title}</h1>
            <h2>@Username: {gif.data.username}</h2>
            <img src={gif.data.images.downsized_large.url} alt="" />

        </div>
    );

}
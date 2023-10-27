type DocParams = {
    params: {
        params: Array<string>
    }
}

export default function Doc({ params: {params}}: DocParams){
    console.log(params);
    
    if(params.length === 2){
        return <h1>Viewing docs for {params[0]} and {params[1]}</h1>
    }

    if(params.length === 1){
        return <h1>Viewing docs for {params[0]}</h1>
    }

    return (
        <div className='flex justify-center items-center'>
          <h1>Docs Home Page</h1>
        </div>
    )
}

Doc.defaultParams = { 
    params: []
};
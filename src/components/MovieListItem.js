import React from 'react';

const movieStyle = {
    flexBasis: "22%",
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    boxSizing: "border-box",
    minWidth: 300,
    minHeight:300,
	margin: "0.5%",
    border: "1px solid #eee",
    boxShadow: "0 10px 28px -7px"
}

const movieImg = {
    width: "100%"
}

const movieDescription = {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
}


const movieDescriptionHeadline = {
    color: "#555",
    fontWeight: "bold",
    fontSize: "1.3em",
	marginBottom: 20,
}

const movieDetails = {
    display: "flex",
	justifyContent: "space-between",
}

const movieDetailSpan = {
    color: "#555",
	fontSize: "0.8rem",
	fontWeight: "bold",
}

const movieYear = {
    display: "flex",
	flexDirection: "column",
}

const movieRating = {
    alignItems: "flex-end",
    display: "flex",
	flexDirection: "column",
}

const movieTitle = {
    color: "#aaa",
	marginBottom: 5,
	fontSize: "0.65rem",
	fontWeight: "normal",
}




const MovieListItem = ({ movie }) => {
    const { id, title, poster_path, release_date, vote_average } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date.substring(0, 4);

    return (
        <li key={id} style={movieStyle}>
            <img src={imgUrl} 
                 alt={title} 
                 style={movieImg}/>
            <div style={movieDescription}>
                <h2 style={movieDescriptionHeadline}>{title}</h2>
                <section style={movieDetails}>
                    <div style={movieYear}>
                        <span style={movieTitle}>Year</span>
                        <span>{year}</span>
                    </div>   
                    <div style={movieRating}>
                        <span style={movieTitle}>Rating</span>
                        <span>{vote_average}</span>
                    </div>
                </section>
            </div>
        </li> 
    );
};
    


export default MovieListItem;
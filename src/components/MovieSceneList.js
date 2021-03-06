import MovieSceneItem from './MovieSceneItem';
import '../styles/MovieSceneList.scss';
function MovieSceneList(props) {
  if (props.movieScenes.length === 0) {
    return (
      <p className='results_not_found'>
        No hay ninguna película que coincida con {props.filterMovies}
      </p>
    );
  } else {
    const sceneElements = props.movieScenes.map((scene, index) => {
      return (
        <li key={index} className='results_list__items'>
          <MovieSceneItem scene={scene} />
        </li>
      );
    });
    return (
      <section className='results_container'>
        <ul className='results_list'>{sceneElements}</ul>
      </section>
    );
  }
}

export default MovieSceneList;

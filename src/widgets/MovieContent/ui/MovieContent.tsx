import { useParams } from "react-router-dom";
import { Loader } from "@/shared/ui/Loader";
import { useGetMovieByIdQuery } from "@/entities/MovieProfile";

const MovieContent = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return (
      <p className="text-center text-red-500">
        Ошибка при загрузке. Фильм не найден
      </p>
    );

  const { data, isFetching } = useGetMovieByIdQuery({ i: id });

  if (data?.Response === "False") {
    return (
      <p className="text-center text-red-500">
        Ошибка при загрузке. Фильм не найден
      </p>
    );
  }

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{data?.Title}</h1>
        <img
          src={data?.Poster !== "N/A" ? data?.Poster : "/no-image.jpg"}
          alt={data?.Title}
          className="w-full max-h-[500px] object-contain mb-6 mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
          <div>
            <p>
              <strong>Год:</strong> {data?.Year}
            </p>
            <p>
              <strong>Рейтинг:</strong> {data?.Rated}
            </p>
            <p>
              <strong>Дата релиза:</strong> {data?.Released}
            </p>
            <p>
              <strong>Время:</strong> {data?.Runtime}
            </p>
            <p>
              <strong>Жанр:</strong> {data?.Genre}
            </p>
            <p>
              <strong>Режиссёр:</strong> {data?.Director}
            </p>
            <p>
              <strong>Сценарист:</strong> {data?.Writer}
            </p>
            <p>
              <strong>Актёры:</strong> {data?.Actors}
            </p>
          </div>

          <div>
            <p>
              <strong>Описание:</strong> {data?.Plot}
            </p>
            <p>
              <strong>Язык:</strong> {data?.Language}
            </p>
            <p>
              <strong>Страна:</strong> {data?.Country}
            </p>
            <p>
              <strong>Награды:</strong> {data?.Awards}
            </p>
            <p>
              <strong>Box Office:</strong> {data?.BoxOffice}
            </p>
            <p>
              <strong>Production:</strong> {data?.Production}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              {data?.Website !== "N/A" ? data?.Website : "-"}
            </p>

            <div className="mt-2">
              <strong>Рейтинги:</strong>
              <ul className="list-disc list-inside">
                {data?.Ratings.map((rating, idx) => (
                  <li key={idx}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-2">
              <strong>IMDB:</strong> {data?.imdbRating} ({data?.imdbVotes}{" "}
              голосов)
            </p>
            <p>
              <strong>Metascore:</strong> {data?.Metascore}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContent;

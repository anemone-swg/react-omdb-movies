import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetMovieByIdQuery } from "@/entities/MovieProfile";
import { Loader } from "@/shared/ui/Loader";
import { ErrLoadingMessage } from "@/shared/ui/ErrLoadingMessage";

const MovieContent = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) return <ErrLoadingMessage />;

  const { data, isFetching } = useGetMovieByIdQuery({ i: id });

  if (data?.Response === "False") return <ErrLoadingMessage />;

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{data?.Title}</h1>
        <img
          src={data?.Poster !== "N/A" ? data?.Poster : "/no-image.jpg"}
          alt={data?.Title}
          className="w-full max-h-[500px] object-contain mb-6 mx-auto"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== window.location.origin + "/no-image.jpg") {
              img.src = "/no-image.jpg";
            }
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
          <div>
            <p>
              <strong>{t("год")}</strong> {data?.Year}
            </p>
            <p>
              <strong>{t("рейтинг")}</strong> {data?.Rated}
            </p>
            <p>
              <strong>{t("дата_релиза")}</strong> {data?.Released}
            </p>
            <p>
              <strong>{t("время")}</strong> {data?.Runtime}
            </p>
            <p>
              <strong>{t("жанр")}</strong> {data?.Genre}
            </p>
            <p>
              <strong>{t("режиссер")}</strong> {data?.Director}
            </p>
            <p>
              <strong>{t("сценарист")}</strong> {data?.Writer}
            </p>
            <p>
              <strong>{t("актеры")}</strong> {data?.Actors}
            </p>
          </div>

          <div>
            <p>
              <strong>{t("описание")}</strong> {data?.Plot}
            </p>
            <p>
              <strong>{t("язык")}</strong> {data?.Language}
            </p>
            <p>
              <strong>{t("страна")}</strong> {data?.Country}
            </p>
            <p>
              <strong>{t("награды")}</strong> {data?.Awards}
            </p>
            <p>
              <strong>{t("сборы")}</strong> {data?.BoxOffice}
            </p>
            <p>
              <strong>{t("производство")}</strong> {data?.Production}
            </p>
            <p>
              <strong>{t("веб-сайт")}</strong>{" "}
              {data?.Website !== "N/A" ? data?.Website : "-"}
            </p>

            <div className="mt-2">
              <strong>{t("рейтинги")}</strong>
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

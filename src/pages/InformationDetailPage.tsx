import Heading from "../components/Heading";
import InfoDetail from "../features/info/InfoDetail";
import RelatedList from "../features/related-list/RelatedList";
import { useSearchParams } from "react-router-dom";
import useFetchItem from "../hooks/useFetchItem";
import { Item } from "../types/hooks";

const InformationDetailPage = () => {
  const [searchParam] = useSearchParams();
  const idParam = searchParam.get("id");
  const typeParam = searchParam.get("type");
  const [rawData] = useFetchItem({ path: `${typeParam}/${idParam}` });
  const data = rawData as unknown as Item;

  if (!data) return <Heading title="No information found!" />;
  return (
    <>
      <div className="mt-28 w-4/5 mx-auto">
        <Heading title={data.title} />
        <div className="lg:w-2/3 mx-auto">
          {data.images && (
            <InfoDetail
              images={data.images}
              description={data.description}
            ></InfoDetail>
          )}
          <p className="my-8 text-2xl font-bold">Thông tin liên quan</p>
        </div>
        <div className="lg:w-1/2 max-sm:gap-8 mx-auto flex items-start justify-around my-10">
          <RelatedList
            currInfo={data.title}
            title={"Địa điểm du lịch"}
            type={"direction"}
          />

          <RelatedList
            currInfo={data.title}
            title={"Các mẹo du lịch"}
            type={"tip"}
          />
        </div>
      </div>
    </>
  );
};

export default InformationDetailPage;

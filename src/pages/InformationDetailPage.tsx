import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import InfoDetail from "../features/blog/InfoDetail";
import RelatedList from "../features/related-list/RelatedList";
import { useSearchParams } from "react-router-dom";
import { directionType, tipType } from "../types/type";
import { fetchInformation } from "../services/api";

const InformationDetailPage = () => {
  const [searchParam] = useSearchParams();
  const idParam = searchParam.get("id");
  const typeParam = searchParam.get("type");
  const [data, setData] = useState<directionType | tipType>();

  useEffect(() => {
    const URL = `http://localhost:5001/${typeParam}/${idParam}`;
    const getData = async () => {
      setData(await fetchInformation(URL));
    };

    getData();
  }, [idParam, typeParam]);
  useEffect(() => {
    const URL = `http://localhost`;
    const getData = async () => {
      setData(await fetchInformation(URL));
    };

    getData();
  }, []);

  if (!data) return <Heading title="No information found!"></Heading>;
  return (
    <>
      <div className="mt-28 w-4/5 mx-auto">
        <Heading title={data.title}></Heading>
        <div className="lg:w-2/3 mx-auto">
          {data.images ? (
            <InfoDetail
              images={data.images}
              description={data.description}
            ></InfoDetail>
          ) : null}
          <p className="my-8 text-2xl font-bold">Thông tin liên quan</p>
        </div>
        <div className="lg:w-1/2 max-sm:gap-8 mx-auto flex justify-evenly items-start my-10">
          <RelatedList
            currInfo={data.title}
            title={"Địa điểm du lịch"}
            type={"direction"}
          ></RelatedList>

          <RelatedList
            currInfo={data.title}
            title={"Các mẹo du lịch"}
            type={"tip"}
          ></RelatedList>
        </div>
      </div>
    </>
  );
};

export default InformationDetailPage;

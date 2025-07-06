import { DirectionFilterContext } from "../../store/context/context";
import FilterSubmit from "./FilterSubmit";
import withFilterContext from "../../hoc/withFilterContext";
import { DirectionFilterContextType } from "../../types/context";

// eslint-disable-next-line react-refresh/only-export-components
export default withFilterContext(
  DirectionFilterContext,
  (ctx: DirectionFilterContextType) => ({
    isActiveFilter: ctx.isActiveFilter,
    setIsActiveFilter: ctx.setIsActiveFilter,
    setClassifyBy: ctx.setClassifyBy,
    setSecondaryBy: ctx.setLocationBy,
    updateQuery: ctx.updateQuery,
    classifyBy: ctx.classifyBy,
    secondaryBy: ctx.locationBy,
    resetQuery: ctx.resetQuery,
    provinceParam: ctx.provinceParam,
    redirectPath: "/direction",
    secondaryKey: "province",
  })
)(FilterSubmit);

import { ProductFilterContext } from "../../store/context/context";
import FilterSubmit from "../direction-filter/FilterSubmit";
import withFilterContext from "../../hoc/withFilterContext";

// eslint-disable-next-line react-refresh/only-export-components
export default withFilterContext(ProductFilterContext, (ctx) => ({
  isActiveFilter: ctx.isActiveFilter,
  setIsActiveFilter: ctx.setIsActiveFilter,
  setClassifyBy: ctx.setClassifyBy,
  setSecondaryBy: ctx.setBrandBy,
  updateQuery: ctx.updateQuery,
  classifyBy: ctx.classifyBy,
  secondaryBy: ctx.brandBy,
  resetQuery: ctx.resetQuery,
  secondaryKey: "product",
}))(FilterSubmit);

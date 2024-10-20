import DetailService from "./details/detailService.js";
import Details from "./details/detail.js";

const detailService = new DetailService('data_detail');
for (const detail of Details) {
  detailService.renderDetail(detail);
}

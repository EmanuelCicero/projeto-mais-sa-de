import DetailService from "./details/detailService.js";
import Details from "./details/detail.js";
import AplicationService from "./aplications/aplicationService.js";
import Aplications from "./aplications/aplication.js";

const detailService = new DetailService('data_detail');
for (const detail of Details) {
  detailService.renderDetail(detail);
}

const aplicationService = new AplicationService('data_aplication');
for (const aplication of Aplications) {
  aplicationService.renderAplication(aplication);
}

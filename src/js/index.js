import DetailService from "./details/detailService.js";
import Details from "./details/detail.js";
import AplicationService from "./aplications/aplicationService.js";
import Aplications from "./aplications/aplication.js";
import MyHealthService from "./my-health/myHealthService.js";
import MyHealth from "./my-health/myHealth.js";

const detailService = new DetailService('data_detail');
for (const detail of Details) {
  detailService.renderDetail(detail);
}

const aplicationService = new AplicationService('data_aplication');
for (const aplication of Aplications) {
  aplicationService.renderAplication(aplication);
}

const myHealthService = new MyHealthService('data_my-health');
for (const myHealth of MyHealth) {
  myHealthService.renderMyHealth(myHealth);
}

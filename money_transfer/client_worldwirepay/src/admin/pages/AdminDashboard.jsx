import AdminHeader from "./AdminHeader";
import PaymentsAll from "./Payments";

const AdminDashboard = () => {
  return (
    <>
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div
          class="col d-flex align-items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <span class="text-xl" style={{ fontSize: "150%" }}>
            Dashboard{" "}
          </span>
        </div>
        <div
          class="col d-flex justify-content-md-end"
          style={{ whiteSpace: "nowrap" }}
        >
          <span>
            Last Cron Job Executed <b class="text-danger">3 Months Ago</b>
            <button
              type="button"
              class="btn btn-primary py-0 px-1 ms-1 btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#cronModal"
            >
              Cron
            </button>
          </span>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-3 col-sm-6 col-12 d-flex">
          <div class="dash-count">
            <div class="dash-counts">
              <h4>
                <span>100</span>
              </h4>
              <h5>Payments</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="credit-card"
                class="svg-inline--fa fa-credit-card fa-2xl "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das1">
            <div class="dash-counts">
              <h4>
                <span>130</span>
              </h4>
              <h5>Panding Payments</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="eye-low-vision"
                class="svg-inline--fa fa-eye-low-vision fa-lg "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das2">
            <div class="dash-counts">
              <h4>
                <span>160</span>
              </h4>
              <h5>Bank Payments</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="building-columns"
                class="svg-inline--fa fa-building-columns fa-lg "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das3">
            <div class="dash-counts">
              <h4>
                <span>90</span>
              </h4>
              <h5>Pending Bank Payments</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="eye-low-vision"
                class="svg-inline--fa fa-eye-low-vision fa-lg "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-12 d-flex">
          <div class="dash-count das1">
            <div class="dash-counts ">
              <h4>
                <span>110</span>
              </h4>
              <h5>Stored Data</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="database"
                class="svg-inline--fa fa-database fa-lg "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-12 d-flex">
          <div class="dash-count">
            <div class="dash-counts">
              <h4>
                <span>200</span>
              </h4>
              <h5>Unpaid Invoice</h5>
            </div>
            <div class="dash-imgs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-invoice"
                class="svg-inline--fa fa-file-invoice fa-lg "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                style={{ color: "rgba(0, 0, 0, 0.15)" }}
              >
                <path
                  fill="currentColor"
                  d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="accordion mb-2" id="transactions_table">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne3"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Last 10 Completed Transactions
            </button>
          </h2>
          <div
            id="collapseOne3"
            class="accordion-collapse collapse show"
            data-bs-parent="#transactions_table"
          >
            <div class="accordion-body">
              <div class="table-responsive my-3">
                <table class="table align-middle border table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Invoice Id</th>
                      <th>Payment Method</th>
                      <th>Sender Number</th>
                      <th>Amount</th>
                      <th>Transaction Id</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>d23</td>
                      <td>dd3d</td>
                      <td>3ed3e</td>
                      <td>ed3ed</td>
                      <td>e3d3ed</td>
                      <td>asdsad</td>
                      <td>edwedwe</td>
                    </tr>
                    <tr>
                      <td>d23</td>
                      <td>dd3d</td>
                      <td>3ed3e</td>
                      <td>ed3ed</td>
                      <td>e3d3ed</td>
                      <td>asdsad</td>
                      <td>edwedwe</td>
                    </tr>
                    <tr>
                      <td>d23</td>
                      <td>dd3d</td>
                      <td>3ed3e</td>
                      <td>ed3ed</td>
                      <td>e3d3ed</td>
                      <td>asdsad</td>
                      <td>edwedwe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="cronModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <label>Cron Url</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="apigenerate"
                      readonly=""
                      value="cron 1"
                    />
                    <span class="input-group-text">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="copy"
                        class="svg-inline--fa fa-copy "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="col-12">
                  <label>Cron Quick Job</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="apigenerate"
                      readonly=""
                      value="cron 2"
                    />
                    <span class="input-group-text">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="copy"
                        class="svg-inline--fa fa-copy "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AdminHeader />
    <PaymentsAll />
    </>
  );
};

export default AdminDashboard;

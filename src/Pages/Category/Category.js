import React, { useEffect, useState } from "react";
import "./Category.scss";
import services from "./dummyservices.json";
// TODO : Create a requirement gathering form  -- done
// TODO : show a pop up form Initially  -- done
// TODO : show the list of cards with dummy data for services
// TODO : show a sort bar on the top adjecent to the button

//* TODO : to work on functionalities when integration
//* TODO : when the form is submitted, then filter out the results based on the form submission

//!! TODO : Before push call the form when page loads - enable it in useEffect

const Category = () => {
  const [servicesList, setServicesList] = useState([]);
  const [sortOrder, setSortOrder] = useState("az"); // Default sorting: A-Z

  const get_services = () => {
    setServicesList(services);
    // return services;
  };

  useEffect(() => {
    get_services();
    // document.getElementById("requirementmodalbutton").click();
  }, []);

  // Function to handle sorting
  const handleSort = (order) => {
    let sortedList = [...servicesList];

    if (order === "az") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name)); // Sort A-Z
    } else {
      sortedList.sort((a, b) => b.name.localeCompare(a.name)); // Sort Z-A
    }

    setSortOrder(order);
    setServicesList(sortedList);
  };

  return (
    <>
      <div className="service-section">
        <div className="requirement-header d-flex align-items-center justify-content-between">
          <div className="sorting-dropdown">
            {/* Sorting Dropdown */}
            <label>Sort By: </label>
            <select
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            id="requirementmodalbutton"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Your Requirements
          </button>
        </div>
      </div>

      {/* grid section to display the list of services */}
      <div className="service-grid-section">
        <div className="row">
          {servicesList.map((service) => (
            <div className="col-md-4">
              <div class="card" id={service.id}>
                <img
                  src={service.image}
                  class="card-img-top"
                  alt={service.name}
                />
                <div class="card-body">
                  <h5 class="card-title">{service.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Modal Here */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Project Requirements Form
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="clientName">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="clientName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="clientEmail">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="clientEmail"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="projectType">Project Type</label>
                  <select class="form-control" id="projectType">
                    <option value="">Select project type</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>Software Development</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="budgetRange">Budget Range</label>
                  <select class="form-control" id="budgetRange">
                    <option value="">Select budget</option>
                    <option>$500 - $1000</option>
                    <option>$1000 - $5000</option>
                    <option>$5000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="deadline">Project Deadline</label>
                  <input
                    type="date"
                    class="form-control"
                    id="deadline"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="requirements">Additional Requirements</label>
                  <textarea
                    class="form-control"
                    id="requirements"
                    rows="3"
                    placeholder="Describe any additional details..."
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Submit Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

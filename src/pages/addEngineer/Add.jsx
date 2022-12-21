import Navbar from "../../components/navbar/Navbar";
import "./add.scss";

function Add() {
  return (
    <div className="">
      <Navbar />
      <div className="container mt-5 mb-5">
        <h3 className="display-5">Add Engineer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta
          animi ad totam adipisci. Architecto laudantium at id ducimus vero
          tenetur ratione debitis error eos eveniet? Animi pariatur eaque
          possimus!
        </p>
        <form class="row g-3 mt-2">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Business Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder=""
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Add Engineer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;

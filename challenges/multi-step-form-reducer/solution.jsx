import * as React from "react";

const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: ""
};

const initialState = {
  step: 1,
  formData: initialFormData
}

function formReducer(state, action) {
  if (action.type === "nextStep") {
    return {
      ...state,
      step: state.step + 1
    }
  }
  if (action.type === "prevStep") {
    return {
      ...state,
      step: state.step - 1
    }
  }
  if (action.type === "updateForm") {
    return {
      ...state,
      formData: {
        ...state.formData,
        ...action.updatedFormData
      }
    }
  }
  if (action.type === "reset") {
    return {
      ...initialState
    }
  }
}

export default function MultistepFormReducer() {
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  const { step, formData } = state;

  const handleNextStep = () => {
    dispatch({ type: "nextStep" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "prevStep" });
  };

  const handleChange = (e) => {
    dispatch({
      type: "updateForm",
      updatedFormData: { [e.target.name]: e.target.value }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ type: "reset" })
  };

  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (step === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else if (step === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <table>
          <tbody>
          {Object.keys(formData).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{formData[key]}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}

import React from "react";

function Application() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" />
      </div>
      <div>
        <label htmlFor="select-country">Select Country</label>
        <select id="select-country">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="BRA">Brazil</option>
          <option value="NG">Nigeria</option>
          <option value="GNA">Ghana</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I agree to your term and
          conditions
        </label>
      </div>

      <button>Submit</button>
    </form>
  );
}

export default Application;

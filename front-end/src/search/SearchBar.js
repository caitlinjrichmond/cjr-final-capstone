import React from "react";

function SearchBar({handleChange, handleSubmit, mobileNum}) {

    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mobile_number">
                Phone Number:
                <input 
                id="mobile_number"
                type="tel"
                class="form-control"
                name="mobile_number"
                onChange={handleChange}
                value={mobileNum}
                minLength="10"
                required
                />
            </label> {" "}
            <button type="submit" class="btn btn-success">Find</button>
        </form>
        </>
    )
}

export default SearchBar;